import axios from 'axios';
import { useState, useEffect } from 'react';



function Data({ view }) {
    const [foods, setFoods] = useState([{}]);

    useEffect(() => {
        async function getFood() {
            await axios.get('https://www.jsonkeeper.com/b/MDXW')
                .then((response) => {
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
        <div id='main_container' className='container-fluid p-5'>
            <div className="container border border-dark">
                <div className="row justify-content-center text-center gap-2" id='row_container'>
                    <h3 id="restaurantName">MENU</h3>
                    {view === 'Dinner'}
                    <h1 className='mt-3'>{view.toUpperCase()}</h1>
                    {foods.filter((food) => {
                        return food.category === view;
                    }).map(function (food) {
                        return <FoodItem key={food.id} food={food} />
                    }
                    )}
                </div>
            </div>
        </div>
    );
}

export const FoodItem = ({ food }) => {
    let spice = [];
    for (let i = 0; i < food.spicy_level; i++) {
        spice.push(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF8521" className="bi bi-fire" viewBox="0 0 16 16">
            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
        </svg>)
    }

    console.log(spice);
    return (
        <div className='col-5 p-3'>
            <h2>{food.title}</h2>
            <div>{spice}</div>
            <div>{food.description}</div>
            <div>{food.price}</div>
        </div>
    )
}

export default Data;


