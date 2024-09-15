import React from 'react';

const AffiliationGuide = () => {
  const affiliations = [
    {
      date: "30/2023",
      title: "Affiliated Public Institute",
      description: "Required documents for Public Sectors",
      type: "Public",
      link: "#"
    },
    {
      date: "20/2023",
      title: "Affiliated Private Institute",
      description: "Required documents for Private Sectors",
      type: "Private",
      link: "#"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
  <h1 className="text-3xl font-bold text-center mb-8">Welcome to Affiliation Guide</h1>
  
  {affiliations.map((item, index) => (
    <div key={index} className="border-b border-blue-500 py-4 flex justify-between items-center bg-white">
      {/* Date Box */}
      <div className="flex items-center">
        <div className="border border-blue-600 p-4 text-center mr-4 bg-white">
          <p className="text-lg font-bold">Nov</p>
          <p className="text-sm">{item.date}</p>
        </div>

        {/* Affiliation Details */}
        <div>
          <span className={`inline-block px-4 py-1 text-white rounded-lg mb-2 
            ${item.type === 'Public' ? 'bg-purple-600' : 'bg-indigo-600'}`}>
            {item.title}
          </span>
          <p className="text-blue-600 font-medium">{item.description}</p>
        </div>
      </div>

      {/* Download Link */}
      <div>
        <a href={item.link} className="text-blue-600 hover:underline">Download</a>
      </div>
    </div>
  ))}
</div>

  );
};

export default AffiliationGuide;
