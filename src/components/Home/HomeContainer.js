import {connect} from "react-redux";
import {pageSetting} from "../../Redux/PageStateReducer";

const HomeContainer = ({pageSetting}) =>{
    pageSetting('Home', -1);
    return <div>HomePage</div>
}

export default connect(() => {}, {pageSetting})(HomeContainer);