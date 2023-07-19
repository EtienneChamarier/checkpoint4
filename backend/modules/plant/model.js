const db = require("../../config/db");

const findPlantByFamily = (family) => {
    return db
        .execute("select * from plant where family = ?", [family])
        .then(([data]) => {
            return data;
        })
        .catch((err) =>{
            console.error("Error ", err)
            return err;
        })
}

const getAllPlant = () => {
    return db
        .query("select * from plant")
        .then(([data]) => {
            return data;
        })
        .catch((err) =>{
            console.error("Error ", err)
            return err;
        })
}

const addOnePlant = (plant) => {
    const { commun_name, scientific_name, family, origin, location, avatar } = plant;
    return db
        .execute("insert into plant (commun_name, scientific_name, family, origin, location, avatar) values (?, ?, ?, ?, ?, ?)",
        [commun_name, scientific_name, family, origin, location, avatar])
        .then(([data]) => {
            console.log("data -> ", data)
            return { id: data.insertId, ...plant };
        })
        .catch((err) =>{
            console.error("err", err)
            return err;
        })
}

const deleteOnePlant = (id) => {
    return db
        .execute("delete from plant where id = ?", [id])
        .then(([data]) => {
            // return data;
            return { affectedRows : data.affectedRows };
        })
        .catch((err) =>{
            console.error("Error ", err)
            return err;
        })
}

const modifyPlant = (plant, id) => {
    return db
        .query("update plant set ? where id = ?", [plant, id])
        .then(([data]) => {
            return data;
        })
        .catch((err) =>{
            console.error("Error ", err)
            return err;
        })
} 



module.exports = { getAllPlant, addOnePlant, findPlantByFamily, deleteOnePlant, modifyPlant }