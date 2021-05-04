import s from './contacts.module.css';
import github from '../../../assets/svg/github.svg';
import instagram from '../../../assets/svg/instagram.svg';
import youtube from '../../../assets/svg/youtube.svg';
import twitter from '../../../assets/svg/twitter.svg';
import vk from '../../../assets/svg/vk.svg';
import facebook from '../../../assets/svg/facebook.svg';
import mainLink from '../../../assets/svg/link.svg';
import website from '../../../assets/svg/website.svg';
import Contact from "./Contact/Contact";

const Contacts = ({contacts}) => {

    const icons = {github, instagram, youtube, twitter, vk, facebook, mainLink, website};
    let contactsKeys = Object.keys(contacts);
    const contactsIcons = contactsKeys.reduce((acc, k) => {
        if (contacts[k]) {
            acc.push(<Contact key={k} img={icons[k]}
                              link={contacts[k].startsWith('https://') ? contacts[k] : `https://${contacts[k]}`}/>);
        }
        return acc;
    }, []);

    return contactsIcons.length ? <div className={s.contacts}>{contactsIcons} </div> : <p className={s.noContacts}>no contacts</p>;
};

export default Contacts;