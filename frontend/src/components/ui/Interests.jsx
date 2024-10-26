import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/Input";
import { cn } from "../../utils/cn";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { BackgroundLines } from "./BackgroundLines";

const animals = [
    { label: "Photography", value: "Photography", description: "People Interested in photography" },
    { label: "Web development", value: "Web development", description: "People interested in learning web development" },
    { label: "Game Development", value: "Game development", description: "People Interested in Game Development" },
    { label: "Cloud and DevOps", value: "Cloud and Devops", description: "People Interested in Cloud and DevOps" },
    { label: "BlockChain", value: "BlockChain", description: "People Interested in blockchain" },
    { label: "Dance", value: "Dance", description: "People Interested in Dance" },
];

export default function Interests() {
    const [interestFields, setInterestFields] = useState([""]);
    const [clubName, setClubName] = useState("");
    const [description, setDescription] = useState("");

    const handleAddField = () => {
        if (interestFields.length < 3) {
            setInterestFields([...interestFields, ""]);
        }
    };

    const handleFieldChange = (index, value) => {
        const newFields = [...interestFields];
        newFields[index] = value;
        setInterestFields(newFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with interests:", interestFields);
    };

    return (
        <BackgroundLines>
            <div className="h-screen flex items-center justify-center">
                <div className="max-w-md w-full mx-auto p-4 md:p-8 shadow-input bg-white dark:bg-black rounded-none md:rounded-2xl">
                    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
                        Let Us Know More About You
                    </h2>
                    <form className="my-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col space-y-4 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="clubName">Club Name</Label>
                                <Input
                                    id="clubName"
                                    placeholder="Open Source Community"
                                    type="text"
                                    value={clubName}
                                    onChange={(e) => setClubName(e.target.value)}
                                />
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <Label htmlFor="description">Describe your interests and passion</Label>
                                <Input
                                    id="description"
                                    placeholder="Write more about the club"
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </LabelInputContainer>

                            <Label>Interested Fields</Label>
                            {interestFields.map((field, index) => (
                                <Autocomplete
                                    key={index}
                                    label="Select a Category"
                                    value={field}
                                    className="max-w-xs mb-4"
                                    onSelect={(selectedValue) => handleFieldChange(index, selectedValue)}
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
                                className={`shadow-[0_0_0_3px_#000000_inset] px-6 py-2 my-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold ${interestFields.length >= 3 ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                Add more +
                            </button>
                        </div>

                        <button
                            className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow"
                            type="submit"
                        >
                            Continue &rarr;
                        </button>
                    </form>
                </div>
            </div>
        </BackgroundLines>
    );
}

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
