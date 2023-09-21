// const { Op } = require('sequelize');

const { city } = require('../models/index.js');

class CityRepository {

    async createCity({ name }) { 
        try {
            const City = await city.create({
                name
            });
            return City;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await city.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data) { // {name: "Prayagraj"}
        try {
            // The below approach also works but will not return updated object
            // if we are using Pg then returning: true can be used, else not
            const City = await city.update(data, {
                where: {
                    id: cityId
                }
                 
            });
            return City;
        }
            // for getting updated data in mysql we use the below approach
        //     const City = await city.findByPk(cityId);
        //     City.name = data.name;
        //     await City.save();
        //     return City;
        // }
         catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const City = await city.findByPk(cityId);
            return City;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllCities(filter) { // filter can be empty also
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}

module.exports = CityRepository;