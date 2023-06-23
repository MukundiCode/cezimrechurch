const TopPartners = () => {

    const topPartners = [{id: 1 } , {id: 1 }, {id: 1} ,{id: 1}, {id: 1}]

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
                {topPartners.map(partner => (
                    <tr>
                        <th scope = "row"> 1 </th>
                        <td>Name</td>
                        <td>Surname</td>
                        <td>Amount</td>
                    </tr>
                ))}
                </tbody>


            </table>
        </div>
    );

}
 
export default TopPartners;