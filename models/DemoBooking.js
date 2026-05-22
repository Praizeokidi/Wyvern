import mongoose from "mongoose";

const demoBookingSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        company: String,
        phone: String,
        message: String,
    },
    { timestamps: true }
);

export default mongoose.models.DemoBooking ||
    mongoose.model("DemoBooking", demoBookingSchema);