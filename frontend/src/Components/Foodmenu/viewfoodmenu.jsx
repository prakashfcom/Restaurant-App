import React from "react";
import { useState,useEffect } from "react";
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';

import axios from "axios";
import { redirect, useNavigate,Link } from "react-router-dom";


const ViewFoodMenu =() =>{
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
                          <th>Vat Name</th>
                          <th>Percentage</th>
                        <th>Action</th>
                        </tr>
                      </thead>
                   
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