import axios from 'axios';
// import {showAlert} from './alert'

 export const signup = async({name, email, password, passwordConfirm})=>{


    
    try {
        const res= await axios({
            method: 'POST',
            url: 'http://localhost:7070/api/v1/users/signup', 
            data:{
                name,
                email,
                password,
                passwordConfirm
            }
        });  

        console.log(res);

        if(res.data.status === 'success'){
            console.log('success');
            
        }
     
        
    } catch (err) {
        const msg =  err.response.data.message
    
    console.log(msg);
    
        
    }
    
   
}

