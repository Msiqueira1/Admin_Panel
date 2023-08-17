import "./navbar.scss"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = () => {
  return (
    <div className='navbar-nav'>
      <div className="logo">
        Itatiaia
      </div>
      <MenuOutlinedIcon className="icone" />
    </div>
  )
}

export default Navbar