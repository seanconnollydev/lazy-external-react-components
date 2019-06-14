import React, { Suspense } from 'react';
const MyLazyComponent = React.lazy(() => import('./MyLazyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MyLazyComponent />
    </Suspense>
  );
}

export default MyComponent;