import Label from '../../atoms/Label';
import Input from '../../atoms/Input';

export default function InputPassword(props) {
  const { title, htmlFor, type, name, border } = props;

  return (
    <div className="font-dm-sans flex flex-col mb-3">
      <Label
        htmlFor={htmlFor}
        title={title}
      />
      <div className="relative flex justify-end items-center">
        <Input
          type={type}
          name={name}
          border={border}
        />
        <img
          src="/icons/password_off_icon.png"
          alt=""
          width={24}
          height={24}
          className="absolute mr-2.5"
        />
      </div>
    </div>
  );
}
