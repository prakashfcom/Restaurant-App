import React from 'react'
import { useState } from 'react'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const AddWaiter =() =>{

    const [values,setValues] = useState({

        waitername :'',
        designation:'',
        mobile:'',
        description:'',

       

    })
    const navigate = useNavigate();
    const handleSubmit =(event) =>{

        event.preventDefault();
        axios.post('http://localhost:5000/api/waiter/createwaiter',values)
        .then(res =>{

            console.log(res);
            navigate('/viewWaiter');
        })
        .catch(err =>console.log(err));
    }

    return (
        <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
            <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title"> Add Waiter </h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Food</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Add Waiter</li>
                </ol>
              </nav>
            </div>
            <div className="row">
       
              <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                  
                    <form className="forms-sample" onSubmit={handleSubmit} >
                        <div className="row">
                          
                            <div className="form-group row">
                        <label for="exampleInputUsername2" className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="waitername" id="exampleInputUsername2" onChange={e =>setValues({...values, waitername: e.target.value})} placeholder="Employee Name" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label for="exampleInputUsername2" className="col-sm-3 col-form-label">Designation</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="designation" id="exampleInputUsername2" onChange={e =>setValues({...values, designation: e.target.value})} placeholder="Posistion" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label for="exampleInputUsername2" className="col-sm-3 col-form-label">Mobile Number</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="mobile" id="exampleInputUsername2" onChange={e =>setValues({...values, mobile: e.target.value})} placeholder="Mobile Number" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label for="exampleInputUsername2" className="col-sm-3 col-form-label">Description</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="description" id="exampleInputUsername2" onChange={e =>setValues({...values, description: e.target.value})} placeholder="Mobile Number" />
                        </div>
                      </div>
                      
                      
                    
                           
                      
                        </div>
                   
                      <button type="submit" className="btn btn-gradient-primary me-2">Submit</button>
                     
                    </form>
                  </div>
                </div>
              </div>
 
   

      
            </div>
          </div>
                    <Footer />
            </div>
        </div>
    </div>
    )
}

export default AddWaiter;