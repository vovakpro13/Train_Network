import s from './App.module.css';
import UsersContainer from "./components/Users/UsersContainer";
import {Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {setTitle, setActivePage} from "./Redux/PageStateReducer";
import HomeContainer from "./components/Home/HomeContainer";
import MenuContainer from "./components/Menu/MenuContainer";
import LoginContainer from "./components/Login/LoginContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";


function App(props) {
    return (
        <div className={s.App}>
            <MenuContainer/>

            <div className={s.appBody}>
                <h2 className={s.title}>{props.title}</h2>
                <Route exact path={'/'} render={() => <HomeContainer/>}/>
                <Route path={'/users'} render={() => <UsersContainer/>} />
                <Route exact path={'/profile/:userId'} render={() => <ProfileContainer/>} />
                <Route exact path={'/profile'} render={() => <ProfileContainer/>}/>
                <Route exact path={'/friends'} render={() => <FriendsContainer/>}/>
                <Route exact path={'/login'} render={() => <LoginContainer/>}/>
            </div>


        </div>
    );
}
const mapStateToProps = (state) =>{
  return {
      title: state.pageState.title,
  }
};

export default connect(mapStateToProps,{setTitle, setActivePage})(App);
