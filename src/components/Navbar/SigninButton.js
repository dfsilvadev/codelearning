import Navlink from './Navlink';

export default function SigninButton({ showSignInButton }) {
  return <>{!showSignInButton && <Navlink href="#">Entrar</Navlink>}</>;
}
