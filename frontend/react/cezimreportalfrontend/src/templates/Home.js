import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div>
      <div >
        <h1>
          Welcome to the Zimre online Portal.
        </h1>
      </div>
      <div class="border d-flex align-items-center justify-content-center" style={{height: 350}}> 
        <Link to="/members" class="nav-link">
        < button class="btn btn-primary m-2" type="submit">Members</button>
        </Link>
        
        <Link to="/offerings" class="nav-link">
          <button class="btn btn-primary  m-2" type="submit">Offerings</button>
        </Link>
      </div>
    </div>
  );
}
 
export default Home;