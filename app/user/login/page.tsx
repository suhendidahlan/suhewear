import FormLogin from "@/components/user/form-login";

const Login = () => {
  return (
    <div className="my-10 text-center">
      <p className="text-center text-sm text-green-700 mx-6 italic">
        Selamat, akun anda berhasil terverifikasi. Silahkan Login untuk masuk ke
        akun anda.
      </p>
      <FormLogin />
    </div>
  );
};

export default Login;
