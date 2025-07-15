import React from 'react'
import BASE_URL from '../../services/baseUrl';

const PersonalInfoSection = ({
    profile,
    updateProfile,
    setUpdateProfile,
    preview,
    handleChange,
    handleFileChange,
    handleUpdateProfile,
    editProfile,
    setEditProfile }) => {


    const toggleEdit = () => {
        if (!editProfile && profile) {
            setUpdateProfile({
                first_name: profile.first_name || '',
                last_name: profile.last_name || '',
                email: profile.email || '',
                phoneNumber: profile.phoneNumber || '',
                profile: profile.profile || {
                    bio: '', place: '', pin: '', qualification: '',
                    profilePhoto: '',
                    socialLinks: { github: '', x: '', portfolio: '' }
                }
            });
        }
        setEditProfile(!editProfile);
    };

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
                <div className='flex flex-col p-4'>
                    <h2 className='text-lg font-semibold mb-2'>Qualification</h2>
                    <hr />
                    <p className='text-sm uppercase'>{profile?.profile.qualification || "Not added"}</p>
                </div>


                <section className='flex flex-col p-2 py-2 bg-base-200 rounded-xl mb-4 mx-4'>
                    <h2>Contact Information</h2>
                    <div className='flex flex-col sm:flex-row justify-between p-2 space-y-4 sm:space-y-0 sm:space-x-4'>
                        <div className='flex flex-col w-full bg-base-100 rounded-lg space-y-3 text-sm p-2'>
                            <span><i className="fa-solid fa-envelope me-2" />Email : {profile.email}</span>
                            <span><i className="fa-solid fa-location-dot me-2" />Place : {profile?.profile.place || "Not provided"}</span>
                            <span><i className="fa-solid fa-location-arrow me-2" />State : Not implemented</span>
                            <span><i className="fa-solid fa-location-crosshairs me-2" />PIN : {profile?.profile.pin || "Not Provided"}</span>
                        </div>
                        <div className='flex flex-col w-full bg-base-100 rounded-lg text-sm space-y-3 p-2'>
                            <span><i className="fa-brands fa-github me-2" />Github : {profile?.profile?.socialLinks?.github || "Not added yet!"}</span>
                            <span><i className="fa-solid fa-briefcase me-2" />Portfolio : {profile?.profile?.socialLinks?.portfolio || "Not added yet!"}</span>
                            <span><i className="fa-brands fa-linkedin me-2" />LinkedIn : Not implemented</span>
                            <span><i className="fa-brands fa-x-twitter me-2" />X : {profile?.profile?.socialLinks?.x || "Not added yet!"}</span>
                        </div>

                    </div>
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
                                    value={updateProfile?.qualification}
                                    className="select select-bordered text-slate-500 w-1/2"
                                >
                                    <option disabled>
                                        Qualification
                                    </option>
                                    <option value="btech">B-Tech</option>
                                    <option value="degree">Degree</option>
                                    <option value="diploma">Diploma</option>
                                </select>

                                {/* Other */}
                                <div className="flex space-x-2 my-2">
                                    <select className="select w-full" disabled>
                                        <option>Role: Selected as Candidate</option>
                                    </select>
                                </div>
                            </div>


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

                                <button onClick={handleUpdateProfile} className="btn btn-accent shadow">
                                    Save
                                </button>

                                <button onClick={toggleEdit} className="btn btn-error shadow">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};

export default PersonalInfoSection;