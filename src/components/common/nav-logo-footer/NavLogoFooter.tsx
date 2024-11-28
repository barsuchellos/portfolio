import {logo} from './data.ts'
import './index.scss'

const NavLogoFooter = () => {
    return (
        <nav className='logo-container'>
            {logo.map(el =>
                <a href={`${el[1]}`} target='_blank'>
                    <img src={`${el[0]}`} alt="logo"/>
                </a>)}
        </nav>
    );
};

export default NavLogoFooter;
