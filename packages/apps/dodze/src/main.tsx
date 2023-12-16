import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
// import { init } from './init';
// import { appConfig } from './config';

const LazyApp = lazy(() => import('./modules/app/App'));

const start = async (root: ReactDOM.Root) => {
  // await appConfig.init();
  // init();

  root.render(
    <React.StrictMode>
      <LazyApp />
    </React.StrictMode>,
  );
};

start(ReactDOM.createRoot(document.getElementById('root') as HTMLElement));