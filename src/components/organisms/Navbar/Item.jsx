import { Link } from 'react-router-dom';
import Divider from '../../atoms/Divider';

export default function Item(props) {
  const { children, href } = props;

  return (
    <>
      <Divider
        margin="my-2"
        color="bg-[#3A35411F]"
      />
      <Link
        to={href}
        className="font-medium text-dark-secondary container md:py-4 md:ps-3 md:pe-20.5 text-nowrap"
      >
        {children}
      </Link>
    </>
  );
}
