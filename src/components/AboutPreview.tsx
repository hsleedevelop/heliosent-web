import { Link } from '@tanstack/react-router'

export function AboutPreview() {
  return (
    <section className="border-t border-gray-100 py-20" aria-labelledby="about-preview-heading">
      <div className="mx-auto max-w-lg text-center">
        <h2 id="about-preview-heading" className="mb-4 text-sm font-bold text-gray-900">
          만드는 사람
        </h2>
        <p className="mb-8 text-base leading-relaxed text-gray-500">
          풀스택 엔지니어.
          <br />
          데이터와 제품, 그리고 글을 함께 만듭니다.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
        >
          소개 보기 →
        </Link>
      </div>
    </section>
  )
}
