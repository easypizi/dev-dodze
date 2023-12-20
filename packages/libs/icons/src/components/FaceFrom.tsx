import * as React from 'react';
import type { SVGProps } from 'react';

const SvgFaceFrom = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#242526"
      d="M15.72 6.438h1.712c1.402 0 2.532 1.079 2.532 2.419v1.634l-.137-.13a.79.79 0 0 0-1.095 0 .756.756 0 0 0-.24.523c0 .196.069.36.24.522l1.471 1.373a.79.79 0 0 0 1.095 0l1.471-1.405a.708.708 0 0 0 0-1.046.79.79 0 0 0-1.095 0l-.17.163V8.857C21.503 6.732 19.69 5 17.465 5h-1.71c-.412 0-.754.327-.754.72-.034.391.308.718.719.718"
    />
    <path
      fill="#B0B1BA"
      d="M9 12.215a4.552 4.552 0 1 0 0-9.104 4.552 4.552 0 0 0 0 9.104M16.961 15.662c-.295-1.86-2.868-2.485-4.703-3.076A5.01 5.01 0 0 1 9 13.786a5.011 5.011 0 0 1-3.258-1.2c-1.835.591-4.407 1.215-4.704 3.076-.526 3.31 4.396 5.227 7.961 5.227 3.566 0 8.488-1.917 7.961-5.227"
    />
  </svg>
);
export default SvgFaceFrom;