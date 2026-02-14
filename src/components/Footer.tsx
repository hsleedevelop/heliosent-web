export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 mt-24" role="contentinfo">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-400">
              &copy; {year} Heliosent. All rights reserved.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="mailto:hello@heliosent.com"
              className="text-sm text-gray-400 transition-colors hover:text-gray-600"
              aria-label="이메일 보내기"
            >
              이메일
            </a>
            <a
              href="https://github.com/heliosent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-gray-600"
              aria-label="GitHub 프로필"
            >
              GitHub
            </a>
            <a
              href="https://x.com/heliosent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-gray-600"
              aria-label="X 프로필"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
