const { findAllPlant, addOnePlant, findPlantByFamily, deleteOnePlant, modifyPlant} = require("./model"); 

const jwt = require("jsonwebtoken");

const argon2 = require("argon2");



const getAllPlant = async (req, res) => {
    try {
        const datagetAllPlant = await findAllPlant();

        if (datagetAllPlant.length !== 0) {
            res.status(200).json(datagetAllPlant)
        } else {
            res.status(404).json({error : "No Plant found"});
        }

    } catch (err) {
        console.log("err", err)
        res.status(500).json({error : err.message});
    }
}

const addPlant = async (req, res) => {
    const Plant = req.body;
    try {
        const dataAddPlant = await addOnePlant(Plant);
        res.status(201).json(dataAddPlant)
    } catch (err) {
        console.log("err", err)
        res.status(500).json({error : err.message});
    }
}

const deletePlant = async (req, res) => {
    const id = req.params.id;
    try {
        const dataDeletePlant = await deleteOnePlant(id);
        if (dataDeletePlant.affectedRows === 1) {
            res.sendStatus(204);
        } else {
            res.status(404).json({ message : "No Plant found"})
        }
    } catch (err) {
        console.log("err", err)
        res.status(500).json({error : err.message});
    }
}


const editPlant = async (req, res) => {
    const id = req.params.id;

    const plant = req.body;

    try {
        const dataEditPlant = await modifyPlant(avis, id);
        if (dataEditPlant.affectedRows === 1) {
            res.json({ id, ...plant})
        } else {
            res.status(404).json({ message : "No plant found"})
        }
    } catch (err) {
        console.log("err", err)
        res.status(500).json({error : err.message});
    }
}

const getAllPlantFromFamily = async (req, res) => {
    const id = req.params.id;
    try {
        const datafindPlantByFamily = await findPlantByFamily(id);
        res.status(201).json(datafindPlantByFamily)
    } catch (err) {
        console.log("err", err)
        res.status(500).json({error : err.message});
    }
}




// const editPlant = async  (req, res) => {
//     const id = req.params.id;

//     const plant = req.body;

//     try {

//         if (req.file) {
//             const uploadedFilePath = await req.protocol + "://" + req.get("host") + "/upload/plant/" + req.file.filename;
//             plant.avatar = await uploadedFilePath;
//         }

//         const dataEditPlant = await modifyPlant(plant, id);
//         if (dataEditPlant.affectedRows === 1) {
//             res.json({ id, ...plant})
//         } else {
//             res.status(404).json({ message : "No plant found"})
//         }
//     } catch (err) {
//         console.log("err", err)
//         res.status(500).json({error : err.message});
//     }
// }






// const browse = async (req, res) => {
//     try {
//         const usersList = await findAll();
//         res.send(
//             usersList.map((user) => {
//               return {
//                 id: user.id,
//                 email: user.email,
//                 role: user.role,
//               };
//             })
//         );
//     } catch (err) {
//         console.log('Error', err)
//         res.status(500).json({error : err.message});
//     }
// } 




module.exports = { editPlant, deletePlant, addPlant ,getAllPlant, getAllPlantFromFamily  };