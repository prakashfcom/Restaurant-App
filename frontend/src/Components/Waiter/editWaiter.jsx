import React from 'react'
import { useState,useEffect } from 'react'
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';
import axios from "axios";
import { redirect, useNavigate,useParams } from "react-router-dom";

const EditWaiter =() =>{

    const {id} =useParams()
    const [waitername,setWaiterName] =useState()
    const [designation,setDesignation] =useState()
    const [mobile,setMobile] =useState()
    const [description,setDescription] =useState()

  
    const navigate = useNavigate();

    useEffect( ()=>{

        axios.get('http://localhost:5000/api/waiter/getwaiter/'+id)
        .then(res => { console.log(res)
            setWaiterName(res.data.waitername)
            setDesignation(res.data.designation)
            setMobile(res.data.mobile)
            setDescription(res.data.description)


        
    })
        .catch(err =>console.log(err));

    },[])


    const handleSubmit =(event) =>{

        event.preventDefault();
        axios.put('http://localhost:5000/api/waiter/updatewaiter/'+id,{waitername,designation,mobile,description})
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
              <h3 className="page-title"> Add Vat </h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Food</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Add Vat</li>
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
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Waiter Name</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="vatname" id="exampleInputUsername2" value={waitername} onChange={(e)=>setWaiterName(e.target.value)}  />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Designation</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="percentage" id="exampleInputUsername2" value={designation} onChange={(e)=>setDesignation(e.target.value)}  />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Mobile</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="percentage" id="exampleInputUsername2" value={mobile} onChange={(e)=>setMobile(e.target.value)}  />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Description</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" name="percentage" id="exampleInputUsername2" value={description} onChange={(e)=>setDescription(e.target.value)}  />
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

export default EditWaiter;