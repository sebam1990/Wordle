// Import dependencies

    import React from "react";
    import ReactDOM from "react-dom/client";
    import { Routes, Route, BrowserRouter } from "react-router-dom";

// Import styles

    import "./index.module.scss"

// Import contexts

    import ConfigProvider from "./context/ConfigProvider.jsx"
    import PlayProvider from "./context/PlayProvider.jsx"

// Import components

    import Index from './Index.jsx'
    import Error from "./routes/Error/Error.jsx";
    import Home from "./routes/Home/Home.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(

    <BrowserRouter>
    
        <ConfigProvider>

            <PlayProvider>

                <Routes>

                    <Route path="/" element={<Index />}></Route>

                    <Route path="/play" element={<Home />}></Route>

                    <Route path="/error" element={<Error />}></Route>

                </Routes>

            </PlayProvider>

        </ConfigProvider>

    </BrowserRouter>

)