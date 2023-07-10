import { Link } from "react-router-dom";
import AuthContext, { AuthProvider } from "../context/AuthProvider";
import { useContext, useState } from "react";

const Navbar = () => {
  let { getCurrentUser } = useContext(AuthContext)
  const [user, setUser] = useState(getCurrentUser())
  const [error, setError] = useState(null);

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" >CE Zimre Portal</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/home" class="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/members" class="nav-link">Members</Link>
            </li>
            <li class="nav-item">
              <Link to="/offerings" class="nav-link">Offerings</Link>
            </li>
            <li class="nav-item">
              <Link to="/addMember" class="nav-link">Add Members</Link>
            </li>
            <li class="nav-item">
              <Link to="/addOffering" class="nav-link">Add Offering</Link>
            </li>

            {user != null && <li class="nav-item">
              <Link to="/logout" class="nav-link">Logout</Link>
            </li>}
            {user == null && <li class="nav-item">
              <Link to="/login" class="nav-link">Login</Link>
            </li>}

          </ul>
        </div>
      </div>
    </nav>

  );
}
export default Navbar;