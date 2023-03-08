import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import Splash from "./components/Splash";
import AppetizerMenu from "./components/AppetizerMenu";
import Data from "./utils/data";
import ('../src/CSS/App.css');




function App() {
    return (
        <div>
            <NavBar />
            <Splash />
            <AppetizerMenu />
            <h1>Hello?</h1>
            <Data /> 
        </div>
    )
}

export default App;
