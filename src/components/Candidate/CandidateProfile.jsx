import React, { useEffect, useState } from 'react'
import SkillsSection from './SkillsSection'
import { Link } from 'react-router-dom'
import { getUserProfile, updateProfileApi } from '../../services/profileServices'
import { toast } from 'react-toastify'
import BASE_URL from '../../services/baseUrl'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileInfo } from '../../redux/slices/authSlice'
import ResumePreview from '../ResumePreview'

function CandidateProfile() {
    const [editProfile, setEditProfile] = useState(false)
    const [profile, setProfile] = useState({})
    const [preview, setPreview] = useState(null)
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true)
    const token = useSelector((state) => state.auth.token)
    const dispatch = useDispatch()
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
            skills: [],
            resume: '',
            profilePhoto: '',
            socialLinks: {
                github: '',
                x: '',
                portfolio: ''
            }
        }
    });


    const fetchProfile = async () => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`
            };
            const response = await getUserProfile(headers);
            console.log("Fetched Profile :", response.data)
            if (response.status === 200) {
                setProfile(response.data);
                setSkills(response.data.profile?.skills || []) // Extract skills from profile
            } else {
                toast.error(`Error loading profile: ${response.data?.message || "Something went wrong"}`);
            }
        } catch (error) {
            toast.error(`Error loading profile: ${error.message || "Something went wrong"}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);


    const toggleEdit = () => {
        if (!editProfile && profile) {
            setUpdateProfile({
                first_name: profile.first_name || '',
                last_name: profile.last_name || '',
                email: profile.email || '',
                phoneNumber: profile.phoneNumber || '',
                profile: profile.profile || {
                    bio: '', place: '', pin: '', qualification: '',
                    skills: [], resume: '', profilePhoto: '',
                    socialLinks: { github: '', x: '', portfolio: '' }
                }
            });
        }
        setEditProfile(!editProfile);
    };



    const handleUpdateProfile = async () => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`
            }
            // Sync local skills state to the updateProfile object
            updateProfile.profile.skills = skills
            const formData = new FormData();

            // Append top-level fields (first_name, last_name, email)
            Object.keys(updateProfile).forEach((key) => {
                if (key !== "profile") {
                    formData.append(key, updateProfile[key]);
                }
            });

            Object.keys(updateProfile.profile).forEach((key) => {
                if (key !== "profilePhoto" && key !== "socialLinks") {
                    if (key === "skills" && Array.isArray(updateProfile.profile.skills)) {
                        formData.append("skills", updateProfile.profile.skills.join(","));
                    } else {
                        formData.append(key, updateProfile.profile[key]);

                    }
                }
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

            // Append resume
            if(updateProfile.profile.resume) {
                formData.append("resume", updateProfile.profile.resume)
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
                fetchProfile();
                setEditProfile(false);
            }
        } catch (error) {
            console.error("Error updating profile.", error);
            toast.error(error?.response?.data?.message || "Something went wrong!");
        }
    };



    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            if (type === "profilePhoto") {
                const fileURL = URL.createObjectURL(file)
                setPreview(fileURL)
            }

            const formData = new FormData()
            formData.append('file', file)

            setUpdateProfile((prev) => ({
                ...prev,
                [type]: file
            }));
        }
    };




    const handleChange = (e) => {
        const { name, value } = e.target;

        setUpdateProfile((prev) => {
            const keys = name.split('.');
            let newState = { ...prev };

            let temp = newState;
            for (let i = 0; i < keys.length - 1; i++) {
                if (!temp[keys[i]]) temp[keys[i]] = {}; // Ensure the nested object exists
                temp = temp[keys[i]];
            }
            temp[keys[keys.length - 1]] = value; // Assign value

            return { ...newState }; // Return the updated state
        });
    };



    if (loading || !profile || !profile.profile) return <div className="flex justify-center items-center h-screen"><span className="loading loading-bars loading-xl"></span></div>;

    return (
        <>
            {/* Profile View Mode */}
            <div className='max-w-7xl mx-auto bg-base-100 border fade-in border-gray-200 shadow-xl rounded-2xl'>
                <div className='flex p-2 w-full'>
                    <div className='flex w-3/4 space-x-4 p-3'>
                        <div className="w-32 h-32 border-4 border-white ring-4 ring-accent/20 rounded-full overflow-hidden">
                            <img className="object-cover object-center" src={`${BASE_URL}${profile?.profile?.profilePhoto}`} alt='Profile Picture' />
                        </div>
                        <div className='flex flex-col justify-center items-start'>
                            <h1 className='text-md md:text-xl text-base-content font-semibold'>{profile?.first_name} {profile?.last_name}</h1>
                            <p className='text-gray-500 text-xs md:text-sm'>Full Stack Web Developer</p>
                            <p className='text-base-content cursor-pointer hover:text-blue-400 text-xs'>{profile?.email}</p>
                        </div>
                    </div>
                    <div className='flex w-1/4 justify-center items-center'>
                        <button onClick={toggleEdit} className='btn btn-accent'><i className="fa-solid fa-pen-to-square" />Edit</button>
                    </div>
                </div>
                <div className='flex flex-col p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Professional Summary</h2>
                    <hr />
                    <p className='text-sm'>{profile?.profile.bio || "Not added"}</p>
                </div>

                <section className='flex flex-col px-4'>
                    <h2 className='text-lg font-semibold mb-2'>Skills</h2>
                    <hr />
                    {skills.length > 0 ? (
                        <div className='flex space-x-3 py-2 flex-wrap'>
                            {skills.map((item, index) => (
                                <span key={index} className='badge p-4 badge-neutral'>{item}</span>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No skills added yet.</p>
                    )}

                </section>

                {/* Resume */}
                <section className='p-4'>
                    <ResumePreview resumeUrl={profile?.profile?.resume ? `${BASE_URL}${profile.profile.resume}` : null}/>
                </section>

                <section className='flex flex-col p-2 py-2 bg-base-200 rounded-xl shadow-xl mb-4 mx-4'>
                    <h2>Contact Information</h2>
                    <div className='flex flex-col sm:flex-row p-2 space-y-4 sm:space-y-0 sm:space-x-4'>
                        <div className='flex flex-col bg-base-100 rounded-lg space-y-3 text-sm p-2'>
                            <span><i className="fa-solid fa-envelope me-2" />Email : {profile.email}</span>
                            <span><i className="fa-solid fa-location-dot me-2" />Place : {profile?.profile.place || "Not provided"}</span>
                            <span><i className="fa-solid fa-location-arrow me-2" />State : Not implemented</span>
                            <span><i className="fa-solid fa-location-crosshairs me-2" />PIN : {profile?.profile.pin || "Not Provided"}</span>
                        </div>
                        <div className='flex flex-col bg-base-100 rounded-lg text-sm space-y-3 p-2'>
                            <span><i className="fa-brands fa-github me-2" />Github : {profile?.profile?.socialLinks?.github || "Not added yet!"}</span>
                            <span><i className="fa-solid fa-briefcase me-2" />Portfolio : {profile?.profile?.socialLinks?.portfolio || "Not added yet!"}</span>
                            <span><i className="fa-brands fa-linkedin me-2" />LinkedIn : Not implemented</span>
                            <span><i className="fa-brands fa-x-twitter me-2" />X : {profile?.profile?.socialLinks?.x || "Not added yet!"}</span>
                        </div>

                    </div>
                </section>

                <section className='flex flex-col p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Education</h2>
                    <p className='txet-md uppercase mb-4'>{profile?.profile?.qualification || "Not added yet!"}</p>
                    <hr />
                </section>


            </div>

            {/* Edit Modal */}
            {editProfile && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-full sm:max-w-4xl bg-base-100 rounded-lg shadow-xl">
                        {/* Close Button */}
                        <button
                            className="btn sm:hidden btn-sm btn-circle absolute top-1 right-2"
                            onClick={toggleEdit}
                        >
                            ✕
                        </button>

                        {/* Right Profile */}
                        <div className="rounded-xl sm:col-span-3 p-4 bg-base-200">
                            {/* Profile Picture and bio container */}
                            <div className="flex space-x-4">
                                <div className="flex justify-center bg-base-300 rounded-lg w-full p-2 mb-4">
                                    <label className="flex flex-col items-center cursor-pointer">
                                        <div className="w-20 h-20 rounded-full border-4 border-base-300 shadow-2xl overflow-hidden mb-2">
                                            <img
                                                src={preview || `${BASE_URL}${profile.profile.profilePhoto}`}
                                                alt="Profile Picture"
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <input
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                            onChange={(e) => handleFileChange(e, 'profilePhoto')}
                                        />
                                        <span className="text-slate-500 text-xs">
                                            Upload Profile Picture
                                        </span>
                                    </label>
                                </div>

                                {/* Bio */}
                                <div className="flex w-full mb-4">
                                    <textarea
                                        placeholder="Bio"
                                        name='profile.bio'
                                        value={updateProfile.profile.bio}
                                        onChange={handleChange}
                                        className="textarea textarea-bordered textarea-xs w-full max-w-xl"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Name */}
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    name='first_name'
                                    placeholder="First Name"
                                    value={updateProfile?.first_name}
                                    onChange={handleChange}
                                    className="input input-bordered w-1/2"
                                />
                                <input
                                    type="text"
                                    name='last_name'
                                    placeholder="Last Name"
                                    value={updateProfile?.last_name}
                                    onChange={handleChange}
                                    className="input input-bordered w-1/2"
                                />
                            </div>

                            {/* Phone and Email */}
                            <div className="flex space-x-2 my-2">
                                <input
                                    type="text"
                                    name='phoneNumber'
                                    placeholder="Phone"
                                    value={updateProfile?.phoneNumber}
                                    onChange={handleChange}
                                    className="input input-bordered w-1/2"
                                />
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Email"
                                    value={updateProfile?.email}
                                    onChange={handleChange}
                                    className="input input-bordered w-1/2"
                                />
                            </div>

                            {/* Address */}
                            <div className="flex space-x-2 my-2">
                                <input
                                    type="text"
                                    name='profile.place'
                                    value={updateProfile.profile.place}
                                    onChange={handleChange}
                                    placeholder="Place"
                                    className="input input-bordered w-1/3"
                                />
                                <input
                                    type="text"
                                    placeholder="State"
                                    className="input input-bordered w-1/3"
                                />
                                <input
                                    type="number"
                                    name='profile.pin'
                                    placeholder="PIN Code"
                                    value={updateProfile.profile.pin}
                                    onChange={handleChange}
                                    className="input input-bordered w-1/3"
                                    style={{
                                        appearance: 'none',
                                        MozAppearance: 'textfield',
                                    }}
                                />
                            </div>

                            {/* Qualification */}
                            <div className="flex space-x-2 my-2">
                                <select onChange={handleChange} name='profile.qualification'
                                    value={updateProfile.profile.qualification}
                                    className="select select-bordered text-slate-500 w-1/2"
                                >
                                    <option disabled>
                                        Qualification
                                    </option>
                                    <option value="btech">B-Tech</option>
                                    <option value="degree">Degree</option>
                                    <option value="diploma">Diploma</option>
                                </select>
                                <input
                                    type="text"
                                    name='profile.branch'
                                    placeholder="Branch"
                                    className="input input-bordered w-1/2"
                                />
                            </div>

                            {/* Other */}
                            <div className="flex space-x-2 my-2">
                                <select className="select w-1/2" disabled>
                                    <option>Role: Selected as Candidate</option>
                                </select>
                                <label className="form-control w-1/2">
                                    <input
                                        type="file"
                                        className="file-input file-input-bordered file-input-accent-content w-full"
                                        onChange={(e) => handleFileChange(e, 'resume')}
                                    />
                                    <div className="label">
                                        <span className="label-text-alt text-slate-500">
                                            Select Resume
                                        </span>
                                    </div>
                                </label>
                            </div>

                            {/* Skills Section */}
                            <SkillsSection skills={skills} setSkills={setSkills} />

                            {/* Socials */}
                            <div className="flex space-x-2 my-2 mb-4">
                                <label className="input input-bordered flex items-center gap-2 w-1/3">
                                    <i className="fa-brands fa-sm fa-github" />
                                    <input
                                        type="text"
                                        name='profile.socialLinks.github'
                                        value={updateProfile?.profile?.socialLinks?.github || ""}
                                        onChange={handleChange}
                                        className="grow text-sm"
                                        placeholder="Github Link"
                                    />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 w-1/3">
                                    <i className="fa-brands fa-sm fa-x-twitter" />
                                    <input
                                        type="text"
                                        name="profile.socialLinks.x"
                                        value={updateProfile?.profile?.socialLinks?.x || ""}
                                        onChange={handleChange}
                                        className="grow text-sm"
                                        placeholder="Twitter Link"
                                    />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 w-1/3">
                                    <i className="fa-solid fa-sm fa-user-tie" />
                                    <input
                                        type="text"
                                        name="profile.socialLinks.portfolio"
                                        value={updateProfile?.profile?.socialLinks?.portfolio || ""}
                                        onChange={handleChange}
                                        className="grow text-sm"
                                        placeholder="Portfolio Link"
                                    />
                                </label>
                            </div>

                            {/* Actions */}
                            <div className="flex space-x-2">
                                <Link to={'/cdashboard'}>
                                    <button onClick={handleUpdateProfile} className="btn btn-accent shadow">
                                        Save
                                    </button>
                                </Link>

                                <button onClick={toggleEdit} className="btn btn-error shadow">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CandidateProfile