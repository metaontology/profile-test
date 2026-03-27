# 프로필 웹사이트 구현 계획

## Context

김현수님의 개인 프로필 웹사이트를 순수 HTML, CSS, JavaScript로 제작합니다. Next.js 프로젝트가 아닌 정적 HTML 페이지로 구성하여 간단하게 배포하고 유지보수할 수 있도록 합니다.

**요구사항:**
- 이름: 김현수
- 직업: 컴공 학사
- 소개: 데이터베이스, NLP 좋아하는 학사
- 기술 스택: Python, Ubuntu, C
- 프로젝트/포트폴리오 섹션 필수
- 연락처: abcd@gmail.com
- 디자인: 모던하고 깔끔한 디자인
- 기술: HTML, CSS, JavaScript + Tailwind CSS CDN

---

## 파일 구조

```
/home/hgjun/workspace/claude-lab/profile-test/
├── index.html              # 메인 HTML 파일 (모든 섹션 포함)
├── assets/
│   ├── js/
│   │   └── main.js        # 인터랙션 로직 (스크롤 애니메이션, 모바일 메뉴 등)
│   └── css/
│       └── custom.css     # 추가 커스텀 스타일 (애니메이션, Tailwind 보완)
└── README.md              # 프로젝트 설명
```

**단일 HTML 파일 방식 선택 이유:**
- 간단한 배포 (GitHub Pages, Netlify)
- 빠른 로딩 속도
- 유지보수 용이
- 포트폴리오 사이트 특성상 페이지 수가 적음

---

## 섹션 구성

### 1. Navigation Bar (상단 고정)
- 로고/이름
- 메뉴: About, Skills, Projects, Contact
- 모바일 햄버거 메뉴
- 스크롤 시 배경 변경 효과

### 2. Hero Section (히어로 섹션)
- 전체 화면 높이 (h-screen)
- 중앙 정렬: 이름, 직업
- CTA 버튼: "연락하기", "프로젝트 보기"
- 배경: 그라디언트 (blue-50 → indigo-100)
- fade-in 애니메이션

### 3. About Section (소개)
- 2컬럼 레이아웃 (이미지/아바타 + 텍스트)
- 자기소개 텍스트
- 관심사 태그: 데이터베이스, NLP
- 배경: 화이트

### 4. Skills Section (기술 스택)
- 3컬럼 그리드 (Python, Ubuntu, C)
- 각 스킬 카드: 아이콘 + 이름 + 간단 설명
- Hover 시 확대 효과 (transform scale)
- 배경: 그레이-50

### 5. Projects Section (프로젝트/포트폴리오)
- 반응형 그리드 (1열 → 2열 → 3열)
- 프로젝트 카드: 제목, 설명, 기술 태그, 링크
- 더미 프로젝트 3-4개 (예시)
- 배경: 화이트

### 6. Contact Section (연락처)
- 중앙 정렬
- 이메일: abcd@gmail.com (mailto 링크)
- 이메일 복사 버튼 (클립보드 API)
- 배경: 그레이-50

### 7. Footer
- 저작권 정보
- 배경: 다크 (gray-900)

---

## 디자인 시스템

### 색상 팔레트
- **Primary**: `blue-600` (버튼, 링크)
- **Secondary**: `gray-800/900` (텍스트)
- **Accent**: `teal-500` (강조)
- **Background Light**: `white`, `gray-50`
- **Background Dark**: `gray-900` (footer)

### 타이포그래피
- 제목: `font-bold`, `text-4xl ~ text-7xl`
- 본문: `text-base ~ text-lg`, `text-gray-700`
- 한글 폰트: system-ui 또는 Noto Sans KR

### 주요 Tailwind 클래스
- 컨테이너: `container mx-auto px-4 max-w-6xl`
- 카드: `bg-white rounded-lg shadow-lg`
- 버튼: `px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition`
- 그리드: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`

---

## 반응형 디자인

### 브레이크포인트
- **Mobile (< 640px)**: 단일 컬럼, 햄버거 메뉴
- **Tablet (640px ~ 1024px)**: 2컬럼 그리드
- **Desktop (1024px+)**: 3컬럼 그리드, 풀 네비게이션

### 반응형 조정
```html
<!-- 예시 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <!-- 프로젝트 카드들 -->
</div>

<nav class="hidden md:flex gap-6">
  <!-- 데스크톱 메뉴 -->
</nav>

<button class="md:hidden">
  <!-- 모바일 햄버거 버튼 -->
