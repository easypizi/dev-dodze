import type { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppContainer } from './AppContainer';
import { MainPage } from '../screens/MainPage';

export const RootNavigator: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AppContainer />}>
        <Route index element={<MainPage />} />
        {/* <Route path="terms" element={<TermsScreen />} /> */}
        {/* <Route path="*" element={<NotFoundScreen />} /> */}
      </Route>
    </Routes>
  );
};
