const express= require("express");
const app= express();
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
  

const addTwoNumber = (n1,n2) => {
    return n1+n2;
}

const subtractTwoNumber = (n1,n2) => {
    return n1-n2;
}

const multiplyTwoNumber = (n1,n2) => {
    return n1*n2;
}

const divisionTwoNumber = (n1, n2) => {
    return n1/n2;
}

//GET method, to handle get request to server
app.get("/addTwoNumber", (req,res)=>{
    try {
        const n1= parseInt(req.query.n1);
        const n2=parseInt(req.query.n2);
        //Handel invalid data
        if (!n1 || !n2) {
            logger.error("Invalid data provided");
            return res.json({statuscode:422, data: "Invalid data provided" }); 
        }
        //If we get valid data
        const result = addTwoNumber(n1,n2);
        logger.debug(`AddTwoNumber called with n1:${n1} and n2:${n2}`);
        return res.json({statuscode:200, data: result });   
    } catch (error) {
        logger.error("Error in AddTwoNumber function: ", error);
    }
});

//GET method, to handle get request to server
app.get("/subtractTwoNumber", (req,res)=>{
    try {
        const n1= parseInt(req.query.n1);
        const n2=parseInt(req.query.n2);
        //Handel invalid data
        if (!n1 || !n2) {
            logger.error("Invalid data provided");
            return res.json({statuscode:422, data: "Invalid data provided" }); 
        }
        //If we get valid data
        const result = subtractTwoNumber(n1,n2);
        logger.debug(`SubtractTwoNumber called with n1:${n1} and n2:${n2}`);
        return res.json({statuscode:200, data: result });   
    } catch (error) {
        logger.error("Error in AddTwoNumber function: ", error);
    }
});

//GET method, to handle get request to server
app.get("/multiplyTwoNumber", (req,res)=>{
    try {
        const n1= parseInt(req.query.n1);
        const n2=parseInt(req.query.n2);
        //Handel invalid data
        if (!n1 || !n2) {
            logger.error("Invalid data provided");
            return res.json({statuscode:422, data: "Invalid data provided" }); 
        }
        //If we get valid data
        const result = multiplyTwoNumber(n1,n2);
        logger.debug(`MultiplywoNumber called with n1:${n1} and n2:${n2}`);
        return res.json({statuscode:200, data: result });   
    } catch (error) {
        logger.error("Error in AddTwoNumber function: ", error);
    }
});

//GET method, to handle get request to server
app.get("/divisionTwoNumber", (req,res)=>{
    try {
        const n1= parseInt(req.query.n1);
        const n2=parseInt(req.query.n2);
        //Handel invalid data
        if (!n1 || !n2) {
            logger.error("Invalid data provided");
            return res.json({statuscode:422, data: "Invalid data provided" }); 
        }
        //If we get valid data
        const result = divisionTwoNumber(n1,n2);
        logger.debug(`DivisionTwoNumber called with n1:${n1} and n2:${n2}`);
        return res.json({statuscode:200, data: result });   
    } catch (error) {
        logger.error("Error in AddTwoNumber function: ", error);
    }
});


const port=3040;
//Server is listening on port "3040".
app.listen(port,()=> {
    console.log("Server listening on port "+port);
})