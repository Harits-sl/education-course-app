import FormRegister from '../components/organisms/FormRegister';
import AuthTemplate from '../components/templates/AuthTemplate';

export default function RegisterPage() {
  return (
    <>
      <AuthTemplate
        title="Pendaftaran Akun"
        subtitle="Yuk, daftarkan akunmu sekarang juga!"
      >
        <FormRegister />
      </AuthTemplate>
    </>
  );
}
