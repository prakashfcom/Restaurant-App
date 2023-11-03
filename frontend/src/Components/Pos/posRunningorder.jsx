import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { redirect, useNavigate,Link } from "react-router-dom";

const PosRunningOrder = ()=>{


    const [posRunningorder, setPosRunningorder] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/pos/getrunningorder')
        .then((response) => response.json())
        .then((data) => setPosRunningorder(data))
        .catch((error) => console.error(error));
    }, []);

    const handleComplete =(id) =>{
        
    }
  


    return(
        <>
        <div className="row">
        {
                posRunningorder.map((order) => (
            <div className="col-md-3">
                <div className="card">
                  <h5 className="text-center">OrderID:<span>{order.ordernumber}</span></h5>
                  <h6 className="text-center">Table:{order.table.tablename}</h6>
                  <h6 className="text-center">Table:{order.waiter.waitername}</h6>
                  <h6 className="text-center">Runningorder</h6>

                  <div class="row">
        
        
        <div class="col-md-12">
           <div class="btn-group align-middle" role="group" aria-label="Basic example">
            <button type="submit" onClick={  (e)=>handleComplete(order._id)} class="btn btn-labeled btn-success">
               Complete</button>
            <button type="button" class="btn btn-labeled btn-danger">
                Cancel</button>            
            <button type="button" class="btn btn-labeled btn-warning">
               Bookmark</button>
           
                    
           
            <button type="button" class="btn btn-labeled btn-danger">
                Trash</button>
   
          </div>
        </div>
    </div>
                </div>
            </div>

))
}
        </div>
        </>
    );
}

export default PosRunningOrder;