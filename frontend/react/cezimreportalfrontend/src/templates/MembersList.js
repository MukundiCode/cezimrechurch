import NameList from "./NameList";
import useFetch from "./useFetch";

const MembersList = () => {
  // const { error, isPending, data: names } = useFetch('http://127.0.0.1:8000/members/', 'GET')
  const { error, isPending, data: names } = useFetch('http://localhost:3000/api/member/all', 'GET')
  

  return (
    <div className="home">
      <div class="mt-2">
        <h1>
          Members
        </h1>
      </div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { names && <NameList names={names} /> }
    </div>
  );
}
 
export default MembersList;