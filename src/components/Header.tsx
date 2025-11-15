import Logo from '../assets/logo.svg';
import Menu from '../assets/menu.svg';
import { useNavigate, Link } from 'react-router-dom';
interface HeaderLinkType {
    tabId: number;
    tabName: string;
    tabNav: string;
}

function Header() {
    const navigate = useNavigate();
    const headerLink: HeaderLinkType[] = [
        {
            tabId: 1,
            tabName: "Work",
            tabNav: "/work"
        },
        {
            tabId: 2,
            tabName: "Services",
            tabNav: "/#services"
        },
        {
            tabId: 3,
            tabName: "Packages",
            tabNav: "/packages"
        },
        {
            tabId: 4,
            tabName: "Templates",
            tabNav: "/templates"
        },
        {
            tabId: 5,
            tabName: "Blog",
            tabNav: "/blog"
        },
    ]

    const handleMenu = () => {

    }

    return (
        <>
            <div className="w-full relative lg:max-w-7xl flex items-center justify-between px-4 h-15 mx-auto">
                <div className="relative flex gap-2 items-center cursor-pointer" onClick={() => {navigate('/')}}>
                    <div className="md:hidden">
                        <img src={Menu} alt="Menu" className="p-1 mr-3 cursor-pointer bg-neutral-100" onClick={handleMenu} />
                    </div>
                    <img src={Logo} alt="Logo" className="size-4" />
                    <span className="text-lg font-display font-semibold tracking-wide">Agenlabs</span>
                </div>
                <div id="mobile-menu" className="absolute h-full w-full hidden top-0 translate-y-15 bg-neutral-300">

                </div>
                <div className="relative gap-8 text-md hidden md:flex">
                    {headerLink.map(({ tabId, tabName, tabNav }: HeaderLinkType): React.ReactNode => (
                        <Link key={tabId} to={tabNav} className="cursor-pointer text-neutral-500 hover:text-neutral-700 transition-colors duration-200">{tabName}</Link>
                    ))}
                </div>
                <div className="relative">
                    <button className="relative inline-flex rounded-full p-1 bg-linear-to-r from-indigo-600 via-sky-600 to-sky-500 group cursor-pointer hover:shadow-lg transition duration-200">
                        <span className="px-6 py-2 rounded-full bg-neutral-200 text-neutral-600 transition duration-200">Contact</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header
