import { createFileRoute } from '@tanstack/react-router'
import { links } from '~/data/links'
import { SITE_URL } from '~/lib/site'
import { canonical, seo } from '~/utils/seo'

export const Route = createFileRoute('/links')({
  head: () => ({
    meta: [
      ...seo({
        title: '링크',
        description: '모든 서비스와 소셜 링크를 한 곳에서 확인하세요.',
        url: `${SITE_URL}/links`,
      }),
    ],
    links: [canonical(`${SITE_URL}/links`)],
  }),
  component: LinksPage,
})

function LinksPage() {
  const subdomainLinks = links.filter((l) => l.category === 'subdomain')
  const socialLinks = links.filter((l) => l.category === 'social')

  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-16 pt-16 sm:pt-20" aria-label="링크 목록">
        <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">링크</h1>
        <p className="mb-10 text-base text-gray-500">
          모든 서비스와 소셜 채널을 한 곳에 모았습니다.
        </p>

        <div className="mb-12">
          <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-400">
            서비스
          </h2>
          <div className="space-y-3">
            {subdomainLinks.map((link) => (
              <LinkCard key={link.id} {...link} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-medium uppercase tracking-wider text-gray-400">소셜</h2>
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <LinkCard key={link.id} {...link} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function LinkCard({
  label,
  url,
  description,
}: {
  label: string
  url: string
  description: string
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-lg border border-gray-100 px-5 py-4 transition-colors hover:border-gray-200"
      aria-label={`${label} - ${description}`}
    >
      <div>
        <span className="text-sm font-semibold text-gray-900">{label}</span>
        <p className="mt-0.5 text-sm text-gray-500">{description}</p>
      </div>
      <span
        className="ml-4 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-gray-500"
        aria-hidden="true"
      >
        &rarr;
      </span>
    </a>
  )
}
