import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import {
    IconBook,
    IconMusic,
    IconPalette,
    IconRobot,
    IconCamera,
    IconStar, 
  } from "@tabler/icons-react";
  

export default function Club() {
  const clubs = [
    {
      title: "Literature Club",
      description: "Dive into the world of books, poetry, and creative writing.",
      header: <Skeleton />,
      icon: <IconBook className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Music Club",
      description: "Unleash your inner musician through jams and concerts.",
      header: <Skeleton />,
      icon: <IconMusic className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Art Club",
      description: "Explore your creativity with painting, sketching, and crafts.",
      header: <Skeleton />,
      icon: <IconPalette className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Robotics Club",
      description: "Build, code, and compete with innovative robots.",
      header: <Skeleton />,
      icon: <IconRobot className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Sports Club",  // Keeping the title but removing the icon
      description: "Join and play in various sports, from football to basketball.",
      header: <Skeleton />,
      icon: <Skeleton />, // Placeholder for the icon
    },
    {
      title: "Photography Club",
      description: "Capture moments and master the art of photography.",
      header: <Skeleton />,
      icon: <IconCamera className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Drama Club",
      description: "Perform, direct, and enjoy the art of theater.",
      header: <Skeleton />,
      icon: <IconMic className="h-4 w-4 text-neutral-500" />,
    },
  ];

  const members = [
    // Members array remains unchanged
  ];

  function Skeleton() {
    return (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
    );
  }

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <BentoGrid className="max-w-4xl mx-auto">
          {clubs.map((club, i) => (
            <BentoGridItem
              key={i}
              title={club.title}
              description={club.description}
              header={club.header}
              icon={club.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={members} />
      </div>
    </TracingBeam>
  );
}
