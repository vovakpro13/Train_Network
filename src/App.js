import s from './App.module.css';
import UsersContainer from "./components/Users/UsersContainer";
import {Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {setTitle, setActivePage} from "./Redux/PageStateReducer";
import Home from "./components/Home/Home";
import MenuContainer from "./components/Menu/MenuContainer";


function App(props) {
    return (
        <div className={s.App}>
            <MenuContainer/>

            <div className={s.appBody}>
                <h2 className={s.title}>{props.title}</h2>
                <Route exact path={'/'}>
                    <Home setActivePage={props.setActivePage} setTitle={props.setTitle}/>
                </Route>
                <Route path={'/users'}>
                    <UsersContainer/>
                </Route>
                <Route exact path={'/profile/:userId'}>
                    <ProfileContainer/>
                </Route>
                <Route exact path={'/profile'}>
                    <ProfileContainer/>
                </Route>
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
