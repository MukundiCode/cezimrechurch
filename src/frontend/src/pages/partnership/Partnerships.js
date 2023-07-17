import PartnershipList from "./components/PartnershipList";
import useFetch from "../../hooks/useFetch";

const Partnerships = () => {
  const { error, isPending, data: offerings } = useFetch('/api/offering/all')

  return (
    <div className="home">
      <div class="mt-2">
        <h1>
          Partnerships
        </h1>
        <hr></hr>
      </div >
      <div >
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {offerings && <PartnershipList offerings={offerings} />}
      </div>
    </div>
  );
}

export default Partnerships;