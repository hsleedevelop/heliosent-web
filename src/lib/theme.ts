export type ThemePref = 'light' | 'dark' | 'system'

const STORAGE_KEY = 'hs_theme'

function isValidPref(v: unknown): v is ThemePref {
  return v === 'light' || v === 'dark' || v === 'system'
}

export function getThemePref(): ThemePref {
  if (typeof window === 'undefined') return 'system'
  try {
    const val = localStorage.getItem(STORAGE_KEY)
    if (isValidPref(val)) return val
  } catch {
    /* noop — private browsing / disabled storage */
  }
  return 'system'
}

export function setThemePref(pref: ThemePref): void {
  try {
    localStorage.setItem(STORAGE_KEY, pref)
  } catch {
    /* noop */
  }
}

export function getEffectiveTheme(pref?: ThemePref): 'light' | 'dark' {
  const p = pref ?? getThemePref()
  if (p === 'dark') return 'dark'
  if (p === 'light') return 'light'
  // "system" or missing => match OS
  if (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }
  return 'light'
}

export function applyTheme(pref?: ThemePref): void {
  if (typeof document === 'undefined') return
  const effective = getEffectiveTheme(pref)
  const root = document.documentElement

  root.dataset.theme = effective
  root.classList.toggle('dark', effective === 'dark')

  let meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'color-scheme'
    document.head.appendChild(meta)
  }
  meta.content = effective
}

export function onSystemThemeChange(cb: (effective: 'light' | 'dark') => void): () => void {
  if (typeof window === 'undefined') return () => {}
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const handler = (e: MediaQueryListEvent) => {
    cb(e.matches ? 'dark' : 'light')
  }
  mql.addEventListener('change', handler)
  return () => mql.removeEventListener('change', handler)
}

// ---------------------------------------------------------------------------
// Inline script for <head> — runs before first paint to prevent FOUC.
// Reads localStorage hs_theme -> resolves effective theme -> sets data-theme,
// dark class, and meta color-scheme on <html>.
// ---------------------------------------------------------------------------
export const THEME_INIT_SCRIPT = `(function(){try{var p=localStorage.getItem("${STORAGE_KEY}");if(p!=="light"&&p!=="dark"&&p!=="system")p="system";var d=window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches;var t=p==="dark"?"dark":p==="light"?"light":d?"dark":"light";var r=document.documentElement;r.dataset.theme=t;if(t==="dark")r.classList.add("dark");else r.classList.remove("dark");var m=document.querySelector('meta[name="color-scheme"]');if(!m){m=document.createElement("meta");m.name="color-scheme";document.head.appendChild(m)}m.content=t}catch(e){}})()`
