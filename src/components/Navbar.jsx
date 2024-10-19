export default function Navbar() {
    const navbarLinks = [
        {label: 'State Hook', link : '/'},
        {label: 'Use Effect Hook', link : '/use-effect-hook'},
        {label: 'Use Memoization Hook', link : '/use-memoization'},
        {label: 'Use Context Hook', link : '/use-context-hook'},
        {label: 'Use Deferred Hook', link : '/use-deferred-hook'},
        {label: 'Use Reducer Hook', link : '/use-reducer-hook'},
]
//useDeferredValue
    return (
       <nav className="border-bottom border-red-50 p-3 mb-10">
            <ul className="flex gap-3 ">
                {navbarLinks.map(nav => (
                    <li key = {nav.label}> <a className="underline p-2 hover:text-red-300 visited:text-blue-800"  href ={nav.link}> {nav.label} </a></li>
                ))}            
            </ul>
       </nav>
    )
}