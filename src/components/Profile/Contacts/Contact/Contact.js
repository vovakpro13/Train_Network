import s from './contact.module.css';

const Contact = ({img, link}) =>{
    console.log(img)
    return (
        <div className={s.contact}>
            <a target={'_blank'} href={link}><img src={img} alt="icon"/></a>
        </div>
    )
};

export default Contact;