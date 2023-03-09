import axios from 'axios';
import { useState, useEffect } from 'react';



function Data({view}) {
  const [foods, setFoods] = useState([{}]);
  
  useEffect(() => {
    async function getFood() {
        await axios.get('https://www.jsonkeeper.com/b/MDXW')
        .then((response)=> {
            const foodListAmerican = response.data.filter(function (food) {
                return food.cuisine_type === 'American' || food.cuisine_type === 'Mexican';
            })
            setFoods(foodListAmerican);
        });
    }
    getFood();
}, []);
console.log(foods)

return (
    
    <div className="container border border-dark p-5">
        <div className="row justify-content-center text-center gap-2">
            { view === 'Dinner' ? <h1>It's dinnertime!</h1> : <h1>It's not time for dinner!</h1> }
            <h1 className='mt-3'>{view.toUpperCase()}</h1>
            {foods.filter((food) => {
                return food.category === view;
            }).map(function (food) {
                return <FoodItem key={food.id} food={food} />
            }, []
            )}

            {/* <h1 className='mt-3'>BREAKFAST</h1>
            {foods.filter((breakfast) => {
                return breakfast.category === 'Breakfast';
            }).map(function (breakfast) {
                return <FoodItem key={breakfast.id} food={breakfast} />
            }, []
            )}

            <h1 className='mt-3'>LUNCH</h1>
            {foods.filter((lunch) => {
                return lunch.category === 'Lunch';
            }).map(function (lunch) {
                return <FoodItem key={lunch.id} food={lunch} />
            }, []
            )}

            <h1 className='mt-3'>DINNER</h1>
            {foods.filter((dinner) => {
                return dinner.category === 'Dinner';
            }).map(function (dinner) {
                return <FoodItem key={dinner.id} food={dinner} />
            }, []
            )}

            <h1 className='mt-3'>DRINKS</h1>
            {foods.filter((drink) => {
                return drink.category === 'Drink';
            }).map(function (drink) {
                return <FoodItem key={drink.id} food={drink} />
            }, []
            )} */}

            </div>
        </div>
    );
}

export const FoodItem = ({ food }) => {



    return (
        <div className='col-5 p-3'>
            <h2>{food.title}</h2>
            <div>Spice Level: {}</div>
            <div>{food.description}</div>
            <div>{food.price}</div>
        </div>
    )
}

export default Data;


{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
</svg> */}