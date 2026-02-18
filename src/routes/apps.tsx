import { createFileRoute } from '@tanstack/react-router'
import { apps } from '~/data/apps'
import { SITE_URL } from '~/lib/site'
import { canonical, seo } from '~/utils/seo'

export const Route = createFileRoute('/apps')({
  head: () => ({
    meta: [
      ...seo({
        title: '앱',
        description: 'HelioSent에서 만든 앱과 서비스를 확인하세요.',
        url: `${SITE_URL}/apps`,
      }),
    ],
    links: [canonical(`${SITE_URL}/apps`)],
  }),
  component: AppsPage,
})

function AppsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-16 pt-16 sm:pt-20" aria-label="앱 목록">
        <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">앱</h1>
        <p className="mb-10 text-base text-gray-500">직접 만들고 운영하는 서비스들입니다.</p>

        <div className="space-y-6">
          {apps.map((app) => (
            <article
              key={app.id}
              className="group rounded-lg border border-gray-100 p-6 transition-colors hover:border-gray-200"
            >
              <div className="mb-3 flex items-center gap-3">
                <h2 className="text-base font-semibold text-gray-900">{app.name}</h2>
                <StatusBadge status={app.status} />
              </div>
              <p className="mb-2 text-sm leading-relaxed text-gray-600">{app.description}</p>
              <p className="mb-5 text-sm text-gray-400">{app.problem}</p>
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                {app.cta}
                <span
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  &rarr;
                </span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const colorMap: Record<string, string> = {
    '운영 중': 'bg-green-50 text-green-600',
    '개발 중': 'bg-amber-50 text-amber-600',
    '준비 중': 'bg-gray-50 text-gray-500',
  }

  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${colorMap[status] ?? 'bg-gray-50 text-gray-500'}`}
    >
      {status}
    </span>
  )
}
