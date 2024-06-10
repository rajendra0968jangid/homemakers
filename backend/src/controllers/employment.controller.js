import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { Employment } from "../models/employment.model.js"
import { ApiResponse } from "../utils/ApiResponse.js";

const employmentDataInsert = asyncHandler(async (req, res) => {
    const { location, mode, type, title, company } = req.body

    const employmentData = await Employment.create({
        location, mode, type, title, company
    })

    if (!employmentData) {
        return res.status(500).json(
            new ApiError(500, "Something went wrong while employment data")
        )
    }

    return res.status(200).json(
        new ApiResponse(200, employmentData, "Employment Data Successfully")
    )

})
const employmentDataGet = asyncHandler(async (req, res) => {
    const { location, mode, type, company } = req.body
    if (!location && !mode && !type && !company) {
        const employmentData = await Employment.find({})
        return res.status(200).json(
            new ApiResponse(200, employmentData, "Employment Data Get Successfully")
        )
    }
    const matchCriteria = {};

    if (location) {
        matchCriteria.location = location;
    }

    if (mode) {
        matchCriteria.mode = mode;
    }

    if (type) {
        matchCriteria.type = type;
    }

    if (company) {
        matchCriteria.company = company;
    }
    const employmentData = await Employment.aggregate([
        {
            $match: matchCriteria
        }
    ])
    return res.status(200).json(
        new ApiResponse(200, employmentData, "Employment Data Get Successfully")
    )

})
const employmentColumnData = asyncHandler(async (req, res) => {
    const { column } = req.query;
    const uniqueJobs = await Employment.distinct(`${column}`);
    return res.status(200).json(
        new ApiResponse(200, uniqueJobs, "Data get successfully")
    )
})
export {
    employmentDataInsert,
    employmentDataGet,
    employmentColumnData
}
