function MenuNav(props) {
    return (
        <div className="navigation border border-dark" id="menu">
            <nav className="navbar navbar-expand">
                <div className="container justify-content-center text-center" id="button_container">    
                    <button onClick={() => props.setView("Breakfast")} className="col-2 mx-1 btn btn-default btn-lg">Breakfast</button>
                    <button onClick={() => props.setView("Lunch")} className="col-2 mx-1 btn btn-default btn-lg">Lunch</button>
                    <button onClick={() => props.setView("Appetizer")} className="col-2 mx-1 btn btn-default btn-lg">Appetizers</button>
                    <button onClick={() => props.setView("Dinner")} className="col-2 mx-1 btn btn-default btn-lg">Dinner</button>
                    <button onClick={() => props.setView("Drink")} className="col-2 mx-1 btn btn-default btn-lg">Drinks</button>   
                </div>
            </nav>                
        </div>
    )
}

export default MenuNav;