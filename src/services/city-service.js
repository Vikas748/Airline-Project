const CityRepository = require("../repository/index")

class CityService{
    constructor(){
        this.cityRepository=new CityRepository;
    }
    async createCity(data){
        try{
            const city=await this.cityRepository.createCity(data)
            return city;
        }
        catch(error){
            console.log("something went wrong in service layer")
            throw error
        }
    }

    async deleteCity(cityID){
        try{
            const response=await this.cityRepository.deleteCityCity(cityID)
            return response
        }
        catch(error){
            console.log("something went wrong in service layer")
            throw error
        }
    }

    async updateCity(cityID,data){
        try{
            const city=await this.cityRepository.updateCityCity(cityID,data)
            return city;
        }
        catch(error){
            console.log("something went wrong in service layer")
            throw error
        }
    }

    async getCity(cityID){
        try{
           const city=await this.cityRepository.getCity(cityID);
           return city;
        }
        catch(error){
            console.log("something went wrong in service layer")
            throw error
        }
    }
}