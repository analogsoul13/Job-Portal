import React, { useState } from 'react';

const JobFilter = () => {
  const [salaryRange, setSalaryRange] = useState([20000, 200000]);
  const [activeSection, setActiveSection] = useState(null);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  const jobTypes = [
    "Full-time", 
    "Part-time", 
    "Contract", 
    "Freelance", 
    "Internship"
  ];

  const locations = [
    "New York", 
    "San Francisco", 
    "Remote", 
    "Chicago", 
    "Austin"
  ];

  const industries = [
    "Technology", 
    "Finance", 
    "Healthcare", 
    "Education", 
    "Marketing"
  ];

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleJobTypeChange = (jobType) => {
    setSelectedJobTypes(prev => 
      prev.includes(jobType)
        ? prev.filter(type => type !== jobType)
        : [...prev, jobType]
    );
  };

  const handleLocationChange = (location) => {
    setSelectedLocations(prev => 
      prev.includes(location)
        ? prev.filter(loc => loc !== location)
        : [...prev, location]
    );
  };

  const FilterSection = ({ title, children, sectionKey }) => (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => toggleSection(sectionKey)}
        className="w-full text-left p-3 flex justify-between items-center hover:bg-gray-100 transition"
      >
        <span className="font-medium">{title}</span>
        <span>{activeSection === sectionKey ? <i className="fa-solid fa-xs fa-angle-up" /> : <i className="fa-solid fa-xs fa-angle-down" />}</span>
      </button>
      {activeSection === sectionKey && (
        <div className="p-3">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-64 bg-white border rounded-lg shadow-md">
      <h2 className="text-xl font-bold p-4 border-b">Filter Jobs</h2>
      
      {/* Salary Range Filter */}
      <FilterSection title="Salary Range" sectionKey="salary">
        <div className="flex flex-col space-y-2">
          <input 
            type="range"
            min="10000"
            max="250000"
            value={salaryRange[1]}
            onChange={(e) => setSalaryRange([salaryRange[0], parseInt(e.target.value)])}
            className="w-full range range-xs"
          />
          <div className="flex justify-between text-sm">
            <span>${salaryRange[0].toLocaleString()}</span>
            <span>${salaryRange[1].toLocaleString()}</span>
          </div>
        </div>
      </FilterSection>

      {/* Job Type Filter */}
      <FilterSection title="Job Type" sectionKey="job-type">
        {jobTypes.map(type => (
          <div key={type} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              id={type}
              checked={selectedJobTypes.includes(type)}
              onChange={() => handleJobTypeChange(type)}
              className="mr-2"
            />
            <label htmlFor={type} className="text-sm">{type}</label>
          </div>
        ))}
      </FilterSection>

      {/* Location Filter */}
      <FilterSection title="Location" sectionKey="location">
        {locations.map(location => (
          <div key={location} className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              id={location}
              checked={selectedLocations.includes(location)}
              onChange={() => handleLocationChange(location)}
              className="mr-2"
            />
            <label htmlFor={location} className="text-sm">{location}</label>
          </div>
        ))}
      </FilterSection>

      {/* Industry Filter */}
      <FilterSection title="Industry" sectionKey="industry">
        <select className="w-full p-2 border rounded">
          <option value="">Select Industry</option>
          {industries.map(industry => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </FilterSection>

      {/* Experience Level Filter */}
      <FilterSection title="Experience Level" sectionKey="experience">
        <select className="w-full p-2 border rounded">
          <option value="">Select Experience</option>
          <option value="entry">Entry Level</option>
          <option value="mid">Mid Level</option>
          <option value="senior">Senior Level</option>
        </select>
      </FilterSection>

      {/* Reset and Apply Buttons */}
      <div className="p-4 flex justify-between space-x-2">
        <button 
          className="btn btn-outline transition"
          onClick={() => {
            setSalaryRange([20000, 200000]);
            setSelectedJobTypes([]);
            setSelectedLocations([]);
          }}
        >
          Reset
        </button>
        <button 
          className="btn btn-accent transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobFilter;