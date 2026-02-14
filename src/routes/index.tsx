import { createFileRoute } from '@tanstack/react-router'
import { PreviewCard } from '~/components/PreviewCard'
import { nowItems } from '~/data/now'
import { featuredItems } from '~/data/featured'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      ...seo({
        title: 'Heliosent',
        description: '기술로 세상을 읽다. 엔지니어링, 콘텐츠, 그리고 제품.',
        url: 'https://heliosent.com',
      }),
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <HeroSection />
      <NowSection />
      <FeaturedSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="pb-16 pt-20 sm:pb-24 sm:pt-32" aria-label="소개">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        기술로 세상을 읽다
      </h1>
      <p className="mb-8 max-w-lg text-lg text-gray-500">
        엔지니어링, 콘텐츠, 그리고 제품을 만듭니다.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://dashboard.heliosent.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
        >
          대시보드 보기
        </a>
        <a
          href="https://app.heliosent.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
        >
          앱 보기
        </a>
      </div>
    </section>
  )
}

function NowSection() {
  return (
    <section className="pb-16" aria-labelledby="now-heading">
      <h2 id="now-heading" className="mb-6 text-xs font-medium uppercase tracking-wider text-gray-400">
        지금 하고 있는 것
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {nowItems.map((item) => (
          <div key={item.id} className="rounded-lg border border-gray-100 p-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" aria-hidden="true" />
              <span className="text-xs text-gray-400">{item.status}</span>
            </div>
            <h3 className="mb-1 text-sm font-semibold text-gray-900">{item.title}</h3>
            <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function FeaturedSection() {
  return (
    <section className="pb-16" aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="mb-6 text-xs font-medium uppercase tracking-wider text-gray-400">
        주요 콘텐츠
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {featuredItems.map((item) => (
          <PreviewCard
            key={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            url={item.url}
            label={item.label}
          />
        ))}
      </div>
    </section>
  )
}
