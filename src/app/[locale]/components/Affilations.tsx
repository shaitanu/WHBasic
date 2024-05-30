"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface AffiliationCardProps {
  logo: string; // Assuming logo is a string representing the path to the image
  title: string;
  description: string;
}


const affiliations = [
  {
    img: '/images/bits_logo.png',
    title: 'BITS Pilani Hyderabad Campus',
    description: 'We are a student-led initiative nurtured by the vibrant innovation ecosystem at BITS Pilani Hyderabad.',
  },
  {
    img: '/images/srm_logo.png',
    title: 'SRM University Chennai',
    description: 'We are actively exploring collaborations with esteemed institutions like SRM University Chennai to bolster our technical expertise.',
  },
  {
    img: '/images/tbi.png',
    title: 'TBI: BITS Hyderabad (Pre-incubation)',
    description: 'Eudaimonia is currently under pre-incubation at TBI, receiving valuable guidance and mentorship to refine our solutions.',
  },
  {
    img: '/images/mfs.png',
    title: 'Microsoft for Startups',
    description: 'Eudaimonia is proud to be part of Microsoft for Startups, enhancing AI-based mental health solutions.'

  },
  // Add more affiliations as needed
];


  const AffiliationCard: React.FC<AffiliationCardProps> = ({ logo, title, description }) => (

  <div className="p-4 pb-8">
    <div className="card w-full h-90 bg-white shadow-xl">
      <figure className="px-10 pt-10">
        <Image src={logo} width={150} height={150} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  </div>
);



const AffiliationSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 pt-10">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Our Affiliations</h2>
      <div className="container mx-auto">
        <Slider {...settings} className="overflow-hidden">
          {affiliations.map((affiliation, index) => (
            <AffiliationCard
              key={index}
              logo={affiliation.img}
              title={affiliation.title}
              description={affiliation.description}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AffiliationSlider;