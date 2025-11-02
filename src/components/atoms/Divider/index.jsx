export default function Divider(props) {
  const { children } = props;

  return (
    <div className="flex items-center before:flex-1 before:content-[''] before:p-px before:bg-border after:flex-1 after:content-[''] after:p-px after:bg-border">
      {children}
    </div>
  );
}
