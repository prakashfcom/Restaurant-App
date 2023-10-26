import React from "react";
import { useState,useEffect } from "react";
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';

import axios from "axios";
import { redirect, useNavigate,Link } from "react-router-dom";


const ViewFoodMenu =() =>{

  const [foodmenus, setFoodmenu] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/foodmenu/getallfoodmenu')
      .then((response) => response.json())
      .then((data) => setFoodmenu(data))
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
                    <h4 className="card-title">Food Menu List</h4>
                    <div className="d-flex justify-content-end">
                    <Link to="/addfoodmenu" className="btn btn-success">Add +</Link>
                </div>
                  
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Food Name</th>
                          <th>Food Category</th>
                        <th>Sales Price</th>
                        <th>Vat</th>
                        <th>Photo</th>
                        <th>Action</th>
                        </tr>
                      </thead>
                   <tbody>
                   {
                        foodmenus.map((order) => (

                            <tr >
                                <td>
                                    {order.foodmenuname}
                                </td>
                                <td>
                                    {order.foodcategory.foodcategoryname}
                                </td>
                                <td>
                                    {order.salesprice}
                                </td>
                                <td>
                                    {order.vat.vatname}
                                </td>
                                <td>
                                    {order.image}
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
    )
}

export default ViewFoodMenu;