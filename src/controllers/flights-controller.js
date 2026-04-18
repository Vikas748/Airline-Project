const {FlightService}=require('../services/index');
const { SuccessCodes }=require('../utils/error-codes');

const flightService= new FlightService();

const create =async(req,res)=>{
    try {
        let flightRequestDate={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price
        }
        const flight=await flightService.createFlight(flightRequestDate);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            err:{},
            message:'successfully created a flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message :"not able to Create a flight",
            err:error
    })
}
}

const getAll=async(req,res)=>{
    try {
        const response =await flightService.getAllFlightData(req.query);
            return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message:'successfully Fetched the flights'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message :"not able to Fetch the flights",
            err:error
    })
    }
}

module.exports={
    create,
    getAll
}