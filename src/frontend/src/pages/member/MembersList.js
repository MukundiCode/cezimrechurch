import NameList from "./components/NameList";
import useFetch from "../../hooks/useFetch";

const MembersList = () => {
  const { error, isPending, data: names } = useFetch('/api/member/all', 'GET')

  return (
    <div className="home">
      <div class="mt-2">
        <h1>
          Members
        </h1>
        <hr></hr>
      </div>
      <div >
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {names && <NameList names={names}  />}
      </div>
    </div>
  );
}

export default MembersList;