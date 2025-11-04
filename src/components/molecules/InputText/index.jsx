import Label from '../../atoms/Label';
import Input from '../../atoms/Input';

export default function InputText(props) {
  const { title, htmlFor, type, name, border } = props;

  return (
    <div className="flex flex-col mb-3">
      <Label
        htmlFor={htmlFor}
        title={title}
      />
      <Input
        type={type}
        name={name}
        border={border}
      />
    </div>
  );
}
