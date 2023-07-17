import { useHistory, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import PartnershipList from "../partnership/components/PartnershipList";

const Member = () => {

    const { id } = useParams();
    const { error, isPending, data: member } = useFetch('/api/member/' + id, 'GET')

    return (
        <div className="home">
            <div class="mt-2">
                <h1>
                    Member
                </h1>
            </div>

            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {member &&
                <div>
                    <div class="text-sm-left">
                        <p>Name: {member.name}</p>
                        <p>Surname: {member.surname}</p>
                        <p>Email: {member.email}</p>
                        <p>Address: {member.address}</p>
                    </div>
                    <PartnershipList offerings={member.offerings} />
                </div>
            }
        </div>
    );
}

export default Member;