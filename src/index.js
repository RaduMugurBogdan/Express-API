const express = require('express');
const app = express();

app.use(express.raw({limit:800000}));


// function firstMiddleware(req,res,next){
//     console.log(req.get('Content-Type'));
//     console.log(req.method);
//     console.log("first middleware called");
//     res.myData="This is my date";
//     next();
// }

// function secondMiddleware(req,res,next){
//     console.log("second middleware called");
//     console.log(res.myData);
//     next();
// }

// app.use([firstMiddleware,secondMiddleware]);

const myObject={
    dex:'asd',
    info:'dex'
};

app.get("/api/getInfo",(req,res)=>{
    res.json(myObject);
});
app.get("/api/sendInfo",express.json(),(req,res)=>{
    console.log(req.get('Content-Type'));
    console.log(typeof req.body);
    console.log(req.body);
    res.status(200).end();
});

app.listen("6632");