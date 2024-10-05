import React, { useState } from "react";
import Header from "./Header"; // Adjust the path as needed
import Instruction from "./instruction"; // Adjust the path as needed
import Main from "./Main"; // Adjust the path as needed
import Footer from "./Footer"; // Adjust the path as needed
import "../assets/style.css"


const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
        document.body.setAttribute('data-theme', darkMode ? 'light' : 'dark');
    };

    return (
        <div>
            <Header toggleTheme={toggleDarkMode} isDarkMode={darkMode} />
            <Instruction />
            <Main />
            <Footer />
        </div>
    );
};

export default App;