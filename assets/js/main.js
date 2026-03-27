// ===== 프로필 웹사이트 JavaScript 로직 =====

// ===== 상수 정의 =====
const SCROLL_OFFSET = 80; // 네비게이션 높이
const ANIMATION_DURATION = 300; // ms

// ===== DOM 요소 캐싱 =====
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelectorAll('nav a[href^="#"]');
const copyEmailBtn = document.getElementById('copy-email-btn');
const navbar = document.getElementById('navbar');
const emailText = 'abcd@gmail.com';

// ===== DOMContentLoaded 이벤트 =====
document.addEventListener('DOMContentLoaded', init);

/**
 * 초기화 함수
 * 페이지 로드 후 모든 기능 설정
 */
function init() {
  setupSmoothScroll();
  setupMobileMenu();
  setupScrollAnimations();
  setupNavHighlight();
  setupEmailCopy();
  setupNavbarBackground();
}

/**
 * 부드러운 스크롤 설정
 * 앵커 링크 클릭 시 해당 섹션으로 스크롤
 */
function setupSmoothScroll() {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // 모바일 메뉴 닫기
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }

        const offsetTop = targetSection.offsetTop - SCROLL_OFFSET;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * 모바일 메뉴 토글 설정
 * 햄버거 버튼 클릭 시 메뉴 열기/닫기
 */
function setupMobileMenu() {
  if (!mobileMenuBtn || !mobileMenu) return;

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // 메뉴 링크 클릭 시 메뉴 닫기
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

/**
 * 스크롤 애니메이션 설정
 * Intersection Observer를 사용하여 섹션 진입 시 fade-in 효과
 */
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
        // 한 번만 애니메이션 실행하도록 관찰 중지
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 모든 fade-in 클래스를 가진 요소 관찰
  const elementsToAnimate = document.querySelectorAll('.fade-in');
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
}

/**
 * 네비게이션 하이라이트 설정
 * 현재 스크롤 위치에 따라 네비게이션 메뉴 활성화
 */
function setupNavHighlight() {
  const sections = document.querySelectorAll('main > section[id]');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - SCROLL_OFFSET;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute('id');
      }
    });

    // 모든 네비게이션 링크에서 active 클래스 제거
    navLinks.forEach(link => {
      link.classList.remove('active');

      // 현재 섹션에 해당하는 링크에 active 클래스 추가
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * 네비게이션 배경 색상 변경
 * 스크롤 시 네비게이션 배경 투명도 조정
 */
function setupNavbarBackground() {
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-lg');
      navbar.classList.remove('shadow-md');
    } else {
      navbar.classList.add('shadow-md');
      navbar.classList.remove('shadow-lg');
    }
  });
}

/**
 * 이메일 복사 기능 설정
 * 클립보드 API를 사용하여 이메일 주소 복사
 */
function setupEmailCopy() {
  if (!copyEmailBtn) return;

  copyEmailBtn.addEventListener('click', async () => {
    try {
      // 이메일 주소를 클립보드에 복사
      await navigator.clipboard.writeText(emailText);

      // 성공 피드백: 버튼 텍스트 변경
      const originalText = copyEmailBtn.textContent;
      copyEmailBtn.textContent = '✓ 복사됨!';
      copyEmailBtn.classList.add('bg-green-600');
      copyEmailBtn.classList.remove('bg-primary', 'hover:bg-blue-700');

      // 2초 후 원래 텍스트로 복원
      setTimeout(() => {
        copyEmailBtn.textContent = originalText;
        copyEmailBtn.classList.add('bg-primary', 'hover:bg-blue-700');
        copyEmailBtn.classList.remove('bg-green-600');
      }, 2000);
    } catch (err) {
      console.error('이메일 복사 실패:', err);

      // 오류 피드백
      const originalText = copyEmailBtn.textContent;
      copyEmailBtn.textContent = '✕ 복사 실패';
      copyEmailBtn.classList.add('bg-red-600');
      copyEmailBtn.classList.remove('bg-primary', 'hover:bg-blue-700');

      setTimeout(() => {
        copyEmailBtn.textContent = originalText;
        copyEmailBtn.classList.add('bg-primary', 'hover:bg-blue-700');
        copyEmailBtn.classList.remove('bg-red-600');
      }, 2000);
    }
  });
}

// ===== Smooth Scroll 폴리필 (선택사항) =====
// 오래된 브라우저 지원 필요 시 아래 주석 제거
/*
if (!('scrollBehavior' in document.documentElement.style)) {
  console.warn('Smooth scroll not supported in this browser');
}
*/
