import Images11 from "../assets/8.webp";
import Images12 from "../assets/7.webp";
import Images21 from "../assets/10.webp";
import Images22 from "../assets/1.webp";
import Images31 from "../assets/5.webp";
import Images32 from "../assets/6.webp";
import Images41 from "../assets/4.webp";
import Images42 from "../assets/9.webp";

interface RecentWorkType {
    title: string;
    description: React.ReactElement;
    images: [string, string]
};

function RecentWork() {
    const RecentWorks: RecentWorkType[] = [
        {
            title: "Algochurn",
            description: <>Practice the most popular coding questions asked in a technical interview round. <br />Used by 1000+ registered users preparing for technical interviews.</>,
            images: [ Images11, Images12 ]
        },
        {
            title: "Tailwind Master Kit",
            description: <>Get beautiful, responsive, professionally developed Tailwind UI components and build your website quicker <br />Worry less about responsive and beautiful UI, let Tailwind Master Kit handle the complexity.</>,
            images: [ Images21, Images22 ]
        },
        {
            title: "Creme Digital",
            description: <>Commonsense solutions that achieve marketing objectives and reach business goals <br />Since 2015, Creme Digital's solutions have supported brands from virtually every industry</>,
            images: [ Images31, Images32 ]
        },
        {
            title: "Invoker Labs",
            description: <>Delivering magical Web3 experiences with a wide range of products and services. <br />Flagship products include Nearsend, Nearblocks, nKYC and Route ag.</>,
            images: [ Images41, Images42 ]
        },
    ]

    return (
        <>
            <div className="max-w-7xl h-auto">
                <div className="flex flex-col gap-44 items-center justify-center">
                    {RecentWorks.map(({title, description, images}: RecentWorkType): React.ReactNode => (
                        <div className="flex flex-col lg:flex-row gap-4 items-center lg:ml-10 mx-auto">
                            <div className="flex flex-col text-center lg:text-start items-start lg:mr-15">
                                <h4 className="text-2xl text-neutral-700 font-semibold tracking-wider leading-snug mb-5 mx-auto lg:mx-0">{title}</h4>
                                <p className="max-w-xs text-sm tracking-wider text-neutral-500 leading-6 mb-5">{description}</p>
                                <div className="group mx-auto lg:mx-0">
                                    <button className="px-4 py-2 bg-black text-white rounded-lg group-hover:bg-neutral-700 transition duration-200">Live Preview</button>
                                </div>
                            </div>
                            {images.map((image: string): React.ReactNode => (
                                <div className="rounded-lg overflow-hidden">
                                    <img src={image} alt={title} className="h-60 object-cover object-top-left rounded-lg" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default RecentWork
