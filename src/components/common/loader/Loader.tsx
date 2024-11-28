import {ClipLoader} from "react-spinners";
import './index.scss'
const Loader = () => {
    return (
        <div className='loader'>
            <ClipLoader color="#1A1A1A" loading={true} size={80} />
        </div>
    );
};

export default Loader;
