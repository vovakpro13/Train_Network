import React from 'react';
import {reduxForm, Field} from 'redux-form'
import {connect} from "react-redux";
import {pageSetting} from "../../Redux/PageStateReducer";
import {logIn} from "../../Redux/AuthReducer";
import {CheckBox, Input} from "../common/FormsControls/FormsControls";
import s from './login.module.css';
import {email, minLength, required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import {compose} from "redux";

class LoginForm extends React.PureComponent{
    render() {
        const { handleSubmit, submitting, reset, pristine,error} = this.props;
        return (
            <form onSubmit={handleSubmit}>
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

const LoginReduxForm = compose(
    reduxForm({form: 'login'})
)(LoginForm);

const LoginContainer = ({pageSetting, logIn, isLogin}) => {
    pageSetting('Login', -1);

    const submitLogin = loginData => {
         logIn(loginData);
    }

    return isLogin ? <Redirect to={'/profile'}/>
        :<div className={s.login}>
            <LoginReduxForm onSubmit={submitLogin}/>
        </div>

};

const mapStateToProps = (state) => {
    return {
        isLogin: state.authData.isLogin
    }
}
export default connect(mapStateToProps, {pageSetting, logIn})(LoginContainer);