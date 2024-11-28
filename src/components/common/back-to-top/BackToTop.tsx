import toTopImage from '../../../assets/images/footer/to_top.svg'
import './index.scss'

const BackToTop = () => {

    const onTop = ():void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <button className='back-to-top' onClick={() => onTop()}>
            <img className='back-to-top__image' src={`${toTopImage}`} alt="to-top-image"/>
            <h3 className='back-to-top__title'>BACK TO TOP</h3>
        </button>
    );
};

export default BackToTop;
