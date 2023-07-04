import { Link } from 'react-router-dom';

const OfferingList = ({ offerings }) => {

    return (
        <div >
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">O-id</th> 
                        <th scope= "col">Category</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {offerings.map(offering => (
                        <tr>
                            <th scope="row"> {offering.id} </th>
                            <td>{offering.offeringType }</td>
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