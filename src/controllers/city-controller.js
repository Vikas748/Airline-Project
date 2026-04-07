const {CityService}=require('../services/index');
const cityService=new CityService(); //create an object

/**
 * POST 
 * data ->req.body
 */

const create= async(req,res)=>{
    try {
        const city =await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully created a city ",
            err:{}
        })  
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message :"not able to Create a city",
            err:error
        })
}}
//DELETE -> /city/:id
const destroy=async (req,res)=>{
    try {
        const response=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message : "successfully Deleted a city ",
            err:{}
        })  
    }
    catch (error) {
       console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message :"not able to Delete the city",
            err:error
        })
    }
}

//GET -> /city/:id
const get=async(req,res)=>{
    try { 
        const city =await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:"successfully fetched the city ",
            err:{}
        })
        
    }
    catch (error) {
       console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message :"not able to Get the city",
            err:error
        })
    }
}

//UPDATE -> /city/:id -> req.body 
const update=async(req,res)=>{
    try {
        const city=await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message :"successfully updated the city ",
            err:{}
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message :"not able to Update the city",
            err:error
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    update
}
