import * as React from 'react';
import type { SVGProps } from 'react';

const SvgFaceTo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#B0B1BA"
      d="M15 12.215a4.552 4.552 0 1 0 0-9.104 4.552 4.552 0 0 0 0 9.104M22.961 15.662c-.295-1.86-2.868-2.485-4.703-3.076a5.01 5.01 0 0 1-3.257 1.2 5.011 5.011 0 0 1-3.258-1.2c-1.835.591-4.407 1.215-4.704 3.076-.526 3.31 4.396 5.227 7.962 5.227 3.565 0 8.487-1.917 7.96-5.227"
    />
    <path
      fill="#242526"
      d="M2.438 12.28v-1.712c0-1.402 1.079-2.531 2.419-2.531h1.634l-.13.136a.79.79 0 0 0 0 1.095c.13.137.326.24.523.24.196 0 .36-.069.523-.24l1.372-1.471a.79.79 0 0 0 0-1.095L7.374 5.231a.708.708 0 0 0-1.046 0 .79.79 0 0 0 0 1.095l.163.17H4.857C2.732 6.497 1 8.31 1 10.535v1.71c0 .412.327.754.72.754.391.034.718-.308.718-.719"
    />
  </svg>
);
export default SvgFaceTo;