import FormLogin from '../components/organisms/FormLogin';
import AuthTemplate from '../components/templates/AuthTemplate';

export default function LoginPage() {
  return (
    <>
      <AuthTemplate
        title="Masuk ke Akun"
        subtitle="Yuk, lanjutin belajarmu di videobelajar."
      >
        <FormLogin />
      </AuthTemplate>
    </>
  );
}
