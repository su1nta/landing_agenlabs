import Logo from '../assets/logo.svg';
import HeroIcon1 from '../assets/hero-icon-1.svg';
import HeroIcon2 from '../assets/hero-icon-2.svg';
import HeroIcon3 from '../assets/hero-icon-3.svg';
interface Props {}
interface FeatureType {
    id: number;
    icon: string;
    title: string;
    description: string;
}

function Hero(props: Props) {
    const {} = props
    const features: FeatureType[] = [
        {
            id: 1,
            icon: HeroIcon1,
            title: "Modern Web Apps",
            description: "Web apps that are discoverable, easy to customize with a modern tech stack to optimize your website for performance."
        },
        {
            id:2,
            icon: HeroIcon2,
            title: "Tailored design",
            description: "Custom designs tailored to your needs, providing you with a Figma file that is easy to navigate and comfortable to work with."
        },
        {
            id:3,
            icon: HeroIcon3,
            title: "Built by experts",
            description: "We are a team of Senior Software Engineers that have built and developed web apps at scale. You can trust us."
        },
    ]
    return (
        <>
            <div className="mx-auto max-w-6xl flex flex-col font-display items-center gap-4">
                <div className="flex items-center flex-col gap-10">
                    <img src={Logo} alt="Logo" className="size-10" />
                    <h1 className="text-7xl font-semibold text-neutral-700">
                        Web Apps that 
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-pink-400"> Make Sense.</span>
                    </h1>
                    <p className="max-w-2xl text-neutral-400">
                        We build website for your business that actually converts. Wonderfully designed, masterfully 
                        created websites and layouts, created by the founders of <span className="text-neutral-800">Google</span> and <span className="text-neutral-800">Facebook</span>. The ideal beginning 
                        stage for your next project.
                    </p>
                </div>
                <div className="flex gap-4 mt-10">
                    {
                        features.map(({id, icon, title, description }: FeatureType): React.ReactNode => (
                            <div key={id} className="p-2 flex gap-3">
                                <div>
                                    <div className="border-2 bg-white rounded-xl border-green-300 px-2 py-1">
                                        <img src={icon} alt="Modern Web Apps" className="mx-auto size-6" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 ml-2">
                                    <h5 className="text-md text-start text-neutral-700">{title}</h5>
                                    <p className="text-sm text-start max-w-xs text-neutral-600">
                                        {description}
                                    </p>
                                </div>
                            </div>        
                        ))
                    }
                </div>
                <div className="mt-20">
                    <button className="relative inline-flex rounded-md p-1 group cursor-pointer transition duration-200">
                         <span className="absolute inset-0 -z-10 blur-xl bg-linear-to-r from-indigo-600 via-sky-600 to-sky-500 opacity-50 group-hover:opacity-80 transition duration-200"></span>
                        <span className="px-10 py-3 rounded-sm bg-neutral-50 text-neutral-500 group-hover:text-neutral-800 transition duration-200 border border-neutral-300 text-bold">Explore Work</span>
                    </button>
                </div>
            </div>
        </>        
    )
}

export default Hero
