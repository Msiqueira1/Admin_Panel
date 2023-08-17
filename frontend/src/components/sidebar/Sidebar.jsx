import "./sidebar.scss"
/* import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'; */
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Sidebar = () => {
  return (
    <div className="nav">
      
      <div className='sidebar'>

        <div className="top">
          <MenuOutlinedIcon className="icone" />
        </div>

        <div className="center">

          <ul>
            <p className="title">Listar</p>
            <hr />
            <li>
              <span>Evento</span>
            </li>
          </ul>

          <ul>
            <p className="title">Cadastros</p>
            <hr />
            <li>
              {/* <PersonOutlineOutlinedIcon /> */}
              <span>Evento</span>
            </li>
            <li>
              <span>Cordenador</span>
            </li>
            <li>
              <span>Promoter</span>
            </li>
            <li>
              <span>Repórter</span>
            </li>
            <li>
              <span>Motorista/Operador</span>
            </li>
            <li>
              <span>Equipamento</span>
            </li>
            <li>
              <span>Avaliação</span>
            </li>
            <li>
              <span>Brindes</span>
            </li>
          </ul>

          <ul>
            <p className="title">Consultas</p>
            <hr />
            <li>
              <span>Cordenador</span>
            </li>
            <li>
              <span>Promoter</span>
            </li>
            <li>
              <span>Repórter</span>
            </li>
            <li>
              <span>Motorista/Operador</span>
            </li>
            <li>
              <span>Equipamento</span>
            </li>
            <li>
              <span>Avaliação</span>
            </li>
            <li>
              <span>Brindes</span>
            </li>
          </ul>

          <ul>
            <p className="title">Alterar</p>
            <hr />
            <li>
              <span>Senha do Gestor</span>
            </li>
            <li>
              <span>Senha do Cordenador</span>
            </li>
          </ul>

        </div>

        <div className="bottom">

          <ul>
            <p className="title">Sair</p>
            <hr />
            <li>
              <span>Logout</span>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Sidebar