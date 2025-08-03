
// -------------6-------------------

import Header from "../others/Header";
import AllTasks from "../others/AllTasks";
const AdminDashboard = ({logOut}) => {
    return (
        <div className=" h-screen w-full p-5">
            {/* <Header /> */}
            <div className="flex items-center justify-between">
                <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Admin👋</span> </h1>

                <button onClick={logOut} className='bg-red-500 text-lg text-medium text-white px-5 py-2 rounded-2xl' >Log Out</button>
            </div>

            <div>
                <form className="mt-5 flex flex-wrap w-full items-start justify-between bg-[#1C1C1C] rounded-3xl">
                    <div className="w-1/2 p-5">
                        <div>
                            <h3>Task Title</h3>
                            <input
                                className="text—sm py-l px—3 w-4/5 rounded outline—none bg-transparent border-1"
                                type="text"
                                placeholder="Make a UI Design "
                            />
                        </div>
                        <div className="mt-3">
                            <h3>Date</h3>
                            <input
                                className="text—sm py-l px—3 w-4/5 rounded outline—none bg-transparent border-1"
                                type="date"
                            />
                        </div>
                        <div className="mt-3">
                            <h3>Assign To</h3>
                            <input
                                className="text—sm py-l px—3 w-4/5 rounded outline—none bg-transparent border-1"
                                type="text"
                                placeholder="Employee Name"
                            />
                        </div>
                        <div className="mt-3 ">
                            <h3>Category</h3>
                            <input
                                className="text—sm py-l px—3 w-4/5 rounded outline—none bg-transparent border-1"
                                type="text"
                                placeholder="Design, Dev, etc"
                            />
                        </div>
                    </div>
                    <div className="w-2/5 flex flex-col items-start p-5">
                        <h3>Description</h3>
                        <textarea
                            className="w-full h-44 border-1 rounded px-4 py-2"
                            name=""
                            id=""
                            cols={30}
                            rows={10}
                        ></textarea>
                        <button className=" w-full bg-emerald-600 rounded mt-5 px-5">
                            Create Task
                        </button>
                    </div>
                </form>
            </div>

            <AllTasks />
        </div>
    );
};

export default AdminDashboard;
