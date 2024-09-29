import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ExperienceCard from '../ExperienceCard';

// Experience Data
const experiences = [
  {
    title: 'Medref Internship',
    position: 'Lead Frontend Developer for Web and App',
    date: '15 May 2023 - 20 Nov 2023',
    tasks: [
      'Worked on the Medref project at Healthbridge Solutions.',
      'Developed the frontend of the web and app using Next Js, Tailwind CSS, and React Native respectively.',
      'Designed a significant portion of the startup.',
    ],
  },
  {
    title: 'Ignition Nest Labs Internship',
    position: 'Full Stack Developer',
    date: '15 Sep 2023 - Now',
    tasks: [
      'Worked on multiple web and mobile application projects at Ignition Nest Labs, contributing to both frontend and backend development.',
      'Developed many admin panels.',
    ],
  },
  {
    title: 'Vitco Impex',
    position: 'Frontend Developer for Web',
    date: '1 Jan 2024 - 1 Apr 2024',
    tasks: [
      "Worked on the Busiman platform, 'One Dashboard to Manage All Your Businesses'.",
      'Responsible for developing the frontend using modern web technologies.',
      'Collaborated with cross-functional teams to deliver a seamless user experience.',
    ],
  },
  {
    title: 'Infinity Linkage',
    position: 'Full Stack Developer',
    date: '20 Sep 2024 - Now',
    tasks: [
      'Working as a full stack developer for Infinity Linkage, an agency developing sites and apps.',
      'Collaborating with team members on projects using technologies like React, Next.js, and Node.js.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full container mx-auto py-20">
      {/* Section Header */}
      <div className="flex items-center gap-x-4 mb-10">
      <h2 className="flex items-center gap-x-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white dark:text-gray-700">
      <span className="rounded text-pink-500 backdrop-blur">02.</span>Experience
        </h2>
        <div className="relative top-[2px] h-[2px] flex-grow bg-white/20 dark:bg-gray-500"></div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={10} 
  breakpoints={{
    640: {
      spaceBetween: 20,  // Medium screens (640px and up)
    },
    768: {
      spaceBetween: 30,  // Larger screens (768px and up)
    },
  }}
  slidesPerView={1.5}
  centeredSlides={true}
  autoplay={{
    delay: 2000,  // 2 seconds delay
    disableOnInteraction: false,  // Keeps autoplay even after interaction
  }}
  pagination={{ clickable: true }}
  loop={true}
  grabCursor={true}
  speed={800}
  className="py-16"
>

        {experiences.map((experience, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="md:w-[90%] w-full">  {/* Set the width of the card to 90% */}
              <ExperienceCard
                title={experience.title}
                position={experience.position}
                date={experience.date}
                tasks={experience.tasks}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    
  );
};

export default Experience;
