import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';

const CardComp = (props) => {
    return(
    <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card h-100 shadow-sm">
            <span class="card-img-top" style={{backgroundImage:"url("+props.bg+")",backgroundSize:"cover",height:"13em",backgroundPosition:"center"}} />
            <div className="card-body">
            <h4 className="card-title">
                <spam>{props.title}</spam>
            </h4>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
            <span className="btn btn-info btn-block">View Product</span>
            </div>
        </div>
    </div>
    )
}

class Product extends Component {
    render(){
        return(
            <div className="container-fluid shadow content">
                <div className="row">
                    <CardComp title={'Product Clothes'} bg={'https://images.pexels.com/photos/704857/pexels-photo-704857.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}/>
                    <CardComp title={'Product Pet'} bg={'https://images.pexels.com/photos/1660967/pexels-photo-1660967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}/>
                    <CardComp title={'Product Soft Cream'} bg={'https://images.pexels.com/photos/1343465/pexels-photo-1343465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}/>
                    <CardComp title={'Product Cake'} bg={'https://images.pexels.com/photos/1342324/pexels-photo-1342324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}/>
                    <CardComp title={'Product Travel'} bg={'https://images.pexels.com/photos/1098518/pexels-photo-1098518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}/>
                    <CardComp title={'Product Life Insurance'} bg={'https://images.pexels.com/photos/1157390/pexels-photo-1157390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}/>
                </div>
            </div>
        )
    }
}

export default Product;