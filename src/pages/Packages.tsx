import LinkImg from "../assets/link.svg";
import PackagesBanner from "../assets/packagebanner.png";
import Heading from "../components/Heading";
import RecentWork from "../components/RecentWork";
import Testimonial from "../components/Testimonial";
import Avatar from "../assets/avatar.webp";
interface Props {}
interface PackageHighlighsType {
    title: string;
    description: string;
}

function Packages(props: Props) {
    const {} = props
    const packageHighlights: PackageHighlighsType[] = [
        {
            title: "Top Notch Design",
            description: "We design great looking websites that stand out. We use the latest design trends and techniques to make your website look great."
        },
        {
            title: "Development",
            description: "We build your website using the latest technologies and frameworks. We use the best tools to make sure your website is fast and secure."
        },
        {
            title: "Performance Optimized",
            description: "We focus heavily on performance optimizations. Whether it's image optimization or website load speed, we have got you covered."
        },
        {
            title: "Responsive Design",
            description: "Your website will look amazing on any device. We make sure your website looks great on mobile, tablet, and desktop."
        },
        {
            title: "Search Engine Optimized",
            description: "We make sure you get found on Google. We use the latest SEO techniques to make sure your website is optimized for search engines."
        },
        {
            title: "Contact Forms",
            description: "We know that you want to get reached out. We make sure you get all the leads you need. We integrate your website with your favorite email marketing service."
        },
        {
            title: "Revisions",
            description: "We make sure you are happy with the website. We provide revisions until you are happy with the website."
        },
        {
            title: "Analytics and Tracking",
            description: "We make sure you know how your website is performing. We integrate your website with Google Analytics and Google Search Console."
        },
        {
            title: "Built by experts",
            description: "We are the people behind websites like Algochurn and TailwindMasterKit. We have been building websites for over 5+ years now and we know what we are doing."
        }
    ];
    return (
        <>
            <div className="mx-auto mt-20 flex flex-col w-full max-w-7xl items-center gap-8 px-6">
                <div className="flex flex-col lg:flex-row w-full items-start gap-10">
                    <div className="max-w-sm text-center lg:text-start mx-auto lg:mx-0 space-y-4">
                        <h4 className="text-xl text-sky-600">Landing Page Development</h4>
                        <h2 className="text-5xl font-bold">$4,995</h2>
                        <p className="text-neutral-500">
                            A landing page can make or break your business. We create world-class, professional
                            landing pages that convert and help you achieve your sales targets.
                        </p>
                        <button className="flex mx-auto lg:mx-0 items-center gap-2 rounded-md bg-neutral-900 px-4 py-3 text-white transition duration-200 hover:bg-neutral-700">
                            Buy Package
                            <img src={LinkImg} alt="Go" className="size-5 opacity-60" />
                        </button>
                    </div>
                    <div className="flex flex-1 rounded-xl bg-linear-to-r from-neutral-100 via-neutral-50 to-transparent p-1">
                        <div className="h-full w-full rounded-[calc(var(--radius-xl)-2px)] overflow-hidden">
                            <img src={PackagesBanner} alt="Banner" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className="mt-20 flex w-full flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                    <div className="w-full lg:max-w-sm lg:pr-16">
                        <h2 className="text-3xl">What's Included</h2>
                    </div>
                    <div className="w-full lg:flex-1 items-start space-y-4">
                        {packageHighlights.map(({ title, description }: PackageHighlighsType) => (
                            <div key={title} className="text-start">
                                <span className="font-medium">{title}</span> — <p className="inline text-neutral-600">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10">
                    <Heading
                        title="Some of the websites that we have built"
                        subtitle="A look at some of the amazing websites that we've built recently."
                    />
                </div>
                <div className="mt-10">
                    <RecentWork />
                </div>
                <div className="mt-20">
                    <Testimonial
                        avatar={Avatar}
                        userName="Mike Ehrmantraut"
                        designation="Bad Cop"
                        feedback="Agenlabs helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled."
                    />
                </div>
            </div>
        </>        
    )
}

export default Packages
