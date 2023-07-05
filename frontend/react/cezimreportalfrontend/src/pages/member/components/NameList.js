import { Link } from 'react-router-dom';

const NameList = ({ names: members }) => {

    return (
        <div >
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member, index) => (
                        <tr>
                            <th scope="row"> {index + 1} </th>
                            <td>{member.name}</td>
                            <td>{member.surname}</td>
                            <td>{member.address}</td>
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