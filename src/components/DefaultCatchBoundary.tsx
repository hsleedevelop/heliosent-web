import { Link, useRouter } from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter()

  console.error('Caught error:', error)

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-400">오류</p>
      <h1 className="mb-4 text-2xl font-semibold text-gray-900">문제가 발생했습니다</h1>
      <p className="mb-8 text-sm text-gray-500">
        페이지를 불러오는 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
      </p>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => router.invalidate()}
          className="text-sm font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-gray-600"
        >
          다시 시도
        </button>
        <Link
          to="/"
          className="text-sm font-medium text-gray-500 underline underline-offset-4 transition-colors hover:text-gray-600"
        >
          홈으로
        </Link>
      </div>
    </div>
  )
}
