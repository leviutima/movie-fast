import { ToggleTheme } from "@/context/theme/themeTogle";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";

export function Header() {
    return(
        <header className="p-5 flex justify-around items-center">
            <nav className="flex items-end gap-2">
                <h1 className="font-bold text-4xl">Movie</h1>
                <h1 className="italic ">Fast</h1>
            </nav>
            <div className="flex items-center gap-4">
                <ToggleTheme />
                <Separator orientation="vertical" className="h-6"/>
                <Link to={'/sign-in'}>
                    <Button className="w-20">Entrar</Button>
                </Link>
            </div>
        </header>
    )
}