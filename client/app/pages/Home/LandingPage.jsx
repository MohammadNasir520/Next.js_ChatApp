import Image from "next/image";
import user from "../../assets/images/user.jpg"

const LandingPage = () => {
    return (
        <div className="flex h-screen text-white sticky top-0">
            <div className="w-96 p-1 bg-cyan-950">
                <div className=" sticky top-2 bg-cyan-950">
                    <p className="font-semibold  my-3 text-slate-200">Chats</p>

                    {/* serch input */}
                    <input
                        className="bg-cyan-900 w-full outline-none py-1 px-2"
                        type="text"
                        placeholder="search users"
                    />

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

                    {/* messaged user */}
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-3  items-center">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-12 w-12 object-cover "
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
                    {/* messaged user */}
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-2  items-center">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-12 w-12 object-cover "
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
                    {/* messaged user */}
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-2  items-center">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-12 w-12 object-cover "
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
                    {/* messaged user */}
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-2  items-center">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-12 w-12 object-cover "
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
                    {/* messaged user */}
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-2  items-center">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-12 w-12 object-cover "
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
                    {/* messaged user */}
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-2  items-center">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-12 w-12 object-cover "
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
                    {/* messaged user */}
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-2  items-center">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-12 w-12 object-cover "
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
                    {/* messaged user */}
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-2  items-center">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-12 w-12 object-cover "
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
                    {/* messaged user */}
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-2  items-center">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-12 w-12 object-cover "
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
                    {/* messaged user */}
                    <div className="hover:bg-gray-800 flex gap-3 px-2 my-2  items-center">
                        <div>
                            <Image
                                src={user}
                                alt="user image"
                                className="rounded-full h-12 w-12 object-cover "
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
                        <div>
                            <p className="font-semibold text-slate-300">Nasir Ahsan</p>
                        </div>
                    </div>
                </div>
                {/* ------------------------------------ */}

                <div className=" flex flex-col gap-4 mt-14 overflow-y-scroll h-[540px] p-4">
                    <div className="self-end">
                        <p >how are you?</p>
                    </div>
                    <div className="self-start ">
                        <p>I'm fine, what about you?</p>
                    </div>
                    <div className="self-end">
                        <p >how are you?</p>
                    </div>
                    <div className="self-start ">
                        <p>I'm fine, what about you?</p>
                    </div>
                    <div className="self-end">
                        <p >how are you?</p>
                    </div>
                    <div className="self-start ">
                        <p>I'm fine, what about you?</p>
                    </div>
                    <div className="self-end">
                        <p >how are you?</p>
                    </div>
                    <div className="self-start ">
                        <p>I'm fine, what about you?</p>
                    </div>
                    <div className="self-end">
                        <p >how are you?</p>
                    </div>
                    <div className="self-start ">
                        <p>I'm fine, what about you?</p>
                    </div>
                    <div className="self-end">
                        <p >how are you?</p>
                    </div>
                    <div className="self-start ">
                        <p>I'm fine, what about you?</p>
                    </div>
                    <div className="self-end">
                        <p >how are you?</p>
                    </div>
                    <div className="self-start ">
                        <p>I'm fine, what about you?</p>
                    </div>
                    <div className="self-end">
                        <p >how are you?</p>
                    </div>
                    <div className="self-start ">
                        <p>I'm fine, what about you?</p>
                    </div>
                    <div className="self-end">
                        <p >how are you?</p>
                    </div>
                    <div className="self-start ">
                        <p>I'm fine, what about you?</p>
                    </div>
                    <div className="self-end">
                        <p >how are you?</p>
                    </div>
                    <div className="self-start ">
                        <p>I'm fine, what about you?</p>
                    </div>
                    <div className="self-end">
                        <p >how are you?</p>
                    </div>
                    <div className="self-start  bg-cyan-800 max-w-3/4 py-2 px-4 rounded-ss rounded-se-3xl ">
                        <p>I'm fine, what about you?</p>
                    </div>
                    <div className="self-end bg-cyan-800 max-w-3/4 py-2 px-4 rounded-ss rounded-se-3xl" >
                        <p >how are you? and where are you what about your day of Eid Ul Fitor.
                            what you will do all day long at eid day. have you any plan?

                        </p>
                    </div>
                    <div className="self-start ">
                        <p>I'm fine, what about you? dfas</p>
                    </div>

                </div>



                {/* messege input */}
                <div className="absolute bottom-1 bg-slate-800 w-full h-20 shadow flex items-center justify-center">

                    <input
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