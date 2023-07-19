const { Router } = require("express");
const { editPlant, deletePlant, addPlant ,getAllPlant, getAllPlantFromFamily  } = require("./controller");
const { authorization, isAdmin } = require("../users/validator");

const router = Router();

// router.get("/", authorization, browse);
router.get("/allplantfrom", getAllPlantFromFamily);
router.get("/plant", getAllPlant);
router.put("/:id",authorization, isAdmin, editPlant);
router.post("/plant/add",authorization, addPlant);
router.delete('/:id',authorization, isAdmin, deletePlant);

module.exports = router;