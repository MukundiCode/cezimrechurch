import StickyHeadTable from "./MuiTable";
import NameList from "./NameList";
import useFetch from "./useFetch";

const MembersList = () => {
  const { error, isPending, data: names } = useFetch('http://localhost:3000/api/member/all', 'GET')

  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'surname', label: 'Surname', minWidth: 100 },
    {
      id: 'phoneNumber',
      label: 'Phone Number',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'address',
      label: 'Address',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'birthday',
      label: 'Birthday',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },

  ];


  return (
    <div className="home">
      <div class="mt-2">
        <h1>
          Members
        </h1>
      </div>
      <div class="w-75 m-auto">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {names && <StickyHeadTable rows={names} columns={columns} />}
      </div>
    </div>
  );
}

export default MembersList;