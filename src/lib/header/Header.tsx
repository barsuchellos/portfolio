import './index.scss'
import logo from '../../assets/images/header/logo.svg'
import navOpen from '../../assets/images/header/open.svg'
import navclose from '../../assets/images/header/close.svg'
import {useContext, useEffect, useState} from "react";
import MobileHeaderLink from "../../components/common/mobile-header-link/MobileHeaderLink.tsx";
import LanguageSwitcher from "../../components/common/language-switcher/LanguageSwitcher.tsx";
import {LanguageContext} from "../../context/context.ts";
const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const {language, isLang} = useContext(LanguageContext)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <header className='header '>
            <nav className='header__nav'>
                <a href="/" style={{height:50}} onClick={event => event.preventDefault()}>
                    <img src={`${logo}`} alt='logo-image' className='header__logo'/>
                </a>
                <button
                    className='header__nav-open-close-container'
                    style={{height:50, width:50, display:'flex', justifyContent:'center'}}
                    onClick={()=> setIsOpen(prevState => !prevState)} >
                <img
                    src={isOpen ? `${navclose}`  : `${navOpen}`}
                    alt='logo-image'
                    className={'header__nav-open'}
                />
                </button>
            </nav>

            <nav id='mobile-nav' className={`header__mobile-nav ${windowWidth < 768 ? (isOpen ? 'header__mobile-nav-open' : 'header__mobile-nav-close') : 'header__desktop-nav'}`}>
                {
                    Object.entries(language[isLang].header.nav as Record<string, string>).map(([key,value]) => <MobileHeaderLink key={value} name={value} href={`#${key}`}/>)
                }
            </nav>
            <LanguageSwitcher/>
        </header>
    );
};

export default Header;
