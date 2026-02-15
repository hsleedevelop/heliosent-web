import { featuredItems } from '~/data/featured'

export function ContentSection() {
  return (
    <section className="pb-24" aria-labelledby="content-heading">
      <h2 id="content-heading" className="mb-8 text-sm font-bold text-gray-900">
        글과 기록
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {featuredItems.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg border border-gray-100 p-6 transition-colors hover:border-gray-200"
          >
            <span className="mb-3 block text-[10px] font-medium uppercase tracking-wider text-gray-400">
              {item.category}
            </span>
            <h3 className="mb-2 text-base font-bold text-gray-900 group-hover:underline">
              {item.title}
            </h3>
            <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-500">
              {item.description}
            </p>
            <time className="text-xs text-gray-400" dateTime={item.date}>
              {item.date}
            </time>
          </a>
        ))}
      </div>
    </section>
  )
}
