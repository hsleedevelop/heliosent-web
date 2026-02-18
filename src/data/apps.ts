import type { AppItem } from './types'

export const apps: AppItem[] = [
  {
    id: 'app-hub',
    name: '앱 허브',
    description: 'HelioSent에서 만든 모든 애플리케이션을 한 곳에서 확인할 수 있는 허브입니다.',
    problem: '흩어진 서비스들을 하나의 진입점으로 통합합니다.',
    url: 'https://app.heliosent.com',
    cta: '앱 허브 열기',
    status: '운영 중',
  },
  {
    id: 'newsvalue',
    name: '뉴스밸류',
    description: '기업 관련 뉴스의 영향력을 분석하고, 가치 변동을 추적하는 서비스입니다.',
    problem: '뉴스가 기업 가치에 미치는 영향을 정량적으로 파악할 수 없는 문제를 해결합니다.',
    url: 'https://newsvalue.heliosent.com',
    cta: '서비스 보기',
    status: '개발 중',
  },
  {
    id: 'dashboard',
    name: '대시보드',
    description: 'YouTube, X, Threads 등 소셜 미디어 콘텐츠를 요약하고 분석하는 통합 대시보드입니다.',
    problem: '여러 플랫폼에 흩어진 콘텐츠 성과를 한눈에 파악할 수 없는 문제를 해결합니다.',
    url: 'https://dashboard.heliosent.com',
    cta: '대시보드 보기',
    status: '개발 중',
  },
]
