"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/lib/validation"; // your zod schema





export default function WyvernFormModal({ open, setOpen }) {
    const [tab, setTab] = useState("personal");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onSubmit"
    });

    // ✅ ADD HERE
    useEffect(() => {
        setValue("type", tab);
    }, [tab, setValue]);

    const personalFile = watch("personalFile");
    const businessFile = watch("businessFile");

    // const onSubmit = (data) => {
    //     console.log("FORM DATA:", data);
    // };

    // const onSubmit = async (data) => {
    //     try {
    //         const formData = new FormData();

    //         Object.entries(data).forEach(([key, value]) => {
    //             if (value instanceof FileList) {
    //                 formData.append(key, value?.[0]);
    //             } else {
    //                 formData.append(key, value);
    //             }
    //         });

    //         formData.append("type", tab);

    //         const res = await fetch("/api/onboarding", {
    //             method: "POST",
    //             body: formData,
    //         });

    //         const result = await res.json();

    //         if (!res.ok) {
    //             console.error("SERVER ERROR ❌", result);
    //             alert("Server error — check console");
    //             return;
    //         }

    //         console.log("FORM SUBMITTED ✅", result);

    //         // ✅ SHOW SUCCESS
    //         setSuccessMessage("Thanks For Requesting a Line. You'll receive an email shortly");

    //         // ✅ RESET FORM
    //         reset();

    //     } catch (err) {
    //         console.error("SUBMIT ERROR ❌", err);
    //     }
    // };

    const onSubmit = async (data) => {


        console.log("SUBMIT PAYLOAD:", data);

        try {
            setLoading(true); // 🔥 START LOADING

            setSuccessMessage("");

            const formData = new FormData();

            // append all fields
            Object.entries(data).forEach(([key, value]) => {
                if (value instanceof FileList) {
                    if (value.length > 0) {
                        formData.append(key, value[0]);
                    }
                } else {
                    formData.append(key, value);
                }
            });

            // IMPORTANT
            formData.append("type", tab);

            const res = await fetch("/api/onboarding", {
                method: "POST",
                body: formData,
            });

            const result = await res.json();

            console.log("SERVER RESPONSE:", result);

            if (!res.ok) {
                setSuccessMessage(
                    result.error || "Something went wrong"
                );
                return;
            }

            setSuccessMessage(
                "Successfully submitted. You will receive an email shortly."
            );

            reset();

        } catch (err) {
            setSuccessMessage(
                "Network error. Please try again."
            );
        } finally {
            setLoading(false); // 🔥 ALWAYS STOP LOADING
        }
    };

    const onError = (errors) => {
        console.log("FORM ERRORS ❌", errors);
    };

    const tabVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };




    return (
        <>
            {open && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-white w-lg max-w-4xl text-gray-900 rounded-2xl shadow-2xl overflow-hidden"
                    >

                        {/* HEADER */}
                        <div className="flex justify-between items-center p-5 bg-gray-50">
                            <h2 className="font-bold text-lg tracking-tight">
                                Start Your WYVERN Line
                            </h2>

                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-500 hover:text-black text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        {/* TAB SWITCHER */}
                        <div className="flex bg-gray-100 p-1">
                            {["personal", "business"].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setTab(item)}
                                    className="relative flex-1 py-3 font-semibold capitalize"
                                >
                                    {tab === item && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-blue-900 rounded-lg"
                                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                        />
                                    )}
                                    <span className={`relative z-10 ${tab === item ? "text-white" : "text-gray-600"}`}>
                                        {item}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* FORM AREA */}
                        <div className="p-6 max-h-[80vh] overflow-y-auto bg-white">

                            {successMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mb-4 p-4 rounded-lg bg-green-100 text-green-800 font-medium text-sm"
                                >
                                    {successMessage}
                                </motion.div>
                            )}

                            <AnimatePresence mode="wait">

                                {tab === "personal" && (
                                    <motion.form
                                        onSubmit={handleSubmit(onSubmit, onError)}
                                        key="personal"
                                        variants={tabVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >

                                        <div>
                                            <input
                                                {...register("firstName")}
                                                className="input"
                                                placeholder="First Name"
                                            />

                                            {errors.firstName && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.firstName.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register("lastName")}
                                                className="input"
                                                placeholder="Last Name" />

                                            {errors.lastName && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.lastName.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register("phone")}
                                                className="input"
                                                placeholder="Mobile Number" />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.phone.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register("personalEmail")}
                                                className="input"
                                                placeholder="personalEmail" />
                                            {errors.personalEmail && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.personalEmail.message}
                                                </p>
                                            )}
                                        </div>
                                        <div >
                                            <input
                                                {...register("residentialAddress")}
                                                className="input"
                                                placeholder="Residential Address" />
                                            {errors.residentialAddress && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.residentialAddress.message}
                                                </p>
                                            )}
                                        </div>
                                        <div >
                                            <input
                                                {...register("ninNumber")}
                                                className="input"
                                                placeholder="NIN Number" />
                                            {errors.ninNumber && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.ninNumber.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <select
                                                {...register("gender")}
                                                className="input">
                                                <option value="">Gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>

                                            {errors.gender && (
                                                <p className="text-red-500 text-sm">{errors.gender.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register("dob")}
                                                type="date"
                                                className="input"
                                            />
                                            {errors.dob && (
                                                <p className="text-red-500 text-sm">{errors.dob.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <select
                                                {...register("idType")}
                                                className="input">

                                                <option value="">ID Type</option>
                                                <option value="national">National ID</option>
                                                <option value="Passport">International Passport</option>
                                                <option value="drivers">Drivers License</option>
                                                <option value="voters">Voters Card</option>
                                            </select>

                                            {errors.idType && (
                                                <p className="text-red-500 text-sm">{errors.idType.message}</p>
                                            )}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="flex items-center justify-between px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition">

                                                <span className="text-gray-600 text-sm">
                                                    Choose File
                                                </span>

                                                <span className="text-xs text-gray-500 truncate max-w-[150px]">
                                                    {personalFile && personalFile.length > 0 ? personalFile[0].name : "Upload ID document"}
                                                </span>
                                                <div>
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        {...register("personalFile")}
                                                    />

                                                    {errors.personalFile && (
                                                        <p className="text-red-500 text-sm">
                                                            {errors.personalFile.message}
                                                        </p>
                                                    )}
                                                </div>
                                            </label>
                                        </div>


                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="btn-primary md:col-span-2 disabled:opacity-50"
                                        >
                                            {loading ? "Submitting..." : "Submit Personal Request"}
                                        </button>
                                    </motion.form>
                                )}

                                {tab === "business" && (
                                    <motion.form
                                        onSubmit={handleSubmit(onSubmit, onError)}
                                        key="business"
                                        variants={tabVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        <div>
                                            <input
                                                {...register("businessName")}
                                                className="input"
                                                placeholder="Business Name"
                                            />
                                            {errors.businessName && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.businessName.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register("cacRegNo")}
                                                className="input"
                                                placeholder="CAC Reg No"
                                            />
                                            {errors.cacRegNo && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.cacRegNo.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register("phone")}
                                                className="input"
                                                placeholder="Mobile Number"
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.phone.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register("businessEmail")}
                                                className="input"
                                                placeholder="Email"
                                            />
                                            {errors.businessEmail && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.businessEmail.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register("businessAddress")}
                                                className="input md:col-span-2"
                                                placeholder="Business Address"
                                            />
                                            {errors.businessAddress && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.businessAddress.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>

                                            <input
                                                {...register("nimc")}
                                                className="input"
                                                placeholder="NIMC Number"
                                            />
                                            {errors.nimc && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.nimc.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <select
                                                {...register("verificationType")}
                                                className="input"
                                            >
                                                <option value="">Verification Type</option>
                                                <option value="cac">CAC Registration</option>
                                                <option value="national">National ID</option>
                                                <option value="passport">Passport</option>
                                                <option value="drivers">Driver’s License</option>
                                            </select>
                                            {errors.verificationType && (
                                                <p className="text-red-500 text-sm">{errors.verificationType.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <input
                                                {...register("registrationDate")}
                                                type="date"
                                                className="input"
                                            />

                                            {errors.registrationDate && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.registrationDate.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="flex items-center justify-between px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition">

                                                <span className="text-gray-600 text-sm">
                                                    Choose File
                                                </span>

                                                <span className="text-xs text-gray-500 truncate max-w-[150px]">
                                                    {businessFile && businessFile.length > 0
                                                        ? businessFile[0].name
                                                        : "Upload business document"}  </span>
                                                <div>
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        {...register("businessFile")}
                                                    />
                                                    {errors.businessFile && (
                                                        <p className="text-red-500 text-sm">
                                                            {errors.businessFile.message}
                                                        </p>
                                                    )}
                                                </div>
                                            </label>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="btn-primary md:col-span-2 disabled:opacity-50"
                                        >
                                            {loading ? "Submitting..." : "Submit Business Request"}
                                        </button>
                                    </motion.form>
                                )}

                            </AnimatePresence>

                        </div>
                    </motion.div >
                </div >
            )
            }

            {/* STYLES (utility upgrade) */}
            <style jsx>{`
                .input {
                    padding: 10px 12px;
                    border-radius: 10px;
                    border: 1px solid #e5e7eb;
                    outline: none;
                    transition: 0.2s;
                    background: #fff;
                }

                .input:focus {
                    border-color: #0f2a74;
                    box-shadow: 0 0 0 3px rgba(16, 32, 77, 0.15);
                }

                .file-input {
                    padding: 10px;
                    border-radius: 10px;
                    border: 1px dashed #cbd5e1;
                }

                .btn-primary {
                    background: #0f2a74;
                    color: white;
                    padding: 12px;
                    border-radius: 12px;
                    font-weight: 600;
                    transition: 0.2s;
                }

                .btn-primary:hover {
                    background: #1d4ed8;
                    transform: translateY(-1px);
                }
            `}</style>
        </>
    );
}