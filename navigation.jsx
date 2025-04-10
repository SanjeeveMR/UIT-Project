import { Link } from "react-router-dom";
function Navigation() {
    return (
        <div>
       <nav className="navbar">
      <ul>
        <li> <Link to="/live">Live</Link></li>
        <li><Link to="/Cricket">Cricket</Link></li>
        <li><Link to="/Football">Football</Link></li>
        <li><Link to="/tennis">Tennis</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
    </div>
    )
}
export default Navigation;