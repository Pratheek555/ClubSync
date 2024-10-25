import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarItem,
    Link,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar
} from "@nextui-org/react"; // Ensure everything is imported
import { useState } from "react";

export default function Navibar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = ["Clubs/Chapters", "Events", "Club Post"];

    return (
        <Navbar isBordered className="bg-black text-white"> {/* Set background to black */}
            {/* Mobile Menu Toggle */}
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu state
            />

            <NavbarBrand>
                <p className="font-bold text-white">ClubSync</p> {/* Ensure brand text is white */}
            </NavbarBrand>

            {/* Desktop Menu */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="primary" href="#" className="text-white hover:text-gray-400">
                        Clubs/Chapters
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page" className="text-white font-semibold hover:text-blue-400">
                        Events {/* Set active text to blue */}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="primary" href="#" className="text-white hover:text-gray-400">
                        Club {/* <Posts> removed or ensure it's imported */}
                    </Link>
                </NavbarItem>
            </NavbarContent>

            {/* Profile Dropdown */}
            <NavbarContent as="div" justify="end">
                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            as="button"
                            className="transition-transform"
                            color="secondary"
                            name="Asdasdsadasd"
                            size="sm"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">zoey@example.com</p>
                        </DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            {/* Mobile Menu - Conditionally Render */}
            {isMenuOpen && (
                <NavbarMenu className="bg-white h-1/4 text-white"> {/* Add class to set background to black */}
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`} className="text-white hover:text-gray-400"> {/* Ensure text is white */}
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            )}
        </Navbar>
    );
}
