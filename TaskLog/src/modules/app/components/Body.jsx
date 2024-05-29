import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import {AuthenticationForm, RegisterForm} from "../../users/index.js";

const Body = () => {

    return (

        <div className="container mx-auto">
            <br/>
            <Routes>
                <Route path="/*" element={<AuthenticationForm/>}/>
                <Route path="/register" element={<RegisterForm/>}/>
                <Route path="/Home" element={<Home/>}/>
            </Routes>
        </div>
    );

};

export default Body;
