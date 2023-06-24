import useFetch from "./useFetch";

const TopPartners = () => {

    const { error, isPending, data: topPartners } = useFetch('http://localhost:3000/api/member/getTopFivePartners')

    return (
        <div >
            <table class="table table-striped mt-4">
                <thead>
                    <th scope= "col">Position</th>
                    <th scope= "col">Name</th>
                    <th scope= "col">Surname</th>
                    <th scope= "col">Amount</th>
                </thead>
                <tbody>
                {topPartners && topPartners.map(partner => (
                    <tr>
                        <th scope = "row"> 1 </th>
                        <td>{ partner.name }</td>
                        <td>{ partner.surname }</td>
                        <td>{ partner.totalPartnership }</td>
                    </tr>
                ))}
                </tbody>


            </table>
        </div>
    );

}
 
export default TopPartners;