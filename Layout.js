import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import logo from './Images/logo.png';
import './Layout.css';  // Import the CSS file

export default function Layout() {
  const navigate = useNavigate();

  const handleBecomeMemberClick = () => {
    navigate('/pricing');
  };

  return (
    <div className="layout">
      <header className="header">
        <div style={{display:'flex',height:'50px',float:'left'}}>
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="webtitle">RISHIKUL</h1>
        </div>
        <nav className="navbar" style={{float:'right'}}>
          <ul className="navList">
            <li className="navItem"><Link to="/" className="navLink">Home</Link></li>
            <li className="navItem"><Link to="/about" className="navLink">About</Link></li>
            <li className="navItem"><Link to="/Classes" className="navLink">Classes</Link></li>
            <li className="navItem"><Link to="/pricing" className="navLink">Pricing</Link></li>
            <li className="navItem"><Link to="/myblog" className="navLink">Blog</Link></li>
            <li className="navItem"><Link to="/contact" className="navLink">Contact</Link></li>
          </ul>
          <button onClick={handleBecomeMemberClick} className="becomeMemberButton">Become a Member</button>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
