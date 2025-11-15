import Heading from "../components/Heading"
import BannerOne from "../assets/2.webp";
import BannerTwo from "../assets/3.webp";
import Testimonial from "../components/Testimonial";
import Avatar from "../assets/avatar2.webp";

interface Props {}

function Templates(props: Props) {
    const {} = props

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="mt-20">
                    <Heading
                        title="Website templates that stand out"
                        subtitle="Carefully crafted website templates that are ready to be customized and launched."
                    />
                </div>
                <div className="mt-20 flex flex-col xl:flex-row gap-2 h-auto mx-auto justify-between items-start">
                    <div className="flex flex-col gap-3 max-w-sm text-center xl:text-left justify-start mx-auto xl:mx-0">
                        <h2 className="text-3xl text-neutral-700 font-semibold">Foxtrot</h2>
                        <p className="text-md text-neutral-600">Foxtrot is a SaaS marketing template that has a modern design with a pinch of class.</p>
                        <p className="mt-1 text-sm text-neutral-600">Built with Next.js and Tailwind CSS, it is perfect for launching your landing page</p>
                        <div className="flex gap-3 max-w-sm justify-center xl:justify-start">
                            <span className="p-1 bg-neutral-200 rounded-md text-xs text-neutral-600">NextJS</span>
                            <span className="p-1 bg-neutral-200 rounded-md text-xs text-neutral-600">Tailwind CSS</span>
                            <span className="p-1 bg-neutral-200 rounded-md text-xs text-neutral-600">Framer Motion</span>
                            <span className="p-1 bg-neutral-200 rounded-md text-xs text-neutral-600">MDX</span>
                            <span className="p-1 bg-neutral-200 rounded-md text-xs text-neutral-600">React</span>
                        </div>
                        <div className="flex mx-auto xl:mx-0 gap-4 mt-5">
                            <button className="p-2 cursor-pointer rounded-md hover:bg-neutral-700 transition duration-200 bg-neutral-900 text-neutral-200">Live Preview</button>
                            <button className="p-2 cursor-pointer rounded-md border border-neutral-900 bg-white hover:bg-neutral-100 hover:shadow-md transition duration-200 text-neutral-900">Purchase</button>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row mx-auto xl:mx-0 mt-15 xl:mt-0 gap-5 items-start justify-start">
                        <img src={BannerOne} alt="Banner One" className="w-90 rounded-md object-contain" />
                        <img src={BannerTwo} alt="Banner Two" className="w-90 rounded-md object-contain" />
                    </div>
                </div>
                <div className="mt-20">
                    <Testimonial
                        avatar={Avatar}
                        userName="Charles McGill"
                        designation="Jealous Lawyer"
                        feedback="Agenlabs helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled."
                    />
                </div>
            </div>
        </>        
    )
}

export default Templates
