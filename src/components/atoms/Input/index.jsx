import cx from 'classnames';

export default function Input(props) {
  const {
    name,
    type,
    placeholder,
    width = 'w-full',
    height = 'h-12',
    rounded = 'rounded-md',
    border,
    className,
  } = props;

  const inputClass = cx('px-2.5 py-1', width, height, rounded, className, {
    'border border-border': border,
  });

  return (
    <input
      type={type}
      name={name}
      id={name}
      className={inputClass}
      placeholder={placeholder}
      required
    />
  );
}
