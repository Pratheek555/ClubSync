import React, { useState, useEffect } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { useNavigate } from "react-router-dom";

export function ClubsChaptersGrid() {
    const [items, setItems] = useState([]); // State to hold club data
    const [loading, setLoading] = useState(true); // State to manage loading
    const navigate = useNavigate();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                // Replace with your actual API endpoint
                const response = await fetch("http://172.19.104.85:5000/api/clubs");
                if (!response.ok) {
                    throw new Error("Failed to fetch club data");
                }
                const data = await response.json();

                // Check if data has `id`, if not, log the response to debug
                if (!data || !data[0]?.id) {
                    console.error("API response is missing `id` for items:", data);
                }

                // Map data to match structure needed for rendering
                const formattedData = data.map((item, index) => ({
                    id: item._id, // Ensure `id` exists here
                    title: item.name,
                    description: item.description,
                    header: <Skeleton />,
                    className: index % 2 === 0 ? "md:col-span-2" : "md:col-span-1",
                }));

                setItems(formattedData);
            } catch (error) {
                console.error("Error fetching club data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    const handleClubClick = (item) => {
        // Only pass serializable data to `navigate`
        const { id, title, description, className } = item;
        navigate(`/club/${id}`, { state: { club: { id, title, description, className } } });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <BentoGrid className="max-w-4xl my-10 mx-auto md:auto-rows-[20rem] sm:mx-5">
                {items.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => handleClubClick(item)}
                        className={`cursor-pointer ${item.className}`} // Make the div clickable
                    >
                        <BentoGridItem
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={item.className}
                        />
                    </div>
                ))}
            </BentoGrid>
        </div>
    );
}

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
