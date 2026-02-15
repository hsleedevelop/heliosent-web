import type { NowItem } from './types'

export const nowItems: NowItem[] = [
  {
    id: 'news-value',
    status: '개발 중',
    title: '기업 뉴스 가치 분석',
    problem: '기업 관련 뉴스는 많지만, 실제 가치 판단은 어렵습니다.',
    solution: '뉴스 흐름을 정리하고 기업 가치 관점으로 재해석합니다.',
    url: 'https://newsvalue.heliosent.com',
  },
  {
    id: 'social-dashboard',
    status: '운영 중',
    title: '소셜 콘텐츠 요약 대시보드',
    problem: 'X, Threads, YouTube를 각각 확인하는 것은 비효율적입니다.',
    solution: '주요 채널을 한 곳에서 요약·정리합니다.',
    url: 'https://dashboard.heliosent.com',
  },
]
