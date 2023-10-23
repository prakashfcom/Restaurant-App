import React from "react";
import { useState,useEffect } from "react";
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';

import axios from "axios";
import { redirect, useNavigate,Link } from "react-router-dom";


const Pos =() =>{

    const [foodCategory, setFoodcategory] = useState([]);

    useEffect(() => {
     
      axios.get('http://localhost:5000/api/pos/poscategory')
      .then((response) => {
        setFoodcategory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

    return (
        <div className="container-scroller">
        <Header />
        <div className="content-wrapper">
        <div className="row p-2">
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
                            <label className="custom-control-label" htmlFor="defaultInline1">Cash</label>
                          </div>
                          
                        
                          <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" className="custom-control-input" id="defaultInline2" name="inlineDefaultRadiosExample" />
                            <label className="custom-control-label" htmlFor="defaultInline2">Card</label>
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
     <div className="division mb-4">
          <div className="row">
              <div className="col-lg-2">
                  <button type="button" className="btn btn-success w-100">New Order</button>                           
              </div>
              <div className="col-lg-2">                            
                  <input type="" className="htmlForm-control w-100" placeholder="Bill No" />
              </div>
              <div className="col-lg-3">
                  <div className="htmlForm-group has-search mb-0">  
                      <span className="fa fas-search htmlForm-control-feedback"></span>
                      <input type="text" className="htmlForm-control" placeholder="Search" />
                  </div>
              </div>
              <div className="col-lg-2 mb-0"><p>Short Code</p></div>
              {/* <div className="col-lg-3 text-right">
                 <a href="#"><img src="img/settings-ic.png" /></a>
                 <a href="#"><img src="img/ic.png" /></a>
                 <a href="#"><img src="img/send.png" /></a>
                 <a href="#"><img src="img/print.png" /></a>
                 <a href="#"><img src="img/login.png" /></a>
              </div> */}
          </div>
     </div>
     
     <div className="row">
      <div className="col-12 main-content">
          <div className="tbl-h">
          <ul className="nav nav-tabs nav-justified" role="tablist">
              <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#dinein" role="tab" aria-controls="duck2" aria-selected="true">Dine In</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#delivery" role="tab" aria-controls="chicken2" aria-selected="false">Delivery</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#pickup" role="tab" aria-controls="kiwi2" aria-selected="false">Pick Up</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#running-order" role="tab" aria-controls="kiwi2" aria-selected="false">Running Order</a>
              </li>
              {/* <li className="nav-item ">
                  <a className="nav-link " data-toggle="tab" href="#waiter" role="tab" aria-controls="kiwi2" aria-selected="false">Waiter</a>
              </li>
              <li className="nav-item ">
                  <a className="nav-link " data-toggle="tab" href="#table" role="tab" aria-controls="kiwi2" aria-selected="false">Table</a>
              </li>                     */}
          </ul>
      </div>
          <div className="tab-content mt-3">
              <div className="tab-pane active" id="dinein" role="tabpanel" aria-labelledby="duck-tab">
                  <div className="row">
                      <div className="col-md-2 mb-3">
                          <ul className="nav nav-pills flex-column shdw-lft" id="myTab" role="tablist">
                              <li className="nav-item">
                                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#Coffe" role="tab" aria-controls="home" aria-selected="true">coffee</a>
                              </li>
                              {
                        foodCategory.map((pos) =>(

                           
                                <li className="nav-item">
                                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#Coffe" role="tab" aria-controls="home" aria-selected="true">{pos.foodcategoryname}</a>
                              </li>

                           

                        ))
                    }
                             
                              </ul>
                      </div>
                   
                      <div className="col-md-10">
                          <div className="tab-content" id="myTabContent">
                              <div className="tab-pane fade show active" id="Coffe" role="tabpanel" aria-labelledby="home-tab">                                          
                                  <div className="row">                                                
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png"/>  
                                                  <h3 className="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>                                           
                              </div>
                              <div className="tab-pane fade" id="Tea" role="tabpanel" aria-labelledby="profile-tab">
                                  <div className="row">                                                
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>                               
                              </div>
                              <div className="tab-pane fade" id="Indian" role="tabpanel" aria-labelledby="contact-tab">
                                  <div className="row">                                                
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="tab-pane fade" id="South-Indian" role="tabpanel" aria-labelledby="contact-tab">
                                  <div className="row">
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" /> 
                                                  <h3 className="mt-2">Veg Kurma</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Beef Curry</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Veg Kurma</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Paneer Butter</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Chicken Masala</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Chicken Varutharachathu</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Veg Kurma</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Veg Kurma</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Chicken Varutharachathu  </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Veg Kurma</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="tab-pane fade" id="Dosa" role="tabpanel" aria-labelledby="contact-tab">
                                  <div className="row">                                                
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="tab-pane fade" id="Chinese" role="tabpanel" aria-labelledby="contact-tab">
                                  <div className="row">                                                
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="tab-pane fade" id="Englishbf" role="tabpanel" aria-labelledby="contact-tab">
                                  <div className="row">                                                
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="tab-pane fade" id="Sandwich" role="tabpanel" aria-labelledby="contact-tab">
                                  <div className="row">                                                
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="tab-pane fade" id="Burgers" role="tabpanel" aria-labelledby="contact-tab">
                                  <div className="row">                                                
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="tab-pane fade" id="Kabayan" role="tabpanel" aria-labelledby="contact-tab">
                                  <div className="row">                                                
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="img/veg.png" />  
                                                  <h3 className="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 className="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 className="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>                                      
                          </div>
                      </div>
                     
                  </div>      
              </div>

              <div className="tab-pane" id="delivery" role="tabpanel" aria-labelledby="chicken-tab">
                  222222222222222222222222   
              </div>
              <div className="tab-pane" id="pickup" role="tabpanel" aria-labelledby="kiwi-tab">
                  333333333333333           
              </div>
              <div className="tab-pane" id="running-order" role="tabpanel" aria-labelledby="chicken-tab">
                  <div className="row"> 
                      <div className="col-sm-4 col-md-4">
                          <div className="htmlForm-group has-search mb-3">  
                              <span className="fa fas-search htmlForm-control-feedback"></span>
                              <input type="text" className="htmlForm-control" placeholder="Order, Table, waiter search" />
                          </div>
                      </div>
                      <div className="col-sm-6 col-md-8">.
                      </div>
                  </div>        
                  <div className="row">                                                
                      <div className="col-sm-4 col-md-4">
                          <div className="menu-box h-175">
                              <div className="menu-div">                                           
                                  <h2 className="mt-2">Order: A23001</h2>
                                  <p className="mb-0">Table: Table Indoor 2</p>
                                  <p className="mb-0">Waiter: Mohammed</p>
                                  <p className="mb-0">Customer: Walk in Customer </p>
                                  <p className="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-4 col-md-4">
                          <div className="menu-box h-175">
                              <div className="menu-div">                                           
                                  <h2 className="mt-2">Order: A23001</h2>
                                  <p className="mb-0">Table: Table Indoor 2</p>
                                  <p className="mb-0">Waiter: Mohammed</p>
                                  <p className="mb-0">Customer: Walk in Customer </p>
                                  <p className="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-4 col-md-4">
                          <div className="menu-box h-175">
                              <div className="menu-div">                                           
                                  <h2 className="mt-2">Order: A23001</h2>
                                  <p className="mb-0">Table: Table Indoor 2</p>
                                  <p className="mb-0">Waiter: Mohammed</p>
                                  <p className="mb-0">Customer: Walk in Customer </p>
                                  <p className="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-4 col-md-4">
                          <div className="menu-box h-175">
                              <div className="menu-div">                                           
                                  <h2 className="mt-2">Order: A23001</h2>
                                  <p className="mb-0">Table: Table Indoor 2</p>
                                  <p className="mb-0">Waiter: Mohammed</p>
                                  <p className="mb-0">Customer: Walk in Customer </p>
                                  <p className="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-4 col-md-4">
                          <div className="menu-box h-175">
                              <div className="menu-div">                                           
                                  <h2 className="mt-2">Order: A23001</h2>
                                  <p className="mb-0">Table: Table Indoor 2</p>
                                  <p className="mb-0">Waiter: Mohammed</p>
                                  <p className="mb-0">Customer: Walk in Customer </p>
                                  <p className="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-4 col-md-4">
                          <div className="menu-box h-175">
                              <div className="menu-div">                                           
                                  <h2 className="mt-2">Order: A23001</h2>
                                  <p className="mb-0">Table: Table Indoor 2</p>
                                  <p className="mb-0">Waiter: Mohammed</p>
                                  <p className="mb-0">Customer: Walk in Customer </p>
                                  <p className="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>    
                      <div className="col-sm-4 col-md-4">
                          <div className="menu-box h-175">
                              <div className="menu-div">                                           
                                  <h2 className="mt-2">Order: A23001</h2>
                                  <p className="mb-0">Table: Table Indoor 2</p>
                                  <p className="mb-0">Waiter: Mohammed</p>
                                  <p className="mb-0">Customer: Walk in Customer </p>
                                  <p className="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      
                      <div className="col-sm-4 col-md-4">
                          <div className="menu-box h-175">
                              <div className="menu-div">                                           
                                  <h2 className="mt-2">Order: A23001</h2>
                                  <p className="mb-0">Table: Table Indoor 2</p>
                                  <p className="mb-0">Waiter: Mohammed</p>
                                  <p className="mb-0">Customer: Walk in Customer </p>
                                  <p className="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-4 col-md-4">
                          <div className="menu-box h-175">
                              <div className="menu-div">                                           
                                  <h2 className="mt-2">Order: A23001</h2>
                                  <p className="mb-0">Table: Table Indoor 2</p>
                                  <p className="mb-0">Waiter: Mohammed</p>
                                  <p className="mb-0">Customer: Walk in Customer </p>
                                  <p className="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                  </div>  
              </div>  
              <div className="tab-pane" id="waiter" role="tabpanel" aria-labelledby="kiwi-tab">
                  <div className="row">                                                
                      <div className="col-sm-3 col-md-3">
                          <div className="menu-box h-175">
                              <div className="menu-div text-left">                                          
                                  <h3 className="mt-2">Waiter : 1</h3>
                                  <p className="mb-0">
                                      No    :   <strong className="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-3 col-md-3">
                          <div className="menu-box h-175">
                              <div className="menu-div text-left">                                          
                                  <h3 className="mt-2">Waiter : 1</h3>
                                  <p className="mb-0">
                                      No    :   <strong className="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-3 col-md-3">
                          <div className="menu-box h-175">
                              <div className="menu-div text-left">                                          
                                  <h3 className="mt-2">Waiter : 1</h3>
                                  <p className="mb-0">
                                      No    :   <strong className="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-3 col-md-3">
                          <div className="menu-box h-175">
                              <div className="menu-div text-left">                                          
                                  <h3 className="mt-2">Waiter : 1</h3>
                                  <p className="mb-0">
                                      No    :   <strong className="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-3 col-md-3">
                          <div className="menu-box h-175">
                              <div className="menu-div text-left">                                          
                                  <h3 className="mt-2">Waiter : 1</h3>
                                  <p className="mb-0">
                                      No    :   <strong className="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-3 col-md-3">
                          <div className="menu-box h-175">
                              <div className="menu-div text-left">                                          
                                  <h3 className="mt-2">Waiter : 1</h3>
                                  <p className="mb-0">
                                      No    :   <strong className="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-3 col-md-3">
                          <div className="menu-box h-175">
                              <div className="menu-div text-left">                                          
                                  <h3 className="mt-2">Waiter : 1</h3>
                                  <p className="mb-0">
                                      No    :   <strong className="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-3 col-md-3">
                          <div className="menu-box h-175">
                              <div className="menu-div text-left">                                          
                                  <h3 className="mt-2">Waiter : 1</h3>
                                  <p className="mb-0">
                                      No    :   <strong className="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-3 col-md-3">
                          <div className="menu-box h-175">
                              <div className="menu-div text-left">                                          
                                  <h3 className="mt-2">Waiter : 1</h3>
                                  <p className="mb-0">
                                      No    :   <strong className="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div className="col-sm-3 col-md-3">
                          <div className="menu-box h-175">
                              <div className="menu-div text-left">                                          
                                  <h3 className="mt-2">Waiter : 1</h3>
                                  <p className="mb-0">
                                      No    :   <strong className="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                  </div>
                  <div className="row">                                                
                      <div className="col-12 mt-5">
                          <a href="#" className="sub-btn"> Create Invoice & Close</a>           
                          <a href="#" className="sub-btn"> Modify Order</a>           
                          <a href="#" className="sub-btn"> Cancel Orders</a>          
                          <a href="#" className="sub-btn"> Order Details</a>             
                          <a href="#" className="sub-btn"> Print KOT </a>            
                          <a href="#" className="sub-btn"> Kitchen Status</a>
                      </div>

                  </div>                
              </div>
              <div className="tab-pane" id="table" role="tabpanel" aria-labelledby="chicken-tab">
                  <div className="row">
                      <div className="col-md-2 mb-3">
                          <ul className="nav nav-pills flex-column shdw-lft" id="myTab" role="tablist">                                        
                              <li ><h3 className="p-3 red-color mb-0">Tables</h3></li>
                              <li className="nav-item">
                                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#main" role="tab" aria-controls="home" aria-selected="true">Main</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#floor-1" role="tab" aria-controls="profile" aria-selected="false">Floor - 1</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#floor-2" role="tab" aria-controls="contact" aria-selected="false">Floor - 2</a>
                              </li>                                                                              
                          </ul>
                      </div>
                     
                      <div className="col-md-10">
                          <div className="tab-content" id="myTabContent">
                              <div className="tab-pane fade show active" id="main" role="tabpanel" aria-labelledby="home-tab">                                          
                                  <div className="row">                                                
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                          
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                                                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                          
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                              
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                  </div>                                           
                              </div>
                              <div className="tab-pane fade" id="floor-1" role="tabpanel" aria-labelledby="profile-tab">
                                  <div className="row">                                                
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                                                                              
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" /> 
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                           
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                     
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                                                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                               
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                  </div>                               
                              </div>
                              <div className="tab-pane fade" id="floor-2" role="tabpanel" aria-labelledby="contact-tab">
                                  <div className="row">                                                
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                           
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                     
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                                                                                  
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                          
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                          
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                              
                                          </div>
                                      </div>
                                      <div className="col-sm-3 col-md-3">
                                          <div className="menu-box">
                                              <div className="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 className="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                  </div>
                              </div>                                                                              
                          </div>
                      </div>
                   
                  </div>
              </div>                   
          </div>
        
      </div>
  </div>


    
  </div>
</div>    
          </div>

          </div>
    )


}

export default Pos;