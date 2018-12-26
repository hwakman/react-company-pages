import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

class CardState extends Component {
    constructor(){
        super();
        this.pathRedirect = this.pathRedirect.bind(this);
    }
    pathRedirect = path => {
        window.location.href = path;
    }
    render(){
        const props = this.props;
        return(
            <div className="col-md-3 col-sm-6 mb-4">
                <span>
                <div class="card h-100">
                    <span class="card-img-top btn" onClick={this.pathRedirect.bind(this,props.path)} style={{backgroundImage:"url("+props.bg+")",backgroundSize:"cover",backgroundPosition:"center",height:"13em"}} />
                    <div class="card-body">
                    <h4 class="card-title">
                        <span>{props.title}</span>
                    </h4>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                    </div>
                </div>
                </span>
            </div>
        )
    }
}

class About extends Component {
    render(){
        return(
            <div className="container-fluid content">
                <div className="row">
                    <div className="col-12 header">
                        <div className="overlay"></div>
                        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" width="100%">
                            <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4" />
                        </video>
                        <div className="container h-100">
                            <div className="d-flex h-100 text-center align-items-center">
                            <div className="w-100 text-white">
                                <h1 className="display-3">Company Page</h1>
                                <h2>" make everything more than easier "</h2>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light shadow" style={{marginTop:"1em",padding:"1em",borderRadius:".25em"}}>
                    <h2><b>Content</b></h2>
                    <div className="row">
                            <CardState title={'Project List'} bg={'http://cd.lnwfile.com/_/cd/_raw/m1/us/3j.jpg'} path={'/Project'}/>
                            <CardState title={'Product List'} bg={'https://www.incimages.com/uploaded_files/image/970x450/products_364475.jpg'} path={'/Product'}/>
                            <CardState title={'About Company'} bg={'https://www.volarisgroup.com/img/blog/entrepreneurial_culture.jpeg'} path={'/About'}/>
                            <CardState title={'Join Our Team'} bg={'https://d2crzwvp1lfnyx.cloudfront.net/uploads/2018/01/08234433/Join-Our-Team.jpg'} path={'/Careers'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;