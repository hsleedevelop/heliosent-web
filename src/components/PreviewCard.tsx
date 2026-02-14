interface PreviewCardProps {
  title: string
  description: string
  category?: string
  url: string
  label: string
}

export function PreviewCard({ title, description, category, url, label }: PreviewCardProps) {
  return (
    <article className="group rounded-lg border border-gray-100 p-6 transition-colors hover:border-gray-200">
      {category && (
        <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-gray-400">
          {category}
        </span>
      )}

      <h3 className="mb-2 text-base font-semibold text-gray-900">{title}</h3>

      <p className="mb-4 text-sm leading-relaxed text-gray-500">{description}</p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
        aria-label={`${title} - ${label}`}
      >
        {label}
        <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
          &rarr;
        </span>
      </a>
    </article>
  )
}
