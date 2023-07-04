import OfferingList from "./OfferingList";
import useFetch from "./useFetch";

const Offerings = () => {
  const { error, isPending, data: offerings } = useFetch('http://localhost:3000/api/offering/all')

  return (
    <div className="home">
      <div class="mt-2">
        <h1>
          Offerings
        </h1>
        <hr></hr>
      </div >
      <div >
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {offerings && <OfferingList offerings={offerings} />}
      </div>
    </div>
  );
}

export default Offerings;