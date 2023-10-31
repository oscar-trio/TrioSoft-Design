import Link from "next/link";
import './Footer.css';

const Footer = () => {
    return (
     <footer className="footer">
         <div className="footer-bottom">
                <div className="container">
                    <p className="copyright">
                        &copy; asdf
                    </p>
                    <img
                        src="./assets/images/footer-bottom-img.png"
                        width="340"
                        height="21"
                        loading="lazy"
                        alt=""
                        className="footer-bottom-img"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;