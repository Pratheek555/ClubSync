import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "./Textbox";
import { cn } from "../../utils/cn";
import { WavyBackground } from "../ui/wavy-background";
import Navibar from "../../common/navbar";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import axios from "axios"; // Import axios for HTTP requests

const animals = [
    { label: "Photography", value: "Photography", description: "People Interested in photography" },
    { label: "Web development", value: "Web development", description: "People interested in learning web development" },
    { label: "Game Development", value: "Game development", description: "People Interested in Game Development" },
    { label: "Cloud and DevOps", value: "Cloud and Devops", description: "People Interested in Cloud and DevOps" },
    { label: "BlockChain", value: "BlockChain", description: "People Interested in blockchain" },
    { label: "Dance", value: "Dance", description: "People Interested in Dance" },
];

export default function ClubCreation() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [interestFields, setInterestFields] = useState([""]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare data for backend
        const data = {
            username,
            email,
            password,
            name,
            interests: interestFields.filter(Boolean), // Remove empty fields
        };

        try {
            const response = await axios.post("http://172.19.104.85:5000/api/auth/register", data);
            console.log("Response:", response.data);
            // Handle success response (e.g., redirect or show success message)
        } catch (error) {
            console.error("Error:", error);
            // Handle error response (e.g., show error message)
        }
    };

    const handleAddField = () => {
        if (interestFields.length < 3) {
            setInterestFields([...interestFields, ""]);
        }
    };

    const handleFieldChange = (index, value) => {
        const newFields = [...interestFields];
        newFields[index] = value; // Assign only the string value
        setInterestFields(newFields);
    };

    return (
        <div className="bg-black min-h-screen flex flex-col items-center text-white">
            <WavyBackground className="flex-grow flex items-center justify-center w-full">
                <div className="max-w-md w-full p-4 md:p-8 shadow-input bg-white dark:bg-black rounded-none md:rounded-2xl">
                    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
                        Amen to the New Journey!
                    </h2>
                    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center">
                        Create the Club of your Dreams and Inspire your peers!
                    </p>

                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="fullname">Full Name</Label>
                                <Input
                                    id="fullname"
                                    placeholder="Full Name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    placeholder="Username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </LabelInputContainer>
                        </div>

                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                placeholder="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </LabelInputContainer>

                        <Label>Interested Fields</Label>
                        {interestFields.map((field, index) => (
                            <Autocomplete
                                key={index}
                                label="Select a Category"
                                value={field}
                                className="max-w-xs mb-4"
                                onSelect={(selectedValue) => handleFieldChange(index, selectedValue)} // Ensure only string value is passed
                            >
                                {animals.map((animal) => (
                                    <AutocompleteItem key={animal.value} value={animal.value}>
                                        {animal.label}
                                    </AutocompleteItem>
                                ))}
                            </Autocomplete>
                        ))}

                        <button
                            type="button"
                            onClick={handleAddField}
                            disabled={interestFields.length >= 3}
                            className={`shadow-[0_0_0_3px_#000000_inset] px-6 py-2 my-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold ${interestFields.length >= 3 ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            Add more +
                        </button>

                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                        >
                            Login &rarr;
                            <BottomGradient />
                        </button>

                        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                    </form>
                </div>
            </WavyBackground>
        </div>
    );
}

const BottomGradient = () => (
    <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
);

const LabelInputContainer = ({ children, className }) => (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
    </div>
);
