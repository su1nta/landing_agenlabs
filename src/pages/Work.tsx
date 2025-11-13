import Heading from "../components/Heading"
import RecentWork from "../components/RecentWork"
import Testimonial from "../components/Testimonial"
import Avatar from "../assets/avatar.webp";

interface Props {}

function Work(props: Props) {
    const {} = props

    return (
        <>
            <div className="mt-20">
                <Heading
                    title="A glimpse into our projects"
                    subtitle="A look at some of the amazing websites that we've built recently."
                />
                <div className="mt-20">
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

export default Work
