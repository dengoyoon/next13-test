'use client';
// 클라이언트 사이드에서 대개 에러를 보여주기 때문에 클라이언트 사이드 컴포넌트로 만듬.
// 이렇게 error.tsx를 만들면 알아서 ErrorBoundary를 생성한다고 함.
import { useEffect } from 'react';

export default function Error({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}