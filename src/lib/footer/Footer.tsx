import './index.scss'
import BackToTop from "../../components/common/back-to-top/BackToTop.tsx";
import NavLogoFooter from "../../components/common/nav-logo-footer/NavLogoFooter.tsx";

const Footer = () => {
    return (
        <footer className='footer'>
            <BackToTop/>
            <NavLogoFooter/>
            <p>
                @2024 Borsuk Bohdan All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
