const express =require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./config/dbConnect');
const app =express();
const dotenv =require('dotenv').config();
const cors =require('cors');
const morgan =require('morgan');
const cookieParser =require('cookie-parser');

//Routes

const authRouter =require('./routes/authRoutes');
const categoryRouter =require('./routes/categoryRoutes');
const ingunitRouter =require('./routes/ingredientunitRoutes');
const ingredientRouter =require('./routes/ingredientRoutes');
const vatRouter =require('./routes/vatRoutes');
const tableRouter =require('./routes/tableRoutes');
const foodcategoryRouter =require('./routes/foodcategoryRoutes');
const foodmenuRouter =require('./routes/foodmenuRoutes');
const waiterRouter =require('./routes/waiterRoutes');

const PORT =process.env.PORT || 4000;
dbConnect();
app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use('/api/user',authRouter);
app.use('/api/category',categoryRouter);
app.use('/api/ingunit',ingunitRouter);
app.use('/api/ingredient',ingredientRouter);
app.use('/api/vat',vatRouter);
app.use('/api/table',tableRouter);
app.use('/api/foodcategory',foodcategoryRouter);
app.use('/api/foodmenu',foodmenuRouter);
app.use('/api/waiter',waiterRouter);
// app.use('/',(req,res) =>{
//     res.send("Hellow From Server Side");
// });
app.use(cookieParser());


app.listen(PORT,() =>{
    console.log(`Server is running Port ${PORT}`);
});