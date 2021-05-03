import s from './App.module.css';
import UsersContainer from "./components/Users/UsersContainer";
import {Link,Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";


function App() {
    return (
        <div className={s.App}>
            <div className={s.menu}>
                <Link to={'/users'}>Users</Link>
                <Link to={'/profile'}>Profile</Link>
            </div>

            <div className={s.appBody}>
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

export default App;
