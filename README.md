# Pre-onboarding-11th-1-8

- 사전과제로 만든 Todo list 프로젝트에서 각자의 Best Practice를 선정하여 새롭게 만든 프로젝트 입니다.

### 팀원

김명준, 박세인, 이나령, 조원희, 김범진, 김태헌

### 커밋 메시지 양식

- 작성 방법

```
[액션] 커밋 내용
```

- 액션

```
feat: 기능 추가, 삭제, 변경 (코드 수정)
fix: 버그 수정
type: 코드 형식 변경
design: UI 변경
refactor: 코드 리팩토링
docs: 코드 외 문서의 추가, 삭제, 변경
test: 테스트 코드 추가, 삭제, 변경
chore: 빌드 업무 수정, 패키지 매니저 수정
```

### Getting Started

- 설치

```
npm install
```

- Dev 모드 실행

```
npm run start
```

- 프로젝트 빌드

```
npm run build
```

### 폴더구조

```
root /
├ public
|  ├ index.html
├ src
|  ├ hooks
|  |    ├ useAuth.ts
|  ├ components
|  |    ├ ErrorBoundary.tsx
|  ├ network
|  |    ├ api.ts
|  ├ pageContents
|  |    ├ SignInContents
|  |    |     ├ SignInContents.tsx
|  |    |     ├ style.module.tsx
|  |    ├ SignUpContents
|  |    |     ├ SignUpContents.tsx
|  |    |     ├ style.module.tsx
|  |    ├ TodoListContents
|  |    |     ├ TodoListContents.tsx
|  |    |     ├ style.module.tsx
|  |    |     ├ Modify
|  |    |     |   ├ Modify.tsx
|  |    |     |   ├ style.module.tsx
|  |    |     ├ Todo
|  |    |     |   ├ Todo.tsx
|  |    |     |   ├ style.module.tsx
|  ├ pages
|  |    ├ const
|  |    |    ├ emailRegex.ts
|  |    ├ Error
|  |    |    ├ Error.tsx
|  |    |    ├ NotFound.tsx
|  |    |    ├ style.module.scss
|  |    ├ Index
|  |    |    ├ Index.tsx
|  |    ├ SignIn
|  |    |    ├ SignIn.tsx
|  |    |    ├ hooks
|  |    |    |    ├ useSignIn.ts
|  |    ├ SignUp
|  |    |    ├ SignUp.tsx
|  |    |    ├ hooks
|  |    |    |    ├ useSignUp.ts
|  |    ├ TodoList
|  |    |    ├ TodoList.tsx
|  |    |    ├ hooks
|  |    |    |    ├ useCreateTodo.ts
|  |    |    |    ├ useDeleteTodo.ts
|  |    |    |    ├ useGetTodo.ts
|  |    |    |    ├ useUpdateTodo.ts
|  ├ RootRouter
|  ├ styles
|  ├ App.css
|  ├ App.tsx
|  ├ index.css
|  ├ index.tsx
|  ├ package-lock.json
|  ├ package.json
|  ├ README.md
|  ├ tsconfig.json
```

### Dev stack

- typescript
- react
- sass

### 배포 링크

- https://pre-onboarding-11th-1-8.vercel.app
