import type { FeaturedItem } from './types'

export const featuredItems: FeaturedItem[] = [
  {
    id: 'essay-1',
    title: '기술과 사유 사이',
    description:
      '기술은 도구가 아니라 사고의 방식입니다. 우리가 만드는 것이 곧 우리가 생각하는 방식을 결정합니다.',
    category: '에세이',
    url: 'https://essays.heliosent.com',
    date: '2024-02-10',
  },
  {
    id: 'blog-1',
    title: '최근 개발 노트',
    description: '제품을 만들며 마주한 기술적 선택과 그 이유를 기록합니다.',
    category: '블로그',
    url: 'https://blog.heliosent.com',
    date: '2024-02-05',
  },
  {
    id: 'newsvalue-1',
    title: '기업 뉴스, 숫자로 읽다',
    description: '뉴스 흐름 속에 숨은 기업 가치 변동을 데이터로 추적합니다.',
    category: '서비스',
    url: 'https://newsvalue.heliosent.com',
    date: '2024-01-20',
  },
]
