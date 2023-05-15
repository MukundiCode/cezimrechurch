import { Link } from 'react-router-dom';

const OfferingList = ({ offerings }) => {
    console.log(offerings)

    return (
        <div className="name-list mt-4">
            <h3 class="p-2 bd-highlight">Total: { offerings.length } </h3>
            <ul class="list-group">
                {offerings.map(offerings => (
                    <li class="list-group-item" key={offerings.id} >  { offerings.member.name + " " + 
                        offerings.amount + 
                        offerings.currency + " " + 
                        offerings.date} </li>
                ))}
            </ul>
        </div>
    );

}
 
export default OfferingList;