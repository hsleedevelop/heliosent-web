# Heliosent

브랜드 허브 웹사이트. TanStack Start + Tailwind CSS v4.

## 요구사항

- Node.js 20+
- pnpm

## 로컬 실행

```bash
pnpm install
pnpm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## 빌드

```bash
pnpm run build
```

빌드 결과물은 `.output/` 디렉토리에 생성됩니다.

## 프리뷰

```bash
pnpm run preview
```

## Vercel 배포

1. [Vercel](https://vercel.com)에서 새 프로젝트 생성
2. GitHub 저장소 연결
3. 기본 설정 그대로 배포 (자동 감지)

Vercel이 TanStack Start를 자동으로 감지합니다. 별도의 `vercel.json`이 필요하지 않습니다.

Nitro를 통한 배포가 필요한 경우 `vite.config.ts`에 `nitro()` 플러그인을 추가하세요:

```ts
import { nitro } from 'nitro/vite'

// plugins 배열에 추가:
nitro()
```

## 프로젝트 구조

```
src/
├── components/    # 공유 UI 컴포넌트
├── data/          # 정적 데이터 (JSON/TS)
├── routes/        # 파일 기반 라우트
├── styles/        # Tailwind CSS
└── utils/         # 유틸리티 함수
public/            # 정적 파일
```

## 콘텐츠 수정

모든 콘텐츠는 `src/data/` 디렉토리의 TypeScript 파일에서 관리합니다.

| 파일 | 내용 |
|------|------|
| `about.ts` | 소개 문구, 원칙 |
| `apps.ts` | 앱/서비스 목록 |
| `featured.ts` | 메인 페이지 주요 콘텐츠 |
| `links.ts` | 서브도메인 + 소셜 링크 |
| `navigation.ts` | 내비게이션 메뉴 |
| `now.ts` | 현재 진행 중인 항목 |
| `work.ts` | 경력, 프로젝트 |

## 분석 도구 연동

`src/components/Analytics.tsx`에서 `ANALYTICS_ENABLED`를 `true`로 변경하고 원하는 분석 스크립트를 추가하세요.
