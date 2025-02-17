import React from "react";
import { Label } from "../ui/label";
import { Input } from "./Textbox";
import { cn } from "../../utils/cn"; // Updated the path for utils function

import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { WavyBackground } from "../ui/wavy-background";
import Navibar from "../../common/navbar"; // Assuming Navibar is the navbar component

const animals = [
    { label: "Photography", value: "Photography", description: "People Interested in photography" },
    { label: "Web development", value: "Web development", description: "People interested in learning web development" },
    { label: "Game Development", value: "Game development", description: "People Interested in Game Development" },
    { label: "Cloud and DevOps", value: "Cloud and Devops", description: "People Interested in Cloud and DevOps" },
    { label: "BlockChain", value: "BlockChain", description: "People Interested in blockchain" },
    { label: "Dance", value: "Dance", description: "People Interested in Dance" },
];

export default function ClubCreation() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="bg-black min-h-screen flex flex-col items-center text-white">
            {/* Navbar placed outside the main form container */}

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
                                <Label htmlFor="firstname">Email Address</Label>
                                <Input id="firstname" placeholder="Tyler" type="text" />
                            </LabelInputContainer>
                        </div>

                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="lastname">Password</Label>
                            <Input id="lastname" placeholder="Durden" type="text" />
                        </LabelInputContainer>




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

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
