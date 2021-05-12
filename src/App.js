import s from './App.module.css';
import UsersContainer from "./components/Users/UsersContainer";
import {Route, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import HomeContainer from "./components/Home/HomeContainer";
import MenuContainer from "./components/Menu/MenuContainer";
import LoginContainer from "./components/Login/LoginContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import {useEffect} from "react";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import {initializeApp} from "./Redux/PageStateReducer";

const App = ({title, initializeApp, initialized}) => {

    useEffect(() => initializeApp(), []);

    return !initialized
            ? <Preloader/>
            : <div className={s.App}>
                <div>
                    <MenuContainer/>
                    <div className={s.appBody}>
                        <h2 className={s.title}>{title}</h2>
                        <Route exact path={'/'} render={() => <HomeContainer/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route exact path={'/profile/:userId'} render={() => <ProfileContainer/>}/>
                        <Route exact path={'/profile'} render={() => <ProfileContainer/>}/>
                        <Route exact path={'/friends'} render={() => <FriendsContainer/>}/>
                        <Route exact path={'/login'} render={() => <LoginContainer/>}/>
                    </div>
                </div>
            </div>



}
const mapStateToProps = (state) => {
    return {
        title: state.pageState.title,
        initialized: state.pageState.initialized
    }
};

export default compose(
    connect(mapStateToProps, {initializeApp})
)(App);
