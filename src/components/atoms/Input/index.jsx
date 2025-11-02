import cx from 'classnames';

export default function Input(props) {
  const { name, type, width = 'w-full' } = props;

  const inputClass = cx('border border-border h-12 rounded-md mt-1 px-2.5 py-1', width);

  return (
    <input
      type={type}
      name={name}
      id={name}
      className={inputClass}
      required
    />
  );
}
