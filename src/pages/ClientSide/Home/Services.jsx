import React from 'react';
import ThemeButton from '../../../Shared/ThemeButton';

const Services = () => {
    return (
        <>
            <section className="text-gray-600 body-font">

                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full border rounded-lg" src="https://i.ibb.co/Ksy4tvV/blog3-1.webp" />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <h1 className='text-3xl font-bold my-5'>Our Services</h1>

                        <div role="tablist" className="tabs tabs-lifted tabs-lg my-5">
                            <a role="tab" className="tab">Dermatology</a>
                            <a role="tab" className="tab tab-active">Ophthalmology</a>
                            <a role="tab" className="tab">Large</a>
                        </div>
                        <div className="w-full mb-10 my-5 rounded-lg overflow-hidden">
                            <img alt="feature" className="object-cover object-center h-full w-full" src="https://i.ibb.co/gTy8nPd/1684233524808.png" />
                        </div>

                        <p>
                            Ophthalmology is the branch of medicine focused on the diagnosis and treatment of eye disorders and diseases. Ophthalmologists are medical doctors specialized in eye care, providing comprehensive services ranging from routine eye exams to surgical interventions. They diagnose and manage a wide range of eye conditions, including refractive errors (e.g., nearsightedness, farsightedness), cataracts, glaucoma, macular degeneration, and retinal disorders. Ophthalmologists utilize various diagnostic tools and techniques, such as visual acuity tests, tonometry, and retinal imaging, to assess eye health and vision. Treatment options may include prescription eyeglasses or contact lenses, medications, laser procedures, or surgical interventions to improve vision and preserve eye health. Ophthalmology plays a critical role in maintaining and enhancing the visual health and well-being of individuals of all ages.
                        </p>
                        <div className='mt-5'>
                            <ThemeButton text={"Explore"}></ThemeButton>
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
};

export default Services;