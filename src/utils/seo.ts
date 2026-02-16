import { SITE_NAME } from '~/lib/site'

interface SeoOptions {
  title: string
  description?: string
  image?: string
  url?: string
}

export function seo({ title, description, image, url }: SeoOptions) {
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`

  const tags: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: 'description', content: description ?? '' },
    { name: 'twitter:title', content: fullTitle },
    { name: 'twitter:description', content: description ?? '' },
    { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: SITE_NAME },
    { property: 'og:title', content: fullTitle },
    { property: 'og:description', content: description ?? '' },
  ]

  if (url) {
    tags.push({ property: 'og:url', content: url })
  }

  if (image) {
    tags.push({ name: 'twitter:image', content: image }, { property: 'og:image', content: image })
  }

  return tags
}

export function canonical(url: string) {
  return { rel: 'canonical', href: url } as const
}
