import { HomeIcon, File, UsersRound } from "lucide-react"
import Link from "next/link";

import {NavButton} from "./NavButton";
import { ThemeToggle } from "./ThemeToggle";

export default function Header(){
    return (
        <header className="bg-background h-12 p-2 border-b sticky top-0 z-20">
            <div className="flex h-8 items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <NavButton icon={HomeIcon} label="Home" href="/home" />
                    <Link href="/home" className="flex justify-center items-center gap-2 h-full" title="Home">
                        <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
                            Computer Repair Shop
                        </h1>
                    </Link>
                </div>

                <div className="flex items-center">
                    <ThemeToggle />
                    <NavButton icon={File} label="tickets" href="/tickets" />
                    <NavButton icon={UsersRound} label="customers" href="/customers" />
                </div>
            </div>

        </header>
    )
}