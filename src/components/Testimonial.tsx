interface Props {
    avatar: string;
    userName: string;
    designation: string;
    feedback: string;
}


function Testimonial(props: Props) {
    const { avatar, userName, designation, feedback }: Props = props

    return (
        <>
            <div className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-linear-to-r after:from-transparent after:to-35% after:via-indigo-500 after:to-pink-500 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-position-[20px_30px] [-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_50%_100%,#000_60%,transparent_100%)] mask-[radial-gradient(ellipse_70%_60%_at_50%_100%,#000_60%,transparent_100%)]"
                />
                <div className="relative mx-auto max-w-7xl px-4 py-16 flex flex-col items-center justify-center">
                    <img src={avatar} alt="Avatar" className="size-20" />
                    <h2 className="max-w-4xl text-3xl text-neutral-500 font-normal mt-10">{feedback}</h2>
                    <h5 className="mt-10 text-xl text-neutral-700 font-semibold">{userName}</h5>
                    <h3 className="mb-10 text-lg text-neutral-400">{designation}</h3>
                </div>
            </div>
        </>
    )
}

export default Testimonial
