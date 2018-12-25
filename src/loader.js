import React,{Component} from 'react';
import Loader from 'react-loading';
import 'bootstrap/dist/css/bootstrap.min.css';

class Loaders extends Component {
    render(){
        return(
            <div style={{minHeight:'100vh',display:"flex",alignItems:"center",justifyContent:"center"}} className="bg-secondary">
                <Loader color="#fff" type="bars" height={"10%"} width={"10%"}/>
            </div>
        )
    }
}

export default Loaders;