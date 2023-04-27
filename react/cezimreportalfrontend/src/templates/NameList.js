import { Link } from 'react-router-dom';

const NameList = ({ names }) => {
    console.log(names)

    // return (
    //     <div className="name-list">
    //     {names.map(name => (
    //         <div className="blog-preview" key={name.id} >
    //         {/* <Link to={`/blogs/${blog.id}`}>  */}
    //             <h2>{ name.name }</h2>
    //             <p> { name.surname }</p>
    //         {/* </Link> */}
    //         </div>
    //     ))}
    //     </div>
    // );

    return (
        <div className="name-list">
            <h2>{ names.length }  Members</h2>
            <ul class="list-group">
                {names.map(name => (
                    <li class="list-group-item" key={name.id} >  { name.id + " " + name.name + " " + name.surname} </li>
                ))}
            </ul>
        </div>
    );

}
 
export default NameList;