// components/Profile.tsx

import Image from 'next/image';
import React from 'react';
import Arrow from '../Icons';
import Label from '../Label';


const Profile: React.FC = () => {

    const startingDate = new Date('December 1, 2022');


    return (
        <section className='relative py-12 container mx-auto ' id='about'>
            <div className="flex items-center gap-x-4"><h2 className="flex  mt-20 items-center gap-x-2 text-2xl font-bold text-white dark:text-gray-700 ">
                <span className="rounded  text-pink-500 backdrop-blur ">01.</span>About Me</h2>
                <div className="relative top-[2px] h-[1px] flex-grow animate-bounce  dark:bg-neutral-950/10 bg-white/20"></div>
            </div>

            <div className="fade-in flex w-full flex-col items-center  justify-between lg:flex-row lg:items-start lg:gap-x-8 text-white">
                <div className='flex flex-col  gap-y-6 items-center'>
                    <div className=" mt-12 w-[17rem] p-1  rounded-lg border-2 border-pink-400">
                        <Image
                            alt="me"
                            loading="lazy"
                            width={600}
                            height={600}
                            decoding="async"
                            data-nimg="1"
                            className="rounded-lg contrast-75 grayscale transition-all hover:grayscale-0"
                            style={{ color: 'transparent' }}
                            src="/assets/Me.jpg"
                        />

                    </div>

                    <button
                        className="font-semibold hover:text-pink-600 border border-pink-600 hover:border-pink-600 hover:bg-transparent duration-500 text-main bg-pink-600 text-white py-2 w-44 rounded-md"
                        onClick={() => {
                            window.open('https://drive.google.com/file/d/1mP9HIn2Zka-BLp7h__EAmWj20wUCBo_W/view?usp=sharing', '_blank');
                        }}
                    >
                        Resume
                    </button>
                </div>
                <div className="mt-12 dark:text-gray-800 ">
                    <h4 className="mb-6 text-xl">Short-Bio:</h4>
                    <p className="lg:w-[80%] ">
                        Hi, I'm Karan Kumar, a Full Stack Developer from India. I'm a student pursuing my B.Tech in Computer Science at Parul University. I specialize in frontend development and have been in the field for 3 year.
                        <br />
                        <br />
                        And I love designing websites and mobile apps. I have worked with a few startups and have helped them in designing and developing their products.
                        <br />
                        <br />
                        And also  I contribute to open source projects and love to learn new technologies.


                    </p>
                    <h4 className="my-10 text-xl">Technologies I'm using now:</h4>
                    <div className="mt-4 w-[100%]">
                        <h5 className="mb-2 font-medium">Languages:</h5>
                        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
                            {/* Add language items here */}
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"C++"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"JavaScript"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"TypeScript"} />
                            </div>
                        </div>

                        <h5 className="mb-2 font-medium">Frontend and Frameworks:</h5>
                        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
                            {/* Add frontend items here */}
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"HTML"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"CSS"} />
                            </div>

                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"NextJS"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"ReactJS"} />
                            </div>

                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"Tailwind CSS"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"SaaS"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"Bootstrap"} />
                            </div>

                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"React Native"} />
                            </div>

                        </div>

                        <h5 className="mb-2 font-medium">Backend:</h5>
                        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
                            {/* Add backend items here */}
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"Firebase"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"Node Js"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"MongoDB"} />
                            </div>
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"Express Js"} />

                            </div>
                        </div>

                        <h5 className="mb-2 font-medium">Design Tools:</h5>
                        <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-3">
                            {/* Add backend items here */}
                            <div className="group flex w-full items-center gap-x-1 p-1 text-pink-500">
                                <Arrow />
                                <Label label={"Figma"} />
                            </div>

                        </div>


                    </div>


                </div>
            </div>

        </section>




    );
};

export default Profile;
