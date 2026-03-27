# 프로젝트 정보

## 프로젝트 개요

**김현수 프로필 웹사이트** - 개인 포트폴리오 정적 웹사이트

- **목적**: 개인 소개, 기술 스택, 프로젝트 포트폴리오 전시
- **타입**: 정적 HTML 사이트 (Single Page Application)
- **배포**: GitHub Pages / Netlify / Vercel

## 기술 스택

| 항목 | 버전 / 내용 |
|------|------------|
| HTML | 5 (시맨틱 마크업) |
| CSS | 3 |
| JavaScript | ES6+ (Vanilla JS) |
| Tailwind CSS | 3.x (CDN) |
| 디자인 | 모던, 미니멀, 반응형 |

**프레임워크 없음**: React, Vue, Next.js 등 프레임워크를 사용하지 않고 순수 HTML/CSS/JS로 구성

## 디렉토리 구조

```
/home/hgjun/workspace/claude-lab/profile-test/
├── index.html              # 메인 HTML 파일 (모든 섹션 포함)
├── assets/
│   ├── js/
│   │   └── main.js        # JavaScript 로직
│   ├── css/
│   │   └── custom.css     # 커스텀 CSS
│   └── images/            # 이미지 파일 (선택사항)
│       └── profile.jpg
├── docs/                   # 문서 (계획, 메모리, 히스토리)
│   ├── plans/
│   ├── dev/
│   ├── memory/
│   └── history/
├── .claude/                # Claude Code 설정 및 규칙
└── README.md              # 프로젝트 설명
```

## HTML 섹션 구조

**index.html 섹션 (상단 → 하단 순서):**

1. **Navigation Bar** - 상단 고정 네비게이션
2. **Hero Section** - 메인 히어로 (이름, 직업)
3. **About Section** - 자기소개
4. **Skills Section** - 기술 스택 (Python, Ubuntu, C)
5. **Projects Section** - 프로젝트 포트폴리오
6. **Contact Section** - 연락처 (이메일)
7. **Footer** - 푸터

## 프로필 정보

| 항목 | 내용 |
|------|------|
| 이름 | 김현수 |
| 직업 | 컴공 학사 |
| 소개 | 데이터베이스, NLP 좋아하는 학사 |
| 기술 스택 | Python, Ubuntu, C |
| 이메일 | abcd@gmail.com |

## 핵심 기능

### HTML 기능
- 시맨틱 HTML5 태그 사용 (nav, section, footer)
- SEO 최적화 (meta tags, Open Graph)
- 접근성 (ARIA labels, 키보드 네비게이션)

### CSS 기능 (Tailwind CSS)
- 반응형 디자인 (Mobile First)
- 유틸리티 클래스 기반 스타일링
- 커스텀 애니메이션 (custom.css)

### JavaScript 기능 (main.js)
- Smooth Scroll (앵커 링크)
- Intersection Observer (섹션 애니메이션)
- Mobile Menu Toggle (햄버거 메뉴)
- Navigation Highlight (스크롤 위치 추적)
- Email Copy (클립보드 API)

## CDN 및 외부 리소스

### Tailwind CSS CDN
```html
<script src="https://cdn.tailwindcss.com"></script>
```

### Google Fonts (선택사항)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" rel="stylesheet">
```

## 반응형 브레이크포인트

| 브레이크포인트 | 화면 크기 | 레이아웃 |
|---------------|---------|---------|
| Mobile | < 640px | 단일 컬럼, 햄버거 메뉴 |
| Tablet | 640px ~ 1024px | 2컬럼 그리드 |
| Desktop | 1024px+ | 3컬럼 그리드 |

## 배포 옵션

1. **GitHub Pages**: `gh-pages` 브랜치 또는 `docs/` 폴더
2. **Netlify**: 드래그 앤 드롭 또는 Git 연동
3. **Vercel**: Git 저장소 연결
4. **커스텀 서버**: 정적 파일 서버 (Nginx, Apache)

## 로컬 개발 서버

```bash
# Python 내장 서버
python -m http.server 8000

# Node.js serve 패키지
npx serve .

# VS Code Live Server 확장 사용
```

접속: `http://localhost:8000`
