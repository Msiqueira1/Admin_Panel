import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="menu">Hambuguer</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <span>Listar</span>
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            <span>Cadastros</span>
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            <span>Consultas</span>
          </li>
        </ul>
        <hr />
        <ul>
          <li>
            <span>Alterar</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Sair</div>
    </div>
  )
}

export default Sidebar