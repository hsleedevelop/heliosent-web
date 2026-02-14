import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-400">404</p>
      <h1 className="mb-4 text-2xl font-semibold text-gray-900">페이지를 찾을 수 없습니다</h1>
      <p className="mb-8 text-sm text-gray-500">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <Link
        to="/"
        className="text-sm font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-gray-600"
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}
