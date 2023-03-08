import axios from 'axios';
import { useState, useEffect } from 'react';


function Data() {
  const [food, setFood] = useState([{}]);
  
  useEffect(() => {
    async function getFood() {
        await axios.get('https://www.jsonkeeper.com/b/MDXW')
        .then((response)=> {
            setFood(response.data)
        });
    }
    getFood();
}, []);
console.log(food);

return (
    
    <div className="container">
        <h1>{`${food[0].category}`}</h1>
        <div className="row">
            <div className="card m-2 col-11">
                <div className="card-body">
                    <h5 className="card-title">{`${food[0].title}`}</h5>
                    <p className="card-text">{`${food[0].description}`}</p>
                </div>
            </div>
        </div>
    </div>
    )


}

export default Data;