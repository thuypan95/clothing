import React from 'react';
import FormInput from '../form-input/form-input.component';
import ButtonCustom from '../button/button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleChange = (event) =>{
        const {value, name} = event.target;
        this.setState({[name]:value});
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword){
            alert('password dont match');
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
              });
        }
        catch(error){
            console.error(error);
        }
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2>I do not have a account</h2>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={this.handleChange}
                    label='Display Name' 
                    required/>
                    <FormInput
                    type="text"
                    name="email"
                    value={email}
                    handleChange={this.handleChange}
                    label='Email' 
                    required/>
                    <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={this.handleChange}
                    label='Password' 
                    required/>
                    <FormInput
                    type="text"
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={this.handleChange}
                    label='Confirm Password' 
                    required/>

                    <ButtonCustom type="submit">SIGN UP</ButtonCustom>
                </form>
            </div>
        )
    }
}
export default SignUp;