import useFetch from "./useFetch";

const TopPartners = () => {

    const { error, isPending, data: topPartners } = useFetch('http://localhost:3000/api/member/getTopFivePartners')

    return (
        <div class="card m-3">
            <div class="card-body" >
            <span class="d-block h6 font-weight-normal">
                            Top Partners
                        </span>
                <table class="table table-striped mt-4">
                    <thead>
                        <th scope="col">Position</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Amount</th>
                    </thead>
                    <tbody>
                        {topPartners && topPartners.map((partner, index) => (
                            <tr>
                                <th scope="row"> {index+1} </th>
                                <td>{partner.name}</td>
                                <td>{partner.surname}</td>
                                <td>{partner.totalPartnership}</td>
                            </tr>
                        ))}
                    </tbody>


                </table>
            </div>
        </div>
    );

}

export default TopPartners;