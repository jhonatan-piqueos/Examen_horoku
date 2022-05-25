import express from "express"
import morgan from "morgan"

import postRoutes from './routes/post.routes'

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('bienvenido a node js...!');

});

app.use('api/auth/post', postRoutes)
export default app;