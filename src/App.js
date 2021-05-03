import s from './App.module.css';
import UsersContainer from "./components/Users/UsersContainer";
import {Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Menu from "./components/Menu/Menu";
import {connect} from "react-redux";
import {setTitle, setActivePage} from "./Redux/PageStateReducer";
import Home from "./components/Home/Home";


function App(props) {
    return (
        <div className={s.App}>
            <Menu projectName={props.PROJECT_NAME} links={props.links} activePage={props.activePage} />
            <div className={s.appBody}>
                <h2 className={s.title}>{props.title}</h2>
                <Route exact path={'/'}>
                    <Home setActivePage={props.setActivePage} setTitle={props.setTitle}/>
                </Route>
                <Route path={'/users'}>
                    <UsersContainer/>
                </Route>
                <Route path={'/profile'}>
                    <ProfileContainer/>
                </Route>
            </div>


        </div>
    );
}
const mapStateToProps = (state) =>{
  return {
      links: state.pageState.links,
      title: state.pageState.title,
      activePage: state.pageState.activePage,
      PROJECT_NAME: state.pageState.PROJECT_NAME
  }
};

export default connect(mapStateToProps,{setActivePage,setTitle})(App);
