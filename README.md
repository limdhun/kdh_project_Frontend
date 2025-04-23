---

## 📁 `kdh_todo_frontend/README.md`

```md
# 🖥️ KDH Todo Frontend

React 기반의 Todo 프론트엔드 SPA입니다.  
React Router를 활용한 CSR 방식이며, JWT 인증으로 Spring Boot API와 통신합니다.

---

## ✅ 주요 기술 스택

- React 18
- React Router v6+
- TypeScript
- Axios
- TailwindCSS
- Vite
- JWT (sessionStorage 저장)

---

## ⚙️ 구현 기능

| 기능 | 설명 |
|------|------|
| ✅ Todo 리스트 | `/todo/list` |
| ✅ Todo 등록 | `/todo/add` |
| ✅ Todo 수정/조회 | `/todo/edit/:tno`, `/todo/read/:tno` |
| ✅ 로그인 페이지 | `/login` |
| ✅ JWT 인증 처리 | 토큰 보관 후 요청 시 헤더 포함 |
| ✅ 로그아웃 버튼 | 헤더 내 포함 |
| ✅ 간단한 페이징 | 프론트단 페이지네이션 |

---
## 🚀 실행 방법

```bash
npm install
npm run dev
