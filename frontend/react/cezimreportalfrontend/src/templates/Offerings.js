import OfferingList from "./OfferingList";
import useFetch from "./useFetch";

const Offerings = () => {
  const { error, isPending, data: offerings } = useFetch('http://127.0.0.1:8000/members/getOfferings')

  return (
    <div className="home">
      <div class="mt-2">
        <h1>
          Offerings
        </h1>
      </div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { offerings && <OfferingList offerings={offerings} /> }
    </div>
  );
}
 
export default Offerings;