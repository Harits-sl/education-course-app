import { Link } from 'react-router-dom';
import InputText from '../../molecules/InputText';
import InputPassword from '../../molecules/InputPassword';
import Button from '../../atoms/Button';
import Divider from '../../atoms/Divider';
import InputPhoneNumber from '../../molecules/InputPhoneNumber';

export default function FormRegister() {
  return (
    <form
      action=""
      id="FormRegister"
    >
      <InputText
        title="Nama Lengkap"
        htmlFor="fullname"
        type="text"
        name="fullname"
      />
      <InputText
        title="E-Mail"
        htmlFor="email"
        type="email"
        name="email"
      />
      <InputPhoneNumber />
      <InputPassword
        title="Kata Sandi"
        htmlFor="password"
        type="password"
        name="password"
      />
      <InputPassword
        title="Konfirmasi Kata Sandi"
        htmlFor="confirm-password"
        type="password"
        name="confirm-password"
      />
      <a
        href="#"
        className="text-dark-secondary text-end block text-sm mb-6"
      >
        <span>Lupa Password?</span>
      </a>
      <Button
        type="submit"
        primary
        contained
        margin="mb-4"
        widthFull
      >
        Daftar
      </Button>
      <Link to="/login">
        <Button
          primary
          shadow
          widthFull
        >
          Masuk
        </Button>
      </Link>
      <Divider>
        <span className="m-2">atau</span>
      </Divider>
      <Button
        sso
        outlined
        widthFull
      >
        <img
          src="/icons/google_icon.png"
          alt="icon google"
          width="15"
          className="mr-2"
        />
        Daftar dengan Google
      </Button>
    </form>
  );
}
