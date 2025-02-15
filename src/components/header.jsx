import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav  className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
  <a href=""> <Link to="/">Notes APP</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a href=""> <Link to="/">Home</Link></a>
        <a href=""> <Link to="/blog">Blog</Link></a>
     
     
      </div>
    </div>
  </div>
</nav>
    
  );
};

export default Header;
