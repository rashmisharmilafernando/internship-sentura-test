import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <h1 className="text-3xl text-center">User Management System</h1>
            <form className="w-full max-w-sm  m-5">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            User Id
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-black-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                            id="inline-full-name" type="text" value="U001"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                           Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-black-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                            id="inline-full-name" type="text" value="xxx@gmail.com"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-black-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                            id="inline-full-name" type="text" value="Rashami Sharmila"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                               htmlFor="inline-full-name">
                            Phone number
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-black-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"
                            id="inline-full-name" type="text" value="xxx-xxx-xxxx"/>
                    </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3"></div>
                </div>
                <button
                    className="ml-5 shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button">
                   Save User
                </button>

            </form>
        </div>
    );
}

export default App;
