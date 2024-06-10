import { Router } from "express";
import {
    employmentDataGet,
    employmentDataInsert,
    employmentColumnData
} from "../controllers/employment.controller.js";


const router = Router()

router.route("/data_get").post(employmentDataGet)
router.route("/data_insert").post(employmentDataInsert)
router.route("/data_column").get(employmentColumnData)

export default router