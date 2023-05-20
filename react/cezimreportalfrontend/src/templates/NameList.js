import { Link } from 'react-router-dom';

const NameList = ({ names }) => {
    // console.log(names)

    return (
        <div >
            <table class="table table-striped mt-4">
                <thead>
                    <th scope= "col">ID</th>
                    <th scope= "col">Name</th>
                    <th scope= "col">Surname</th>
                    <th scope= "col">Phone Number</th>
                </thead>
                <tbody>
                {names.map(name => (
                    <tr>
                        <th scope = "row"> {name.id} </th>
                        <td>{name.name}</td>
                        <td>{name.surname}</td>
                        <td>{name.phoneNumber}</td>
                    </tr>
                ))}
                </tbody>


            </table>
        </div>
    );
}
 
export default NameList;