import React from "react";
import { useState,useEffect } from "react";

import axios from "axios";
import { redirect, useNavigate,Link } from "react-router-dom";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Footer from "../../layouts/Footer";


const ViewIngredientUnit =() =>{
    const [data , setData] =useState([]);
    const navigate = useNavigate();
    useEffect( ()=>{

        axios.get('http://localhost:5000/api/ingunit/allingunit')
        .then(res =>setData(res.data))
        .catch(err =>console.log(err));

    },[])

    const handleDelete =(id) =>
    {
        const confirm =window.confirm('Are You Delete');
        if(confirm)
        {
            axios.delete('http://localhost:5000/api/ingunit/deleteIngUnit/'+id)
            .then(res =>{

               
                navigate('/viewingredientunit');
                console.log(res);
            }).catch(err =>console.log(err));
        }
    }

    return (
        <div className="container-scroller">
       <Header />
        <div className="container-fluid page-body-wrapper">
            <Sidebar />
            <div className="main-panel">
                  <div className="content-wrapper">
                  <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Ingredient Unit List</h4>
                    <div className="d-flex justify-content-end">
                    <Link to="/addingredientunit" className="btn btn-success">Add +</Link>
                </div>
                  
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Ingredient Unit Name</th>
                          <th>Description</th>
                        <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                        data.map((d,i) =>(

                            <tr key={i}>
                                <td>
                                    {d.unitname}
                                </td>
                                <td>
                                    {d.description}
                                </td>
                               
                                <td>
                                <Link to={`/editingredientunit/${d._id}`} className="btn btn-primary">Edit</Link>
                                    <button onClick={  (e)=>handleDelete(d._id)} className="btn btn-danger">Delete</button>
                                </td>

                            </tr>

                        ))
                    }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
                    </div>
                    <Footer />
            </div>
        </div>
    </div>
    );
}

export default ViewIngredientUnit;