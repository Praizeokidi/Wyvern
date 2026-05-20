import mongoose from "mongoose";

const onboardingSchema = new mongoose.Schema(
    {
        type: String,

        // PERSONAL
        firstName: String,
        lastName: String,

        personalEmail: String,
        phone: String,

        residentialAddress: String,
        ninNumber: String,

        gender: String,
        dob: String,
        idType: String,

        personalFile: String,

        // BUSINESS
        businessName: String,
        cacRegNo: String,

        businessEmail: String,
        businessAddress: String,

        nimc: String,
        verificationType: String,
        registrationDate: String,

        businessFile: String,
    },
    { timestamps: true }
);

export default mongoose.models.Onboarding ||
    mongoose.model("Onboarding", onboardingSchema);