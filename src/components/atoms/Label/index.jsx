export default function Label(props) {
  const { htmlFor, title } = props;

  return (
    <label
      htmlFor={htmlFor}
      className="text-dark-secondary mb-1"
    >
      {title} <span className="text-error-default">*</span>
    </label>
  );
}
