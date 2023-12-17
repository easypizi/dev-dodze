import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import { StretchLoader } from '../components';
import { RootLayout } from '../layouts';
import { RootNavigator } from './RootNavigator';

export const AppRouter = () => {
  return (
    <Router>
      <RootLayout>
        <Suspense fallback={<StretchLoader />}>
          <RootNavigator />
        </Suspense>
      </RootLayout>
    </Router>
  );
};

export default AppRouter;
