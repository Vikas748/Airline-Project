const { ClintErrorCodes }=require('../utils/error-codes');
const ValidateCreateFlight =(req,res,next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price 
    ) {
        //if any of body params is missing we come inside the if
        return res.status(ClintErrorCodes.BAD_REQUEST).json({
            data :{},
            success:false,
            message:"Invalid request body for create flight",
            err:"Missing mandatory properties for create a flight"
        });
    }
    next();
}

module.exports={
    ValidateCreateFlight
}