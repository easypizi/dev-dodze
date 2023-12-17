import type { FC, ReactNode } from 'react';
import { GlobalStyles as UIKITGlobalStyles } from '@dev-dodze/ui';
import { GlobalStyles } from './styled';

export interface RootLayoutProps {
  children: ReactNode;
}

export const RootLayout: FC<RootLayoutProps> = (props) => {
  const { children } = props;
  return (
    <>
      <UIKITGlobalStyles />
      <GlobalStyles />
      {children}
    </>
  );
};
