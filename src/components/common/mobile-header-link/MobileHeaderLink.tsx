import './index.scss'
import {FC} from "react";
import {IMobileHeaderLink} from "../../../types/components/header/header.ts";



const MobileHeaderLink:FC<IMobileHeaderLink> = ({name, href, key}) => {
    return (
        <a href={href} className='link' key={key}>
            {name}
        </a>
    );
};

export default MobileHeaderLink;
