import React from 'react';
import './Header.css';
import { FaBars } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

class Header extends React.Component {
    render() {
        return(
            
            <div className = "header">

                <div className = "header-line-one">
                    {/*Should be an individual component */}
                    <div className = "header-hamburger header-element-margin">
                        <FaBars className = "header-icon-size"/>
                    </div>

                    <div className = "header-logo header-element-margin">
                        <h1 className = "header-logo">BUYOOO...</h1>
                    </div>

                    <div className = "header-address header-element-margin">
                        <FaMapMarkerAlt className = "header-icon-size" />
                    </div>

                    <div className = "header-search-bar header-element-margin">
                        <label for = "search-bar" id = "search-bar">
                            <input type = "text" name = "search-bar" className = "search-bar-input header-icon-size"></input>
                        </label>

                        <button type = "submit" className = "header-search-button"><FaSearch className = "header-icon-size header-search-icon" /></button>
                    </div>

                    <div className = "header-user-account header-element-margin">
                        <FaUserAlt className = "header-icon-size" />
                    </div>

                    {/*Should be an individual component */}
                    <div className = "header-cart header-element-margin">
                        <FaShoppingCart className = "header-icon-size" />
                    </div>
                </div>

                <div className = "header-line-two">
                    <div className = "header-best-sellers"></div>

                    <div className = "header-new-releases"></div>

                    <div className = "header-customer-service"></div>
                </div>
            </div>

        );
    }
}

export default Header;