import s from "./about.module.css";
import info from "../../../assets/svg/information.svg";


const About =({about}) =>{
    return about ?
        <div className={s.about}>
            <div className={s.aboutTitle}>
                <img src={info} alt="info"/>
                <div>
                    <h5>About me:</h5> {about}
                </div>

            </div>


        </div>
        : <span className={s.noAbout}>no about</span>
    ;
};

export default About;