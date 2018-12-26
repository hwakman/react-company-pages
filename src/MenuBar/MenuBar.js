import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuSM = (props) => {
    return(
        <React.Fragment>
        <nav className="shadow navbar navbar-secondary bg-secondary d-flex justify-content-between">
        <div className="container-fluid">
        <span>
            <button onClick={props.redirectPath.bind(this,'/Home')} className="btn btn-secondary"><b>Home</b></button>
            <button onClick={props.redirectPath.bind(this,'/Project')} className="btn btn-secondary"><b>Project</b></button>
            <button onClick={props.redirectPath.bind(this,'/Product')} className="btn btn-secondary"><b>Product</b></button>
            <button onClick={props.redirectPath.bind(this,'/About')} className="btn btn-secondary"><b>About</b></button>
        </span>
            <button onClick={props.redirectPath.bind(this,'/Careers')} className="btn btn-outline-light"><b>Careers</b></button>
        </div>
        </nav>
        </React.Fragment>
    )
}

class MenuLG extends Component {
    state = {
        openMenu : false
    }
    setOpenMenu = () =>{
        this.setState({
            openMenu:!this.state.openMenu
        });
    }
    render(){
        const props = this.props;
        return(
            <React.Fragment>
                <nav className="shadow navbar navbar-secondary bg-secondary d-flex justify-content-between">
                <span>
                    <button onClick={this.setOpenMenu} className="btn btn-secondary">Menu</button>
                </span>
                </nav>
                <nav className="col-sm bg-dark pt-2" style={this.state.openMenu ? {display:"block"}:{display:"none"}}>
                    <button onClick={props.redirectPath.bind(this,'/Home')} className="btn btn-dark btn-block"><b>Home</b></button>
                    <button onClick={props.redirectPath.bind(this,'/Project')} className="btn btn-dark btn-block"><b>Project</b></button>
                    <button onClick={props.redirectPath.bind(this,'/Product')} className="btn btn-dark btn-block"><b>Product</b></button>
                    <button onClick={props.redirectPath.bind(this,'/About')} className="btn btn-dark btn-block"><b>About</b></button>
                    <button onClick={props.redirectPath.bind(this,'/Careers')} className="btn btn-dark btn-block"><b>Careers</b></button>
                </nav>
            </React.Fragment>
        )
    }
}

class MenuBar extends Component {
    constructor(){
        super();
        this.redirectPath = this.redirectPath.bind(this);
    }
    redirectPath = e => {
        window.location.href = e;
    }
    render(){
        return(
            <React.Fragment>
                <span className="d-none d-lg-block">
                    <MenuSM redirectPath={this.redirectPath} />
                </span>
                <span className="d-block d-lg-none">
                    <MenuLG redirectPath={this.redirectPath} />
                </span>
            </React.Fragment>
        )
    }
}

export default MenuBar;