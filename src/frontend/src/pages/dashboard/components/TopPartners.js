import useFetch from '../../../hooks/useFetch';

const TopPartners = () => {

    const { error, isPending, data: topPartners } = useFetch('/api/member/getTopFivePartners')

    return (
        <div class="card m-3">
            <div class="card-body" >
            <h5 class="card-title mt-2">Top partners</h5>
                <table class="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Position</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {topPartners && topPartners.map((partner, index) => (
                            <tr>
                                <th scope="row"> {index + 1} </th>
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