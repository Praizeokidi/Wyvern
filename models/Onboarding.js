import mongoose from "mongoose";

const onboardingSchema = new mongoose.Schema(
    {
        type: String,

        firstName: String,
        lastName: String,

        email: String,
        phone: String,

        address: String,
        nin: String,

        gender: String,
        dob: String,
        idType: String,

        businessName: String,
        cacRegNo: String,
        nimc: String,
        verificationType: String,
        registrationDate: String,

        files: [String], // Cloudinary URLs
    },
    { timestamps: true }
);

export default mongoose.models.Onboarding ||
    mongoose.model("Onboarding", onboardingSchema);