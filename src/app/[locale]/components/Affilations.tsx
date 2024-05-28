// components/AffiliationCard.js
import React from 'react';
import Image from 'next/image';
const affiliations = [
  { id: 1, name: 'BITS Pilani Hyderabad Campus', description: 'We are a student-led initiative nurtured by the vibrant innovation ecosystem at BITS Pilani Hyderabad.', logo: '/images/bits_logo.png' },
  { id: 2, name: 'SRM University Chennai', description: 'We are actively exploring collaborations with esteemed institutions like SRM University Chennai to bolster our technical expertise.', logo: '/images/srm_logo.png' },
  { id: 3, name: 'TBI: BITS Hyderabad (Pre-incubation)', description: 'Eudaimonia is currently under pre-incubation at TBI, receiving valuable guidance and mentorship to refine our solutions.', logo: '/images/bits_logo.png'},
  { id: 4, name: 'Affiliation 4', description: 'Description 4', logo: '/logo4.png' },
  { id: 5, name: 'Affiliation 5', description: 'Description 5', logo: '/logo5.png' },
];

const AffiliationCard = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Our Affiliations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {affiliations.slice(0, 3).map((affiliation) => (
            <div key={affiliation.id} className="card w-full bg-white shadow-xl">
              <figure className="px-10 pt-10">
                <Image src={affiliation.logo} width={150} height={150} alt={affiliation.name} className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-gray-800">{affiliation.name}</h2>
                <p className="text-gray-600">{affiliation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AffiliationCard;
