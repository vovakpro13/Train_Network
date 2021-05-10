import s from './formsControls.module.css';
import errorImg from '../../../assets/svg/error.svg';

export const Input = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error && !meta.active;
    const succes = meta.touched && meta.valid;
    return (
        <div className={`${s.inputDiv}`}>

            <input {...props} {...input}
                   className={`${s.inputCommon} ${isError ? s.errorInput : s.inputSimple} ${meta.active && s.shadow} ${succes && s.inputSuccess}`}/>
            {
                isError &&
                <div className={s.error}>
                    <img src={errorImg} alt="error"/>
                    <p>{meta.error}</p>
                </div>
            }
        </div>
    );
}

export const CheckBox = ({input, meta, ...props}) => {
    return (
        <div className={`${s.checkboxDiv}`}>
            <input {...props} {...input} className={s.checkbox}/>
            <div className={`${input.checked && s.checked} ${s.rememberText}`}>remember me</div>
        </div>
    );
}