</button>
```

---

## JavaScript 기능 (main.js)

1. **Smooth Scroll**: 앵커 링크 클릭 시 부드러운 스크롤
2. **Intersection Observer**: 섹션 진입 시 fade-in 애니메이션
3. **Navigation Highlight**: 스크롤 위치에 따라 네비게이션 메뉴 활성화
4. **Mobile Menu Toggle**: 햄버거 메뉴 open/close
5. **Email Copy**: 이메일 주소 클립보드 복사 기능
6. **Navbar Background**: 스크롤 시 네비게이션 배경 변경

---

## 구현 순서

### Phase 1: HTML 구조 작성
1. `index.html` 생성
2. Tailwind CSS CDN 연결
3. 모든 섹션 시맨틱 마크업 (nav, section, footer)
4. 기본 콘텐츠 입력

### Phase 2: Tailwind CSS 스타일링
5. Hero Section 스타일링 (그라디언트, 중앙 정렬)
6. About Section 스타일링 (2컬럼 레이아웃)
7. Skills Section 스타일링 (3컬럼 그리드, 카드 디자인)
8. Projects Section 스타일링 (반응형 그리드)
9. Contact Section 스타일링 (중앙 정렬)
10. Navigation Bar 및 Footer 스타일링

### Phase 3: 반응형 조정
11. 모바일 레이아웃 테스트 및 조정
12. 태블릿/데스크톱 브레이크포인트 적용
13. 햄버거 메뉴 마크업

### Phase 4: JavaScript 인터랙션
14. `assets/js/main.js` 생성
15. Smooth Scroll 구현
16. Intersection Observer (섹션 애니메이션)
17. Navigation Highlight 구현
18. Mobile Menu Toggle 구현
19. Email Copy 기능 구현

### Phase 5: CSS 커스터마이징
20. `assets/css/custom.css` 생성
21. 커스텀 애니메이션 정의 (fadeInUp 등)
22. 추가 스타일 (Tailwind로 불가능한 부분)

### Phase 6: 마무리
23. 콘텐츠 최종 검토 및 조정
24. 크로스 브라우저 테스트
25. `README.md` 작성

---

## 기술적 세부사항

### Tailwind CSS CDN 설정
```html
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#2563eb',
        }
      }
    }
  }
</script>
```

### 접근성 (Accessibility)
- 시맨틱 HTML 태그 사용 (nav, main, section, footer)
- ARIA 레이블 (모바일 메뉴 버튼)
- 키보드 네비게이션 지원
- 충분한 색상 대비 (WCAG AA 준수)

### SEO 최적화
```html
<meta name="description" content="김현수 - 데이터베이스와 NLP를 좋아하는 컴퓨터공학 학사">
<meta name="keywords" content="김현수, 컴공, 데이터베이스, NLP, 포트폴리오">
<meta property="og:title" content="김현수 - 포트폴리오">
<meta property="og:description" content="데이터베이스와 NLP를 좋아하는 컴퓨터공학 학사">
```

### 성능 최적화
- 이미지 lazy loading: `loading="lazy"`
- Tailwind CDN 캐싱
- 최소한의 JavaScript (vanilla JS)
- 인라인 critical CSS (선택사항)

---

## 검증 방법

### 1. 로컬 테스트
```bash
# 간단한 HTTP 서버 실행
python -m http.server 8000
# 또는
npx serve .
```
브라우저에서 `http://localhost:8000` 접속

### 2. 반응형 확인
- Chrome DevTools: Device Toolbar (Cmd/Ctrl + Shift + M)
- 모바일 (375px), 태블릿 (768px), 데스크톱 (1440px) 테스트

### 3. 기능 확인
- [ ] Smooth Scroll 동작
- [ ] 네비게이션 메뉴 활성화 변경
- [ ] 모바일 햄버거 메뉴 토글
- [ ] 이메일 복사 버튼
- [ ] 섹션 애니메이션 (스크롤 시 fade-in)
- [ ] 링크 클릭 (mailto, 프로젝트 링크)

### 4. 크로스 브라우저 테스트
- Chrome, Firefox, Safari
- 모바일 Safari, Chrome (iOS/Android)

---

## Critical Files

구현에 필요한 핵심 파일:

1. `/home/hgjun/workspace/claude-lab/profile-test/index.html`
   - 메인 HTML 파일 (모든 섹션 포함)

2. `/home/hgjun/workspace/claude-lab/profile-test/assets/js/main.js`
   - JavaScript 인터랙션 로직

3. `/home/hgjun/workspace/claude-lab/profile-test/assets/css/custom.css`
   - 커스텀 CSS (애니메이션, Tailwind 보완)

4. `/home/hgjun/workspace/claude-lab/profile-test/README.md`
   - 프로젝트 설명 및 사용법

---

## 향후 확장 가능성

- 다크 모드 토글
- 프로젝트 필터링 기능
- Contact Form (FormSpree, Netlify Forms)
- 블로그 섹션 추가
- 애니메이션 라이브러리 (AOS, GSAP)
- 다국어 지원 (한/영)

---

## 배포 옵션

1. **GitHub Pages**: 무료, 정적 사이트 호스팅
2. **Netlify**: 무료, CI/CD, 폼 처리
3. **Vercel**: 빠른 배포, 프리뷰 기능

배포 후 커스텀 도메인 연결 가능
