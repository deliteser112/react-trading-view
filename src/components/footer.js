import React from "react";
import {FaTelegram, FaTwitter, FaMedium, FaDiscord, FaRedditAlien} from "react-icons/fa"

function Footer() {
    return (
        <div className="footer">
            <p className="central-link">LVRJ is a product developed by Trading view.</p>
            <div className="social-link">
                <FaTelegram className="social-icon" />
                <FaTwitter className="social-icon"  />
                <FaMedium className="social-icon"  />
                <FaDiscord className="social-icon"  />
                <FaRedditAlien className="social-icon"  />
            </div>
        </div>
    );
}

export default Footer;
