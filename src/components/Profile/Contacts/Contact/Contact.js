import s from './contact.module.css';

const Contact = ({img, link}) =>{
    return (
        <div className={s.contact}>
            <a target={'_blank'} href={link}><img src={img} alt="icon"/></a>
        </div>
    )
};

export default Contact;