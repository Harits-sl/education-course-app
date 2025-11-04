import { Link } from 'react-router-dom';
import InputText from '../../molecules/InputText';
import InputPassword from '../../molecules/InputPassword';
import Button from '../../atoms/Button';
import Divider from '../../atoms/Divider';

export default function FormLogin() {
  return (
    <form
      action=""
      id="FormLogin"
    >
      <InputText
        title="E-Mail"
        htmlFor="email"
        type="email"
        name="email"
        border
      />
      <InputPassword
        title="Kata Sandi"
        htmlFor="password"
        type="password"
        name="password"
        border
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
        Masuk
      </Button>
      <Link to="/register">
        <Button
          primary
          shadow
          widthFull
        >
          Daftar
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
        Masuk dengan Google
      </Button>
    </form>
  );
}
