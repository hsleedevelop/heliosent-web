import { createFileRoute } from '@tanstack/react-router'
import { aboutIntro, principles } from '~/data/about'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      ...seo({
        title: '소개',
        description: '기술을 통해 생각을 구체화하는 엔지니어입니다.',
        url: 'https://heliosent.com/about',
      }),
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-16 pt-16 sm:pt-20" aria-label="자기소개">
        <h1 className="mb-8 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">소개</h1>
        <div className="space-y-4">
          {aboutIntro.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-gray-600">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="pb-16" aria-labelledby="principles-heading">
        <h2
          id="principles-heading"
          className="mb-6 text-xs font-medium uppercase tracking-wider text-gray-400"
        >
          원칙
        </h2>
        <ul className="space-y-5" role="list">
          {principles.map((p) => (
            <li key={p.id}>
              <h3 className="mb-1 text-sm font-semibold text-gray-900">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
