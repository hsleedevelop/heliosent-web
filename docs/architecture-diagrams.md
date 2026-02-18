# HelioSent Project Architecture Diagrams

## 1. System Context Diagram (C4 Level 1)

```mermaid
flowchart TB
    subgraph Users["사용자 (Users)"]
        Visitor[방문자]
        KoreanUser[한국어 사용자]
    end

    subgraph System["HelioSent Web System"]
        Frontend["HelioSent Web<br/>(React SPA)"]
    end

    subgraph External["외부 서비스"]
        Dashboard["dashboard.heliosent.com"]
        AppService["app.heliosent.com"]
        Analytics["분석 도구"]
    end

    Visitor -->|"브라우저로 접속"| Frontend
    KoreanUser -->|"브라우저로 접속"| Frontend
    Frontend -->|"링크 연결"| Dashboard
    Frontend -->|"링크 연결"| AppService
    Frontend -->|"추적 (선택)"| Analytics

    style Frontend fill:#4f46e5,color:#fff
    style Users fill:#f3f4f6
    style External fill:#fef3c7
```

## 2. Container Diagram (C4 Level 2)

```mermaid
flowchart TB
    subgraph Client["클라이언트"]
        Browser["웹 브라우저"]
    end

    subgraph Frontend["Frontend Container"]
        Router["TanStack Router<br/>(라우팅)"]
        Components["React Components<br/>(UI 렌더링)"]
        DataLayer["Data Layer<br/>(정적 데이터)"]
        Styles["Tailwind CSS v4<br/>(스타일링)"]
    end

    subgraph Build["빌드 도구"]
        Vite["Vite 7"]
        TypeScript["TypeScript 5.7"]
    end

    subgraph Deploy["배포"]
        Vercel["Vercel<br/>(정적 호스팅)"]
    end

    Browser -->|"HTTP 요청"| Router
    Router --> Components
    Components --> DataLayer
    Components --> Styles
    Vite --> TypeScript
    Build -->|"빌드 결과물"| Vercel
    Vercel -->|"정적 파일 제공"| Browser

    style Frontend fill:#dbeafe
    style Build fill:#f3e8ff
    style Deploy fill:#dcfce7
```

## 3. Routing Structure

```mermaid
flowchart TD
    subgraph Router["TanStack Router"]
        RootRoute["__root.tsx<br/>(루트 레이아웃)"]
    end

    subgraph Routes["라우트 파일 (src/routes/)"]
        Index["index.tsx<br/>/ (홈)"]
        About["about.tsx<br/>/about"]
        Apps["apps.tsx<br/>/apps"]
        Work["work.tsx<br/>/work"]
        Links["links.tsx<br/>/links"]
    end

    subgraph Layout["루트 레이아웃 컴포넌트"]
        Header["Header<br/>(내비게이션)"]
        Main["Main<br/>(콘텐츠 영역)"]
        Footer["Footer<br/>(푸터)"]
    end

    RootRoute --> Header
    RootRoute --> Main
    RootRoute --> Footer
    Main --> Index
    Main --> About
    Main --> Apps
    Main --> Work
    Main --> Links

    style RootRoute fill:#7c3aed,color:#fff
    style Layout fill:#f3f4f6
```

## 4. Component Interaction Flow

```mermaid
sequenceDiagram
    participant User as 사용자
    participant Browser as 브라우저
    participant Router as TanStack Router
    participant Route as Route Component
    participant Data as Data Layer
    participant SEO as SEO Utils

    User->>Browser: URL 요청
    Browser->>Router: 라우트 매칭
    Router->>Route: 컴포넌트 로드
    Route->>SEO: head() 메타 생성
    SEO-->>Browser: 메타 태그 삽입
    Route->>Data: 정적 데이터 import
    Data-->>Route: 콘텐츠 반환
    Route-->>Browser: UI 렌더링
    Browser-->>User: 페이지 표시
```

## 5. Data Entity Diagram (Class Diagram)

