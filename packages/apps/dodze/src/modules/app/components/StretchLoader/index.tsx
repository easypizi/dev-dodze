import { Loader } from '@dev-dodze/ui';
import type { FC } from 'react';

export const StretchLoader: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '100%',
        height: '100%',
      }}
    >
      <Loader />
    </div>
  );
};
