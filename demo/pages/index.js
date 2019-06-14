import NoSSR from 'react-no-ssr';
import { MyComponent } from 'external-components';

const Index = () => (
  <NoSSR>
    <MyComponent />
  </NoSSR>
);

export default Index;