```mermaid
classDiagram
    class NavItem {
        +string label
        +string to
    }

    class NowItem {
        +string id
        +string title
        +string description
        +status: 진행중 | 계획중 | 완료
    }

    class FeaturedItem {
        +string id
        +string title
        +string description
        +string category
        +string url
        +string label
    }

    class AppItem {
        +string id
        +string name
        +string description
        +string problem
        +string url
        +string cta
        +status: 운영중 | 개발중 | 준비중
    }

    class LinkItem {
        +string id
        +string label
        +string url
        +string description
        +category: subdomain | social
    }

    class WorkExperience {
        +string id
        +string period
        +string role
        +string company
        +string description
    }

    class Project {
        +string id
        +string title
        +string description
        +string[] tags
        +string url
    }

    %% Data file relationships
    note for NavItem "from navigation.ts"
    note for NowItem "from now.ts"
    note for FeaturedItem "from featured.ts"
    note for AppItem "from apps.ts"
    note for LinkItem "from links.ts"
    note for WorkExperience "from work.ts"
    note for Project "from work.ts"
```

## 6. Component Architecture

```mermaid
flowchart TD
    subgraph Root["__root.tsx"]
        RootDocument["RootDocument"]
    end

    subgraph Layout["Layout Components"]
        Header["Header"]
        Footer["Footer"]
        Analytics["Analytics"]
    end

    subgraph Shared["Shared Components"]
        PreviewCard["PreviewCard"]
        NotFound["NotFound"]
        DefaultCatchBoundary["DefaultCatchBoundary"]
    end

    subgraph Pages["Page Components"]
        HomePage["HomePage<br/>(Hero + Now + Featured)"]
        AboutPage["AboutPage"]
        AppsPage["AppsPage"]
        WorkPage["WorkPage"]
        LinksPage["LinksPage"]
    end

    subgraph Data["Data Layer"]
        NavData["navigation.ts"]
        NowData["now.ts"]
        FeaturedData["featured.ts"]
        AppsData["apps.ts"]
        LinksData["links.ts"]
        WorkData["work.ts"]
        AboutData["about.ts"]
    end

    RootDocument --> Header
    RootDocument --> Footer
    RootDocument --> Analytics

    Header --> NavData

    HomePage --> NowData
    HomePage --> FeaturedData
    HomePage --> PreviewCard

    AppsPage --> AppsData
    LinksPage --> LinksData
    WorkPage --> WorkData
    AboutPage --> AboutData

    style Root fill:#7c3aed,color:#fff
    style Layout fill:#f3f4f6
    style Shared fill:#dbeafe
    style Pages fill:#dcfce7
    style Data fill:#fef3c7
```

## 7. Project Directory Structure

```mermaid
flowchart TB
    subgraph Root["heliosent-web/"]
        PackageJSON["package.json"]
        Config["vite.config.ts<br/>tsconfig.json<br/>tailwind.config"]
        src["src/"]
        public["public/"]
    end

    subgraph SrcDir["src/"]
        routes["routes/"]
        components["components/"]
        data["data/"]
        styles["styles/"]
        utils["utils/"]
        router["router.tsx"]
        routeTree["routeTree.gen.ts"]
    end

    subgraph RoutesDir["routes/"]
        rootRoute["__root.tsx<br/>(루트 레이아웃)"]
        indexRoute["index.tsx<br/>(홈)"]
        aboutRoute["about.tsx"]
        appsRoute["apps.tsx"]
        workRoute["work.tsx"]
        linksRoute["links.tsx"]
    end

    subgraph ComponentsDir["components/"]
        headerComp["Header.tsx"]
        footerComp["Footer.tsx"]
        previewCard["PreviewCard.tsx"]
        analytics["Analytics.tsx"]
        notFound["NotFound.tsx"]
        errorBoundary["DefaultCatchBoundary.tsx"]
    end

    subgraph DataDir["data/"]
        types["types.ts<br/>(인터페이스 정의)"]
        navData["navigation.ts"]
        nowData["now.ts"]
        featuredData["featured.ts"]
        appsData["apps.ts"]
        linksData["links.ts"]
        workData["work.ts"]
        aboutData["about.ts"]
    end

    subgraph UtilsDir["utils/"]
        seoUtils["seo.ts"]
    end

    subgraph StylesDir["styles/"]
        appCss["app.css<br/>(Tailwind v4)"]
    end

    Root --> src
    Root --> public
    Root --> Config
    src --> RoutesDir
    src --> ComponentsDir
    src --> DataDir
    src --> UtilsDir
    src --> StylesDir

    style Root fill:#f3f4f6
    style SrcDir fill:#dbeafe
    style RoutesDir fill:#dcfce7
    style ComponentsDir fill:#fef3c7
    style DataDir fill:#f3e8ff
    style UtilsDir fill:#fecaca
```
