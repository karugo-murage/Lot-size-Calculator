import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Header = ({ toggleTheme, isDarkMode }) => {
    return (  
        <>
        <div className="heading">
            <div className="header">POSITION SIZE CALCULATOR</div>
            <div className="subheaderbox">
                <div className="subheader"> ~with commission intergration~</div>
                <div className="theme-icon" onClick={toggleTheme}>
                    {isDarkMode ? (
                        <i className="fas fa-sun"></i> // Sun icon for light mode
                    ) : (
                        <i className="fas fa-moon"></i> // Moon icon for dark mode
                    )}
                </div>
            </div>  
        </div>
         
        </>
    );
}
 
export default Header;