# 코딩 컨벤션 및 패턴

## HTML 작성 규칙

### 시맨틱 HTML 사용

**항상 시맨틱 태그 사용** (div soup 금지)

```html
<!-- ✅ 올바른 방법 -->
<nav>내비게이션</nav>
<main>
  <section id="about">
    <h2>About</h2>
    <article>내용...</article>
  </section>
</main>
<footer>푸터</footer>

<!-- ❌ 잘못된 방법 -->
<div class="nav">내비게이션</div>
<div class="main">
  <div class="section">
    <div class="title">About</div>
    <div class="content">내용...</div>
  </div>
</div>
<div class="footer">푸터</div>
```

### HTML 구조 패턴

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="김현수 - 컴공 학사 포트폴리오">
  <title>김현수 - 포트폴리오</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Custom CSS -->
  <link rel="stylesheet" href="assets/css/custom.css">
</head>
<body class="font-sans antialiased">
  <!-- Navigation -->
  <nav class="fixed top-0 w-full z-50">...</nav>

  <!-- Main Content -->
  <main>
    <section id="hero">...</section>
    <section id="about">...</section>
    <section id="skills">...</section>
    <section id="projects">...</section>
    <section id="contact">...</section>
  </main>

  <!-- Footer -->
  <footer>...</footer>

  <!-- JavaScript -->
  <script src="assets/js/main.js"></script>
</body>
</html>
```

### 섹션 ID 명명 규칙

- 소문자 사용
- 하이픈으로 구분 (kebab-case)
- 앵커 링크와 일치

```html
<!-- ✅ 올바른 방법 -->
<section id="about">...</section>
<section id="my-skills">...</section>
<section id="contact-me">...</section>

<!-- ❌ 잘못된 방법 -->
<section id="About">...</section>
<section id="mySkills">...</section>
<section id="contact_me">...</section>
```

---

## Tailwind CSS 스타일링 패턴

### 기본 원칙

1. **유틸리티 클래스 우선**: 인라인 스타일 금지
2. **반응형 접두사**: Mobile First 접근
3. **일관된 간격**: `p-4`, `p-6`, `p-8` (4의 배수)

### 컨테이너 패턴

```html
<!-- 표준 컨테이너 -->
<div class="container mx-auto px-4 max-w-6xl">
  내용
</div>

<!-- 전체 화면 섹션 -->
<section class="min-h-screen flex items-center justify-center">
  내용
</section>

<!-- 패딩 섹션 -->
<section class="py-20 bg-white">
  <div class="container mx-auto px-4">내용</div>
</section>
```

### 반응형 그리드

```html
<!-- 1열 → 2열 → 3열 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>

<!-- Flexbox 중앙 정렬 -->
<div class="flex flex-col md:flex-row items-center justify-between gap-6">
  <div>왼쪽</div>
  <div>오른쪽</div>
</div>
```

### 카드 디자인 패턴

```html
<div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
  <h3 class="text-xl font-bold mb-2">카드 제목</h3>
  <p class="text-gray-600">카드 내용</p>
</div>
```

### 버튼 패턴

```html
<!-- Primary Button -->
<a href="#contact" class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
  연락하기
</a>

<!-- Secondary Button -->
<button class="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
  자세히 보기
</button>
```

### 네비게이션 패턴

```html
<nav class="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50 transition-all duration-300">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <!-- 로고 -->
      <a href="#" class="text-2xl font-bold text-gray-900">김현수</a>

      <!-- 데스크톱 메뉴 -->
      <ul class="hidden md:flex space-x-8">
        <li><a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors">About</a></li>
        <li><a href="#skills" class="text-gray-700 hover:text-blue-600 transition-colors">Skills</a></li>
        <li><a href="#projects" class="text-gray-700 hover:text-blue-600 transition-colors">Projects</a></li>
        <li><a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors">Contact</a></li>
      </ul>

      <!-- 모바일 햄버거 -->
      <button id="mobile-menu-btn" class="md:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>
</nav>
```

---

## JavaScript 작성 규칙

### 코드 스타일

- **ES6+ 문법 사용**: `const`, `let`, 화살표 함수
- **Strict Mode**: `'use strict'` (선택사항)
- **camelCase 명명**: 변수, 함수명
- **UPPER_SNAKE_CASE**: 상수

### 기본 구조

```javascript
// assets/js/main.js

