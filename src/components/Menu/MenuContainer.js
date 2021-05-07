import {connect} from 'react-redux';
import React from 'react';
import Menu from './Menu';
import {setActivePage} from '../../Redux/PageStateReducer';
import {compose} from "redux";

class MenuContainer extends React.Component{
    render() {
        return <Menu {...this.props}/>
    }
}

const mapStateToProps = (state) =>{
    return {
        links: state.pageState.links,
        activePage: state.pageState.activePage,
        projectName: state.pageState.PROJECT_NAME,
        isLogin: state.authData.isLogin
    };
};

export default compose(
    connect(mapStateToProps, {setActivePage})
)(MenuContainer);