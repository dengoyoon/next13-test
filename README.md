# Next.js13 버전 테스트하고 정리하는 레포
## App Router
- 13.4에서 이 기능이 안정화 됨
- 기존에는 : src하단에 pages폴더를 두고 index.tsx로 라우팅을 한다.
- 새롭게는 : src하단에 app폴더를 두고 page.tsx로 라우팅을 한다.
- 여기서 사용하는 모든 컴포넌트는 기본적으로 React Server Component임
- 따라서 data fetching을 useEffect없이 할 수 있다. (RSC에선 애초에 state, effect 못 씀)
- 데이터를 가져올 때 caching이 알아서 되는 모양이다
- Client Component로 (우리가 기존에 알고 있던 그 컴포넌트) 쓰려면 'use client'를 명시하면 된다.
- 추후 업데이트 계속할 예정 ..