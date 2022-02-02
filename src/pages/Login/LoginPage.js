import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { ButtonPrimary } from "../../components/Button";
import { Label, TextInput } from "../../components/Inputs";
import UserContext from "../../contexts/UserContext";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {userInfo, setUserInfo} = useContext(UserContext);
  const navigate = useNavigate();

  const doLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await login(email, password);
      console.log(result.data);
      //save result to store user's info
      setUserInfo(result.data);
      localStorage.setItem("agnesUser", JSON.stringify(result.data));
      //redirect to initial page
      navigate("/");
    } catch(err) {
      console.warn(err);
    }

  }
  
  return (
    <main className="page">
      {/* user: {userInfo.name} */}
      <form>
        <Label>
          E-mail
          <TextInput value={email} onChange={e => setEmail(e.target.value)} />
        </Label>
        <Label>
          Senha
          <TextInput type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </Label>
        <ButtonPrimary onClick={doLogin}>Entrar</ButtonPrimary>
      </form>
    </main>
  )
}

export default LoginPage;
