import React from "react";
import { useState,useEffect } from "react";
import Header from "../../layouts/Header";
import Sidebar from "../../layouts/Sidebar";
import Footer from "../../layouts/Footer";

import axios from "axios";
import { redirect, useNavigate,Link } from "react-router-dom";

const ViewIngredients =() =>{
   
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/ingredient/getalling')
      .then((response) => response.json())
      .then((data) => setIngredients(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete =(id) =>
  {
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
                    <h4 className="card-title">Food Ingredients List</h4>
                    <div className="d-flex justify-content-end">
                   
                </div>
                <div className="d-flex justify-content-end">
                    <Link to="/addingredients" className="btn btn-success">Add +</Link>
                </div>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Category Name</th>
                        <th>Purchase Price</th>
                        <th>Alert Quantity/Amount </th>
                        <th>Unit</th>
                        <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {
                        ingredients.map((order) => (

                            <tr >
                                <td>
                                    {order.name}
                                </td>
                                <td>
                                    {order.category.categoryname}
                                </td>
                                <td>
                                    {order.purchaseprice}
                                </td>
                                <td>
                                    {order.alertquantity}
                                </td>

                                <td>
                                    {order.ingredientunit.unitname}
                                </td>
                               
                                <td>
                                <Link to={`/editingredientunit/${order._id}`} className="btn btn-primary">Edit</Link>
                                    <button onClick={  (e)=>handleDelete(order._id)} className="btn btn-danger">Delete</button>
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

export default ViewIngredients;