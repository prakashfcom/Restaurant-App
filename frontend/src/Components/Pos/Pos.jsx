import React from "react";
import { useState,useEffect } from "react";
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { redirect, useNavigate,Link } from "react-router-dom";
import PosTable from "./posTable";
import PosRunningOrder from "./posRunningorder";


const Pos =() =>{

  

      
    return (
      <div className="container-fluid">
          <div className="col-12 main-content">
            <div>
            <div className="tbl-h">
          <ul className="nav nav-tabs nav-justified" role="tablist">
          <li className="nav-item">
                
                  <Link to="/dashboard" className="nav-link " data-toggle="tab"   aria-selected="true">Dashboard</Link>
              </li>
              <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#dinein" role="tab" aria-controls="duck2" aria-selected="true">New Order</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#delivery" role="tab" aria-controls="chicken2" aria-selected="false">On Going Order</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#pickup" role="tab" aria-controls="kiwi2" aria-selected="false">Kitchen Status</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#todayorder" role="tab" aria-controls="kiwi2" aria-selected="false">Today Order</a>
              </li>
             
           
          </ul>
      </div>
            </div>

          </div>

      </div>
    )


}

export default Pos;