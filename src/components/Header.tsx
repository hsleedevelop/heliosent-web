import { Link } from '@tanstack/react-router'
import { navigation } from '~/data/navigation'

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
        </ul>
      </nav>
    </header>
  )
}
