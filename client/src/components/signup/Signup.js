import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import validation from './validation';
import Login from './Login';


function Signup() {

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
            alert("Signup successful.");
        }
    }, [formErrorValues]);

    const handleSubmit = (event)=>{
        event.preventDefault();
        setFormErrorValues(validation(formValues));
        setIsSubmit(true);
    }
    return (
        <div>
             {/* <pre className="pretext">{JSON.stringify(formValues,undefined,2)}</pre> 	 */}
            <div className="main"> 
           
		<input type="checkbox" id="chk" aria-hidden="true"/>
        console.log({Object.keys(formErrorValues).length});
        {Object.keys(formErrorValues).length === 0 && isSubmit ? (<Login />) : (<pre className='pretext'></pre>)}
        { /*Signup*/}
			<div className="signup">
                
				<form onSubmit={handleSubmit}>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="username" placeholder="User name" required="" value={formValues.username} onChange={handleChange}/>
					<p className="error">{formErrorValues.username}</p>
                    <input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange}/>
					<p className="error">{formErrorValues.email}</p>
                    <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange}/>
					<p className="error">{formErrorValues.password}</p>
                    <br></br>
                    <button >Sign up</button>
                    <Link to="/" className='btn btn-info'>Login</Link>
				</form>
			</div>

            
    { /*Login*/}
			{/* <div className="login" >
				<form onSubmit={handleSubmit}>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange}/>
                    <p className="error">{formErrorValues.email}</p>
					<input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange}/>
                    <p className="error">{formErrorValues.password}</p>
                    <br></br>
                    <div className='row my-5'>
                    <div className='col-sm-3'></div>
                    <div className='col-sm-5'>
                    <button >Login</button>
					
                    </div>
                    </div>
				</form>
			</div> */}
	</div>
        </div>
    );
}

export default Signup;