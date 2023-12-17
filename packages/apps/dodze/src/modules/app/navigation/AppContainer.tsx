import { Suspense, type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { StretchLoader } from '../components';

export const AppContainer: FC = () => {
  return (
    <Suspense fallback={<StretchLoader />}>
      <Outlet />
    </Suspense>
  );
};
