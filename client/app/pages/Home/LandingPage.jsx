
'use client'
import Image from "next/image";
import user from "../../assets/images/user.jpg"

const LandingPage = () => {


    return (
        <div className="flex h-screen text-white sticky top-0">
            <div className="w-96 p-1 bg-cyan-950">
                <div className=" sticky top-2 bg-cyan-950">
                    <p className="font-semibold  my-3 text-slate-200">Chats</p>

                    {/* serch input */}
                    <div className="w-full grid place-items-center">
                        <input
                            className="bg-cyan-900 w-3/4 outline-none py-1 px-2"
                            type="text"
                            placeholder="search users"

                        />

                    </div>
                    {/* active users list side scroll */}

                    <div className="my-2 w-12 flex flex-col">
                        <div className="">
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-11 w-11 object-cover "
                            />
                        </div>
                        <p className="text-xs text-slate-300">shaila sabi</p>
                    </div>


                    <h3 className="font-semibold my-2 text-slate-200">Recent Chats </h3>
                </div>



                {/*already  chat user  list */}
                <div className="h-96 my-2 overflow-auto hideSroll " >

                    {/* messaged users */}
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-3  items-center   shadow-md cursor-pointer">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full object-cover "
                                style={{ maxWidth: '48px', maxHeight: "48px" }}
                            />
                        </div>
                        <div className="w-full" >
                            <div className=" flex  justify-between items-center w-full">
                                <p className="font-semibold text-slate-300 ">Nasir Ahsan</p>
                                <p className="font-thin text-xs text-slate-400">2h ago</p>
                            </div>
                            <p className="text-slate-400">how are you?</p>

                        </div>
                    </div>
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-3  items-center   shadow-md cursor-pointer">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full object-cover "
                                style={{ maxWidth: '48px', maxHeight: "48px" }}
                            />
                        </div>
                        <div className="w-full" >
                            <div className=" flex  justify-between items-center w-full">
                                <p className="font-semibold text-slate-300 ">Nasir Ahsan</p>
                                <p className="font-thin text-xs text-slate-400">2h ago</p>
                            </div>
                            <p className="text-slate-400">how are you?</p>

                        </div>
                    </div>
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-3  items-center   shadow-md cursor-pointer">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full object-cover "
                                style={{ maxWidth: '48px', maxHeight: "48px" }}
                            />
                        </div>
                        <div className="w-full" >
                            <div className=" flex  justify-between items-center w-full">
                                <p className="font-semibold text-slate-300 ">Nasir Ahsan</p>
                                <p className="font-thin text-xs text-slate-400">2h ago</p>
                            </div>
                            <p className="text-slate-400">how are you?</p>

                        </div>
                    </div>
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-3  items-center   shadow-md cursor-pointer">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full object-cover "
                                style={{ maxWidth: '48px', maxHeight: "48px" }}
                            />
                        </div>
                        <div className="w-full" >
                            <div className=" flex  justify-between items-center w-full">
                                <p className="font-semibold text-slate-300 ">Nasir Ahsan</p>
                                <p className="font-thin text-xs text-slate-400">2h ago</p>
                            </div>
                            <p className="text-slate-400">how are you?</p>

                        </div>
                    </div>
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-3  items-center   shadow-md cursor-pointer">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full object-cover "
                                style={{ maxWidth: '48px', maxHeight: "48px" }}
                            />
                        </div>
                        <div className="w-full" >
                            <div className=" flex  justify-between items-center w-full">
                                <p className="font-semibold text-slate-300 ">Nasir Ahsan</p>
                                <p className="font-thin text-xs text-slate-400">2h ago</p>
                            </div>
                            <p className="text-slate-400">how are you?</p>

                        </div>
                    </div>
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-3  items-center   shadow-md cursor-pointer">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full object-cover "
                                style={{ maxWidth: '48px', maxHeight: "48px" }}
                            />
                        </div>
                        <div className="w-full" >
                            <div className=" flex  justify-between items-center w-full">
                                <p className="font-semibold text-slate-300 ">Nasir Ahsan</p>
                                <p className="font-thin text-xs text-slate-400">2h ago</p>
                            </div>
                            <p className="text-slate-400">how are you?</p>

                        </div>
                    </div>
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-3  items-center   shadow-md cursor-pointer">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full object-cover "
                                style={{ maxWidth: '48px', maxHeight: "48px" }}
                            />
                        </div>
                        <div className="w-full" >
                            <div className=" flex  justify-between items-center w-full">
                                <p className="font-semibold text-slate-300 ">Nasir Ahsan</p>
                                <p className="font-thin text-xs text-slate-400">2h ago</p>
                            </div>
                            <p className="text-slate-400">how are you?</p>

                        </div>
                    </div>
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-3  items-center   shadow-md cursor-pointer">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full object-cover "
                                style={{ maxWidth: '48px', maxHeight: "48px" }}
                            />
                        </div>
                        <div className="w-full" >
                            <div className=" flex  justify-between items-center w-full">
                                <p className="font-semibold text-slate-300 ">Nasir Ahsan</p>
                                <p className="font-thin text-xs text-slate-400">2h ago</p>
                            </div>
                            <p className="text-slate-400">how are you?</p>

                        </div>
                    </div>
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-3  items-center   shadow-md cursor-pointer">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full object-cover "
                                style={{ maxWidth: '48px', maxHeight: "48px" }}
                            />
                        </div>
                        <div className="w-full" >
                            <div className=" flex  justify-between items-center w-full">
                                <p className="font-semibold text-slate-300 ">Nasir Ahsan</p>
                                <p className="font-thin text-xs text-slate-400">2h ago</p>
                            </div>
                            <p className="text-slate-400">how are you?</p>

                        </div>
                    </div>
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-3  items-center   shadow-md cursor-pointer">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full object-cover "
                                style={{ maxWidth: '48px', maxHeight: "48px" }}
                            />
                        </div>
                        <div className="w-full" >
                            <div className=" flex  justify-between items-center w-full">
                                <p className="font-semibold text-slate-300 ">Nasir Ahsan</p>
                                <p className="font-thin text-xs text-slate-400">2h ago</p>
                            </div>
                            <p className="text-slate-400">how are you?</p>

                        </div>
                    </div>




                </div>

            </div>

            <div className="flex-1 bg-slate-800 relative">

                inbox chat

                {/* message part header  */}
                <div className="absolute top-0 bg-slate-800 w-full h-20  ">

                    <div className=" flex gap-3 px-2 my-2  rounded-md items-center">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-12 w-12 object-cover "
                            />
                        </div>
                        <div >
                            <p className="font-semibold text-slate-300">Nasir Ahsan</p>
                            <p className="font-thin text-slate-300">active 2h ago</p>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------ */}

                <div className=" flex flex-col gap-4 mt-14 overflow-y-scroll h-[540px] p-4">


                    {/*  receiver message */}
                    <div className="flex   gap-1 ">
                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-8 w-8 object-cover self-end"
                            />
                        </div>
                        <div className="self-start my-2" style={{ maxWidth: "75%" }}>
                            <div
                                className=" bg-cyan-800  py-2 px-4  rounded-ss-3xl rounded-se-md "

                            >
                                <p>I'm fine, what about you?

                                    how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?
                                </p>

                            </div>
                            {/* <div className="flex justify-between">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div> */}
                        </div>
                    </div>

                    {/* sender message */}
                    <div className="flex gap-1 self-end" style={{ maxWidth: "75%" }}>
                        <div className="my-2 " >
                            <div className=" bg-cyan-800  py-2 px-4 rounded-ss rounded-se-3xl" >
                                <p >how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?

                                </p>

                            </div>

                            {/* <div className="flex justify-between my-0">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div> */}

                        </div>

                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className=" max-h-8  rounded-full  object-cover self-end "
                                style={{ maxWidth: '32px' }}
                            />
                        </div>

                    </div>
                    {/*  receiver message */}
                    <div className="flex   gap-1 ">
                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-8 w-8 object-cover self-end"
                            />
                        </div>
                        <div className="self-start my-2" style={{ maxWidth: "75%" }}>
                            <div
                                className=" bg-cyan-800  py-2 px-4  rounded-ss-3xl rounded-se-md "

                            >
                                <p>I'm fine, what about you?

                                    how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?
                                </p>

                            </div>
                            <div className="flex justify-between">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>
                        </div>
                    </div>

                    {/* sender message */}
                    <div className="flex gap-1 self-end" style={{ maxWidth: "75%" }}>
                        <div className="my-2 " >
                            <div className=" bg-cyan-800  py-2 px-4 rounded-ss rounded-se-3xl" >
                                <p >how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?

                                </p>

                            </div>

                            <div className="flex justify-between my-0">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>

                        </div>

                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className=" max-h-8  rounded-full  object-cover self-end "
                                style={{ maxWidth: '32px' }}
                            />
                        </div>

                    </div>
                    {/*  receiver message */}
                    <div className="flex   gap-1 ">
                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-8 w-8 object-cover self-end"
                            />
                        </div>
                        <div className="self-start my-2" style={{ maxWidth: "75%" }}>
                            <div
                                className=" bg-cyan-800  py-2 px-4  rounded-ss-3xl rounded-se-md "

                            >
                                <p>I'm fine, what about you?

                                    how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?
                                </p>

                            </div>
                            <div className="flex justify-between">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>
                        </div>
                    </div>

                    {/* sender message */}
                    <div className="flex gap-1 self-end" style={{ maxWidth: "75%" }}>
                        <div className="my-2 " >
                            <div className=" bg-cyan-800  py-2 px-4 rounded-ss rounded-se-3xl" >
                                <p >how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?

                                </p>

                            </div>

                            <div className="flex justify-between my-0">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>

                        </div>

                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className=" max-h-8  rounded-full  object-cover self-end "
                                style={{ maxWidth: '32px' }}
                            />
                        </div>

                    </div>
                    {/*  receiver message */}
                    <div className="flex   gap-1 ">
                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-8 w-8 object-cover self-end"
                            />
                        </div>
                        <div className="self-start my-2" style={{ maxWidth: "75%" }}>
                            <div
                                className=" bg-cyan-800  py-2 px-4  rounded-ss-3xl rounded-se-md "

                            >
                                <p>I'm fine, what about you?

                                    how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?
                                </p>

                            </div>
                            <div className="flex justify-between">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>
                        </div>
                    </div>

                    {/* sender message */}
                    <div className="flex gap-1 self-end" style={{ maxWidth: "75%" }}>
                        <div className="my-2 " >
                            <div className=" bg-cyan-800  py-2 px-4 rounded-ss rounded-se-3xl" >
                                <p >how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?

                                </p>

                            </div>

                            <div className="flex justify-between my-0">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>

                        </div>

                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className=" max-h-8  rounded-full  object-cover self-end "
                                style={{ maxWidth: '32px' }}
                            />
                        </div>

                    </div>
                    {/*  receiver message */}
                    <div className="flex   gap-1 ">
                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-8 w-8 object-cover self-end"
                            />
                        </div>
                        <div className="self-start my-2" style={{ maxWidth: "75%" }}>
                            <div
                                className=" bg-cyan-800  py-2 px-4  rounded-ss-3xl rounded-se-md "

                            >
                                <p>I'm fine, what about you?

                                    how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?
                                </p>

                            </div>
                            <div className="flex justify-between">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>
                        </div>
                    </div>

                    {/* sender message */}
                    <div className="flex gap-1 self-end" style={{ maxWidth: "75%" }}>
                        <div className="my-2 " >
                            <div className=" bg-cyan-800  py-2 px-4 rounded-ss rounded-se-3xl" >
                                <p >how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?

                                </p>

                            </div>

                            <div className="flex justify-between my-0">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>

                        </div>

                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className=" max-h-8  rounded-full  object-cover self-end "
                                style={{ maxWidth: '32px' }}
                            />
                        </div>

                    </div>
                    {/*  receiver message */}
                    <div className="flex   gap-1 ">
                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-8 w-8 object-cover self-end"
                            />
                        </div>
                        <div className="self-start my-2" style={{ maxWidth: "75%" }}>
                            <div
                                className=" bg-cyan-800  py-2 px-4  rounded-ss-3xl rounded-se-md "

                            >
                                <p>I'm fine, what about you?

                                    how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?
                                </p>

                            </div>
                            <div className="flex justify-between">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>
                        </div>
                    </div>

                    {/* sender message */}
                    <div className="flex gap-1 self-end" style={{ maxWidth: "75%" }}>
                        <div className="my-2 " >
                            <div className=" bg-cyan-800  py-2 px-4 rounded-ss rounded-se-3xl" >
                                <p >how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?

                                </p>

                            </div>

                            <div className="flex justify-between my-0">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>

                        </div>

                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className=" max-h-8  rounded-full  object-cover self-end "
                                style={{ maxWidth: '32px' }}
                            />
                        </div>

                    </div>
                    {/*  receiver message */}
                    <div className="flex   gap-1 ">
                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-8 w-8 object-cover self-end"
                            />
                        </div>
                        <div className="self-start my-2" style={{ maxWidth: "75%" }}>
                            <div
                                className=" bg-cyan-800  py-2 px-4  rounded-ss-3xl rounded-se-md "

                            >
                                <p>I'm fine, what about you?

                                    how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?
                                </p>

                            </div>
                            <div className="flex justify-between">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>
                        </div>
                    </div>

                    {/* sender message */}
                    <div className="flex gap-1 self-end" style={{ maxWidth: "75%" }}>
                        <div className="my-2 " >
                            <div className=" bg-cyan-800  py-2 px-4 rounded-ss rounded-se-3xl" >
                                <p >how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?

                                </p>

                            </div>

                            <div className="flex justify-between my-0">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>

                        </div>

                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className=" max-h-8  rounded-full  object-cover self-end "
                                style={{ maxWidth: '32px' }}
                            />
                        </div>

                    </div>
                    {/*  receiver message */}
                    <div className="flex   gap-1 ">
                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-8 w-8 object-cover self-end"
                            />
                        </div>
                        <div className="self-start my-2" style={{ maxWidth: "75%" }}>
                            <div
                                className=" bg-cyan-800  py-2 px-4  rounded-ss-3xl rounded-se-md "

                            >
                                <p>I'm fine, what about you?

                                    how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?
                                </p>

                            </div>
                            <div className="flex justify-between">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>
                        </div>
                    </div>

                    {/* sender message */}
                    <div className="flex gap-1 self-end" style={{ maxWidth: "75%" }}>
                        <div className="my-2 " >
                            <div className=" bg-cyan-800  py-2 px-4 rounded-ss rounded-se-3xl" >
                                <p >how are you? and where are you what about your day of Eid Ul Fitor.
                                    what you will do all day long at eid day. have you any plan?

                                </p>

                            </div>

                            <div className="flex justify-between my-0">
                                <p className="text-start mx-5">24 april 2023  04:30pm</p>
                                <p className="text-end mx-5">seen</p>
                            </div>

                        </div>

                        <div className="flex">
                            <Image
                                src={user}
                                alt="user image"
                                className=" max-h-8  rounded-full  object-cover self-end "
                                style={{ maxWidth: '32px' }}
                            />
                        </div>

                    </div>






                </div>



                {/* message input div*/}
                <div className="absolute bottom-1 bg-slate-800 w-full h-20 shadow flex items-center justify-center">

                    <textarea
                        className="w-1/2 outline-none py-1 px-2 bg-cyan-950"
                        type="text"
                        placeholder="Enter messages"
                    />
                </div>
            </div>
        </div >
    );
};

export default LandingPage;