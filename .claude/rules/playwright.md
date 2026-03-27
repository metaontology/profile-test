# Playwright MCP 브라우저 제어 규칙

## 🖥️ 환경 정보

이 프로젝트는 **Docker 컨테이너** 안에서 실행되므로 `localhost`가 Windows Chrome을 가리키지 않습니다.

| 항목 | 값 |
|------|-----|
| CDP 엔드포인트 | `http://172.17.0.1:19222` |
| 실제 대상 | Windows Chrome (포트 9222 → Docker 브리지 172.17.0.1:19222 매핑) |

## ⚠️ CDP 탭 목록의 특성

Chrome CDP는 실제 브라우저 탭 외에도 내부 타겟을 모두 노출합니다:

| index | 실제 확인된 예시 | 실제 여부 |
|-------|------|---------|
| 0 | `[Omnibox Popup](chrome://omnibox-popup.top-chrome/)` | ❌ Chrome 내부 UI |
| 1 | `[Omnibox Popup](chrome://omnibox-popup.top-chrome/omnibox_popup_aim.html)` | ❌ Chrome 내부 UI |
| 2 | `[새 탭](chrome://new-tab-page/)` | ✅ 사용자에게 실제로 보이는 탭 |

> Chrome 새로 시작 시 실제 확인된 탭 목록 (2026-03-24)

**규칙: 사용자에게 보이는 탭 = 탭 목록의 마지막 항목 (last item)**

- 실제 탭이 1개만 열려 있어도 CDP 목록에는 Omnibox 등 내부 항목이 앞에 붙음
- `chrome://new-tab-page/` 같은 chrome:// URL도 실제 탭일 수 있으므로 URL로 필터링 금지
- 항상 **마지막 항목(last index)**을 사용자 활성 탭으로 간주

## ✅ 활성 탭에 URL 여는 올바른 순서

사용자에게 보이는 Chrome 탭에서 URL을 열 때는 반드시 아래 순서를 따릅니다:

1. `browser_tabs list` → 탭 목록 확인
2. **마지막 항목(last item)** index를 `browser_tabs select` 로 선택
3. `browser_navigate` 로 URL 이동

## ❌ 잘못된 방법

```
# 바로 navigate 하면 백그라운드 탭에 열려 사용자 화면에 반영 안 됨
browser_navigate("https://example.com")  # ❌

# 첫 번째 탭(index 0)을 선택하면 내부 타겟일 수 있음
browser_tabs(action="select", index=0)   # ❌
```

## ✅ 올바른 방법

```
1. browser_tabs(action="list")
   # 실제 결과 예시 (Chrome 새로 시작 시):
   # - 0: (current) [Omnibox Popup](chrome://omnibox-popup.top-chrome/)
   # - 1: [Omnibox Popup](chrome://omnibox-popup.top-chrome/omnibox_popup_aim.html)
   # - 2: [새 탭](chrome://new-tab-page/)   ← 마지막 = 실제 탭 ✅

2. browser_tabs(action="select", index=2)  # 마지막 index 선택
3. browser_navigate(url="https://example.com")
```

## 🚀 Chrome CDP 모드 실행 (Windows PowerShell)

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" `
  --remote-debugging-port=9222 --remote-debugging-address=0.0.0.0 `
  --user-data-dir="C:\chrome-debug-profile" `
  --no-first-run --no-default-browser-check --remote-allow-origins=*
```

## ⚠️ 주의사항

- Chrome을 먼저 실행한 후 Claude Code를 시작해야 MCP가 CDP 연결에 성공함
- Chrome 꺼진 상태에서 `browser_install` 호출 시 내장 Chromium으로 고착됨
- 연결 확인: `curl http://172.17.0.1:19222/json/version`
