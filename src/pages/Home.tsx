import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Avatar from "../assets/avatar.webp";
import Avatar2 from "../assets/avatar.webp";
import type TestimonialType from "../types/testimonial";
import RecentWork from "../components/RecentWork";
import Services from "../components/Services";
import Heading from "../components/Heading";

interface Props {}
function Home(props: Props) {
    const {} = props
    const testimonials: TestimonialType[] = [
        {
            avatar: Avatar,
            userName: "Tyler Durden",
            designation: "Founder at Project Mayhem",
            feedback: "Agenlabs helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled. I couldn't be any happier. Highly recommended."
        },
        {
            avatar: Avatar2,
            userName: "Michael Scott",
            designation: "Founder of The Michael Scott Paper Co",
            feedback: "Agenlabs are different and one of their kind. They are very professional and have a great team of developers. They are very responsive and always available to help. I would highly recommend them to anyone looking for a website or app development."
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
                <div className="my-20">
                    <Heading
                        title="Recent Work"
                        subtitle="A look at some of the amazing websites that we've built recently."
                    />
                </div>
                <RecentWork />
                <div className="mt-20 w-full">
                    <Testimonial 
                    avatar= {testimonials[1].avatar}
                    userName= {testimonials[1].userName}
                    designation={testimonials[1].designation}
                    feedback={testimonials[1].feedback}
                    />
                </div>
                <div className="mt-40">
                    <Services />
                </div>
            </div>
        </>
    )
}

export default Home
