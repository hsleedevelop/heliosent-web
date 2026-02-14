import type { WorkExperience, Project } from './types'

export const experiences: WorkExperience[] = [
  {
    id: 'exp-1',
    period: '2024 - 현재',
    role: '풀스택 엔지니어 / 1인 창업',
    company: 'Heliosent',
    description: '브랜드 허브, 뉴스 가치 분석 서비스, 소셜 미디어 대시보드 등을 설계하고 개발합니다.',
  },
  {
    id: 'exp-2',
    period: '2023 - 2024',
    role: '소프트웨어 엔지니어',
    company: '(placeholder)',
    description: '대규모 웹 애플리케이션의 프론트엔드 아키텍처를 설계하고 성능을 최적화했습니다.',
  },
  {
    id: 'exp-3',
    period: '2022 - 2023',
    role: '프론트엔드 개발자',
    company: '(placeholder)',
    description: 'React 기반 SaaS 제품의 UI 컴포넌트 시스템을 구축했습니다.',
  },
  {
    id: 'exp-4',
    period: '2021 - 2022',
    role: '주니어 개발자',
    company: '(placeholder)',
    description: '스타트업 환경에서 빠르게 제품을 출시하며 풀스택 역량을 쌓았습니다.',
  },
  {
    id: 'exp-5',
    period: '2020 - 2021',
    role: '인턴 / 프리랜서',
    company: '(placeholder)',
    description: '다양한 클라이언트 프로젝트를 통해 웹 개발 기초를 다졌습니다.',
  },
  {
    id: 'exp-6',
    period: '2018 - 2020',
    role: '컴퓨터공학 전공',
    company: '(placeholder) 대학교',
    description: '알고리즘, 시스템 설계, 데이터베이스 등의 기초를 학습했습니다.',
  },
]

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: '뉴스밸류',
    description:
      '기업 관련 뉴스 데이터를 수집하고 분석하여 가치 변동을 추적하는 서비스입니다. 자연어 처리와 데이터 시각화를 결합했습니다.',
    tags: ['TypeScript', 'React', 'Python', 'NLP'],
    url: 'https://newsvalue.heliosent.com',
  },
  {
    id: 'proj-2',
    title: '소셜 대시보드',
    description:
      '여러 소셜 미디어 플랫폼의 콘텐츠를 통합하여 요약하고 분석하는 대시보드입니다.',
    tags: ['TypeScript', 'React', 'API Integration'],
    url: 'https://dashboard.heliosent.com',
  },
  {
    id: 'proj-3',
    title: 'Heliosent 브랜드 허브',
    description:
      '개인 브랜드와 서비스를 하나의 허브로 연결하는 정적 웹사이트입니다. TanStack Start로 구축했습니다.',
    tags: ['TypeScript', 'TanStack Start', 'Tailwind CSS'],
    url: 'https://heliosent.com',
  },
]
