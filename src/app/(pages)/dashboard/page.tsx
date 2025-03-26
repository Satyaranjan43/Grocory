'use client';

import React from 'react';

export default function Dashboard() {
    console.log("Hello world");
    return (
        <div className=" bg-gray-100 min-h-screen flex flex-col">
            <style jsx>{`
                @keyframes spin {
                    from {
                        transform: rotateY(0);
                    }
                    to {
                        transform: rotateY(1turn);
                    }
                }
                .card {
                    animation: spin 5s ease infinite;
                    perspective: 1000px;
                }
            `}</style>

            <nav className="bg-gradient-to-r from-pink-200 to-red-200 p-4 shadow-lg fixed top-0 w-full z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-white text-2xl font-bold">MyLogo</a>
                    <div className="hidden md:flex space-x-6">
                        <a href="#" className="text-white hover:text-gray-300">Home</a>
                        <a href="#" className="text-white hover:text-gray-300">About</a>
                        <a href="#" className="text-white hover:text-gray-300">Services</a>
                        <a href="#" className="text-white hover:text-gray-300">Contact</a>
                    </div>
                </div>
            </nav>

            <div className="flex justify-center p-10 space-x-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="card max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p className="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mb-6 mt-6 flex h-full bg-gray-100 shadow-lg rounded-xl overflow-hidden">
                {/* Image Section */}
                <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-r from-gray-300 to-gray-200">
                    {/* <img
                        className="rounded-full w-40 h-40 border-4 border-white shadow-lg transition-transform duration-300 transform hover:scale-110"
                        src="https://images.freeimages.com/images/large-previews/bc4/curious-bird-1-1374322.jpg?fmt=webp&h=350"
                        alt="random"
                    /> */}
                </div>

                {/* Text Section */}
                <div className="flex-1 flex items-center justify-center p-8">
                    <h1 className="text-gray-800 text-2xl font-semibold leading-relaxed text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nostrum
                        eligendi quae ut odit, quisquam, laborum aspernatur quod qui excepturi
                        animi, at corporis consequuntur dolorum quam nesciunt quasi facilis
                        debitis?
                    </h1>
                </div>
            </div>
            <div className="mb-6 mt-6 flex h-full bg-gray-100 shadow-lg rounded-xl overflow-hidden">

                <div className="flex-1 flex items-center justify-center p-8">
                    <h1 className="text-gray-800 text-2xl font-semibold leading-relaxed text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nostrum
                        eligendi quae ut odit, quisquam, laborum aspernatur quod qui excepturi
                        animi, at corporis consequuntur dolorum quam nesciunt quasi facilis
                        debitis?
                    </h1>
                </div>
                <div className="flex-1 flex items-center justify-center p-6 bg-gradient-to-r from-gray-300 to-gray-200">
                    {/* <img
                        className="rounded-full w-40 h-40 border-4 border-white shadow-lg transition-transform duration-300 transform hover:scale-110"
                        src="https://images.freeimages.com/images/large-previews/bc4/curious-bird-1-1374322.jpg?fmt=webp&h=350"
                        alt="random"
                    /> */}
                </div>

            </div>

            <div className='flex justify-center mb-2  w-full'>
                <table className="table-auto bg-gradient-to-br from-yellow-200 to-green-200 w-3/4 rounded-xl ">
                    <thead className=''>
                        <tr className='border-b '>
                            <th className="px-6 py-3 text-left border-r ">Name</th>
                            <th className="px-6 py-3 text-left">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=' border-b'>
                            <td className="px-6 py-3 border-r">John Doe</td>
                            <td className="px-6 py-3">25</td>
                        </tr>
                        <tr className=''>
                            <td className="px-6 py-3 border-r">Satyaranjan Sahoo</td>
                            <td className="px-6 py-3">25</td>
                        </tr>
                    </tbody>
                </table>

            </div>


            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17"
                            </th> */}
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-6 py-4">
                                Laptop PC
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>
                            <td className="px-6 py-4">
                                Accessories
                            </td>
                            <td className="px-6 py-4">
                                $99
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center p-10 bg-gradient-to-br from-purple-600 to-red-500 ">
                <form className="bg-white p-6 rounded-lg shadow-md w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Email</label>
                        <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">Message</label>
                        <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your message"></textarea>
                    </div>
                    <button className="dark:md:hover:bg-fuchsia-600 ">Submit</button>
                </form>
            </div>

            <footer className="bg-black text-white text-center p-4 mt-auto ">
                &copy; 2025 MyWebsite. All rights reserved.
            </footer>
        </div>
    );
}
