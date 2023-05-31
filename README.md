# Next.js13 버전 테스트하고 정리하는 레포 + Tanstack Query와 양립할 수 있을지
## React Server Component, RSC
- SSR이랑은 별개의 개념
- 브라우저 보다 리소스에 더 빨리 접근할 수 있음
- 브라우저에서는 번들링된 모든 코드를 다운해야 하는 것과 달리 서버 단에서 의존성을 다운 받을 필요 없이 무거운 코드 모듈을 저렴하게 사용 가능
- 서버 컴포넌트에서 import되는 모든 컴포넌트를 모두 code splitting 포인트로 간주함 (React.lazy 안써도 됨)
- 서버 컴포넌트는 페이지 레벨에 상관없이 모든 컴포넌트에서 서버에 접근 가능하다
- RSC를 사용하면 서버와 브라우저가 각자 잘 수행할 수 있는 작업을 나눌 수 있다
- state/ effect 사용 불가
- 유저 인터렉션 당연히 안됨 (onclick 같은 것)
- SSR의 경우엔 HTML로 전달이 되기 때문에 새로운 refetch가 필요한 경우 HTML 전체를 리렌더링 해야함
- 즉 서로를 대체하는 개념이 아니라 보완하는 개념이다.
- SSR로 초기 HTML을 빠르게 보여주고, 서버 컴포넌트로는 클라이언트로 전송되는 자바스크립트 번들 사이즈를 감소시켜서 훨씬 빠른 페이지를 완성할 수 있음

## App Router
- 13.4에서 이 기능이 안정화 됨
- 기존에는 : src하단에 pages폴더를 두고 index.tsx로 라우팅을 한다.
- 새롭게는 : src하단에 app폴더를 두고 page.tsx로 라우팅을 한다.
- 여기서 사용하는 모든 컴포넌트는 기본적으로 React Server Component임
- 따라서 data fetching을 useEffect없이 할 수 있다. (RSC에선 애초에 state, effect 못 씀)
- 데이터를 가져올 때 caching이 알아서 되는 모양이다
- Client Component로 (우리가 기존에 알고 있던 그 컴포넌트) 쓰려면 'use client'를 명시하면 된다.
- layout.tsx를 사용해서 라우팅 페이지 렌더링 영역을 결정할 수 있다.
- 그 예시로 TodoLayout안에 TodoList가 있고 children이 있는데 TodoList를 클릭하면 상세 내용이 children부분에 들어감
- layout.tsx의 children에 `page.tsx`, `[todoId].tsx`가 들어간 것
- 추후 업데이트 계속할 예정 ..