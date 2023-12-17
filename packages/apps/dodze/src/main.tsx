import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';

const LazyApp = lazy(() => import('./modules/app/App'));

const start = async (root: ReactDOM.Root) => {
  root.render(
    <React.StrictMode>
      <LazyApp />
    </React.StrictMode>,
  );
};

start(ReactDOM.createRoot(document.getElementById('root') as HTMLElement));
