import React from 'react';
import Label from '../../atoms/Label';

export default function SelectGender(props) {
  const { title, htmlFor, name, children } = props;
  return (
    <div className="flex flex-col mb-3">
      <Label
        htmlFor={htmlFor}
        title={title}
      />
      <select
        name={name}
        id={name}
        class="px-2.5 py-1 border border-border w-full h-12 rounded-md"
      >
        {children}
      </select>
    </div>
  );
}
