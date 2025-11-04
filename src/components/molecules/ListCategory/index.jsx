import React from 'react';

export default function ListCategory(props) {
  const { children } = props;

  return (
    <ul className="sm:container flex items-center gap-9 whitespace-nowrap overflow-x-scroll overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {children}
    </ul>
  );
}
