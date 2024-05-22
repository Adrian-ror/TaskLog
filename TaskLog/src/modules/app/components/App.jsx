import Header from './Header';
import Body from './Body';
import {backgroundImageStyle} from "../../../config/index.js";


function App() {
    return (
        <div style={{...backgroundImageStyle}} className={"w-full h-full"}>
            <Header/>
            <Body/>
        </div>
    )
}

export default App
