import { nowItems } from '~/data/now'

export function BuildingSection() {
  return (
    <section className="pb-24" aria-labelledby="building-heading">
      <h2 id="building-heading" className="mb-8 text-sm font-bold text-gray-900">
        현재 만들고 있는 것
      </h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {nowItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col rounded-lg border border-gray-100 p-6 transition-colors hover:border-gray-200"
          >
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-500 ring-1 ring-inset ring-gray-200">
                {item.status}
              </span>
            </div>
            <h3 className="mb-3 text-base font-bold text-gray-900">{item.title}</h3>
            <div className="mb-6 space-y-2 text-sm leading-relaxed text-gray-500">
              <p>Problem: {item.problem}</p>
              <p>Solution: {item.solution}</p>
            </div>
            <div className="mt-auto">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-900 hover:underline"
              >
                {item.id === 'social-dashboard' ? '대시보드 열기' : '자세히 보기'} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
