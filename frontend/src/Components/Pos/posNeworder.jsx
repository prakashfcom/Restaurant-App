import React from "react";
import { useState,useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { redirect, useNavigate,Link } from "react-router-dom";

const PosNewOrder =() =>{


    
    const [isTabEnabled, setTabEnabled] = useState(true);
    const [isDinein,setEnableDinein] =useState(true);
    const [isEnableTable,setEnableTable] =useState(true);
    // const [isEnableTakeway,setEnableTakeway] =useState(true);
    // const [isEnableDelivery,setEnableDelivery] =useState(true);
    //Value Declare
    const [waiter, setWaiter] = useState([]);
    const [selectWaiter,setSelectWaiter] =useState();
    const [table, setTable] = useState([]);
    const [selectTable,setSelectTable] =useState();
    const [foodCategory, setFoodcategory] = useState([]);
    const distinctCategories = [...new Set(foodCategory.map(item => item.foodcategory.foodcategoryname))];
    const [isLoading, setIsLoading] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
 
    const handleDinein = (e) => {

        setEnableDinein(false);
        
       
       
      };
    
      const handleWaiter = (e) => {

        setEnableDinein(true);
        setSelectWaiter(e.target.value);
        if(selectWaiter)
        {
            setTabEnabled(false);
             if (!isTabEnabled) {
             handleDinein();
             }
        }
        else{

        }
    
       
      };
      console.log("selectWaiter is not empty:", selectWaiter);
     

      const handleTable =(e) =>
      {
        setEnableTable(false);
      }

      const handleTakeway =(e) =>
      {
        setEnableTakeway(false);
        
      }

      const handleDelivery =(e) =>
      {

      }

      const handleCustomer =(e) =>
      {

      }

      const handleMenu =(e) =>
      {

      }

      //Get The Waiter data
      useEffect(() => {
   
        axios.get('http://localhost:5000/api/pos/posWaiter')
        .then((response) => {
            setWaiter(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    useEffect(() => {
   
        axios.get('http://localhost:5000/api/pos/posTable')
        .then((response) => {
            setTable(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    return (
        <div className="row">
        <div className="col-sm-5 col-lg-4">
<div className="wraper shdw">

<div className="table-responsive vh-70">
    <table className="table">
        <thead>
          <tr className="thead-light">
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">U.Price</th>
            <th scope="col">Qty</th>
            <th scope="col" className="text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td>Veg Kurma</td>
            <td>10.00</td>
            <td>1</td>
            <td className="text-right">10.00</td>
          </tr>
          <tr>
            <td scope="row">2</td>
            <td>Chicken Masala</td>
            <td>20.00</td>
            <td>2</td>
            <td className="text-right">40.00</td>
          </tr>
          <tr>
            <td scope="row">3</td>
            <td>Paneer Butter</td>
            <td>15.00</td>
            <td>1</td>
            <td className="text-right">15.00</td>
          </tr>
        </tbody>
      </table>
</div>

<div className="table-responsive">
    <table className="table">
          <tr>                               
            <td>Total </td>                                
            <th className="text-right">65.00</th>
          </tr>
          <tr>                               
            <td >Discount  </td>                                
            <th className="text-right">05.00</th>
          </tr>
          <tr>                               
            <td>VAT </td>                                
            <th className="text-right">03.50</th>
          </tr>
          <tr>                               
            <th>Grand Total   </th>                                
            <th className="text-right">63.50</th>
          </tr>
          <tr>                               
            <td>
              
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="defaultInline1" name="inlineDefaultRadiosExample" />
                  <label className="custom-control-label" for="defaultInline1">Cash</label>
                </div>
                
             
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="defaultInline2" name="inlineDefaultRadiosExample" />
                  <label className="custom-control-label" for="defaultInline2">Card</label>
                </div> 
            </td>                                
            <th ></th>
          </tr>
      </table>
</div>

<div className="row">
    <div className="col-lg-6"><button type="button" className="btn btn-danger w-100 mb-2 p-2">Cancel</button></div>
    <div className="col-lg-6 pl-0"><button type="button" className="btn btn-warning w-100 mb-2 p-2">Place Order</button></div>
    <div className="col-lg-6"><button type="button" className="btn btn-danger w-100 mb-2 p-2">Hold</button></div>
    <div className="col-lg-6 pl-0"><button type="button" className="btn btn-success w-100 mb-2 p-2">Quick Pay</button></div>
</div>                                      
</div>
</div>
<div className="col-sm-7 col-lg-8">
<div className="tbl-h">
                    <ul className="nav nav-tabs nav-justified" role="tablist">
                    <li className="nav-item ">
                            <a className="nav-link  active" onClick={handleWaiter} data-toggle="tab" href="#waiter" role="tab" aria-controls="kiwi2" aria-selected="false">Waiter</a>
                        </li> 
                        { isTabEnabled ? (   
                        <li className="nav-item">
                           
                        </li>
                    
                        ):(
                           <>
                            <li className="nav-item">
                            <a className="nav-link " onClick={handleDinein}  data-toggle="tab" href="#dinein" role="tab" aria-controls="duck2" aria-selected="true">Dine In</a>
                        </li>
                        { isDinein ? (   
                            <li className="nav-item">
                           
                            </li>

                        ): (
                            <>
                            <li className="nav-item">
                            <a className="nav-link "  onClick={handleTable}  data-toggle="tab" href="#table" role="tab" aria-controls="duck2" aria-selected="true">Table</a>
                        </li>
                      

                        { isEnableTable ? (
                            <li className="nav-item"></li>
                        ):(
                            <li className="nav-item">
                            <a className="nav-link "  onClick={handleMenu}  data-toggle="tab" href="#foodmenu" role="tab" aria-controls="duck2" aria-selected="true">Food Menu</a>
                        </li>
                        )

                        }

                         </> 

                        ) }

                        {/* <li className="nav-item">
                            <a className="nav-link "  onClick={handleTakeway}  data-toggle="tab" href="#dinein" role="tab" aria-controls="duck2" aria-selected="true">Take way</a>
                        </li> */}
                        {/* {
                            isEnableTakeway ? (
                                <li className="nav-item">
                           
                                </li>
                                 
                            ) :(
                                <li className="nav-item">
                                <a className="nav-link "  onClick={handleCustomer}  data-toggle="tab" href="#dinein" role="tab" aria-controls="duck2" aria-selected="true">Customer</a>
                            </li>
                            )
                        } */}

                        {/* <li className="nav-item">
                            <a className="nav-link "  onClick={handleDelivery} data-toggle="tab" href="#dinein" role="tab" aria-controls="duck2" aria-selected="true">Delivery</a>
                        </li>
                        {
                            isEnableDelivery  ? (
                                <li className="nav-item"></li>
                            ):(
                                <li className="nav-item">
                                <a className="nav-link "  onClick={handleMenu} data-toggle="tab" href="#dinein" role="tab" aria-controls="duck2" aria-selected="true">food Items</a>
                            </li>
                            )
                        } */}
                        </>
                          )}
                                       
                    </ul>
                </div>
                <div className="tab-content mt-3">
                     <div className="tab-pane active" id="waiter" role="tabpanel" aria-labelledby="duck-tab">

                           <div className="row">  
                         {
                  waiter.map((wait, index) =>(
                         <div className="col-sm-3 col-md-3">
                                    <div className="menu-box" onClick={(e)=>{
                      setSelectWaiter(wait)
                      }}>
                                       
                                         <h6>{wait.waitername}</h6>                                                                                                      
                                    </div>
                                </div>
                  )) }
                         </div>  
                    </div>
                    <div className="tab-pane " id="table" role="tabpanel" aria-labelledby="duck-tab">
                    <div className="row">  
                         {
                  table.map((tables, index) =>(
                         <div className="col-sm-3 col-md-3">
                                    <div className="menu-box" onClick={(e)=>{
                      setSelectTable(tables)
                      }}>
                                       
                                         <h6>{tables.tablename}</h6>                                                                                                      
                                    </div>
                                </div>
                  )) }
                         </div>  
                    </div>
                    <div className="tab-pane " id="foodmenu" role="tabpanel" aria-labelledby="duck-tab">
                    <div className="tbl-h">
                    <ul className="nav nav-pills flex-columns shdw-lft " id="myTab" role="tablist">
                             {distinctCategories.map((category, index) => (
                                 <li className="nav-item">
                                  <a
            key={index}
            className={`nav-item nav-link ${index === activeTab ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {category}
          </a>
                              </li>
                              ))}

                          
                             
                              </ul>  
                            </div>
                    </div>
                    <div className="tab-content p-3" id="myTabContents">
        {isLoading ? 'Loading' :<div className="row">  
        {foodCategory.length > 0 &&
            foodCategory
              .filter(item => item.foodcategory.foodcategoryname === distinctCategories[activeTab])
              .map((menu, index) => (
                <div className="col-sm-3 col-sm-3" key={index}>
                  <div className="menu-box" onClick={() => addProductToCart(menu)}>
                    
                    <div className="menu-div">
                    {/* <img src={`/uploads/${menu.photo}`} className=" foodimg" /> */}
                      <h6 className="mt-2">{menu.foodmenuname}</h6>
                      <p>Price: {menu.salesprice}</p>
                    </div>
                  </div>
                </div>
              ))}
 </div> }
        </div> 

                </div>
</div>
        </div>
    )


}

export default PosNewOrder;