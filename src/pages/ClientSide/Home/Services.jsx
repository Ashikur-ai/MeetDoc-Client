import React from 'react';
import ThemeButton from '../../../Shared/ThemeButton';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
            <section className="text-gray-600 body-font">

                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-2/5 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <img alt="feature" className="object-cover object-center h-full w-full border rounded-lg" src="https://i.ibb.co/brBhhDT/Doctor-rafiki.png" />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 mx-auto lg:pl-12 lg:text-left text-center">
                        <h1 className='text-3xl font-bold my-5'>Our Services</h1>

                        {/* <div role="tablist" className="tabs tabs-lifted tabs-lg my-5">
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
                        </div> */}

                        <Tabs>
                            <TabList>
                                <Tab><p className=''>Orthopedic</p></Tab>
                                <Tab><p className=''>Gastroenterology</p></Tab>
                                <Tab><p className=''>Cardiology</p></Tab>
                                <Tab><p className=''>Neurology</p></Tab>
                            </TabList>

                            <TabPanel>
                                <div className="w-full mb-10 my-5 rounded-lg overflow-hidden">
                                    <img alt="feature" className="object-cover object-center w-full  h-3/4 mx-auto" src="https://i.ibb.co/0y2GXGJ/orthopedic.jpg" />
                                </div>

                                <p>
                                    Orthopedics focuses on diagnosing and treating musculoskeletal conditions, including fractures, joint injuries, and spinal disorders. Orthopedic doctors employ both non-surgical and surgical interventions to alleviate pain and restore mobility, helping patients regain their quality of life.
                                </p>
                                <div className='mt-5'>
                                    <Link to={`/doctors/${'Orthopedic'}`}><ThemeButton text={"Explore"}></ThemeButton></Link>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="w-full mb-10 my-5 rounded-lg overflow-hidden">
                                    <img alt="feature" className="object-cover object-center w-full  h-3/4 mx-auto" src="https://i.ibb.co/7V99zkz/gastro.jpg" />
                                </div>

                                <p>

                                    Gastroenterology specializes in diagnosing and treating disorders of the digestive system, encompassing the esophagus, stomach, intestines, liver, pancreas, and gallbladder. Gastroenterologists address a wide range of conditions, including acid reflux, inflammatory bowel disease, liver cirrhosis, and gastrointestinal cancers. Through comprehensive evaluations, diagnostic procedures, and personalized treatment plans, gastroenterologists aim to improve digestive health and enhance patients' overall well-being.
                                </p>
                                <div className='mt-5'>
                                    <Link to={`/doctors/${'Gastroenterology'}`}><ThemeButton text={"Explore"}></ThemeButton></Link>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="w-full mb-10 my-5 rounded-lg overflow-hidden">
                                    <img alt="feature" className="object-cover object-center w-full  h-3/4 mx-auto" src="https://i.ibb.co/7WsZgH3/cardiology.jpg" />
                                </div>

                                <p>
                                    Cardiology focuses on the diagnosis and treatment of cardiovascular diseases, including conditions affecting the heart and blood vessels. Cardiologists specialize in managing a wide range of issues such as hypertension, coronary artery disease, heart failure, arrhythmias, and valvular heart disease. Through advanced diagnostic tests, personalized treatment plans, and lifestyle interventions, cardiologists strive to optimize heart health, prevent complications, and improve patients' quality of life.
                                </p>
                                <div className='mt-5'>
                                    <Link to={`/doctors/${'Cardiology'}`}><ThemeButton text={"Explore"}></ThemeButton></Link>

                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="w-full mb-10 my-5 rounded-lg overflow-hidden">
                                    <img alt="feature" className="object-cover object-center w-full  h-3/4 mx-auto" src="https://i.ibb.co/SBNLR9R/neurology.jpg" />
                                </div>

                                <p>
                                    Neurology is the medical specialty dedicated to diagnosing and treating disorders of the nervous system, including the brain, spinal cord, nerves, and muscles. Neurologists specialize in managing conditions such as headaches, epilepsy, stroke, multiple sclerosis, Parkinson's disease, and neuropathies. By utilizing advanced diagnostic techniques and personalized treatment approaches, neurologists aim to alleviate symptoms, improve function, and enhance the quality of life for patients with neurological disorders.
                                </p>
                                <div className='mt-5'>
                                    <Link to={`/doctors/${'Neurology'}`}><ThemeButton text={"Explore"}></ThemeButton></Link>

                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>


                </div>
            </section>
        </>
    );
};

export default Services;