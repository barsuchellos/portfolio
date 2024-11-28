import './index.scss'
import PortfolioItemButton from "../portfolio-item-button/PortfolioItemButton.tsx";
import {FC} from "react";
import {IProjects} from "../../../types/components/main/main.ts";
const PortfolioItem:FC<IProjects> = ({key, name,description, liveDemo, gitHub, background}) => {
    return (
        <div key={key}  className='portfolio-item' style={{backgroundImage: `url(${background})`}}>
                <h3 className='portfolio-item__title'>{name}</h3>
                <div className='portfolio-item__description'>
                    <p className='portfolio-item__description-text'>{description}</p>
                    <div className='portfolio-item__description-buttons-container'>
                        <PortfolioItemButton href={liveDemo} name="Demo"></PortfolioItemButton>
                        <PortfolioItemButton href={gitHub} name="GitHub"></PortfolioItemButton>
                    </div>
                </div>
        </div>

    );
};

export default PortfolioItem;
