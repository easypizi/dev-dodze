import * as React from 'react';
import type { SVGProps } from 'react';

const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.627 1a1 1 0 0 1 .991.865l.37 2.712a7.994 7.994 0 0 1 1.945 1.125l2.535-1.037a1 1 0 0 1 1.245.426l1.627 2.818a1 1 0 0 1-.253 1.29l-2.165 1.678a8.068 8.068 0 0 1 0 2.246l2.165 1.677a1 1 0 0 1 .254 1.29l-1.628 2.82a1 1 0 0 1-1.245.425l-2.535-1.037a7.991 7.991 0 0 1-1.945 1.125l-.37 2.712a1 1 0 0 1-.99.865h-3.255a1 1 0 0 1-.99-.865l-.37-2.712a7.99 7.99 0 0 1-1.946-1.125l-2.535 1.037a1 1 0 0 1-1.244-.426L1.66 16.091a1 1 0 0 1 .254-1.29l2.165-1.678a8.07 8.07 0 0 1 0-2.246L1.914 9.2a1 1 0 0 1-.254-1.29l1.628-2.82a1 1 0 0 1 1.244-.425l2.535 1.037a7.991 7.991 0 0 1 1.946-1.125l.37-2.712a1 1 0 0 1 .99-.865zM15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSettings;
