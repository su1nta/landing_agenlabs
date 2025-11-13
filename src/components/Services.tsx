import Heading from "./Heading";
import React, { useCallback } from "react";
import ServiceIcon1 from "../assets/services/services-one.svg";
import ServiceIcon2 from "../assets/services/services-two.svg";
import ServiceIcon3 from "../assets/services/services-three.svg";
import ServiceIcon4 from "../assets/services/services-four.svg";
import ServiceIcon5 from "../assets/services/services-five.svg";
import ServiceIcon6 from "../assets/services/services-six.svg";

interface ServicesType {
    icon: string;
    title: string;
    description: string;
};
function Services() {
        const services: ServicesType[] = [
        {
            icon: ServiceIcon1,
            title: "Web App development",
            description:
                "We'll build you a website that's so good, it'll make all the other websites jealous. Trust me, not kidding.",
        },
        {
            icon: ServiceIcon2,
            title: "Web Design",
            description:
                "Your website will be so beautiful, you'll want to frame it and hang it on your wall (but please don't).",
        },
        {
            icon: ServiceIcon3,
            title: "Deployments and Hosting",
            description:
                "Get your website out there in the world, where it belongs, with our lightning-fast deployment services.",
        },
        {
            icon: ServiceIcon4,
            title: "Maintenance",
            description:
                "We keep your website running like a well-oiled machine. From optimizing performance to ensuring security, we've got you covered.",
        },
        {
            icon: ServiceIcon5,
            title: "Full-Stack Development",
            description:
                "Take your website to the next level with our full-stack development services. We've got all the skills to make your vision a reality.",
        },
        {
            icon: ServiceIcon6,
            title: "And everything else",
            description:
                "Ecommerce, landing pages, back-end heavy dashboards—you name it, we've done it and we'll do it for you.",
        },
    ];
    const handleMouseMove = useCallback((event: React.MouseEvent<HTMLElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        event.currentTarget.style.setProperty("--mouse-x", `${x}%`);
        event.currentTarget.style.setProperty("--mouse-y", `${y}%`);
    }, []);

    const handleMouseLeave = useCallback((event: React.MouseEvent<HTMLElement>) => {
        event.currentTarget.style.removeProperty("--mouse-x");
        event.currentTarget.style.removeProperty("--mouse-y");
    }, []);

    return (
        <>
            <div className="flex flex-col gap-10">
                <Heading
                    title="We Handle just about everything!"
                    subtitle="We handle everything from design to deployment to get your website shipped and ready to go!"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {
                        services.map(({ icon, title, description }: ServicesType): React.ReactNode => (
                                <article
                                    key={title}
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    className="group relative text-start overflow-hidden rounded-3xl border border-neutral-200 bg-linear-to-br from-white via-neutral-50 to-white p-6 transition hover:-translate-y-1 hover:shadow-lg [--mouse-x:50%] [--mouse-y:50%]"
                                >
                                    <span
                                        className="pointer-events-none absolute top-0 -z-10 left-0 h-full w-full origin-top-left transform-gpu rotate-0 scale-[1.35] skew-y-[8deg] skew-z-[8deg] bg-[linear-gradient(45deg,#e2e8f0_25%,transparent_25%,transparent_75%,#e2e8f0_75%),linear-gradient(45deg,#e2e8f0_25%,transparent_25%,transparent_75%,#e2e8f0_75%)] bg-size-[20px_20px] bg-position-[0_0,10px_10px] opacity-40 transition duration-500 ease-out"
                                    />
                                    <span className="pointer-events-none absolute inset-0 opacity-0 blur-xl transition duration-300 group-hover:opacity-50 group-hover:bg-[radial-gradient(240px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(5,223,114,0.45)_0%,transparent_70%)]" />
                                    <img src={icon} alt="" className="h-8 w-8" />
                                    <h3 className="mt-6 text-lg font-semibold text-neutral-800">{title}</h3>
                                    <p className="mt-4 text-sm leading-6 text-neutral-500">{description}</p>
                                </article>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Services
