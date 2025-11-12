import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Avatar from "../assets/avatar.webp";
import type TestimonialType from "../types/testimonial";

interface Props {}
function Home(props: Props) {
    const {} = props
    const testimonials: TestimonialType[] = [
        {
            avatar: Avatar,
            userName: "Tyler Durden",
            designation: "Founder at Project Mayhem",
            feedback: "Agenlabs helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled. I couldn't be any happier. Highly recommended."
        }
    ]

    return (
        <>
            <div className="mx-auto mt-25">
                <Hero />
                <div className="mt-20 w-full">
                    <Testimonial 
                    avatar= {testimonials[0].avatar}
                    userName= {testimonials[0].userName}
                    designation={testimonials[0].designation}
                    feedback={testimonials[0].feedback}
                    />
                </div>
            </div>
        </>
    )
}

export default Home
