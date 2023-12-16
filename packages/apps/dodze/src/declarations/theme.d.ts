import type { Theme } from '@dev-dodze/ui';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
