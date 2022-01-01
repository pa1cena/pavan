import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './sign.css';
const Signup = () => {
    const [election, setElection] = useState({ Name: '', partyname: '',age:'',type: '', password: '' });
    let Name,value;
    const history=useHistory()
    const handleChange = (e) => {
        Name = e.target.Name;
        value = e.target.value;
        setElection({ ...election, [Name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {Name,partyname,age,type,password}=election
        const res= await fetch('/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({Name,partyname,age,type,password})
        })
        const data=await res
        if(data.status===422 || !data){
            window.alert('INVALID resgistration')
        }
        else{
            window.alert('Registration is Success')
            history.push('/login')
        }

       
    };
    return (
        <>
            <article>
                <form method='POST'> 
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <div className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='Name'>Name</label>
                        <input
                        className='w-100'
                            type='text'
                            id='Name'
                            Name='Name'
                            value={election.Name}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <div className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='partyname'>Lastname</label>
                        <input
                            className='w-100'
                            type='text'
                            id='partyname'
                            Name='partyname'
                            value={election.partyname}
                            onChange={handleChange}
                        />
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 col-md-3 col-lg-4"></div>
                        <div className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='age'>age</label>
                        <input
                        className='w-100'
                            type='number'
                            id='age'
                            Name='age'
                            value={election.age}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className='row'>
                         <div className="col-sm-2 col-md-3 col-lg-4"></div>
                         <div  className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='type'>type</label>
                        <input
                        className='w-100'
                            type='type'
                            id='type'
                            Name='type'
                            value={election.type}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className='row'>
                         <div className="col-sm-2 col-md-3 col-lg-4"></div>
                         <div  className="col-sm-8 col-md-6 col-lg-5 p-3">
                        <label htmlFor='password'>Password</label>
                        <input
                            className='w-100'
                            type='password'
                            id='password'
                            Name='password'
                            value={election.password}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className='row'>
                    <div className="col-sm-2 col-md-3 col-lg-4"></div>
                    <div className="col-sm-8 col-md-6 col-lg-5 p-3 text-center">
                    <button type='submit' className='btn btn-success text-white m-2' onClick={handleSubmit}>
                        AddPerson
                    </button>
                    </div>
                    </div>
                </form>
            </article>
        </>
    )
};

export default Signup;