import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import Splash from "./components/Splash";
import Data from "./utils/data";
import Footer from "./components/Footer";
import MenuNav from "./components/MenuNav";
import { useState } from "react";
import ('../src/CSS/App.css');

function App() {
    const [view, setView] = useState("Dinner");

    return (
        <div>
            <NavBar />
            <Splash />
            <MenuNav setView={setView}/>
            <Data view={view}/> 
            <Footer />
        </div>
    )
}

export default App;
