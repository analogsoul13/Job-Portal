import React, { useEffect, useState } from 'react';
import { getJobLocationsApi } from '../services/jobServices';

const JobFilter = ({ filters, setFilters }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const salaryOptions = [
    { value: '', label: 'Any' },
    { value: '3', label: '3 LPA' },
    { value: '5', label: '5 LPA' },
    { value: '7', label: '7 LPA' },
    { value: '10', label: '10 LPA' },
    { value: '15', label: '15 LPA+' }
  ];

  const maxSalaryOptions = [
    { value: '', label: 'Any' },
    { value: '6', label: '6 LPA' },
    { value: '8', label: '8 LPA' },
    { value: '12', label: '12 LPA' },
    { value: '20', label: '20 LPA' },
    { value: '30', label: '30 LPA+' }
  ];

  const [locationOptions, setLocationOptions] = useState([
    { value: '', label: 'Anywhere' }
  ])


  const experienceOptions = [
    { value: '', label: 'Any Level' },
    { value: '1', label: 'Entry (0-1y)' },
    { value: '4', label: 'Mid (2-4y)' },
    { value: '9', label: 'Senior (5-9y)' },
    { value: '10', label: 'Lead (10y+)' }
  ];


  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await getJobLocationsApi()
        if (res.status === 200) {
          const dynamicOptions = res.data.locations.map(loc => ({
            value: loc,
            label: loc.charAt(0).toUpperCase() + loc.slice(1)
          }))
          setLocationOptions([{value: '', label: 'Anywhere'}, ...dynamicOptions])
        }
      } catch (error) {
        console.error("Failed to load locations")
      }
    }

    fetchLocations()
  }, [])


  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }))
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const getDisplayValue = (filterType, options) => {
    const selected = filters[filterType];
    if (!selected) return options[0].label;
    return options.find(opt => opt.value === selected)?.label || options[0].label;
  };

  const clearFilters = () => {
    setFilters(prev => ({
      ...prev,
      minSalary: '',
      maxSalary: '',
      location: '',
      experienceLevel: ''
    }));
    setOpenDropdown(null);
  };

  const hasActiveFilters = filters.minSalary || filters.maxSalary || filters.location || filters.experienceLevel;

  return (
    <div className="bg-base-100 rounded-b-lg shadow-md">
      <div className="flex flex-wrap items-center justify-center gap-2 pb-1">
        {/* Min Salary */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('minSalary')}
            className="flex items-center gap-1 px-3 py-1.5 text-xs text-base-content hover:bg-base-300 rounded-lg transition-colors"
          >
            <span className="text-xs text-gray-500">Min:</span>
            {getDisplayValue('minSalary', salaryOptions)}
            <svg className={`w-3 h-3 transition-transform ${openDropdown === 'minSalary' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openDropdown === 'minSalary' && (
            <div className="absolute top-full left-0 mt-1 bg-base-100 border border-gray-200 rounded-lg shadow-lg z-20 min-w-24">
              {salaryOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleFilterChange('minSalary', option.value)}
                  className="w-full text-left px-3 py-2 text-xs text-base-content hover:bg-base-300 first:rounded-t-lg last:rounded-b-lg"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="w-px h-4 bg-gray-300" />

        {/* Max Salary */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('maxSalary')}
            className="flex items-center gap-1 px-3 py-1.5 text-xs text-base-content hover:bg-base-300 rounded-lg transition-colors"
          >
            <span className="text-xs text-gray-500">Max:</span>
            {getDisplayValue('maxSalary', maxSalaryOptions)}
            <svg className={`w-3 h-3 transition-transform ${openDropdown === 'maxSalary' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openDropdown === 'maxSalary' && (
            <div className="absolute top-full left-0 mt-1 bg-base-100 border border-gray-200 rounded-lg shadow-lg z-20 min-w-24">
              {maxSalaryOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleFilterChange('maxSalary', option.value)}
                  className="w-full text-left px-3 py-2 text-xs text-base-content hover:bg-base-300 first:rounded-t-lg last:rounded-b-lg"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="w-px h-4 bg-gray-300" />

        {/* Location */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('location')}
            className="flex items-center gap-1 px-3 py-1.5 text-xs text-base-content hover:bg-base-300 rounded-lg transition-colors"
          >
            {getDisplayValue('location', locationOptions)}
            <svg className={`w-3 h-3 transition-transform ${openDropdown === 'location' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openDropdown === 'location' && (
            <div className="absolute top-full left-0 mt-1 bg-base-100 border border-gray-200 rounded-lg shadow-lg z-20 min-w-32">
              {locationOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleFilterChange('location', option.value)}
                  className="w-full text-left px-3 py-2 text-xs text-base-content hover:bg-base-300 first:rounded-t-lg last:rounded-b-lg"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="w-px h-4 bg-gray-300" />

        {/* Experience Level */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('experienceLevel')}
            className="flex items-center gap-1 px-3 py-1.5 text-xs text-base-content hover:bg-base-300 rounded-lg transition-colors"
          >
            {getDisplayValue('experienceLevel', experienceOptions)}
            <svg className={`w-3 h-3 transition-transform ${openDropdown === 'experienceLevel' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openDropdown === 'experienceLevel' && (
            <div className="absolute top-full left-0 mt-1 bg-base-100 border border-gray-200 rounded-lg shadow-lg z-20 min-w-28">
              {experienceOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleFilterChange('experienceLevel', option.value)}
                  className="w-full text-left px-3 py-2 text-xs text-base-content hover:bg-base-300 first:rounded-t-lg last:rounded-b-lg"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <>
            <div className="w-px h-4 bg-gray-900 ml-2" />
            <button
              onClick={clearFilters}
              className="px-2 py-1 text-xs text-gray-500 hover:text-base-content hover:bg-base-300 rounded transition-colors"
            >
              Clear
            </button>
          </>
        )}
      </div>

      {/* Close dropdowns when clicking outside */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </div>
  );
};

export default JobFilter;
