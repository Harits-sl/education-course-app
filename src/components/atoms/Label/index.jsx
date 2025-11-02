export default function Label(props) {
  const { htmlFor, title } = props;

  return (
    <label
      htmlFor={htmlFor}
      className="text-dark-secondary"
    >
      {title} <span className="text-error-default">*</span>
    </label>
  );
}
