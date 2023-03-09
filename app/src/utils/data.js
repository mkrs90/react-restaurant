import axios from 'axios';
import { useState, useEffect } from 'react';


function Data() {
  const [foods, setFoods] = useState([{}]);
  
  useEffect(() => {
    async function getFood() {
        await axios.get('https://www.jsonkeeper.com/b/MDXW')
        .then((response)=> {
            setFoods(response.data)
        });
    }
    getFood();
}, []);
console.log([foods])

let foodListAmerican = foods.filter(function (food) {
    return food.cuisine_type === 'American';
}).map(function (food) {
    return <FoodItem key={food.id} food={food} />
})

// let foodListAmerican = foods.map((food) => {
//     return <FoodItem key={food.id} food={food} />
// });


return (
    
    <div className="container">
        <div className="row justify-content-center text-center gap-2">
        <h1>Stuff</h1>
        {foodListAmerican}
        </div>
    </div>
    //     <div className="row">
    //         <div className="card m-2 col-11">
    //             <div className="card-body">
    //                 <h5 className="card-title">{foods[0].title}</h5>
    //                 <p className="card-text">{foods[0].description}</p>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    );
}

const FoodItem = ({ food }) => {
    return (
        <div className='col-5 p-3'>
            <h2>{food.title}</h2>
            <div>{food.category}</div>
            <div>{food.description}</div>
            <div>{food.price}</div>
        </div>
    )
}

export default Data;