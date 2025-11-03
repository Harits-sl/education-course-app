import cx from 'classnames';

export default function Divider(props) {
  const { children, margin = '' } = props;

  const dividerClassNames = cx(
    "flex items-center before:flex-1 before:content-[''] before:p-px before:bg-border after:flex-1 after:content-[''] after:p-px after:bg-border",
    margin
  );

  return <div className={dividerClassNames}>{children}</div>;
}
