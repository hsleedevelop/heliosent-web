export type ThemePref = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

const STORAGE_KEY = 'hs-theme'
const COOKIE_NAME = 'hs_theme'
const CHANNEL_NAME = 'hs-theme'
const COOKIE_MAX_AGE = 31536000

function isValidPref(v: unknown): v is ThemePref {
  return v === 'light' || v === 'dark' || v === 'system'
}

export function readCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`))
  return match ? decodeURIComponent(match[1]) : null
}

export function writeCookie(name: string, value: string): void {
  if (typeof document === 'undefined') return
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    'Path=/',
    `Max-Age=${COOKIE_MAX_AGE}`,
    'SameSite=Lax',
  ]
  // Domain + Secure only on production to avoid cookie rejection on localhost
  if (typeof location !== 'undefined' && location.hostname.endsWith('heliosent.com')) {
    parts.push('Domain=.heliosent.com', 'Secure')
  }
  document.cookie = parts.join('; ')
}

export function getStoredPref(): ThemePref | null {
  if (typeof window === 'undefined') return null
  try {
    const val = localStorage.getItem(STORAGE_KEY)
    if (isValidPref(val)) return val
  } catch {
    /* noop */
  }
  const cookie = readCookie(COOKIE_NAME)
  if (isValidPref(cookie)) return cookie
  return null
}

export function setStoredPref(pref: ThemePref): void {
  try {
    localStorage.setItem(STORAGE_KEY, pref)
  } catch {
    /* noop */
  }
  writeCookie(COOKIE_NAME, pref)
}

export function resolveTheme(pref: ThemePref | null): ResolvedTheme {
  if (pref === 'dark') return 'dark'
  if (pref === 'light') return 'light'
  if (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }
  return 'light'
}

export function applyTheme(pref: ThemePref | null): void {
  if (typeof document === 'undefined') return
  document.documentElement.dataset.theme = resolveTheme(pref)
}

let cleanupMediaListener: (() => void) | null = null

export function initTheme(): void {
  const pref = getStoredPref()
  applyTheme(pref)

  cleanupMediaListener?.()
  cleanupMediaListener = null

  if (!pref || pref === 'system') {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme(pref)
    mql.addEventListener('change', handler)
    cleanupMediaListener = () => mql.removeEventListener('change', handler)
  }
}

export function broadcast(pref: ThemePref): void {
  try {
    const bc = new BroadcastChannel(CHANNEL_NAME)
    bc.postMessage({ pref })
    bc.close()
  } catch {
    /* noop */
  }
}

export function subscribeThemeChanges(onChange: (pref: ThemePref) => void): () => void {
  const cleanups: Array<() => void> = []

  try {
    const bc = new BroadcastChannel(CHANNEL_NAME)
    bc.onmessage = (e: MessageEvent) => {
      const pref: unknown = e.data?.pref
      if (isValidPref(pref)) onChange(pref)
    }
    cleanups.push(() => bc.close())
  } catch {
    /* noop */
  }

  const storageHandler = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY) return
    if (isValidPref(e.newValue)) onChange(e.newValue)
  }
  window.addEventListener('storage', storageHandler)
  cleanups.push(() => window.removeEventListener('storage', storageHandler))

  return () => cleanups.forEach((fn) => fn())
}

// Minified inline script for <head>: sets data-theme before first paint (FOUC prevention).
// Reads localStorage -> cookie -> system preference -> sets document.documentElement.dataset.theme.
export const THEME_INIT_SCRIPT = `(function(){try{var p=localStorage.getItem("${STORAGE_KEY}");if(!p){var m=document.cookie.match(/(?:^|; )${COOKIE_NAME}=([^;]+)/);p=m?decodeURIComponent(m[1]):null}var d=window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches;var t=p==="dark"?"dark":p==="light"?"light":d?"dark":"light";document.documentElement.dataset.theme=t}catch(e){var d2=window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches;document.documentElement.dataset.theme=d2?"dark":"light"}})()`
