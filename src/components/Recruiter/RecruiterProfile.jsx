import React from 'react'
import { Link } from 'react-router-dom'
import ProfileCardRecruiter from './ProfileCardRecruiter'


function RecruiterProfile() {
  return (
    <>
      <div className='max-w-7xl mx-auto bg-base-300 border fade-in border-gray-200 shadow-2xl rounded-2xl my-4 p-2'>
        <h1 className='text-2xl text-center font-semibold py-2'>Complete Your Profile</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {/* Left Profile */}
          <ProfileCardRecruiter/>
          {/* Right Profile */}
          <div className='rounded-xl sm:col-span-2 p-4 bg-base-200'>
            {/* Name */}
            <div className="flex space-x-2">
              <input type="text" placeholder="First Name" className="input input-bordered w-1/2" />
              <input type="text" placeholder="Last Name" className="input input-bordered w-1/2" />
            </div>
            {/* Phone and Email */}
            <div className="flex space-x-2 my-2">
              <input type="text" placeholder="Phone" className="input input-bordered w-1/2" />
              <input type="email" placeholder="Email" className="input input-bordered w-1/2" />
            </div>
            {/* Adress */}
            <div className="flex space-x-2 my-2">
              <input type="text" placeholder="Place" className="input input-bordered w-1/3" />
              <input type="text" placeholder="State" className="input input-bordered w-1/3" />
              <input type="number" placeholder="PIN Code" className="input input-bordered appearance-none w-1/3" style={{ appearance: 'none', MozAppearance: 'textfield' }} />
            </div>
            {/* Qualification */}
            <div className="flex space-x-2 my-2">
              <select className="select select-bordered text-slate-500 w-1/2">
                <option disabled selected>Qualification</option>
                <option>B-Tech</option>
                <option>Degree</option>
                <option>Diploma</option>
              </select>
              <input type="text" placeholder='Branch' className='input input-bordered w-1/2' />
            </div>
            {/* Other */}
            <div className="flex space-x-2 my-2">
              <select className="select w-1/2" disabled>
                <option>Role : Selected as Recruiter</option>
              </select>
              <label className="form-control w-1/2">
                <input type="file" className="file-input file-input-bordered file-input-accent-content w-full" />
                <div className="label">
                  <span className="label-text-alt text-slate-500">Select Resume</span>
                </div>
              </label>
            </div>
            {/* Skills Section */}
            
            {/* Socials */}
            <div className="flex space-x-2 my-2 mb-4">
              <label className="input input-bordered flex items-center gap-2 w-1/3">
                <i className="fa-brands fa-sm fa-github" />
                <input type="text" className="grow text-sm" placeholder="Github Link" />
              </label>
              <label className="input input-bordered flex items-center gap-2 w-1/3">
                <i className="fa-brands fa-sm fa-x-twitter" />
                <input type="text" className="grow text-sm" placeholder="Twitter Link" />
              </label>
              <label className="input input-bordered flex items-center gap-2 w-1/3">
                <i className="fa-solid fa-sm fa-user-tie" />
                <input type="text" className="grow text-sm" placeholder="Portfolio Link" />
              </label>
            </div>
            {/* Actions */}
            <div className="flex space-x-2">
              <Link to={'/cdashboard'}>
                <button className='btn btn-accent shadow'>Save</button>
              </Link>

              <button className='btn btn-accent-content btn-outline shadow'>Edit</button>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default RecruiterProfile