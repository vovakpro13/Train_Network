import s from './preloader.module.css';
import preloader from '../../../assets/svg/load.svg';
import preloaderWhite from '../../../assets/svg/loadWhite.svg';

const Preloader =({type}) =>{
    debugger
    switch (type){
        case 'button':
            return <div className={s.button}><img src={preloader} alt={'preloader'}/></div>;
        case 'login':
            return <div className={s.login}><img src={preloaderWhite} alt={'preloader'}/></div>;
        default:
            return <div className={s.preloader}><img src={preloader} alt={'preloader'}/></div>;
    }

};

export default Preloader;