// ===== 상수 정의 =====
const SCROLL_OFFSET = 80; // 네비게이션 높이
const ANIMATION_DURATION = 300; // ms

// ===== DOM 요소 캐싱 =====
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

// ===== 이벤트 리스너 등록 =====
document.addEventListener('DOMContentLoaded', init);

function init() {
  setupSmoothScroll();
  setupMobileMenu();
  setupScrollAnimations();
  setupNavHighlight();
}

// ===== 기능 함수들 =====
function setupSmoothScroll() {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - SCROLL_OFFSET;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

function setupMobileMenu() {
  mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });
}
```

### Intersection Observer 패턴

```javascript
function setupScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-active');
        observer.unobserve(entry.target); // 한 번만 실행
      }
    });
  }, observerOptions);

  // 애니메이션 대상 요소 관찰
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
  });
}
```

### 이메일 복사 기능

```javascript
function setupEmailCopy() {
  const emailBtn = document.getElementById('copy-email-btn');
  const email = 'abcd@gmail.com';

  emailBtn?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      // 성공 피드백
      emailBtn.textContent = '복사됨!';
      setTimeout(() => {
        emailBtn.textContent = '이메일 복사';
      }, 2000);
    } catch (err) {
      console.error('복사 실패:', err);
      alert('이메일 복사에 실패했습니다.');
    }
  });
}
```

### 네비게이션 하이라이트

```javascript
function setupNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
```

---

## CSS 커스터마이징 (custom.css)

### 파일 구조

```css
/* assets/css/custom.css */

/* ===== 폰트 임포트 ===== */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

/* ===== 전역 스타일 ===== */
body {
  font-family: 'Noto Sans KR', sans-serif;
}

/* ===== 애니메이션 ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  opacity: 0;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-active {
  animation: fadeInUp 0.8s ease-out forwards;
}

/* ===== 네비게이션 활성 상태 ===== */
nav a.active {
  color: #2563eb; /* blue-600 */
  font-weight: 600;
  position: relative;
}

nav a.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #2563eb;
}

/* ===== 스무스 스크롤 ===== */
html {
  scroll-behavior: smooth;
}

/* ===== 스크롤바 커스터마이징 (선택사항) ===== */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
```

---

## 파일 명명 규칙

| 파일 타입 | 명명 규칙 | 예시 |
|---------|---------|------|
| HTML | 소문자, 하이픈 | `index.html`, `about-me.html` |
| CSS | 소문자, 하이픈 | `custom.css`, `animations.css` |
| JavaScript | 소문자, 하이픈 | `main.js`, `scroll-effects.js` |
| 이미지 | 소문자, 하이픈 | `profile.jpg`, `project-1.png` |

---

## 접근성 (Accessibility)

### ARIA 레이블

```html
<!-- 버튼에 설명 추가 -->
<button aria-label="모바일 메뉴 열기" id="mobile-menu-btn">
  <svg>...</svg>
</button>

<!-- 링크에 설명 추가 -->
<a href="https://github.com/user" aria-label="GitHub 프로필 보기" target="_blank">
  <svg>...</svg>
</a>
```

### 키보드 네비게이션

```html
<!-- 모든 인터랙티브 요소는 키보드 접근 가능 -->
<a href="#about" tabindex="0">About</a>
<button tabindex="0">버튼</button>
```

### 이미지 대체 텍스트

```html
<img src="assets/images/profile.jpg" alt="김현수 프로필 사진" loading="lazy">
```

---

## 반응형 디자인 패턴

### 브레이크포인트

| 브레이크포인트 | Tailwind 접두사 | 화면 크기 |
|---------------|----------------|---------|
| Mobile | (기본) | < 640px |
| Tablet | `md:` | 640px ~ 1024px |
| Desktop | `lg:` | 1024px+ |
| Large Desktop | `xl:` | 1280px+ |

### 모바일 우선 패턴

```html
<!-- 모바일: 1열, 태블릿: 2열, 데스크톱: 3열 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  ...
</div>

