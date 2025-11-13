import type TestimonialType from "../types/testimonial";


function Testimonial(props: TestimonialType) {
    const { avatar, userName, designation, feedback }: TestimonialType = props

    return (
        <>
            <div className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-linear-to-r after:from-sky-500 after:via-indigo-500 after:to-pink-400 after:mask-[linear-gradient(90deg,transparent,black_70%,black_30%,transparent)] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                    backgroundImage: `
                        linear-gradient(to right, #f5f5f5 1px, transparent 1px),
                        linear-gradient(to bottom, #f5f5f5 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
                    maskImage:
                        "radial-gradient(ellipse 70% 70% at 50% 100%, #000 60%, transparent 100%)",
                    }}
                />
                <div className="relative mx-auto max-w-7xl px-4 py-16 flex flex-col items-center justify-center">
                    <img src={avatar} alt="Avatar" className="size-20" />
                    <h2 className="max-w-4xl text-3xl text-neutral-500 font-normal mt-10"><span className="text-5xl text-black">"</span>{feedback}<span className="text-5xl text-black">"</span></h2>
                    <h5 className="mt-10 text-xl text-neutral-700 font-semibold">{userName}</h5>
                    <h3 className="mb-10 text-lg text-neutral-400">{designation}</h3>
                </div>
            </div>
        </>
    )
}

export default Testimonial
