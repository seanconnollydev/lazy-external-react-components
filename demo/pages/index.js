import NoSSR from 'react-no-ssr';
import { MyComponent } from '@goldenshun/external-components-example';

const Index = () => (
  <NoSSR>
    <MyComponent />
  </NoSSR>
);

export default Index;
