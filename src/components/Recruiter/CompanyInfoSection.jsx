import React from 'react'
import BASE_URL from '../../services/baseUrl'
import { useState } from 'react'

function CompanyInfoSection({
    companyData,
    newCompany,
    setNewCompany,
    setLogoFile,
    handleAddCompany,
    showCompanyModel,
    setShowCompanyModel,
    isEditing,
    setIsEditing,
    handleEditCompany }) {

    const [logoPreview, setLogoPreview] = useState(null)

    const handleCompanyLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewCompany((prev) => ({
                ...prev,
                logo: file
            }));
            setLogoPreview(URL.createObjectURL(file));
            setLogoFile(file)
        }
    }

    const handleEditClick = () => {
        if (companyData) {
            setNewCompany({
                name: companyData.name || '',
                website: companyData.website || '',
                description: companyData.description || '',
                location: companyData.location || '',
                logo: null
            })
            setLogoPreview(`${BASE_URL}${companyData.logo}` || null)
            setShowCompanyModel(true)
            setIsEditing(true)
        }

    }

    return (
    <>
        <div className="bg-base-100 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20" data-aos="fade-in">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-base-content">Company Information</h2>
                </div>
            </div>

            {/* If company exists */}
            {companyData ? (
                <div className="bg-base-200 rounded-3xl p-6">
                    <div className="flex items-start space-x-4">
                        {companyData?.logo && (
                            <img
                                src={`${BASE_URL}${companyData.logo}`}
                                alt="Company Logo"
                                className="w-16 h-16 rounded-2xl border-2 border-white shadow-lg flex-shrink-0"
                            />
                        )}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-base-content mb-2">{companyData.name}</h3>

                            {companyData.location && (
                                <p className="text-base-content mb-2 flex items-center">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {companyData.location}
                                </p>
                            )}

                            {companyData.website && (
                                <p className="text-blue-600 mb-3">
                                    <a href={companyData.website} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                        {companyData.website}
                                    </a>
                                </p>
                            )}

                            {companyData.description && (
                                <p className="text-base-content leading-relaxed">{companyData.description}</p>
                            )}
                        </div>
                    </div>

                    {/* Edit Company Button */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                        <button
                            onClick={handleEditClick}
                            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg text-sm"
                        >
                            ✏️ Edit Company Details
                        </button>
                    </div>
                </div>
            ) : (
                // If no company exists
                <div className="text-center py-12">
                    <div className="mb-6">
                        <div className="w-20 h-20 bg-base-300 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-base-content mb-2">No Company Added</h3>
                        <p className="text-base-content mb-6">Add your company information to showcase your professional background.</p>
                    </div>

                    <button
                        onClick={() => setShowCompanyModel(true)}
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>Add Company</span>
                    </button>
                </div>
            )}
        </div>

            {/* Add Company Modal */ }
    {
        showCompanyModel && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-base-100 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-base-content">{isEditing ? 'Edit Company' : '🏢 Add New Company'}</h3>
                        <button
                            onClick={() => setShowCompanyModel(false)}
                            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-base-content mb-2">
                                    Company Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={newCompany?.name}
                                    onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-0 transition-colors duration-200"
                                    placeholder="Enter company name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-base-content mb-2">Website</label>
                                <input
                                    type="url"
                                    value={newCompany?.website}
                                    onChange={(e) => setNewCompany({ ...newCompany, website: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-0 transition-colors duration-200"
                                    placeholder="https://company.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-base-content mb-2">
                                Location <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={newCompany?.location}
                                onChange={(e) => setNewCompany({ ...newCompany, location: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-0 transition-colors duration-200"
                                placeholder="City, State/Country"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-base-content mb-2">Description</label>
                            <textarea
                                value={newCompany?.description}
                                onChange={(e) => setNewCompany({ ...newCompany, description: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-0 transition-colors duration-200 resize-none"
                                placeholder="Brief description of the company and its services"
                                rows="4"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-base-content mb-2">Company Logo</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center hover:border-purple-400 transition-colors duration-200">

                                <label className="flex flex-col items-center cursor-pointer">
                                    <div className="w-20 h-20 rounded-full border-4 border-base-300 shadow-2xl overflow-hidden mb-2">
                                        {logoPreview && <img src={logoPreview} alt='Logo Preview' className='object-cover w-full h-full' />}
                                    </div>
                                    <input
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleCompanyLogoChange}
                                    />
                                    <span className="text-base-content text-xs">
                                        Upload Profile Picture
                                    </span>
                                </label>
                                <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 2MB</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                        <button
                            onClick={() => {
                                setShowCompanyModel(false)
                                setNewCompany({ name: '', website: '', description: '', location: '', logo: null })
                            }}
                            className="btn btn-outline btn-error transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-md"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => isEditing ? handleEditCompany(companyData?._id) : handleAddCompany()}
                            disabled={!newCompany?.name || !newCompany?.location}
                            className="btn btn-outline btn-accent transition-all duration-200 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-md"
                        >
                            {isEditing ? 'Save Changes' : 'Add Company'}
                        </button>
                    </div>
                </div>
            </div>
        )
    }
    </>
    )
}

export default CompanyInfoSection
