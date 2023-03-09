function MenuNav(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand">
                <div className="container justify-content-center text-center">    
                    <button onClick={() => props.setView("Breakfast")} className="col-2 mx-1">Breakfast</button>
                    <button onClick={() => props.setView("Lunch")} className="col-2 mx-1">Lunch</button>
                    <button onClick={() => props.setView("Appetizer")} className="col-2 mx-1">Appetizers</button>
                    <button onClick={() => props.setView("Dinner")} className="col-2 mx-1">Dinner</button>
                    <button onClick={() => props.setView("Drink")} className="col-2 mx-1">Drinks</button>   
                </div>
            </nav>                
        </div>
    )
}

export default MenuNav;