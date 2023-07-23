import React from "react";
import ReactDOM from "react-dom/client";
/*import "./index.css";*/
/*import "./index.module.css"*/
import "./index.module.scss"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserProvider";

import Index from './Index.jsx'
import Error from "./routes/Error/Error.jsx";
import Home from "./routes/Home/Home.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
    
        <UserProvider>

            <Routes>

                <Route path="/" element={<Index />}></Route>

                <Route path="/play" element={<Home />}></Route>

                <Route path="/error" element={<Error />}></Route>

            </Routes>
    
        </UserProvider>

    </BrowserRouter>

)