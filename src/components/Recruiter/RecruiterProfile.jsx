import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { getUserProfile } from '../../services/profileServices'
import { createCompanyApi, deleteCompanyApi, getCompaniesByUser, updateCompanyApi } from '../../services/companyServices';
import { toast } from 'react-toastify';
import PersonalInfoSection from './PersonalInfoSection';
import CompanyInfoSection from './CompanyInfoSection';
import { updateProfileApi } from '../../services/profileServices';
import { UserPen } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { updateProfileInfo } from '../../redux/slices/authSlice';

function RecruiterProfile() {
  const [editProfile, setEditProfile] = useState(false)
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null)

  const [companyData, setCompanyData] = useState(null)
  const [showCompanyModel, setShowCompanyModel] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteCompanyId, setDeleteCompanyId] = useState(null)
  const [logoFile, setLogoFile] = useState(null);
  const [isEditing, setIsEditing] = useState(null)

  const token = useSelector((state) => state.auth.token)
  const [preview, setPreview] = useState(null)

  const [newCompany, setNewCompany] = useState({
    name: '',
    website: '',
    description: '',
    location: '',
    logo: null
  })

  const [updateProfile, setUpdateProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phoneNumber: '',
    profile: {
      bio: '',
      place: '',
      pin: '',
      qualification: '',
      resume: '',
      profilePhoto: '',
      socialLinks: {
        github: '',
        x: '',
        portfolio: ''
      }
    }
  })

  const dispatch = useDispatch()

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`
      };
      // Fetch Profile Data and Companies
      const [profileRes, companiesRes] = await Promise.all([
        getUserProfile(headers),
        getCompaniesByUser(headers)
      ])

      setProfile(profileRes.data)
      setCompanyData(companiesRes.data.companies[0] || null)

      console.log("Profile Fetched:", profileRes.data)
      console.log("Companies Fetched:", companiesRes.data.companies)

    } catch (error) {
      console.error("Error fetching recruiter profile or companies :", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData()
  }, [token])


  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    setUpdateProfile((prev) => {
      const updated = { ...prev };
      let current = updated;

      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUpdateProfile((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          profilePhoto: file
        }
      }));
      setPreview(URL.createObjectURL(file));
    }
  };

  // Profile Updation
  const handleUpdateProfile = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`
      }

      const formData = new FormData()

      // Append top-level fields (first_name, last_name, email)
      Object.keys(updateProfile).forEach((key) => {
        if (key !== "profile") {
          formData.append(key, updateProfile[key]);
        }
      });

      Object.keys(updateProfile.profile).forEach((key) => {
        if (
          ["profilePhoto", "socialLinks", "skills", "resume"].includes(key)
        ) return;

        formData.append(key, updateProfile.profile[key]);
      });

      // Append socialLinks fields explicitly
      if (updateProfile.profile.socialLinks) {
        formData.append("github", updateProfile.profile.socialLinks.github || "");
        formData.append("x", updateProfile.profile.socialLinks.x || "");
        formData.append("portfolio", updateProfile.profile.socialLinks.portfolio || "");
      }

      // Append profilePhoto
      if (updateProfile.profile.profilePhoto) {
        formData.append("profilePhoto", updateProfile.profile.profilePhoto);
      }


      const response = await updateProfileApi(formData, headers);
      console.log("Profile update response:", response);

      if (response.status === 200) {
        toast.success("Profile updated succesfully!");
        dispatch(updateProfileInfo({
          first_name: response.data.user.first_name,
          last_name: response.data.user.last_name,
          profilePic: response.data.user.profile?.profilePhoto || "",
        }));
        fetchData()
        setEditProfile(!editProfile)
      }
    } catch (error) {
      console.error("Error updating profile.", error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    }
  }

  // Adding Company Logic
  const handleAddCompany = async (e) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`
      }

      const formData = new FormData()
      formData.append('name', newCompany.name);
      formData.append('description', newCompany.description);
      formData.append('website', newCompany.website);
      formData.append('location', newCompany.location);
      if (newCompany.logo) {
        formData.append('logo', newCompany.logo);
      }

      console.log("Company Data: ", formData);

      const response = await createCompanyApi(formData, headers)
      setIsEditing(false)
      setShowCompanyModel(false)
      fetchData()
      // Check here again not using the response
    } catch (error) {
      console.error("Error adding company:", error);
      toast.error("Error adding company")
    }
  }

  // Editing Company Logic
  const handleEditCompany = async (companyId) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`
      }

      const formData = new FormData();
      formData.append("name", newCompany.name);
      formData.append("description", newCompany.description);
      formData.append("website", newCompany.website);
      formData.append("location", newCompany.location);

      if (logoFile) {
        formData.append("logo", logoFile);
      }

      const response = await updateCompanyApi(companyId, headers, formData)

      if (response.data.success) {
        setNewCompany(response.data.company);
        toast.success("Company updated successfully!");
        setShowCompanyModel(false)
        fetchData()
        setIsEditing(false)
      }
    } catch (error) {
      console.error("Edit error:", error.response?.data || error.message);
      toast.error("Failed to update company.")
    }
  };

  // Deleting company Logic
  const handleDeleteCompany = async(companyId) => {
    try {
      const headers = {
        Authorization : `Bearer ${token}`
      }
      const response = await deleteCompanyApi(companyId, headers)
      toast.success(response.data.message)
      setCompanyData(null)
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete company")
    } finally {
      setShowDeleteModal(false)
      setDeleteCompanyId(null)
    }
  }


  if (loading) {
    return <div className="p-8 text-lg">Loading recruiter profile...</div>;
  }


  return (
    <div className="min-h-screen bg-gradient-to-br bg-base-300">
      {/* Header */}
      <div className="flex justify-center py-4 items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-base-100 rounded-full flex items-center justify-center">
            <UserPen />
          </div>
          <h1 className="text-2xl font-bold text-base-content">
            Recruiter Profile
          </h1>
        </div>
      </div>

      <div className="max-w-full mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="xl:col-span-4 space-y-8">

            {/* Personal Info Section */}
            <PersonalInfoSection
              profile={profile}
              updateProfile={updateProfile}
              setUpdateProfile={setUpdateProfile}
              preview={preview}
              setPreview={setPreview}
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              handleUpdateProfile={handleUpdateProfile}
              editProfile={editProfile}
              setEditProfile={setEditProfile}
            />

            <CompanyInfoSection
              companyData={companyData}
              newCompany={newCompany}
              setNewCompany={setNewCompany}
              token={token}
              handleAddCompany={handleAddCompany}
              handleFileChange={handleFileChange}
              setLogoFile={setLogoFile}
              showCompanyModel={showCompanyModel}
              setShowCompanyModel={setShowCompanyModel}
              showDeleteModal={showDeleteModal}
              setShowDeleteModal={setShowDeleteModal}
              deleteCompanyId={deleteCompanyId}
              setDeleteCompanyId={setDeleteCompanyId}
              handleDeleteCompany={handleDeleteCompany}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              handleEditCompany={handleEditCompany}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecruiterProfile