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
            <button className="btn btn-outline-light"><b>Careers</b></button>
        </div>
        </nav>
        </React.Fragment>
    )
}

const MenuLG = () => {
    return(
        <React.Fragment>
            <nav className="shadow navbar navbar-secondary bg-secondary d-flex justify-content-between">
            <span>
                <button className="btn btn-secondary">Menu</button>
            </span>
                <button className="btn btn-outline-light">Careers</button>
            </nav>
        </React.Fragment>
    )
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
                    <MenuLG />
                </span>
            </React.Fragment>
        )
    }
}

export default MenuBar;