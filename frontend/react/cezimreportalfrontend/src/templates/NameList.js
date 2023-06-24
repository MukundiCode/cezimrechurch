import { Link } from 'react-router-dom';

const NameList = ({ names: members }) => {

    return (
        <div >
            <table class="table table-striped mt-4">
                <thead>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Phone Number</th>
                </thead>
                <tbody>
                    {members.map(member => (
                        <tr>
                            <th scope="row"> {member.id} </th>
                            <td>{member.name}</td>
                            <td>{member.surname}</td>
                            <td>{member.phoneNumber}</td>
                            <td>
                                <Link to={`/member/${member.id}`}>
                                    <button class="btn btn-primary">View</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>


            </table>
        </div>
    );
}

export default NameList;