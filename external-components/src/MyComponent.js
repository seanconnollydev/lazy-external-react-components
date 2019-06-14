import React, { Suspense } from 'react';
const MyLazyComponent = React.lazy(() => import('./MyLazyComponent'));

function MyComponent() {
  console.log('MyComponent');
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyLazyComponent />
      </Suspense>
    </div>
  );
}

export default MyComponent;