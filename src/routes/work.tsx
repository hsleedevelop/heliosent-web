import { createFileRoute } from '@tanstack/react-router'
import { experiences, projects } from '~/data/work'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/work')({
  head: () => ({
    meta: [
      ...seo({
        title: '경력',
        description: '경력 요약과 대표 프로젝트를 확인하세요.',
        url: 'https://heliosent.com/work',
      }),
    ],
  }),
  component: WorkPage,
})

function WorkPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-16 pt-16 sm:pt-20" aria-labelledby="experience-heading">
        <h1
          id="experience-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
        >
          경력
        </h1>
        <ul className="space-y-6" role="list">
          {experiences.map((exp) => (
            <li key={exp.id} className="border-l-2 border-gray-100 pl-5">
              <p className="mb-0.5 text-xs text-gray-400">{exp.period}</p>
              <h3 className="text-sm font-semibold text-gray-900">
                {exp.role}
                <span className="font-normal text-gray-400"> &middot; {exp.company}</span>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{exp.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="pb-16" aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="mb-6 text-xs font-medium uppercase tracking-wider text-gray-400"
        >
          대표 프로젝트
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {projects.map((proj) => (
            <article
              key={proj.id}
              className="group rounded-lg border border-gray-100 p-5 transition-colors hover:border-gray-200"
            >
              <h3 className="mb-2 text-sm font-semibold text-gray-900">{proj.title}</h3>
              <p className="mb-3 text-sm leading-relaxed text-gray-500">{proj.description}</p>
              <div className="mb-3 flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              >
                보기
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

      <section className="pb-16" aria-label="이력서 링크">
        <div className="rounded-lg border border-gray-100 p-6 text-center">
          <p className="mb-3 text-sm text-gray-500">자세한 이력은 이력서 페이지에서 확인하세요.</p>
          <a
            href="https://me.heliosent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 underline underline-offset-4 transition-colors hover:text-gray-600"
          >
            자세히 보기 &rarr;
          </a>
        </div>
      </section>
    </div>
  )
}
