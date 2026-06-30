# cursor-demo

사용자 목록에서 이메일을 추출·검증·정규화하는 Node.js 유틸리티 데모 프로젝트입니다.

## 사용법

```bash
npm test          # 테스트 실행
node src/index.js # 데모 실행
```

## API

| 함수 | 설명 |
|------|------|
| `extractEmails(users)` | 사용자 배열에서 이메일 주소만 추출 |
| `isValidEmail(email)` | 이메일 형식 유효성 검사 |
| `getValidEmails(users)` | 유효한 이메일만 필터링하여 추출 |
| `normalizeEmail(email)` | 공백 제거 및 소문자 변환 |

## 릴리스 노트

### v1.0.0

**사용자 목록에서 이메일을 추출·검증·정규화하는 유틸리티와 Node.js 내장 테스트 환경을 갖춘 첫 공개 버전입니다.**

#### ✨ 기능

- **이메일 유틸리티 모듈** (`src/email.js`)
  - `extractEmails` — 사용자 배열에서 이메일 주소만 추출
  - `isValidEmail` — WHATWG HTML 표준 기반 이메일 형식 검증 (최대 254자)
  - `getValidEmails` — 유효한 이메일만 필터링하여 추출
  - `normalizeEmail` — 공백 제거 및 소문자 변환으로 정규화
- **엔트리포인트 데모** — `src/index.js`에서 샘플 사용자 목록으로 `extractEmails` 동작 확인
- **테스트 스위트** — `node:test` 기반 8개 테스트 (`npm test`)

#### 🧹 기타

- CommonJS → **ES Modules** 전환 (`package.json` `type: "module"`)
- 테스트 스크립트를 `node --test`로 설정
