import './navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="topnav">
        <a className="navbar-brand nav-btn" href="/">
          <div className="logo-image">
            <img className="img-fluid" src={require('../../assets/img/pam-logo.png')} alt=""/>
          </div>
        </a>
        <a className='nav-btn' href="/">Entrar</a>
        <a className='nav-btn' href="/support">Suporte</a>
      </div>
    </>
  );
};

export default Navbar;
