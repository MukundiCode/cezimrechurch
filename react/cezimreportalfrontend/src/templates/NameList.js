import { Link } from 'react-router-dom';

const NameList = ({ names }) => {
    console.log(names)

    return (
        <div className="name-list mt-4">
            <h3 class="p-2 bd-highlight">Total: { names.length } </h3>
            <ul class="list-group">
                {names.map(name => (
                    <li class="list-group-item" key={name.id} >  { name.id + " " + name.name + " " + name.surname} </li>
                ))}
            </ul>
        </div>
    );

}
 
export default NameList;