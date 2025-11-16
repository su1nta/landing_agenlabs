
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';

function Footer() {
    const navigate = useNavigate();

    return (
        <>
            <div className="mt-40 mb-20">
                <div className="max-w-6xl h-80 bg-neutral-500 mx-auto rounded-xl">
                    <div className="h-full w-full bg-white relative text-gray-800 flex flex-col gap-4 py-6">
                        {/* Circuit Board - Light Pattern */}
                        <div
                            className="absolute inset-0 z-0 pointer-events-none"
                            style={{
                            backgroundImage: `
                                repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
                                repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
                                radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
                                radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
                            `,
                            backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
                            }}
                        />
                            <h2 className="mt-10 text-4xl font-semibold text-neutral-700">Let's build your website today!</h2>
                            <h4 className="text-xl max-w-xl mx-auto text-neutral-500">Contact us and we will get back within 24 hours. We mean it. You saw the testimonials, right?</h4>
                            <div>
                                <button className="px-4 py-2 bg-neutral-900 text-neutral-200 rounded-lg hover:bg-neutral-600">Contact us</button>
                            </div>
                        </div>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center mt-20 mb-10">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => {navigate('/')}}>
                        <img src={Logo} alt="Logo" className="size-4" />
                        <span className="text-lg font-display font-semibold tracking-wide">Agenlabs</span>
                    </div>
                    <span className="text-sm text-neutral-400 mx-auto">Inspired from Manu Arora of <span className='font-bold text-neutral-500'>Aceternity UI</span>.</span>
                </div>
            </div>
        </>
    )
}

export default Footer
