import React from 'react';
import {reduxForm, Field} from 'redux-form'
import {connect} from "react-redux";
import {pageSetting} from "../../Redux/PageStateReducer";
import {logIn} from "../../Redux/AuthReducer";
import {CheckBox, Input} from "../common/FormsControls/FormsControls";
import s from './login.module.css';
import {email, minLength, required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

class LoginForm extends React.Component {
    render() {
        const { handleSubmit, submitting, reset, submitLogin, pristine} = this.props;
        return (
            <form onSubmit={handleSubmit(submitLogin)}>
                <Field placeholder={'E-mail'} name="email"  component={Input} validate={[required, email]}  />
                <Field placeholder={'Password'} name="password" component={Input} validate={[required, minLength(6)]} type={'password'}/>
                <Field name="rememberMe" component={CheckBox} type={'checkbox'}/>
                <div className={s.btns}>
                    <button type="submit" disabled={pristine || submitting} className={s.btnLogin}>Log In</button>
                    <button type="button" disabled={pristine || submitting} className={s.btnReset} onClick={reset}>Reset</button>
                </div>
            </form>
        );
    }
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const LoginContainer = ({pageSetting, logIn}) => {
    pageSetting('Login', -1);

    const submitLogin = loginData => {
         logIn(loginData) && <Redirect to={'/profile'}/>
    }


    return (
        <div className={s.login}>
            <LoginReduxForm submitLogin={submitLogin}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps, {pageSetting, logIn})(LoginContainer);