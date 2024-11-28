import './index.scss'

const PortfolioItemButton = ({href, name}) => {
    return (
        <a href={href} target='_blank'>
            <button className='portfolio-button'>
                {name}
            </button>
        </a>


    );
};

export default PortfolioItemButton;
