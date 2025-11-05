import cx from 'classnames';
import { Link } from 'react-router-dom';

export default function List(props) {
  const { children, textColor = 'text-dark-secondary', padding = 'py-3', margin = 'mb-3', isActive, href } = props;

  const classItem = cx('font-medium leading-[110%] tracking-[0.2px] hover:text-tertiary', margin, padding, textColor, {
    'text-tertiary relative after:w-[52px] after:block after:absolute after:h-1.5 after:bg-tertiary after:mt-3 after:rounded-[10px]':
      isActive,
  });

  return (
    <>
      <Link to={href}>
        <li className={classItem}>{children}</li>
      </Link>
    </>
  );
}
