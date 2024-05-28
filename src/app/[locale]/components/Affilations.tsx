// components/AffiliationCard.js
import Image from 'next/image';
import React from 'react';

const affiliations = [
  { id: 1, name: 'BITS Pilani Hyderabad Campus', description: ' We are a student-led initiative nurtured by the vibrant innovation ecosystem at BITS Pilani Hyderabad.', logo: '/images/bits_logo.png' },
  { id: 2, name: 'SRM University Chennai', description: 'We are actively exploring collaborations with esteemed institutions like SRM University Chennai to bolster our technical expertise.', logo: '/images/srm_logo.png' },
  { id: 3, name: 'TBI: BITS Hyderabad (Pre-incubation)', description: ' Eudaimonia is currently under pre-incubation at TBI, receiving valuable guidance and mentorship to refine our solutions.', logo: '/images/bits_logo.png' },
];

const AffiliationCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {affiliations.slice(0, 3).map((affiliation) => (
        <div key={affiliation.id} className="card w-full bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <Image src={affiliation.logo} width={150} height={150} alt={affiliation.name} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{affiliation.name}</h2>
            <p>{affiliation.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AffiliationCard;
