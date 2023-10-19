import Navbar from "../../components/navbar/Navbar"
import "./login.scss"

const Login = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <form>
        <div className="login">
          <div className="container">
            <div className="title">
              Login
            </div>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Usuário"
                className="input"
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                className="input"
              />
            </div>
            <div className="botaoEntrar">
              Entrar
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login