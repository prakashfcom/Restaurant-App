import React from 'react'
import { useState } from 'react'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
const AddTable =() =>{
    const [values,setValues] = useState({

        tablename :'',
        Position:'',
        seatcapacity :'',
        description:'',
       

    })
    const navigate = useNavigate();
    const handleSubmit =(event) =>{

        event.preventDefault();
        axios.post('http://localhost:5000/api/table/createtable',values)
        .then(res =>{

            console.log(res);
            navigate('/viewTable');
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
              <h3 className="page-title"> Add Table </h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Table</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Add Table</li>
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
                        <label for="exampleInputUsername2" className="col-sm-3 col-form-label">Table Name</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="tablename" id="exampleInputUsername2" onChange={e =>setValues({...values, tablename: e.target.value})} placeholder="Enter Table Tame" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label for="exampleInputUsername2" className="col-sm-3 col-form-label">Position</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="Position" id="exampleInputUsername2" onChange={e =>setValues({...values, Position: e.target.value})} placeholder="Enter Posistion" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label for="exampleInputUsername2" className="col-sm-3 col-form-label">Seat Capacity</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="Position" id="exampleInputUsername2" onChange={e =>setValues({...values, seatcapacity: e.target.value})} placeholder="Enter Seat Capacity" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label for="exampleInputUsername2" className="col-sm-3 col-form-label">Description</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="Position" id="exampleInputUsername2" onChange={e =>setValues({...values, description: e.target.value})} placeholder="Enter Description" />
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

export default AddTable;