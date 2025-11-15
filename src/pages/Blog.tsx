import Heading from "../components/Heading";
import Blog1 from "../assets/blog/blog1.png";
import Blog2 from "../assets/blog/blog2.png";
import Blog3 from "../assets/blog/blog3.png";

interface BlogsType {
    title:string;
    description: string;
    image: string;
}

function Blog() {
    const blogs: BlogsType[] = [
        {
            title: "How to Effectively Use a Website to Increase Revenue (Updated 2024)",
            description: "Creating a website is a great way to increase revenue for your business. Here are some tips to help you make the most of your website and increase your revenue....",
            image: Blog1
        },
        {
            title: "How to Effectively Use a Website to Increase Revenue (Updated 2024)",
            description: "Creating a website is a great way to increase revenue for your business. Here are some tips to help you make the most of your website and increase your revenue....",
            image: Blog2
        },
        {
            title: "How to Effectively Use a Website to Increase Revenue (Updated 2024)",
            description: "Creating a website is a great way to increase revenue for your business. Here are some tips to help you make the most of your website and increase your revenue....",
            image: Blog3
        },
    ]
    return (
        <>
            <div>
                <div className="mt-20">
                    <Heading
                        title="Everything you need to know about web apps"
                        subtitle="We write about everything from design to deployment to get your website shipped and ready to go!"
                    />
                </div>
                <div className="mt-20 mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {
                        blogs.map(({ title, description, image}: BlogsType) : React.ReactNode => (
                            <div key={title} className="flex flex-col text-left justify-start items-start gap-4">
                                <img src={image} alt="thumbnail" className="w-full h-2/3 object-cover rounded-md" />
                                <div className="text-neutral-700 text-2xl">{title}</div>
                                <div className="text-neutral-500 text-md">{description}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>        
    )
}

export default Blog
