const {City}=require('../models/index')

class CityRepository{
    async createCity({name}){ //{name:"Jabalpur"}
        try{
            const city=await City.Create({
                name
            })
            return city;
        }
        catch(error){
            console.log("something went wrong in repository layer");
            throw error;
        }
    }
    async deleteCity(cityID){
        try{
            const city=await City.destroy({
                where: {id:cityID}
            })
        }
        catch(error){
            console.log("something went wrong in repository layer");
            throw error;
        }

    }
    async updateCity({cityID,data}){
        try{
            const city=City.update(data,{
                where:{
                    id:cityID
                }}
            )
        }
        catch(error){
            console.log("something went wrong in repository layer");
            throw error;
        }
    }

    async getCity(cityID){
        try{
            const city =await City.findByPk(cityID);
            return city;
        }
        catch(error){
            console.log("something went wrong in repository layer");
            throw error;
        }
    }
}

module.exports=CityRepository;