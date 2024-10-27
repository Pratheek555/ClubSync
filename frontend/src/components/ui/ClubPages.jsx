import React from "react";
import { useLocation } from "react-router-dom";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import Navibar from "../../common/navbar";

export default function ClubPages() {
    const location = useLocation();
    const people = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 5,
            name: "Tyler Durden",
            designation: "Soap Developer",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        },
        {
            id: 6,
            name: "Dora",
            designation: "The Explorer",
            image:
                "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
        },
    ];
    const { club } = location.state || {};

    const dummyContent = [
        {
            title: club.title,
            description: (
                <>
                    <p>{club.description}</p>
                    <p>
                        Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
                        veniam in commodo id reprehenderit adipisicing. Proident duis
                        exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
                    </p>
                    <p>
                        Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
                        reprehenderit deserunt amet laborum consequat adipisicing officia qui
                        irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
                        Amet culpa officia aliquip deserunt veniam deserunt officia
                        adipisicing aliquip proident officia sunt.
                    </p>
                </>
            ),
            image:
                "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    if (!club) {
        return <div>No club data available.</div>;
    }

    return (
        <div className="flex flex-col bg-black min-h-screen text-white">
            <Navibar />
            <div className="flex flex-col lg:flex-row lg:justify-between items-center px-6 py-10">
                <div className="lg:w-3/4 max-w-5xl">
                    <TracingBeam className="relative">
                        {dummyContent.map((item, index) => (
                            <div key={`content-${index}`} className="mb-12">
                                <h2 className="text-white bg-black rounded-full text-sm w-fit px-4 py-1 mb-4">
                                    {item.badge}
                                </h2>

                                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

                                <div className="text-sm prose prose-sm dark:prose-invert">
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt="blog thumbnail"
                                            className="rounded-lg mb-6 object-cover w-full h-auto"
                                        />
                                    )}
                                    {item.description}
                                </div>
                            </div>
                        ))}
                    </TracingBeam>
                </div>

                <div className="lg:w-20 mt-10 lg:mt-0 flex sm:flex-row lg:flex-col">
                    <AnimatedTooltip items={people} />
                </div>
            </div>
        </div>
    );
}
