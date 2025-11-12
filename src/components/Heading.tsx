interface Props {
    title: string;
    subtitle: string;
}

function Heading(props: Props) {
    const {title, subtitle} = props

    return (
        <>
            <div className="p-2 m-4 mx-auto flex flex-col gap-4">
                <h3 className="text-4xl text-neutral-600 font-bold">{title}</h3>
                <h5 className="text-xl text-neutral-400">{subtitle}</h5>
            </div>
        </>
    )
}

export default Heading
