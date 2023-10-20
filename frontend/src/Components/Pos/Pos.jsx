import React from "react";
import { useState,useEffect } from "react";
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';

import axios from "axios";
import { redirect, useNavigate,Link } from "react-router-dom";


const Pos =() =>{

    return (
        <div className="container-scroller">
        <Header />
        <div class="content-wrapper">
        <div class="row p-2">
  <div class="col-sm-5 col-lg-4">
      <div class="wraper shdw">
         
          <div class="table-responsive vh-70">
              <table class="table">
                  <thead>
                    <tr class="thead-light">
                      <th scope="col">No.</th>
                      <th scope="col">Name</th>
                      <th scope="col">U.Price</th>
                      <th scope="col">Qty</th>
                      <th scope="col" class="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">1</td>
                      <td>Veg Kurma</td>
                      <td>10.00</td>
                      <td>1</td>
                      <td class="text-right">10.00</td>
                    </tr>
                    <tr>
                      <td scope="row">2</td>
                      <td>Chicken Masala</td>
                      <td>20.00</td>
                      <td>2</td>
                      <td class="text-right">40.00</td>
                    </tr>
                    <tr>
                      <td scope="row">3</td>
                      <td>Paneer Butter</td>
                      <td>15.00</td>
                      <td>1</td>
                      <td class="text-right">15.00</td>
                    </tr>
                  </tbody>
                </table>
          </div>

          <div class="table-responsive">
              <table class="table">
                    <tr>                               
                      <td>Total </td>                                
                      <th class="text-right">65.00</th>
                    </tr>
                    <tr>                               
                      <td >Discount  </td>                                
                      <th class="text-right">05.00</th>
                    </tr>
                    <tr>                               
                      <td>VAT </td>                                
                      <th class="text-right">03.50</th>
                    </tr>
                    <tr>                               
                      <th>Grand Total   </th>                                
                      <th class="text-right">63.50</th>
                    </tr>
                    <tr>                               
                      <td>
                         
                          <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline1" name="inlineDefaultRadiosExample" />
                            <label class="custom-control-label" for="defaultInline1">Cash</label>
                          </div>
                          
                        
                          <div class="custom-control custom-radio custom-control-inline">
                            <input type="radio" class="custom-control-input" id="defaultInline2" name="inlineDefaultRadiosExample" />
                            <label class="custom-control-label" for="defaultInline2">Card</label>
                          </div> 
                      </td>                                
                      <th ></th>
                    </tr>
                </table>
          </div>

          <div class="row">
              <div class="col-lg-6"><button type="button" class="btn btn-danger w-100 mb-2 p-2">Cancel</button></div>
              <div class="col-lg-6 pl-0"><button type="button" class="btn btn-warning w-100 mb-2 p-2">Place Order</button></div>
              <div class="col-lg-6"><button type="button" class="btn btn-danger w-100 mb-2 p-2">Hold</button></div>
              <div class="col-lg-6 pl-0"><button type="button" class="btn btn-success w-100 mb-2 p-2">Quick Pay</button></div>
          </div>                                      
      </div>
  </div>
  <div class="col-sm-7 col-lg-8">
     <div class="division mb-4">
          <div class="row">
              <div class="col-lg-2">
                  <button type="button" class="btn btn-success w-100">New Order</button>                           
              </div>
              <div class="col-lg-2">                            
                  <input type="" class="form-control w-100" placeholder="Bill No" />
              </div>
              <div class="col-lg-3">
                  <div class="form-group has-search mb-0">  
                      <span class="fa fas-search form-control-feedback"></span>
                      <input type="text" class="form-control" placeholder="Search" />
                  </div>
              </div>
              <div class="col-lg-2 mb-0"><p>Short Code</p></div>
              {/* <div class="col-lg-3 text-right">
                 <a href="#"><img src="img/settings-ic.png" /></a>
                 <a href="#"><img src="img/ic.png" /></a>
                 <a href="#"><img src="img/send.png" /></a>
                 <a href="#"><img src="img/print.png" /></a>
                 <a href="#"><img src="img/login.png" /></a>
              </div> */}
          </div>
     </div>
     
     <div class="row">
      <div class="col-12 main-content">
          <div class="tbl-h">
          <ul class="nav nav-tabs nav-justified" role="tablist">
              <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#dinein" role="tab" aria-controls="duck2" aria-selected="true">Dine In</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#delivery" role="tab" aria-controls="chicken2" aria-selected="false">Delivery</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#pickup" role="tab" aria-controls="kiwi2" aria-selected="false">Pick Up</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#running-order" role="tab" aria-controls="kiwi2" aria-selected="false">Running Order</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link " data-toggle="tab" href="#waiter" role="tab" aria-controls="kiwi2" aria-selected="false">Waiter</a>
              </li>
              <li class="nav-item ">
                  <a class="nav-link " data-toggle="tab" href="#table" role="tab" aria-controls="kiwi2" aria-selected="false">Table</a>
              </li>                    
          </ul>
      </div>
          <div class="tab-content mt-3">
              <div class="tab-pane active" id="dinein" role="tabpanel" aria-labelledby="duck-tab">
                  <div class="row">
                      <div class="col-md-2 mb-3">
                          <ul class="nav nav-pills flex-column shdw-lft" id="myTab" role="tablist">
                              <li class="nav-item">
                                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#Coffe" role="tab" aria-controls="home" aria-selected="true">coffee</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="profile-tab" data-toggle="tab" href="#Tea" role="tab" aria-controls="profile" aria-selected="false">Tea</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#Indian" role="tab" aria-controls="contact" aria-selected="false">Indian</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#South-Indian" role="tab" aria-controls="contact" aria-selected="false">South Indian</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#Dosa" role="tab" aria-controls="contact" aria-selected="false">Dosa</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#Chinese" role="tab" aria-controls="contact" aria-selected="false">Chinese</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#Englishbf" role="tab" aria-controls="contact" aria-selected="false">English BF</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#Sandwich" role="tab" aria-controls="contact" aria-selected="false">Sandwich</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#Burgers" role="tab" aria-controls="contact" aria-selected="false">Burgers</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#Kabayan" role="tab" aria-controls="contact" aria-selected="false">Kabayan</a>
                              </li>
                              </ul>
                      </div>
                   
                      <div class="col-md-10">
                          <div class="tab-content" id="myTabContent">
                              <div class="tab-pane fade show active" id="Coffe" role="tabpanel" aria-labelledby="home-tab">                                          
                                  <div class="row">                                                
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png"/>  
                                                  <h3 class="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>                                           
                              </div>
                              <div class="tab-pane fade" id="Tea" role="tabpanel" aria-labelledby="profile-tab">
                                  <div class="row">                                                
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>                               
                              </div>
                              <div class="tab-pane fade" id="Indian" role="tabpanel" aria-labelledby="contact-tab">
                                  <div class="row">                                                
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="tab-pane fade" id="South-Indian" role="tabpanel" aria-labelledby="contact-tab">
                                  <div class="row">
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" /> 
                                                  <h3 class="mt-2">Veg Kurma</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Beef Curry</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Veg Kurma</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Paneer Butter</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Chicken Masala</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Chicken Varutharachathu</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Veg Kurma</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Veg Kurma</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Chicken Varutharachathu  </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Veg Kurma</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="tab-pane fade" id="Dosa" role="tabpanel" aria-labelledby="contact-tab">
                                  <div class="row">                                                
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="tab-pane fade" id="Chinese" role="tabpanel" aria-labelledby="contact-tab">
                                  <div class="row">                                                
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="tab-pane fade" id="Englishbf" role="tabpanel" aria-labelledby="contact-tab">
                                  <div class="row">                                                
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="tab-pane fade" id="Sandwich" role="tabpanel" aria-labelledby="contact-tab">
                                  <div class="row">                                                
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="tab-pane fade" id="Burgers" role="tabpanel" aria-labelledby="contact-tab">
                                  <div class="row">                                                
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="tab-pane fade" id="Kabayan" role="tabpanel" aria-labelledby="contact-tab">
                                  <div class="row">                                                
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="img/veg.png" />  
                                                  <h3 class="mt-2">Black Coffee</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Milk Coffee</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Espresso</h3>
                                              </div>                                                        
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Double Espresso</h3>  
                                              </div>                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Red Eye</h3> 
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Black Eye</h3>    
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Americano</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Long Black</h3> 
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">                                                          
                                                  <img src="assets/img/non-veg.png" />  
                                                  <h3 class="mt-2">Macchiato </h3>                                                            
                                              </div>                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/veg.png" />  
                                                  <h3 class="mt-2">Cappuccino</h3>  
                                              </div>                                                      
                                          </div>
                                      </div>
                                  </div>
                              </div>                                      
                          </div>
                      </div>
                     
                  </div>      
              </div>

              <div class="tab-pane" id="delivery" role="tabpanel" aria-labelledby="chicken-tab">
                  222222222222222222222222   
              </div>
              <div class="tab-pane" id="pickup" role="tabpanel" aria-labelledby="kiwi-tab">
                  333333333333333           
              </div>
              <div class="tab-pane" id="running-order" role="tabpanel" aria-labelledby="chicken-tab">
                  <div class="row"> 
                      <div class="col-sm-4 col-md-4">
                          <div class="form-group has-search mb-3">  
                              <span class="fa fas-search form-control-feedback"></span>
                              <input type="text" class="form-control" placeholder="Order, Table, waiter search" />
                          </div>
                      </div>
                      <div class="col-sm-6 col-md-8">.
                      </div>
                  </div>        
                  <div class="row">                                                
                      <div class="col-sm-4 col-md-4">
                          <div class="menu-box h-175">
                              <div class="menu-div">                                           
                                  <h2 class="mt-2">Order: A23001</h2>
                                  <p class="mb-0">Table: Table Indoor 2</p>
                                  <p class="mb-0">Waiter: Mohammed</p>
                                  <p class="mb-0">Customer: Walk in Customer </p>
                                  <p class="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-4 col-md-4">
                          <div class="menu-box h-175">
                              <div class="menu-div">                                           
                                  <h2 class="mt-2">Order: A23001</h2>
                                  <p class="mb-0">Table: Table Indoor 2</p>
                                  <p class="mb-0">Waiter: Mohammed</p>
                                  <p class="mb-0">Customer: Walk in Customer </p>
                                  <p class="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-4 col-md-4">
                          <div class="menu-box h-175">
                              <div class="menu-div">                                           
                                  <h2 class="mt-2">Order: A23001</h2>
                                  <p class="mb-0">Table: Table Indoor 2</p>
                                  <p class="mb-0">Waiter: Mohammed</p>
                                  <p class="mb-0">Customer: Walk in Customer </p>
                                  <p class="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-4 col-md-4">
                          <div class="menu-box h-175">
                              <div class="menu-div">                                           
                                  <h2 class="mt-2">Order: A23001</h2>
                                  <p class="mb-0">Table: Table Indoor 2</p>
                                  <p class="mb-0">Waiter: Mohammed</p>
                                  <p class="mb-0">Customer: Walk in Customer </p>
                                  <p class="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-4 col-md-4">
                          <div class="menu-box h-175">
                              <div class="menu-div">                                           
                                  <h2 class="mt-2">Order: A23001</h2>
                                  <p class="mb-0">Table: Table Indoor 2</p>
                                  <p class="mb-0">Waiter: Mohammed</p>
                                  <p class="mb-0">Customer: Walk in Customer </p>
                                  <p class="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-4 col-md-4">
                          <div class="menu-box h-175">
                              <div class="menu-div">                                           
                                  <h2 class="mt-2">Order: A23001</h2>
                                  <p class="mb-0">Table: Table Indoor 2</p>
                                  <p class="mb-0">Waiter: Mohammed</p>
                                  <p class="mb-0">Customer: Walk in Customer </p>
                                  <p class="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>    
                      <div class="col-sm-4 col-md-4">
                          <div class="menu-box h-175">
                              <div class="menu-div">                                           
                                  <h2 class="mt-2">Order: A23001</h2>
                                  <p class="mb-0">Table: Table Indoor 2</p>
                                  <p class="mb-0">Waiter: Mohammed</p>
                                  <p class="mb-0">Customer: Walk in Customer </p>
                                  <p class="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      
                      <div class="col-sm-4 col-md-4">
                          <div class="menu-box h-175">
                              <div class="menu-div">                                           
                                  <h2 class="mt-2">Order: A23001</h2>
                                  <p class="mb-0">Table: Table Indoor 2</p>
                                  <p class="mb-0">Waiter: Mohammed</p>
                                  <p class="mb-0">Customer: Walk in Customer </p>
                                  <p class="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-4 col-md-4">
                          <div class="menu-box h-175">
                              <div class="menu-div">                                           
                                  <h2 class="mt-2">Order: A23001</h2>
                                  <p class="mb-0">Table: Table Indoor 2</p>
                                  <p class="mb-0">Waiter: Mohammed</p>
                                  <p class="mb-0">Customer: Walk in Customer </p>
                                  <p class="mb-0">Time Count: 40330:58 PM</p>
                              </div>                                                                                                            
                          </div>
                      </div>
                  </div>  
              </div>  
              <div class="tab-pane" id="waiter" role="tabpanel" aria-labelledby="kiwi-tab">
                  <div class="row">                                                
                      <div class="col-sm-3 col-md-3">
                          <div class="menu-box h-175">
                              <div class="menu-div text-left">                                          
                                  <h3 class="mt-2">Waiter : 1</h3>
                                  <p class="mb-0">
                                      No    :   <strong class="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-3 col-md-3">
                          <div class="menu-box h-175">
                              <div class="menu-div text-left">                                          
                                  <h3 class="mt-2">Waiter : 1</h3>
                                  <p class="mb-0">
                                      No    :   <strong class="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-3 col-md-3">
                          <div class="menu-box h-175">
                              <div class="menu-div text-left">                                          
                                  <h3 class="mt-2">Waiter : 1</h3>
                                  <p class="mb-0">
                                      No    :   <strong class="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-3 col-md-3">
                          <div class="menu-box h-175">
                              <div class="menu-div text-left">                                          
                                  <h3 class="mt-2">Waiter : 1</h3>
                                  <p class="mb-0">
                                      No    :   <strong class="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-3 col-md-3">
                          <div class="menu-box h-175">
                              <div class="menu-div text-left">                                          
                                  <h3 class="mt-2">Waiter : 1</h3>
                                  <p class="mb-0">
                                      No    :   <strong class="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-3 col-md-3">
                          <div class="menu-box h-175">
                              <div class="menu-div text-left">                                          
                                  <h3 class="mt-2">Waiter : 1</h3>
                                  <p class="mb-0">
                                      No    :   <strong class="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-3 col-md-3">
                          <div class="menu-box h-175">
                              <div class="menu-div text-left">                                          
                                  <h3 class="mt-2">Waiter : 1</h3>
                                  <p class="mb-0">
                                      No    :   <strong class="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-3 col-md-3">
                          <div class="menu-box h-175">
                              <div class="menu-div text-left">                                          
                                  <h3 class="mt-2">Waiter : 1</h3>
                                  <p class="mb-0">
                                      No    :   <strong class="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-3 col-md-3">
                          <div class="menu-box h-175">
                              <div class="menu-div text-left">                                          
                                  <h3 class="mt-2">Waiter : 1</h3>
                                  <p class="mb-0">
                                      No    :   <strong class="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                      <div class="col-sm-3 col-md-3">
                          <div class="menu-box h-175">
                              <div class="menu-div text-left">                                          
                                  <h3 class="mt-2">Waiter : 1</h3>
                                  <p class="mb-0">
                                      No    :   <strong class="red-color"> 1 </strong> 
                                      KOT No   :  <strong>15223 </strong>
                                      Table No    :  <strong>Table  1 </strong>
                                  </p>
                              </div>                                                                                                            
                          </div>
                      </div>
                  </div>
                  <div class="row">                                                
                      <div class="col-12 mt-5">
                          <a href="#" class="sub-btn"> Create Invoice & Close</a>           
                          <a href="#" class="sub-btn"> Modify Order</a>           
                          <a href="#" class="sub-btn"> Cancel Orders</a>          
                          <a href="#" class="sub-btn"> Order Details</a>             
                          <a href="#" class="sub-btn"> Print KOT </a>            
                          <a href="#" class="sub-btn"> Kitchen Status</a>
                      </div>

                  </div>                
              </div>
              <div class="tab-pane" id="table" role="tabpanel" aria-labelledby="chicken-tab">
                  <div class="row">
                      <div class="col-md-2 mb-3">
                          <ul class="nav nav-pills flex-column shdw-lft" id="myTab" role="tablist">                                        
                              <li ><h3 class="p-3 red-color mb-0">Tables</h3></li>
                              <li class="nav-item">
                                  <a class="nav-link active" id="home-tab" data-toggle="tab" href="#main" role="tab" aria-controls="home" aria-selected="true">Main</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="profile-tab" data-toggle="tab" href="#floor-1" role="tab" aria-controls="profile" aria-selected="false">Floor - 1</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="contact-tab" data-toggle="tab" href="#floor-2" role="tab" aria-controls="contact" aria-selected="false">Floor - 2</a>
                              </li>                                                                              
                          </ul>
                      </div>
                     
                      <div class="col-md-10">
                          <div class="tab-content" id="myTabContent">
                              <div class="tab-pane fade show active" id="main" role="tabpanel" aria-labelledby="home-tab">                                          
                                  <div class="row">                                                
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                                                                            
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                          
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                    
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                                                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                          
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                              
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                  </div>                                           
                              </div>
                              <div class="tab-pane fade" id="floor-1" role="tabpanel" aria-labelledby="profile-tab">
                                  <div class="row">                                                
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                                                                              
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" /> 
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                           
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                     
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                                                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                       
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                               
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                  </div>                               
                              </div>
                              <div class="tab-pane fade" id="floor-2" role="tabpanel" aria-labelledby="contact-tab">
                                  <div class="row">                                                
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                                                                               
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                         
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                           
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                     
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                                                                                  
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                      
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                          
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                                          
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
                                              </div>                                              
                                          </div>
                                      </div>
                                      <div class="col-sm-3 col-md-3">
                                          <div class="menu-box">
                                              <div class="menu-div">
                                                  <img src="assets/img/table-1.png" />  
                                                  <h3 class="mt-2">Table Indoor - 1</h3>
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