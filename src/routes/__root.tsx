/// <reference types="vite/client" />
import * as React from 'react'
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'
import { Analytics } from '~/components/Analytics'
import { DefaultCatchBoundary } from '~/components/DefaultCatchBoundary'
import { NotFound } from '~/components/NotFound'
import appCss from '~/styles/app.css?url'
import { SITE_NAME, SITE_URL } from '~/lib/site'
import { THEME_INIT_SCRIPT, applyTheme } from '~/lib/theme'
import { seo } from '~/utils/seo'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...seo({
        title: SITE_NAME,
        description: '기술로 세상을 읽다. 엔지니어링, 콘텐츠, 그리고 제품.',
        url: SITE_URL,
      }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  errorComponent: (props) => (
    <RootDocument>
      <DefaultCatchBoundary {...props} />
    </RootDocument>
  ),
  notFoundComponent: () => (
    <RootDocument>
      <NotFound />
    </RootDocument>
  ),
  component: RootComponent,
})

function RootComponent() {
  React.useEffect(() => {
    applyTheme()
  }, [])

  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

const RouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : React.lazy(() =>
        import('@tanstack/react-router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      )

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
        <React.Suspense fallback={null}>
          <RouterDevtools position="bottom-right" />
        </React.Suspense>
        <Scripts />
      </body>
    </html>
  )
}
