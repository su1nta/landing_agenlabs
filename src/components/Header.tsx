import { useState } from 'react';
import Logo from '../assets/logo.svg';
import Menu from '../assets/menu.svg';
import Close from "../assets/close.svg";
import { useNavigate, Link } from 'react-router-dom';
interface HeaderLinkType {
    tabId: number;
    tabName: string;
    tabNav: string;
}

function Header() {
    const navigate = useNavigate();
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
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
    ];

    const handleMenu = () => {
        setMenuIsOpen((isOpen:boolean) => (!isOpen));
    }

    const handleLinkVisit = () => {
        setMenuIsOpen(false);
    }
    return (
        <>
            <div className="w-full relative lg:max-w-7xl flex items-center justify-between px-4 h-15 mx-auto">
                <div className="relative flex gap-2 items-center cursor-pointer">
                    <div className="md:hidden">
                        <img src={menuIsOpen ? Close : Menu} alt="Menu" className="p-1 mr-3 cursor-pointer bg-neutral-100" onClick={handleMenu} />
                    </div>
                    <div className="flex gap-2 items-center justify-center" onClick={() => navigate('/')}>
                        <img src={Logo} alt="Logo" className="size-4" />
                        <span className="text-lg font-display font-semibold tracking-wide">Agenlabs</span>
                    </div>
                </div>
                {menuIsOpen && 
                    (<div id="mobile-menu" className="absolute rounded-lg border border-neutral-300 shadow-sm top-0 translate-y-15 bg-neutral-100 transition duration-200">
                        <div className="relative text-md flex flex-col divide-y divide-neutral-300">
                            {headerLink.map(({ tabId, tabName, tabNav }: HeaderLinkType): React.ReactNode => (
                                <Link 
                                    key={tabId} 
                                    to={tabNav}
                                    onClick={handleLinkVisit} 
                                    className="cursor-pointer px-4 py-2 text-neutral-500 hover:text-neutral-700 transition-colors duration-200">{tabName}</Link>
                            ))}
                        </div>
                    </div>)
                }
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
