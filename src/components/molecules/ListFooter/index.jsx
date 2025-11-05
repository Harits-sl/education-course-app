import React from 'react';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function ListFooter(props) {
  const { title, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="text-base font-bold leading-[140%] tracking-[0.2px] text-dark-primary flex justify-between items-center">
        {title}
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-gray-700 lg:hidden" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-700 lg:hidden" />
        )}
      </span>
      <ul className={`lg:flex ${isOpen ? 'flex' : 'hidden'} mt-3.5 flex flex-col gap-1.5 lg:gap-3`}>{children}</ul>
    </div>
  );
}
