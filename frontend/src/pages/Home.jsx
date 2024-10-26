import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import Navibar from "../common/navbar";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { cn } from "../utils/cn"
import { Spotlight } from "../components/ui/Spotlight";

export default function Home() {
    const words = [
        { text: "A_" },
        { text: "place_" },
        { text: "where_" },
        { text: "Students_" },
        { text: "and_" },
        { text: "Clubs_" },
        { text: "Sync!" },
    ];

    return (
        <div className="bg-black min-h-screen text-white">
            <Navibar />
            <div className="h-[40rem] w-full rounded-md flex flex-col items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />

                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-10">
                    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        ClubSync
                    </h1>
                    <p className="mt-2 font-normal text-base text-neutral-300 text-center">
                        Closing the Gap between the clubs you want to join
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center">

                    <TypewriterEffectSmooth words={words} />
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-0 md:space-x-2 mt-4">
                        <button className="w-40 h-10 rounded-xl bg-white text-black text-sm">
                            Join now
                        </button>
                        <button className="w-40 h-10 rounded-xl bg-black border border-white text-white text-sm">
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
