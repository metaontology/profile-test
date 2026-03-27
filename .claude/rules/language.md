# 언어 및 커뮤니케이션 규칙

## 🌐 응답 언어
- **모든 응답은 한국어로 작성**

## 💻 코드 언어
- **주석(Comments)**: 한국어
- **문서화 주석(Docstrings/JSDoc)**: 한국어
- **커밋 메시지**: 한국어

## 📝 예시

### JavaScript 주석
```javascript
// 사용자 인증 처리
function authenticateUser(username, password) {
  /**
   * 사용자 로그인을 처리합니다.
   * @param {string} username - 사용자 이름
   * @param {string} password - 비밀번호
   * @returns {boolean} 인증 성공 여부
   */
  // 구현 내용...
}
```

### Git 커밋 메시지

#### 기본 형식
`타입: 설명`

```bash
git commit -m "feat: 사용자 로그인 기능 추가"
git commit -m "fix: 비밀번호 검증 오류 수정"
git commit -m "docs: API 문서 업데이트"
```

#### 이모지 사용 (선택)
선호에 따라 이모지 추가 가능:

| 이모지 | 타입 | 설명 |
|--------|------|------|
| ✨ | `feat` | 새로운 기능 |
| 🐛 | `fix` | 버그 수정 |
| 📝 | `docs` | 문서 수정 |
| ♻️ | `refactor` | 리팩토링 |
| 💄 | `style` | 코드 포맷팅 |
| ✅ | `test` | 테스트 추가/수정 |
| 🚀 | `deploy` | 배포 |
| 🔧 | `chore` | 기타 변경 |

```bash
git commit -m "✨ feat: 사용자 로그인 기능 추가"
git commit -m "🐛 fix: 비밀번호 검증 오류 수정"
git commit -m "📝 docs: API 문서 업데이트"
```

## ✅ 원칙
- 기술 용어는 필요시 영문 병기 가능 (예: "벡터 데이터베이스(Vector Database)")
- 변수명, 함수명은 영문 사용 (camelCase, snake_case 등 컨벤션 준수)
- 설명과 문서는 반드시 한국어
