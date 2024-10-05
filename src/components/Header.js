import React from "react";

const Header = ({ toggleTheme, isDarkMode }) => {
    return (  
        <>
        <div className="heading">
             <div className="header">POSITION SIZE CALCULATOR</div>
            <div className="subheader">with commission intergration</div>
            <button className="theme-toggle" onClick={toggleTheme}>
                    {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
        </div>
         
        </>
    );
}
 
export default Header;