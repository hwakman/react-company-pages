import React,{ Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Careers.css';
import MapGoogle from '../map/map.png';

class CareersCard extends Component {
    render(){
        const props = this.props;
        return(
            <span className="col-lg-4 col-sm-12 mb-3 h-100">
                <div className="card shadow-sm">
                    <span className="card-img-top btn"
                    style={{backgroundImage:"url("+props.imgUrl+")",backgroundSize:"cover",backgroundPosition:"center",height:"13em"}} />
                    <div className="card-body">
                        <h4 className="card-title">
                            <span>{props.title}</span>
                        </h4>
                        <small className="card-text">{props.content}</small>
                    </div>
                </div>
            </span>
        )
    }
}

class Careers extends Component {
    constructor(){
        super()
        this.state = {
            CareersRole: {
                SoftEng: {
                    title : 'Software Engineer',
                    description : 'Determines operational feasibility by evaluating analysis, problem definition, requirements, solution development, and proposed solutions. Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code.',
                    imgUrl : 'https://images.idgesg.net/images/article/2017/08/4_software-engineering-100733150-large.jpg'
                },
                FE : {
                    title : 'Front End Developer',
                    description : 'A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. They are usually supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developers do.',
                    imgUrl : 'https://cdn-images-1.medium.com/max/1000/1*ZeixM2OCyy_xUEKMnSp_bQ.png'
                },
                BE : {
                    title : 'Back End Developer',
                    description: 'Their back end code adds utility to everything the front-end developer creates. These developers are responsible for creating, maintaining, testing, and debugging the entire back end. This includes the core application logic, databases, data and application integration, API and other back end processes.',
                    imgUrl: 'https://res.cloudinary.com/teamtailor/image/upload/ar_3:2,c_lfill,dpr_2,f_auto,g_faces:center,q_80,w_600/v1513948591/dhmjzdizdhecskyqyp1b.jpg'
                },
                SA: {
                    title : 'System Analyst',
                    description : 'Defines application problem by conferring with clients; evaluating procedures and processes. Develops solution by preparing and evaluating alternative workflow solutions. Controls solution coordinating production with programmers.',
                    imgUrl : 'https://jobdescriptionshub.com/wp-content/uploads/2017/02/system-analyst.jpg'
                },
                PM: {
                    title : 'Project Manager',
                    description : 'Project manager is a person who has the overall responsibility for the successful initiation, planning, design, execution, monitoring, controlling and closure of a project. ... Most of the issues that impact a project result in one way or another from risk.',
                    imgUrl : 'https://d3tvpxjako9ywy.cloudfront.net/blog/content/uploads/2017/06/blogpost_image_program-manager-vs-project-manager-906x518.jpg?av=1394543a64bcc9f3e821b9d870fbbacb'
                },
                QA: {
                    title : 'Quality Assurance',
                    description : 'The exact duties of a quality assurance manager vary from industry to industry. However, typical responsibilities of the job include: determining, negotiating and agreeing on in-house quality procedures, standards and specifications.',
                    imgUrl : 'https://itsg-global.com/wp-content/uploads/2018/01/End-to-End-Testing-for-Quality-Assurance.jpg'
                }
            },
            Modal : {
                isOpen : false,
                title : 'tets',
                description : 'test'
            },
            jobSelect : [
                'Software Engineer',
                'Front End Developer',
                'Back End Developer',
                'System Analyst',
                'Project Manager',
                'Quality Assurance'
            ]
        }
    }
    render(){
        const SoftEng = this.state.CareersRole.SoftEng;
        const FE = this.state.CareersRole.FE;
        const BE = this.state.CareersRole.BE;
        const SA = this.state.CareersRole.SA;
        const PM = this.state.CareersRole.PM;
        const QA = this.state.CareersRole.QA;
        const bgStyle = {
            backgroundImage:"url(https://www.penit.co.za/wp-content/uploads/2018/10/Company-Profile-16.jpg)",
            backgroundSize:"cover",
            backgroundPosition:"center",
            minHeight:"20em",
            maxWidth:"100vw",
            marginBottom:"2em",
            textAlign: "center",
            padding: "2em",
            boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.80)'
        }
        return(
            <div className="content-careers">
                <div className="row justify-content-center text-white" style={bgStyle}>
                    <span className="col-lg-10">
                        <h3>Careers</h3>
                        <h5>Next to your logo and company stationary,<br/> your company profile design is vitally important.<br />
                        This document needs to put it's best foot forward in representing your brand<br /> as it serves two purposes.<br /> 
                        1. This document introduces your company and services/products to potential clients and <br />
                        2. It serves as a reference for employees on company and product knowledge.</h5>
                    </span>
                </div>

                <div className="container">
                    <div className="row">
                        <CareersCard title={SoftEng.title} content={SoftEng.description} imgUrl={SoftEng.imgUrl} />
                        <CareersCard title={FE.title} content={FE.description} imgUrl={FE.imgUrl}/>
                        <CareersCard title={BE.title} content={BE.description} imgUrl={BE.imgUrl}/>
                        <CareersCard title={SA.title} content={SA.description} imgUrl={SA.imgUrl}/>
                        <CareersCard title={PM.title} content={PM.description} imgUrl={PM.imgUrl}/>
                        <CareersCard title={QA.title} content={QA.description} imgUrl={QA.imgUrl}/>
                    </div>
                </div>

                <div className="pt-3 pb-3 mt-2" style={bgStyle}>
                    <div className="container">
                        <div className="row text-left text-light mb-5">
                            <span className="col-lg-6 col-sm-12 mb-3">
                                <h3>Appy Job</h3>
                                <select className="form-control custom-select mb-3">
                                    {this.state.jobSelect.map((data,key) =>
                                        <option key={key}>{key+1}. {data}</option>
                                    )}
                                </select>
                                <div className="form-inline">
                                    <input className="form-control mb-3 col-sm mx-1" type="text" placeholder="First name..." />
                                    <input className="form-control mb-3 col-sm mx-1" type="text" placeholder="Last name..." />
                                </div>
                                <input className="form-control mb-3" type="email" placeholder="E-mail..." />
                                <textarea className="form-control mb-3" placeholder="Description..." rows="4" style={{resize:"none"}}/>
                                <button className="btn btn-warning mr-3">Clear Detail</button>
                                <button className="btn btn-primary">Submit Contact</button>
                            </span>

                            <span className="col-lg-6 col-sm-12">
                                <h3>Location</h3>
                                <img className="mb-3 rounded" src={MapGoogle} alt="map" width="100%"/>
                                <p>
                                    Address:
                                    No xx, Phatanavej xx , Pridi Banomyong xx , Sukhumvit xx , <br/>
                                    Bangkok , Thailand. Tel: +66 271xxxxx. Fax: +66 2 711 xxxx.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Careers;