import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <NavLink to="/analysis" className={({ isActive }) => isActive ? "m-2 border-b-4 text-red-400 border-red-400" : "m-2"}>Meningsanalys</NavLink>
            <NavLink to="/addword" className={({ isActive }) => isActive ? "m-2 border-b-4 text-red-400 border-red-400" : "m-2"}>Lägg till ord</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "m-2 border-b-4 text-red-400 border-red-400" : "m-2"}>Om projektet</NavLink>
        </nav>
    );
}
export default Navigation;