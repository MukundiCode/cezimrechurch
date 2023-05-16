import { Link } from 'react-router-dom';

const OfferingList = ({ offerings }) => {
    console.log(offerings)

    return (
        <div >
            <table class="table table-striped mt-4">
                <thead>
                    <th scope= "col">O-id</th>
                    <th scope= "col">Member</th>
                    <th scope= "col">Amount</th>
                    <th scope= "col">Date</th>
                </thead>
                <tbody>
                {offerings.map(offering => (
                    <tr>
                        <th scope = "row"> {offering.id} </th>
                        <td>{offering.member.name + " " +offering.member.surname }</td>
                        <td>{offering.amount + offering.currency}</td>
                        <td>{offering.date}</td>
                    </tr>
                ))}
                </tbody>


            </table>
        </div>
    );

}
 
export default OfferingList;