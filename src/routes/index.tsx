import { createFileRoute } from '@tanstack/react-router'
import { HeroSection } from '~/components/HeroSection'
import { BuildingSection } from '~/components/BuildingSection'
import { ContentSection } from '~/components/ContentSection'
import { AboutPreview } from '~/components/AboutPreview'
import { SITE_NAME, SITE_URL } from '~/lib/site'
import { canonical, seo } from '~/utils/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      ...seo({
        title: SITE_NAME,
        description:
          '기술로 세상을 읽고 제품으로 답합니다. 뉴스 데이터 분석과 소셜 요약 대시보드를 만듭니다.',
        url: SITE_URL,
      }),
    ],
    links: [canonical(SITE_URL)],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <HeroSection />
      <BuildingSection />
      <ContentSection />
      <AboutPreview />
    </div>
  )
}
