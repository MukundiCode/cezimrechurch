import NameList from "./NameList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: names } = useFetch('http://127.0.0.1:8000/members/')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { names && <NameList names={names} /> }
    </div>
  );
}
 
export default Home;