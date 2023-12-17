import * as React from 'react';
import type { SVGProps } from 'react';

const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M24 21H0V3h24zM1 4.523V20h22V4.523l-10.999 10zM22.089 4H1.913l10.088 9.171z"
    />
  </svg>
);
export default SvgMail;
