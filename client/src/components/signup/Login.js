import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import lvalid from './lvalid';
import Welcome from './Welcome';
import Signup from './Signup';


function Login() {

//Storing Form Field Values
    const [formValues,setFormValues] = useState({username:"",email:"",password:""});
//Manage Form Error values
const[formErrorValues,setFormErrorValues]=useState({});
//Flag for form Submission Status
const [isSubmit,setIsSubmit]= useState(false);
    //Manage Field Change    
    const handleChange = (event) =>{
        // console.log(event.target);
        const {name,value}=event.target;//destructuring
        setFormValues({...formValues,[name]:value}); //spread syntax(...three dots to retain values)
        console.log(formValues);
    }
    
    useEffect(() => {
        if (Object.keys(formErrorValues).length === 0 && isSubmit) {
            alert("Login successful.");
        }
    }, [formErrorValues]);

    const handleSubmit = (event)=>{
        event.preventDefault();
        setFormErrorValues(lvalid(formValues));
        setIsSubmit(true);
    }
    return (
        <div>
             {/* <pre className="pretext">{JSON.stringify(formValues,undefined,2)}</pre> 	 */}
            <div className="main"> 
           
		<input type="checkbox" id="chk" aria-hidden="true"/>
       
        {Object.keys(formErrorValues).length === 0 && isSubmit ? (<Welcome />) : (<pre className='pretext'></pre>)}
        <div className="login1" >
				<form onSubmit={handleSubmit}>
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange}/>
                    <p className="error">{formErrorValues.email}</p>
					<input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange}/>
                    <p className="error">{formErrorValues.password}</p>
                    <br></br>
                        <button >Validate Login</button>
                        <br></br>

       <Link to="/signup" className='btn btn-primary'>SignUp</Link>
        
        
				</form>
			</div>
	</div>
        </div>
    );
}

export default Login;