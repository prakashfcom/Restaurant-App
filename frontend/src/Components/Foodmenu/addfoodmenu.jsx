import React from "react";
import { useState,useEffect } from "react";
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Footer from '../layouts/Footer';
import Select from 'react-select';

import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";


const AddFoodMenu =() =>{

    
    

//Fetch from food Category
const [foodCategory, setFoodcategory] = useState([]);
const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
   
    axios.get('http://localhost:5000/api/foodmenu/foodcategory')
      .then(response => {
      
        const data = response.data.map(item => ({
          value: item._id,
          label: item.foodcategoryname
        }));
        setFoodcategory(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleCategoryChange = (event) => {
    console.log(event.value);
    setSelectedCategory(event);
 /// alert({svat});
  }
 // console.log(selectedCategory.value);
//fetch Ingredients
  const [units, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

useEffect(() => {
    // Fetch data from your API here
    axios.get('http://localhost:5000/api/foodmenu/ingredients')
      .then(response => {
        // Assuming your API response is an array of objects with 'value' and 'label' properties
        const data = response.data.map(item => ({
          value: item._id,
          label: item.name
        }));
        setOptions(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);



const handleSelectChange = (selected) => {
 // console.log(selected)
    setSelectedOptions(selected);
   
  };
  //Fetch Vat

  const [vat,selectVat] = useState([]);
  const[selvat,setSelectVat] =useState('');
  useEffect(() =>{
    axios.get('http://localhost:5000/api/foodmenu/vat')
    .then(response => {
        // Assuming your API response is an array of objects with 'value' and 'label' properties
        const data = response.data.map(item => ({
          value: item._id,
          label: item.percentage
        }));
        selectVat(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });

  },[]);

  const handleVatChange = (event) => {
    const svat = setSelectVat(event);
  //  alert({svat});
   }

   const [vegs,setVeg] =useState();
   const [Beverages,setBeverage] =useState();
   const [bars,setBars] =useState();
   const [foodmenuname,setFoodmenuName] =useState();
   const [salesprice,setSalesPrice] =useState()
   const [description,setDescription] =useState()






   const handleVeg = (select) => {
    const sveg = setVeg(select);
  //  alert({svat});
   }
   const handleBeverage = (select) => {
    const sbev = setBeverage(select);
  //  alert({svat});
   }

   const handleBar = (select) => {
    const sbar = setBars(select);
  //  alert({svat});
   }
  const veg = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
   
  ];

  const bar = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
   
  ];

  const Beverage  = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
   
  ];
  const navigate = useNavigate();
  const handleSubmit =(event) =>{
    event.preventDefault();

    const selected = this.selectedOptions.selected;
    console.log(selected);

    // axios.post('http://localhost:5000/api/foodmenu/creatfoodmenu',{ foodmenuname,category: selectedCategory, selectedOptions,salesprice,vegs,Beverages,bars,description })
    // .then(res =>{

    //     console.log(res);
    //     navigate('/viewingredients');
    // })
    // .catch(err =>console.log(err));

  }


    return(
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
                   
                </div>
                  <form onSubmit={handleSubmit}>
                  <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Food  Menu Name</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" onChange={(e) => {setFoodmenuName(e.target.value)}} name="foodmenuname" id="exampleInputUsername2"  placeholder="Food Menu" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Food Category</label>
                        <div className="col-sm-9">
                        {/* <select name="category" className="form-control"  onChange={handleCategoryChange}  value={category}>
                             <option >Select Food Category</option>
                                 {categories.map((category) => (
                                  <option key={category._id} value={category._id}>
                                      {category.foodcategoryname}
                                   </option>
                                 ))}
                        </select> */}
                                           <Select
      options={foodCategory}
    
      value={selectedCategory}
      onChange={handleCategoryChange}
      // Additional props for styling and behavior
    />
                        </div>
                      </div>

                      
                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Food ingredient</label>
                        <div className="col-sm-9">
                        {/* <select name="category" className="form-control" onChange={handleUnitChange}    value={unit} >
                           <option>Select Food Ingredient</option>
                              {units.map((unit) => (
                                 <option key={unit._id} value={unit._id}>
                                   {unit.name}
                                 </option>
                                 ))}
                         </select> */}
                      <Select
      options={units}
      isMulti={true} // Enable multi-select
      value={selectedOptions}
      onChange={handleSelectChange}
      // Additional props for styling and behavior
    />

                       
                        
                        </div>
                      </div>
                      
                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Sales Price</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" onChange={(e) => {setSalesPrice(e.target.value)}} name="foodmenuname" id="exampleInputUsername2"  placeholder="Food Menu" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Vat</label>
                        <div className="col-sm-9">
                        <Select
                          options={vat}
    
                          value={selvat}
                           onChange={handleVatChange}
      // Additional props for styling and behavior
                             />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Description</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" onChange={(e) => {setDescription(e.target.value)}} name="foodmenuname" id="exampleInputUsername2"  placeholder="Food Menu" />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Is it Veg Item ?</label>
                        <div className="col-sm-9">
                        <Select
                          options={veg}
                          onChange={handleVeg}
                         />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Is it Beverage ?</label>
                        <div className="col-sm-9">
                        <Select
                          options={Beverage}
                          onChange={handleBeverage}
                         />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Is it Bar Item ? *</label>
                        <div className="col-sm-9">
                        <Select
                          options={bar}
                          onChange={handleBar}
                         />
                        </div>
                      </div>

                      <div className="form-group row">
                        <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Photo</label>
                        <div className="col-sm-9">
                          <input type="file" className="form-control" name="foodmenuname" id="exampleInputUsername2"  placeholder="Food Menu" />
                        </div>
                      </div>



                      <button type="submit" className="btn btn-gradient-primary me-2">Submit</button>

                  </form>
                  
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

export default AddFoodMenu;