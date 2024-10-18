export default function Navbar() {
    return (
       <nav className="border-bottom border-red-50 p-3 mb-10">
            <ul className="flex gap-3 ">
            <li> <a className="underline p-2 hover:text-red-300 active:text-blue-400" href = "/"> State Hook </a></li>
            <li> <a className="underline p-2 hover:text-red-300 active:text-blue-400"  href = "/use-effect-hook"> Use Effect Hook </a></li>
            <li> <a className="underline p-2 hover:text-red-300 visited:text-blue-800"  href = "/use-ref-hook"> Use Ref </a></li>
            </ul>
       </nav>
    )
}