import mongoose, { Schema } from "mongoose";

const employmentSchema = new Schema(
    {
        location: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        company: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        type: {
            type: String,
            required: true,
            trim: true,
        },
        title: {
            type: String,
            required: true,
            lowecase: true,
        },
        mode: {
            type: String,
            required: true,
            lowecase: true,
        },
    },
    {
        timestamps: true
    }
)

export const Employment = mongoose.model("Employment", employmentSchema)