import Hero from "../components/Hero";

interface Props {}

function Home(props: Props) {
    const {} = props

    return (
        <>
            <div className="mx-auto mt-25">
                <Hero />
            </div>
        </>
    )
}

export default Home
