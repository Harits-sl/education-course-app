import cx from 'classnames';

export default function Button(props) {
  const {
    children,
    type,
    primary,
    secondary,
    disabled,
    contained,
    shadow,
    outlined,
    sso,
    margin,
    fontWeight = 'bold',
    width,
    widthFull,
    display,
  } = props;

  const btnClass = cx(`py-2.5 px-1.5 rounded-[10px] cursor-pointer font-${fontWeight}`, margin, width, display, {
    'bg-primary text-light-primary hover:bg-primary/90': primary && contained,
    'bg-primary-100 text-primary hover:bg-primary-100/80': primary && shadow,
    'text-primary border-primary': primary && outlined,
    'bg-secondary text-light-primary': secondary && contained,
    'bg-secondary-100 text-secondary': secondary && shadow,
    'text-light-secondary border-secondary': secondary && outlined,
    'bg-greyscale-400 text-dark-disabled': disabled && contained,
    'bg-greyscale-300 text-dark-disabled': disabled && shadow,
    'bg-greyscale-200 text-dark-disabled border-dark-disabled': disabled && outlined,
    'flex justify-center items-center border-border': sso,
    border: outlined,
    'w-full': widthFull,
  });

  return (
    <button
      type={type}
      className={btnClass}
    >
      {children}
    </button>
  );
}
