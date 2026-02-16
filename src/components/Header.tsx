import * as React from 'react'
import { Link } from '@tanstack/react-router'
import { navigation } from '~/data/navigation'
import { BLOG_URL } from '~/lib/site'
import type { ThemePref } from '~/lib/theme'
import {
  applyTheme,
  broadcast,
  getStoredPref,
  setStoredPref,
  subscribeThemeChanges,
} from '~/lib/theme'

const PREF_CYCLE: ThemePref[] = ['light', 'dark']
const PREF_LABELS: Record<ThemePref, string> = {
  light: '라이트 모드',
  dark: '다크 모드',
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function MonitorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

const PREF_ICONS: Record<ThemePref, React.ReactNode> = {
  light: <SunIcon />,
  dark: <MoonIcon />,
  system: <MonitorIcon />,
}

function ThemeToggle() {
  const [pref, setPref] = React.useState<ThemePref>('system')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setPref(getStoredPref() ?? 'system')
    setMounted(true)

    const unsub = subscribeThemeChanges((incoming) => {
      setPref(incoming)
      applyTheme(incoming)
    })
    return unsub
  }, [])

  const cycle = () => {
    const nextIndex = (PREF_CYCLE.indexOf(pref) + 1) % PREF_CYCLE.length
    const next = PREF_CYCLE[nextIndex]
    setPref(next)
    setStoredPref(next)
    applyTheme(next)
    broadcast(next)
  }

  if (!mounted) {
    return <div className="h-8 w-8" />
  }

  return (
    <button
      type="button"
      onClick={cycle}
      className="flex h-8 w-8 items-center justify-center rounded-md text-gray-500 transition-colors hover:text-gray-900"
      aria-label={PREF_LABELS[pref]}
      title={PREF_LABELS[pref]}
    >
      {PREF_ICONS[pref]}
    </button>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav
        className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4"
        aria-label="메인 내비게이션"
      >
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-gray-900"
          aria-label="Heliosent 홈"
        >
          Heliosent
        </Link>

        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6" role="list">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                  activeProps={{ className: 'text-sm text-gray-900 font-medium' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={BLOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 transition-colors hover:text-gray-900"
                aria-label="블로그"
              >
                Blog
              </a>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
