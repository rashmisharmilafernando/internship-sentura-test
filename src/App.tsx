import React, {useEffect} from 'react';
import './App.css';
import {useState} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

function App() {

    const location = useLocation();

    let user = location?.state?.user;

    interface Data {
        userId: string,
        email: string,
        name: string,
        phoneNumber: string
    }

    const [userId, setUserId] = useState<string>(user ? user.userId : "");
    const [email, setEamil] = useState<string>(user ? user.email : "");
    const [name, setName] = useState<string>(user ? user.name : "");
    const [phoneNumber, setPhoneNumber] = useState<string>(user ? user.phoneNumber : "");
    const [data, setData] = useState<Data[]>([]);

    //Handle the input
    const handleInput = (e: any, type: string) => {
        switch (type) {
            case 'userId':
                setUserId(e.target.value)
                break;
            case 'email':
                setEamil(e.target.value)
                break;
            case 'name':
                setName(e.target.value)
                break;
            case 'phoneNumber':
                setPhoneNumber(e.target.value)
                break;
        }
    }

    useEffect(() => {
        getAllUser();
    }, []);

    // save and update
    const saveDetails = () => {

        const headers = {
            'Content-Type': 'application/json',
        }

        let body = user ? {
            userId: user._userId,
            email: email,
            name: name,
            phoneNumber: phoneNumber
        } : {
            email: email,
            name: name,
            phoneNumber: phoneNumber
        }

        if (user) {
            axios.post("http://localhost:8080/api/users", body, {headers: headers})
                .then(r => {
                    alert("Save User");
                })
                .catch(e => {
                    alert("Try again");
                })
        } else {
            axios.put(`http://localhost:8080/api/users/${userId}`, body, {headers: headers})
                .then(r => {
                    alert("Update User");
                })
                .catch(e => {
                    alert("Try again");
                })
        }
    }

    // Delect
    const delectUser = (r: any) => {
        let userId = r._userId;
        axios.delete(`http://localhost:8080/api/user/delete/${userId}`)
            .then(r => {
                alert("Success..!");
            })
            .catch(e => {
                alert("Try Again");
            })
    }
}

// get All User
const getAllUser = () => {
    const headers = {
        'Content-Type': 'application/json',
    }
    axios.get("http://localhost:8080/api/users", {headers: headers})
        .then(r => {
            setData(r.data.data)
        })
        .catch(e => {
            alert("Try again");
        })
}
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
                        id="inline-full-name" type="text" onChange={handleInput}/>
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
                        id="inline-full-name"
                        type="text"
                        onChange={handleInput}

                    />
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
                        id="inline-full-name"
                        type="text"
                        onChange={handleInput}
                    />
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
                        id="inline-full-name"
                        type="text"
                        onChange={handleInput}
                    />
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

        <table className="min-w-full bg-white shadow-md rounded-xl">
            <tr className='text-gray-700'>
                <thead>
                <th className="py-3 px-4 text-center">UserId</th>
                <th className="py-3 px-4 text-center">Email</th>
                <th className="py-3 px-4 text-center">Name</th>
                <th className="py-3 px-4 text-center">Phone Number</th>
                <th className="py-3 px-4 text-center">Action</th>
                </thead>
            </tr>

        </table>
        <tbody className='text-blue-gray-900'>
        <td className="py-3 px-4 text-center"></td>
        <td className="py-3 px-4 text-center"></td>
        <td className="py-3 px-4 text-center"></td>
        <td className="py-3 px-4 text-center"></td>
        <td>
            <button className="font-medium text-[#68B984] hover:text-[#3B995B] m-4" onClick={() => {
                state:{
                    user:r
                }
            }}>Edit
            </button>
            <button onClick={() => delectUser(r)} className="font-medium text-red-600 hover:text-red-700"> Delete
            </button>

        </td>
        </tbody>
    </div>
);
}

export default App;
