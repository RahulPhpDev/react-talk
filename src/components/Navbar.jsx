export default function Navbar() {
    return (
       <nav className="border-bottom border-red-50 p-3">
            <ul className="flex gap-3 ">
            <li> <a className="underline p-2" href = "/"> State Hook </a></li>
            <li> <a className="underline p-2"  href = "/use-effect-hook"> Use Effect Hook </a></li>
            </ul>
       </nav>
    )
}