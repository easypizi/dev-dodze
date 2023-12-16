import { baseTheme } from '@dev-dodze/ui';
import { Suspense, type FC } from 'react';
import { ThemeProvider } from 'styled-components';

export const App: FC = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Suspense fallback={<div>Loading...</div>}>
        <div>Hello</div>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
