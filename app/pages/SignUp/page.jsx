
"use client"
import Link from "next/link";
import { useState } from "react";


const page = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('email', email)
        console.log('pass', password)
        console.log('confirmPassword', confirmPassword)
    }

    return (
        <div className="bg-cyan-950 h-screen">

            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
                <div class="mx-auto max-w-lg shadow-xl bg-teal-950 shadow-cyan-100">


                    <form
                        onSubmit={handleSubmit}
                        class="mb-0 mt-6 space-y-1 rounded-lg p-2 shadow:p-6 lg:p-8 text-white"
                    >
                        <p class="text-center text-lg font-medium ">Create a new account</p>

                        <div>

                            <div class="relative">
                                <label for="email" class="">Your Full Name</label>
                                <input
                                    onChange={(event) => setName(event.target.value)}
                                    type="email"
                                    class="w-full bg-cyan-950  rounded-lg border-gray-200 p-2 pe-12  shadow-sm outline-none"
                                    placeholder="Enter email"

                                />


                            </div>
                        </div>
                        <div>

                            <div class="relative">
                                <label for="email" class="">Your Email</label>
                                <input
                                    onChange={(event) => setEmail(event.target.value)}
                                    type="email"
                                    class="w-full bg-cyan-950  rounded-lg border-gray-200 p-2 pe-12  shadow-sm outline-none"
                                    placeholder="Enter email"

                                />


                            </div>
                        </div>

                        <div>

                            <label for="password" class=" ">Set a Password</label>
                            <div class="relative">
                                <input
                                    onChange={(event) => setPassword(event.target.value)}
                                    type="password"
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

                        <div>

                            <label for="password" class=" ">Confirm Password</label>
                            <div class="relative">
                                <input
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                    type="password"
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
                        <div>

                            <label for="image" class=" ">Upload Profile Pic</label>
                            <div class="relative">
                                <input
                                    // onChange={(event) => setConfirmPassword(event.target.value)}
                                    type="file"
                                    accept="image/*"
                                    name="image"

                                />

                            </div>
                        </div>

                        <button
                            type="submit"
                            class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign Up
                        </button>

                        <p class="text-center text-lg text-white">
                            No account?
                            <Link class="underline  bg-transparent text-blue-700" href="/pages/Login">Sign in</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;