<!-- 모바일: 숨김, 데스크톱: 표시 -->
<nav class="hidden md:flex">...</nav>

<!-- 모바일: 표시, 데스크톱: 숨김 -->
<button class="md:hidden">...</button>

<!-- 모바일: 작은 텍스트, 데스크톱: 큰 텍스트 -->
<h1 class="text-4xl md:text-6xl lg:text-7xl">제목</h1>
```

---

## 주석 작성 규칙

### HTML 주석

```html
<!-- ===== Hero Section ===== -->
<section id="hero">
  ...
</section>

<!-- ===== Skills Section ===== -->
<section id="skills">
  <!-- 스킬 카드 그리드 -->
  <div class="grid">
    ...
  </div>
</section>
```

### JavaScript 주석

```javascript
// ===== 섹션 구분 =====

/**
 * 부드러운 스크롤 설정
 * 앵커 링크 클릭 시 해당 섹션으로 스크롤
 */
function setupSmoothScroll() {
  // 구현 내용...
}

// 단일 행 주석은 간결하게
const offset = 80; // 네비게이션 높이
```

---

## ⚠️ 중요 주의사항

### 1. Tailwind CDN 설정

```html
<!-- ✅ 올바른 방법: CDN + 설정 -->
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

<!-- ❌ 잘못된 방법: 설정 없음 -->
<script src="https://cdn.tailwindcss.com"></script>
```

### 2. JavaScript 실행 타이밍

```javascript
// ✅ 올바른 방법: DOMContentLoaded 사용
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btn');
  button.addEventListener('click', handleClick);
});

// ❌ 잘못된 방법: 즉시 실행 (DOM 로드 전)
const button = document.getElementById('btn'); // null 반환 가능
button.addEventListener('click', handleClick);
```

### 3. 이벤트 리스너 중복 방지

```javascript
// ✅ 올바른 방법: 한 번만 등록
function init() {
  setupEventListeners();
}

// ❌ 잘못된 방법: 여러 번 등록
setupEventListeners();
setupEventListeners(); // 중복!
```

### 4. 이미지 최적화

```html
<!-- ✅ 올바른 방법: lazy loading + 대체 텍스트 -->
<img src="profile.jpg" alt="프로필" loading="lazy" width="300" height="300">

<!-- ❌ 잘못된 방법: 최적화 없음 -->
<img src="profile.jpg">
```

### 5. 외부 링크 보안

```html
<!-- ✅ 올바른 방법: rel 속성 추가 -->
<a href="https://external.com" target="_blank" rel="noopener noreferrer">링크</a>

<!-- ❌ 잘못된 방법: 보안 속성 누락 -->
<a href="https://external.com" target="_blank">링크</a>
```

---

## 성능 최적화

### 1. 스크립트 로드 순서

```html
<body>
  <!-- 콘텐츠 먼저 -->
  <main>...</main>

  <!-- JavaScript는 맨 마지막 -->
  <script src="assets/js/main.js"></script>
</body>
```

### 2. CSS 최소화

```css
/* ✅ Tailwind 유틸리티 사용 (커스텀 CSS 최소화) */
<div class="bg-blue-600 p-4 rounded-lg">

/* ❌ 불필요한 커스텀 CSS */
.my-custom-box {
  background-color: #2563eb;
  padding: 1rem;
  border-radius: 0.5rem;
}
```

### 3. Intersection Observer 활용

```javascript
// ✅ 한 번만 관찰 (성능 향상)
if (entry.isIntersecting) {
  entry.target.classList.add('active');
  observer.unobserve(entry.target); // 관찰 중지
}
```

---

## 디버깅 팁

### 1. Console.log 활용

```javascript
console.log('섹션 ID:', sectionId);
console.log('스크롤 위치:', window.scrollY);
console.error('오류 발생:', error);
```

### 2. Chrome DevTools

- **Elements**: HTML/CSS 검사
- **Console**: JavaScript 디버깅
- **Network**: 리소스 로딩 확인
- **Lighthouse**: 성능/접근성 측정

### 3. 모바일 테스트

```
Chrome DevTools > Device Toolbar (Cmd/Ctrl + Shift + M)
- iPhone SE (375px)
- iPad (768px)
- Desktop (1440px)
```
