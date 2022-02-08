import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { ButtonPrimary, LinkButton } from "../../components/Button";
import { LoadingSpinner } from "../../components/Feedbacks";
import { Label, TextInput } from "../../components/Inputs";
import ErrorContext from "../../contexts/ErrorContext";
import UserContext from "../../contexts/UserContext";
import { getValidation } from "../../helpers/validation";
import { StyledLogin } from "./LoginPage.styles";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const { setError } = useContext(ErrorContext);
  const navigate = useNavigate();

  const doLogin = async (e) => {
    e.preventDefault();

    const validation = getValidation({
      'e-mail': email,
      'senha': password,
    });

    if(validation) {
      setError(validation)
      return;
    }

    setLoading(true);
    try {
      const result = await login(email, password);
      console.log(result.data);
      //save result to store user's info
      setUserInfo(result.data);
      localStorage.setItem("agnesUser", JSON.stringify(result.data));
      //redirect to initial page
      navigate("/");
    } catch(err) {
      console.warn(err.response);
      if(err.response) {
        setError(err.response.data.message);
      } else {
        setError("Não foi possível entrar no sistema");
      }
    }
    setLoading(false);

  }
  
  return (
    <StyledLogin>
      <header>
        <h1>
          AGNES <span>escolas</span>
        </h1>
      </header>
      <form className="content">
        <Label>
          E-mail
          <TextInput value={email} onChange={e => setEmail(e.target.value)} />
        </Label>
        <Label>
          Senha
          <TextInput type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </Label>
        <ButtonPrimary onClick={doLogin}>
          {loading ? (
            <LoadingSpinner>Carregando</LoadingSpinner>
          ) : (
            'Entrar'
          )}
        </ButtonPrimary>
      </form>
      <Link to='/'>
      <LinkButton>Continuar como visitante</LinkButton>
      </Link>
    </StyledLogin>
  )
}

export default LoginPage;
