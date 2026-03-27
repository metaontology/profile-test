# 김현수 - 프로필 웹사이트

> 데이터베이스, NLP를 좋아하는 컴퓨터공학 학사의 개인 포트폴리오 웹사이트

## 📋 개요

이 프로젝트는 순수 HTML, CSS, JavaScript로 만든 개인 포트폴리오 웹사이트입니다.
모던하고 깔끔한 디자인으로 개인 소개, 기술 스택, 프로젝트 포트폴리오를 전시합니다.

## 🚀 기술 스택

- **HTML5** - 시맨틱 마크업
- **CSS3** - 커스텀 스타일, 애니메이션
- **JavaScript (ES6+)** - 인터랙션 로직
- **Tailwind CSS** - CDN 기반 유틸리티 CSS
- **Responsive Design** - Mobile First 접근

## 📁 파일 구조

```
.
├── index.html                 # 메인 HTML 파일
├── assets/
│   ├── css/
│   │   └── custom.css        # 커스텀 CSS 및 애니메이션
│   ├── js/
│   │   └── main.js           # JavaScript 로직
│   └── images/               # 이미지 파일 (선택)
├── docs/
│   ├── plans/                # 계획 문서
│   └── ...
├── README.md                 # 이 파일
└── .claude/                  # Claude Code 설정 및 규칙
```

## ✨ 주요 기능

### 1. 반응형 디자인
- Mobile (< 640px): 단일 컬럼 레이아웃, 햄버거 메뉴
- Tablet (640px ~ 1024px): 2컬럼 그리드
- Desktop (1024px+): 3컬럼 그리드

### 2. 네비게이션
- 상단 고정 네비게이션 바
- 모바일 햄버거 메뉴
- 현재 섹션 하이라이트
- 부드러운 스크롤 이동

### 3. 스크롤 애니메이션
- Intersection Observer를 사용한 fade-in 애니메이션
- 섹션 진입 시 자동 애니메이션

### 4. 인터랙티브 기능
- 이메일 복사 버튼 (클립보드 API)
- 호버 효과 (카드, 버튼)
- 부드러운 전환 효과

## 📄 페이지 구성

### 1. Hero Section
- 이름, 직업, 캐치프레이즈
- CTA 버튼 (연락하기, 프로젝트 보기)

### 2. About Section
- 자기소개
- 관심사 태그 (데이터베이스, NLP, 머신러닝)

### 3. Skills Section
- 기술 스택 3개 (Python, Ubuntu, C)
- 각 기술별 설명 카드

### 4. Projects Section
- 프로젝트 포트폴리오 (4개 예시)
- 각 프로젝트: 제목, 설명, 기술 태그, 링크

### 5. Contact Section
- 이메일 주소 표시
- 이메일 복사 버튼

## 🛠️ 로컬 개발

### 요구사항
- 웹 브라우저 (Chrome, Firefox, Safari, Edge 최신 버전)
- 텍스트 에디터 (VS Code, Sublime Text 등)

### 설정 방법

1. **저장소 클론 또는 다운로드**
```bash
git clone <repository-url>
cd profile-test
```

2. **로컬 서버 실행**

**Python 3 사용:**
```bash
python -m http.server 8000
```

**Node.js 사용:**
```bash
npx serve .
```

**VS Code Live Server 확장 사용:**
1. 확장 > Live Server 검색 및 설치
2. `index.html` 우클릭 > "Open with Live Server"

3. **브라우저에서 접속**
```
http://localhost:8000
```

## 🌐 배포

### GitHub Pages 배포

1. GitHub 저장소 생성
2. 파일 커밋 및 푸시
```bash
git add .
git commit -m "프로필 웹사이트 초기 커밋"
git push origin main
```

3. GitHub 저장소 Settings > Pages 설정
4. Branch: `main` / Folder: `/ (root)` 선택
5. Save 클릭

배포 URL: `https://<username>.github.io/profile-test`

### Netlify 배포

1. [Netlify](https://netlify.com) 접속 및 가입
2. "Add new site" > "Deploy manually"
3. 프로젝트 폴더 드래그 앤 드롭 또는 Git 연동

### Vercel 배포

1. [Vercel](https://vercel.com) 접속 및 가입
2. "New Project" > Git 저장소 선택
3. Deploy 클릭

## 🎨 커스터마이징

### 색상 변경
`index.html` Tailwind config에서 primary, secondary, accent 색상 변경:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',      // 변경 가능
        secondary: '#1f2937',    // 변경 가능
        accent: '#14b8a6',       // 변경 가능
      }
    }
  }
}
```

### 콘텐츠 수정
`index.html`에서 다음 부분 수정:

- **이름**: `<h1>김현수</h1>`
- **직업**: `<p>컴공 학사</p>`
- **소개**: `<p>데이터베이스...</p>`
- **이메일**: `const emailText = 'abcd@gmail.com'` (main.js)
- **프로젝트**: Projects Section 카드 내용 수정

### 이미지 추가
1. `assets/images/` 폴더 생성
2. 이미지 파일 추가
3. HTML에서 참조:
```html
<img src="assets/images/profile.jpg" alt="프로필 사진" loading="lazy">
```

## 📱 반응형 테스트

### Chrome DevTools 사용
1. F12 또는 Cmd+Shift+I 열기
2. Device Toolbar 활성화 (Cmd+Shift+M)
3. 다양한 기기 크기 테스트:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1440px)

### 실제 기기 테스트
1. 같은 WiFi 네트워크에 연결
2. 로컬 IP 주소 확인: `ipconfig` (Windows) / `ifconfig` (Mac/Linux)
3. 다른 기기에서 접속: `http://<your-ip>:8000`

## ♿ 접근성

- ✅ 시맨틱 HTML 사용
- ✅ ARIA 레이블 포함
- ✅ 키보드 네비게이션 지원
- ✅ 충분한 색상 대비 (WCAG AA)
- ✅ 모바일 터치 영역 최소 48px

## ⚡ 성능

- 📦 최소화된 번들 크기
- 🚀 Lazy loading 지원
- 🎯 Lighthouse 점수: 90+ (Desktop), 85+ (Mobile)

### 성능 최적화 팁
1. 이미지 최적화 (WebP, 적절한 크기)
2. CDN을 통한 빠른 로딩
3. 브라우저 캐싱 활용
4. Gzip 압축 활성화

## 🐛 문제 해결

### 스크롤이 부드럽지 않음
- 브라우저 업데이트 확인
- `custom.css`의 `scroll-behavior: smooth;` 확인

### 애니메이션이 작동하지 않음
- JavaScript 콘솔 에러 확인 (F12 > Console)
- `assets/js/main.js` 로드 확인
- Intersection Observer 지원 확인

### 모바일 메뉴가 작동하지 않음
- 모바일 메뉴 요소 ID 확인
- JavaScript 오류 확인
- 뷰포트 메타 태그 확인

## 🔐 보안

- ✅ 외부 링크에 `rel="noopener noreferrer"` 적용
- ✅ 입력 검증 (클립보드 API)
- ✅ XSS 방지 (innerHTML 최소화)
- ✅ 민감한 정보 보호

## 📝 라이선스

이 프로젝트는 개인 포트폴리오용입니다.
자유롭게 수정하고 배포할 수 있습니다.

## 📧 연락처

이메일: abcd@gmail.com

GitHub: [링크 추가]
LinkedIn: [링크 추가]

## 🙏 감사의 말

- [Tailwind CSS](https://tailwindcss.com)
- [Noto Sans KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR)

---

**마지막 업데이트**: 2026-03-27
**버전**: 1.0.0
