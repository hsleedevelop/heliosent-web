export function HeroSection() {
  return (
    <section
      className="mx-auto max-w-[720px] pb-16 pt-20 sm:pb-24 sm:pt-32 text-center"
      aria-label="소개"
    >
      <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Build What Creates Value.
      </h1>
      <p className="mb-10 text-lg leading-relaxed text-gray-500">
      Designed with clarity. Built with discipline.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://dashboard.heliosent.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
        >
          소셜 요약 대시보드 열기
        </a>
        <a
          href="https://app.heliosent.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
        >
          HelioSent 앱 허브 보기
        </a>
      </div>
    </section>
  )
}
