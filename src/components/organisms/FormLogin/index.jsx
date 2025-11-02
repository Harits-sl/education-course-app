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
      />
      <InputPassword
        title="Kata Sandi"
        htmlFor="password"
        type="password"
        name="password"
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
      >
        Masuk
      </Button>
      <Link to="/register">
        <Button
          primary
          shadow
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
