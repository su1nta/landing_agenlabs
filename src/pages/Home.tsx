import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Avatar from "../assets/avatar.webp";

interface Props {}

function Home(props: Props) {
    const {} = props

    return (
        <>
            <div className="mx-auto mt-25">
                <Hero />
                <div className="mt-20 w-full">
                    <Testimonial 
                    avatar= {Avatar}
                    userName= "Tyler Durden"
                    designation="Founder at Project Mayhem"
                    feedback="Agenlabs helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled. I couldn't be any happier. Highly recommended."
                    />
                </div>
            </div>
        </>
    )
}

export default Home
