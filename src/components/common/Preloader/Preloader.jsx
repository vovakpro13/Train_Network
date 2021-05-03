import s from './preloader.module.css';
import loader from '../../../assets/svg/load.svg'
const Preloader =() =>{
    return <div className={s.preloader}><img src={loader} alt={'preloader'}/></div>
};

export default Preloader;