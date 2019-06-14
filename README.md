# Lazy external React components
Prototype that demonstrates how one can publish evergreen lazy external React components.

This pattern solves a problem where you want to push new versions of a React component without requiring consumers to upgrade.

# How does it work?

This pattern leverages [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy) and Webpack's [publicPath](https://webpack.js.org/guides/public-path/) configuration option.

## React.lazy
[React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy) creates a separate file for a lazily loaded component.

From the example:

```javascript
import React, { Suspense } from 'react';
const MyLazyComponent = React.lazy(() => import('./MyLazyComponent'));

// MyComponent is the interface component that an application interacts with.
function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* MyLazyComponent is the concrete component that is dynamically fetched. */}
      <MyLazyComponent />
    </Suspense>
  );
}

export default MyComponent;
```

## Webpack `publicPath`
The `publicPath` configuration option can be found in `webpack.config.js`.

```javascript
output: {
  ...
  publicPath: 'https://external-components.goldenshun.now.sh/dist/'
}
```

When Webpack attempt to import `MyLazyComponent`, it will do so from the above URL.

## Hot swapping
Since Webpack is configured to pull from a public path, we are then able to "hot swap" the lazily imported component simply by rebuilding and pushing up the built files (see Demonstration notes below for how we do this).

The next time a consuming application attempt to import `MyLazyComponent`, it will receive the latest version of that component.

In our example, we are using [now](https://zeit.co/now) to host the files but we could substitute with any provider or CDN.

# Demonstration

```
# Run the demo locally
cd demo
npm install
npm run dev
```

```
# Make a change to MyLazyComponent and publish it
cd external-components

# Publish to npm
npm publish

# Publish to CDN
now
```

Now you can reload the local demo and see the updates to `MyLazyComponent` _without_ needing to upgrade your `package.json` to a new version.
