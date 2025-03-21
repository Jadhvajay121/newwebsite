import React from 'react';

const team = [
  {
    name: 'Vaibhav',
    role: 'CEO & MD',
    image: 'https://imgur.com/kp5G6YK.png',
    bio: 'With over 20 years of experience in real estate and property registration, Vaibhav founded Om Estate Services to simplify property transactions for clients across India.'
  },
  {
    name: 'Nilam',
    role: 'Vice President',
    image: 'https://i.imgur.com/yLZ135P.png',
    bio: 'Nilam, as Vice President, brings extensive leadership and strategic planning to Om Estate Services, focusing on driving growth and operational efficiency.'
  },
  {
    name: 'Vinod',
    role: 'Field Operations',
    image: 'https://i.imgur.com/DmM9Xtg.png',
    bio: 'Vinod, in Field Operations, ensures smooth and efficient on-site operations, managing property visits and client interactions with expertise.'
  },
  {
    name: 'Sharayu',
    role: 'Administration',
    image: 'https://i.imgur.com/2xmBT6v.png',
    bio: 'Sharayu handles administrative tasks, ensuring smooth office operations and efficient record-keeping.'
  },
  {
    name: 'Prathamesh',
    role: 'Field Operations',
    image: 'https://i.imgur.com/nSLkUaf.png',
    bio: 'Prathamesh excels in field operations, providing on-site support and managing property-related activities.'
  },
  {
    name: 'Anmol',
    role: 'Field Operations',
    image: 'https://i.imgur.com/qAzjiEt.png',
    bio: 'Anmol is a dedicated member of our Field Operations team, providing crucial support in property-related tasks.'
  },
  {
    name: 'Aakash',
    role: 'Field Operations',
    image: 'https://i.imgur.com/koEqp5x.png',
    bio: 'Aakash is a key part of our Field Operations team, assisting in various on-site activities and client interactions.'
  },
  {
    name: 'Dipesh',
    role: 'Field Operations',
    image: 'https://i.imgur.com/dQjQ7o6.png',
    bio: 'Dipesh contributes to our Field Operations, ensuring that property-related tasks are handled efficiently.'
  },
  {
    name: 'Rohan',
    role: 'Field Operations',
    image: 'https://i.imgur.com/u3SQbdN.png',
    bio: 'Rohan plays a vital role in our Field Operations, providing support and expertise in property management.'
  },
  {
    name: 'Omkar',
    role: 'Uran Branch',
    image: 'https://i.imgur.com/3rga2Xe.png',
    bio: 'Omkar manages our Uran Branch, overseeing operations and client services in that area.'
  },
  {
    name: 'Siddhesh',
    role: 'Field Operations',
    image: 'https://i.imgur.com/UfkyyDg.png',
    bio: 'Siddhesh is an integral part of our Field Operations, contributing to the smooth handling of property-related tasks.'
  },
  {
    name: 'Parag',
    role: 'Field Operations',
    image: 'https://i.imgur.com/tTsrwRu.png',
    bio: 'Parag supports our Field Operations, assisting in various property-related activities and client services.'
  },
  {
    name: 'Pramod',
    role: 'Field Operations',
    image: 'https://i.imgur.com/DVWJjkh.png',
    bio: 'Pramod is a valued member of our Field Operations team, providing support in property-related tasks.'
  },
  {
    name: 'Durvesh',
    role: 'Field Operations',
    image: 'https://i.imgur.com/L0ziu59.png',
    bio: 'Durvesh contributes to our Field Operations, ensuring efficient handling of property-related activities.'
  },
  {
    name: 'Shailesh',
    role: 'Field Operations Support',
    image: 'https://i.imgur.com/pM0TQZY.png',
    bio: 'Shailesh provides crucial support to our Field Operations team, assisting in various property-related tasks.'
  },
  {
    name: 'Sanskar',
    role: 'Field Operations',
    image: 'https://i.imgur.com/iH1YLN1.png',
    bio: 'Sanskar is a key member of our Field Operations team, providing expertise in property management.'
  },
  {
    name: 'Krushal',
    role: 'Field Operations',
    image: 'https://i.imgur.com/e6Ei508.png',
    bio: 'Krushal supports our Field Operations, assisting in various property-related activities and client services.'
  },
  {
    name: 'Arpita',
    role: 'Backoffice - Accounts',
    image: 'https://i.imgur.com/31sR5F7.png',
    bio: 'Arpita manages accounts, ensuring accurate financial records and smooth transactions.'
  },
  {
    name: 'Rutuja',
    role: 'Backoffice - RM',
    image: 'https://i.imgur.com/nuu8GTN.png',
    bio: 'Rutuja handles backoffice Relationship Management, ensuring strong client communication and satisfaction.'
  },
  {
    name: 'Suraj',
    role: 'Backoffice - Drafts',
    image: 'https://i.imgur.com/NMIKXhY.png',
    bio: 'Suraj manages backoffice drafts, ensuring accurate documentation and efficient processing.'
  },
  {
    name: 'Smayli',
    role: 'Backoffice',
    image: 'https://i.imgur.com/pwInlTz.png',
    bio: 'Smayli provides general backoffice support, assisting in various administrative tasks.'
  }
];

export default function Team() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Expert Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the professionals dedicated to making your property
            registration process seamless and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {member.name}
              </h3>
              <div className="text-primary-teal text-center mb-4">
                {member.role}
              </div>
              <p className="text-gray-600 text-center text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}