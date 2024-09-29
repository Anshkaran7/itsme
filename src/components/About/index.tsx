import Image from 'next/image';
import React from 'react';
import Arrow from '../Icons';
import Label from '../Label';
import useOnScreen from '../useScreen';
import { skills } from './Skills';

const About: React.FC = () => {
    const isVisible = useOnScreen({ threshold: 0.1 });
    
    const SkillSection: React.FC<{ title: string; skills: { name: string; url: string }[] }> = ({ title, skills }) => (
        <>
            <h5 className="mb-2 font-medium text-lg sm:text-xl lg:text-2xl">{title}:</h5>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {skills.map((skill, index) => (
                    <div
                        key={skill.name}
                        className={`group flex items-center gap-x-1 p-1 text-pink-500 transition-opacity duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <Arrow />
                        <Label label={skill.name} url={skill.url} />
                    </div>
                ))}
            </div>
        </>
    );

    return (
        <section className="relative container mx-auto px-4 sm:px-6 md:px-8" id="about">
            <div className={`flex items-center gap-x-4 transition-opacity duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <h2 className="flex items-center gap-x-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white dark:text-gray-700">
                    <span className="rounded text-pink-500 backdrop-blur">01.</span>
                    About Me
                </h2>
                <div className="h-[1px] flex-grow animate-bounce dark:bg-neutral-950/10 bg-white/20"></div>
            </div>

            <div className={`flex flex-col lg:flex-row lg:items-start items-center justify-between lg:gap-x-8 text-white mt-8 lg:mt-12 transition-opacity duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="flex flex-col gap-y-6 items-center">
                    <div className="w-[9rem] sm:w-[12rem] md:w-[14rem] lg:w-[17rem] p-1 rounded-lg border-2 border-pink-400">
                        <Image
                            alt="me"
                            loading="lazy"
                            width={600}
                            height={600}
                            className="rounded-lg contrast-75 grayscale transition-all hover:grayscale-0"
                            src="/assets/Me.jpg"
                        />
                    </div>
                    <button
                        className="font-semibold hover:text-pink-600 hover:bg-transparent border border-pink-600 duration-500 text-sm md:text-base lg:text-lg bg-pink-600 text-white py-2 w-28 sm:w-36 lg:w-44 rounded-md"
                        onClick={() => window.open('https://drive.google.com/file/d/18RHBGborYKFTtEufrZx3dQpOxKS6tqtM/view', '_blank')}
                    >
                        Resume
                    </button>
                </div>

                <div className={`mt-12 lg:mt-0 dark:text-gray-800 lg:w-[60%] transition-opacity duration-500 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
                    <h4 className="mb-6 text-lg sm:text-xl md:text-2xl">Short-Bio:</h4>
                    <div className="overflow-y-auto h-[300px] sm:h-[400px] md:h-[450px]">
                        <p className={`lg:w-[80%] transition-transform duration-500 transform ${isVisible ? 'animate-fade-in-slide' : 'opacity-0'} text-sm md:text-base`}>
                            Hi, I'm Karan Kumar, a Full Stack Developer from India. I'm a student pursuing my B.Tech in Computer Science at Parul University. I specialize in frontend development and have been in the field for 3 years.
                            <br /><br />
                            I love designing websites and mobile apps. I have worked with a few startups and helped them in designing and developing their products.
                            <br /><br />
                            I contribute to open-source projects and love learning new technologies.
                        </p>

                        <h4 className={`my-10 text-lg sm:text-xl md:text-2xl transition-transform duration-500 transform ${isVisible ? 'animate-fade-in-slide' : 'opacity-0'}`}>Technologies I'm using now:</h4>
                        {Object.entries(skills).map(([category, skillSet]) => (
                            <SkillSection key={category} title={capitalizeFirstLetter(category)} skills={skillSet} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).replace(/([A-Z])/g, ' $1');
};

export default About;
