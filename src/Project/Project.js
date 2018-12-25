import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css'


const ProjectComp = (props) => {
    return(
    <div className="row">
        <div className="col-md-7">
          <span href="#">
            <img className="shadow-sm img-fluid rounded mb-3 mb-md-0" src={props.bg} alt="" />
          </span>
        </div>
        <div className="col-md-5">
          <h3>{props.title}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque eveniet unde.</p>
          <span className="btn btn-primary" href="#">View Project</span>
        </div>
    </div>
    )
} 

class Home extends Component {
    render(){
        return(
            <div className="container bg-white content">
        
              <h2 className="my-4"><b>Project List</b></h2>
              <hr />
              
              <ProjectComp title={"Project One"} bg={'http://cd.lnwfile.com/_/cd/_raw/m1/us/3j.jpg'} />
              <hr />
              <ProjectComp title={"Project Two"} bg={'https://www.lboro.ac.uk/media/wwwlboroacuk/external/content/research/sti/360.jpg'} />
              <hr />
              <ProjectComp title={"Project Three"} bg={'http://media2.govtech.com/images/940*630/Digital_Equity.jpg'} />
              <hr />
              <ProjectComp title={"Project Four"} bg={'http://pamis.org.uk/site/uploads/musicworkshop-image.jpg'} />
              <hr />
              <ProjectComp title={"Project Fifth"} bg={'https://culturalbrilliance.com/wp-content/uploads/2016/11/community-144653342-800x430.jpg'} />
              <hr />
        
              <ul className="pagination justify-content-center">
                <li className="page-item">
                  <span className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </span>
                </li>
                <li className="page-item">
                  <span className="page-link" href="#">1</span>
                </li>
                <li className="page-item">
                  <span className="page-link" href="#">2</span>
                </li>
                <li className="page-item">
                  <span className="page-link" href="#">3</span>
                </li>
                <li className="page-item">
                  <span className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </span>
                </li>
              </ul>

              <hr />
        
            </div>
        )
    }
}

export default Home;