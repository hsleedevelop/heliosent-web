export interface NowItem {
  id: string
  title: string
  problem: string
  solution: string
  status: '운영 중' | '개발 중' | '실험 중'
  url: string
}

export interface FeaturedItem {
  id: string
  title: string
  description: string
  category: '에세이' | '블로그' | '서비스'
  url: string
  date: string
}

export interface AppItem {
  id: string
  name: string
  description: string
  problem: string
  url: string
  cta: string
  status: '운영 중' | '개발 중' | '준비 중'
}

export interface LinkItem {
  id: string
  label: string
  url: string
  description: string
  category: 'subdomain' | 'social'
}

export interface WorkExperience {
  id: string
  period: string
  role: string
  company: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  url: string
}

export interface NavItem {
  label: string
  to: string
}
