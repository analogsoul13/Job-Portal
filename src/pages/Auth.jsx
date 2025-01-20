import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginApi, registerApi } from '../services/authServices'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/authSlice'

function Auth() {
    const [authStatus, setAuthStatus] = useState(false)

    // Get data from inputs
    const [input, setInput] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "" // default

    })

    const nav = useNavigate()
    const dispatch = useDispatch()


    // Update formData based on input name and value
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    // Handle Register
    const handleRegister = async () => {
        const { first_name, last_name, email, phoneNumber, password, role } = input
        if (!first_name || !last_name || !email || !phoneNumber || !password || !role) {
            toast.warning("All Fields Required!!")
            return;
        }

        try {
            const res = await registerApi(input)
            console.log(res)
            if (res.status == 201) {
                toast.success("Registration Succesful!!")

                dispatch(login({ role }))  // Redux  Do Redux-Persist Later

                if (role === "admin") {
                    nav("/admin/dashboard")
                } else if (role === "candidate") {
                    nav("/cdashboard")
                } else {
                    nav("/rdashboard")
                }

            } else {
                const errorMessage = res.response?.data?.message || "Something went wrong!!"
                toast.error(errorMessage)
            }

        } catch (error) {
            console.error("Error during registration!", error)
            toast.error("Registration Failed!!")

        }
    }


    // Handle Login
    const handleLogin = async () => {
        const { email, password } = input;
        if (!email || !password) {
            toast.warning("All fields required!!");
            return;
        }

        try {
            const res = await loginApi(input);
            if (res.status === 200) {
                toast.success("Login Successful!!");

                const { role, token } = res.data;
                console.log("Role and Token:", role, token); // ok

                // Save role to Redux and local storage
                dispatch(login({ role }));
                localStorage.setItem("role", role);
                localStorage.setItem("token", token);

                // Double-check role before navigation
                if (role === "admin") {
                    nav("/admin/dashboard");
                } else if (role === "recruiter") {
                    nav("/rdashboard");
                } else {
                    nav("/cdashboard"); // Default for candidates
                }
            } else {
                const errorMessage = res.response?.data?.message || "Something went wrong!!";
                toast.error(errorMessage);
            }

        } catch (error) {
            console.error("Error during login!", error);
            toast.error("Login Failed!!");
        }
    };


    // To handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (authStatus) {
            await handleLogin()
        } else {
            await handleRegister()
        }

    }

    // Toggle between Login and Register
    const changeAuth = () => {
        setAuthStatus(!authStatus);
        setInput({                     // Reset form fields
            first_name: "",
            last_name: "",
            email: "",
            phoneNumber: "",
            password: "",
            role: "candidate"
        })
    }

    return (
        <>
            <div className="min-h-screen bg-center bg-cover hero bg-base-100 bg-authBg fade-in">
                <div className="flex-col hero-content md:h-full glass md:flex-row-reverse">
                    {/* Text Section */}
                    <div className="flex items-center w-full p-8 text-white lg:w-1/2"
                        style={{ minHeight: "100%" }}>
                        <div className="p-4 text-center rounded-lg lg:text-left text-slate-700">
                            <h1 className="text-5xl font-bold">
                                {authStatus ? 'Welcome Back!' : 'Register now for full experience!'}
                            </h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                    </div>
                    <div className="w-full max-w-sm shadow-xl card bg-base-100 shrink-0">
                        <div className="card-body">

                            <form onSubmit={handleSubmit} className="form-control">
                                <h1 className='text-center'>{authStatus ? 'Login' : 'Register'}</h1>

                                {/* Email */}
                                <label className="input input-bordered mt-2 flex items-center gap-2">
                                    <i className="fa-solid fa-sm fa-envelope" />
                                    <input type="text" value={input.email} onChange={handleChange} name='email' className="grow text-sm" placeholder="Email" />
                                </label>

                                {
                                    !authStatus && (
                                        <>
                                            {/* Phone */}
                                            <label className='input input-bordered mt-2 flex items-center gap-2' htmlFor="">
                                                <i className="fa-solid fa-sm fa-phone" />
                                                <input type="text" value={input.phoneNumber} onChange={handleChange} name='phoneNumber' className='grow text-sm' placeholder='Phone Number' />

                                            </label>

                                            {/* Role Selection */}

                                            <div className='w-full py-3 flex px-4 justify-between'>
                                                <label className='flex text-xs  items-center gap-2'>Candidate
                                                    <input type="radio" name="role" value="candidate" onChange={handleChange} checked={input.role === "candidate"} className="radio radio-xs" />
                                                </label>
                                                <span className='text-xs'>Select your role</span>
                                                <label className='flex flex-row-reverse text-xs items-center gap-2'>Recruiter
                                                    <input type="radio" name="role" value="recruiter" onChange={handleChange} checked={input.role === "recruiter"} className="radio radio-xs" />
                                                </label>


                                            </div>

                                            {/* First Name */}


                                            <input type="text" value={input.first_name} onChange={handleChange} name='first_name' placeholder="First Name" className="input input-bordered text-sm" required aria-label='First Name' />

                                            {/* Last Name */}
                                            {/* <label className="label">
                                                <span className="label-text text-xs" aria-label='Last Name'>Last Name</span>
                                            </label> */}

                                            <input type="text" value={input.last_name} onChange={handleChange} name='last_name' placeholder="Last Name" className="input input-bordered text-sm mt-3" required />

                                        </>
                                    )
                                }

                                {/* Password */}
                                <label className="input input-bordered flex items-center gap-2 mt-4">
                                    <i className="fa-solid fa-sm fa-key" />
                                    <input type="password" value={input.password} onChange={handleChange} name='password' placeholder="Password" className="grow text-sm" required />
                                </label>

                                <label className="label">
                                    {
                                        authStatus ?
                                            <div className='flex flex-row justify-between w-full'>
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                <a href="#" onClick={changeAuth} className="label-text-alt link link-hover">New User?</a>
                                            </div>

                                            :
                                            <div>
                                                <a href="#" onClick={changeAuth} className="label-text-alt link link-hover">Existing user ?</a>
                                            </div>

                                    }

                                </label>

                                {/* Submit Button     */}
                                <div className="mt-2 form-control">
                                    <button className="btn btn-accent">{authStatus ? 'Login' : 'Register'}</button>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth