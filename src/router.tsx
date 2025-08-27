import { type ComponentType, type FC, lazy, Suspense } from 'react';
import SuspenseLoader from './Component/SuspensLoader';

export function Loader<P extends object>(Component: ComponentType<P>): FC<P> {
  return (props) => (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
}

const Dashboard = Loader(lazy(() => import('./Component/Dashboard')));
const Trading = Loader(lazy(() => import('./Page/trading')));

const Router = () => {
  return (
    <Dashboard><Trading /></Dashboard>
  )
}

export default Router;