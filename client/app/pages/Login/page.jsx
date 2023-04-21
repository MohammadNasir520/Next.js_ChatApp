"use client"
import Link from "next/link";
import { useState } from "react";



const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('email', email)
        console.log('pass', password)
    }

    return (
        <div className="bg-cyan-950 h-screen rounded-md">
            signIn
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  ">
                <div class="mx-auto max-w-lg shadow-xl bg-teal-950 shadow-cyan-100">
                    <form
                        onSubmit={handleSubmit}
                        action=""
                        class="mb-0 mt-6 space-y-1 rounded-lg p-2 shadow:p-6 lg:p-8 text-white"
                    >
                        <p class="text-center text-lg font-medium "> SignIn to Your account</p>


                        <div>

                            <div class="relative">
                                <label for="email" class="">Your Email</label>
                                <input
                                    type="email"
                                    onChange={(event) => setEmail(event.target.value)}
                                    class="w-full bg-cyan-950  rounded-lg border-gray-200 p-2 pe-12  shadow-sm outline-none"
                                    placeholder="Enter email"

                                />

                                <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="mb-2">
                            {/* sr-only */}
                            <label for="password" class=" "> Password</label>
                            <div class="relative">
                                <input
                                    type="password"
                                    onChange={(event) => setPassword(event.target.value)}
                                    class="w-full bg-cyan-950  rounded-lg border-gray-200 p-2 pe-12  shadow-sm outline-none"
                                    placeholder="Enter password"
                                />

                                <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>



                        <button
                            type="submit"
                            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            SignIn
                        </button>

                        <p class="text-center text-lg text-white">
                            No account?
                            <Link class="underline  bg-transparent text-blue-700" href="/pages/SignUp">SignUp</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;