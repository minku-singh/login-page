import React from "react";
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
            <div className = "footer">
                <a href = "#" className = "footer-link">Conditions of Use & Sale</a>
                <a href = "#" className = "footer-link">© 2021 Buyooo...</a>
                <a href = "#" className = "footer-link">Interest Based Ads</a>
                <a href = "#" className = "footer-link">Privacy Note</a>
            </div>
        );
    }
}

export default Footer;