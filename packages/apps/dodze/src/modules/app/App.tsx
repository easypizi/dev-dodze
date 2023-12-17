import { darkTheme } from '@dev-dodze/ui';
import { Suspense, type FC, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import { StretchLoader } from './components';

const LazyRouter = lazy(() => import('./navigation/AppRouter'));

export const App: FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Suspense fallback={<StretchLoader />}>
        <LazyRouter />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
