import React from 'react';
import {reduxForm, Field} from 'redux-form'
import {connect} from "react-redux";
import {pageSetting} from "../../Redux/PageStateReducer";
import {logIn} from "../../Redux/AuthReducer";





class LoginForm extends React.Component {
    render() {
        const { handleSubmit, submitting, resetForm, submitLogin
        } = this.props;

        console.log(this.props);

        return (
            <form onSubmit={handleSubmit(submitLogin)}>
                <Field placeholder={'email'} name="email" component="input"  />
                <Field placeholder={'password'} name="password" component="input" />
                <Field placeholder={'rememberMe'} name="rememberMe" component="input" type={'checkbox'}/>
                <button type="submit" disabled={submitting}>Log In</button>
                <button type="button" disabled={submitting} onClick={resetForm}>re</button>
            </form>
        );
    }
}

// LoginForm.propTypes = {
//     fields: PropTypes.object.isRequired,
//     handleSubmit: PropTypes.func.isRequired,
//     resetForm: PropTypes.func.isRequired,
//     submitting: PropTypes.bool.isRequired
// };

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);

const LoginContainer = (props) => {
    props.pageSetting('Login', -1);

    const submitLogin =(loginData) =>{
        console.log(loginData)
       props.logIn(loginData);
    };

    return (
        <div>
            <LoginReduxForm submitLogin={submitLogin}/>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps, {pageSetting, logIn})(LoginContainer);