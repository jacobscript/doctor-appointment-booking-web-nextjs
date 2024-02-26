import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Hero() {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                        <Image
                            alt="doctors"
                            width={800}
                            height={800}
                            src="/ai-doctors.jpg"
                            className="absolute inset-0 h-full w-full object-cover rounded-3xl"
                        />
                    </div>

                    <div className="lg:py-24">
                        <h2 className="text-3xl font-bold sm:text-4xl text-balance">Find and Book <span className='text-primary'>Appointment</span> with <span className='whitespace-nowrap'>Top-Rated</span> <span
                        //  className='text-primary'
                        >Doctors</span></h2>

                        <p className="mt-4 text-gray-600">
                            Schedule same-day or next-day appointments with board-certified providers. Whether you need ongoing care, preventive checkups, or help with unexpected health concerns, we make it easy to get the personalized attention you deserve.
                        </p>

                        <Button className='mt-10'>Discover More</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero