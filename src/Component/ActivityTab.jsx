import React, { useState } from 'react'

const ActivityTab = () => {
    const retrievedString = localStorage.getItem("Array");
    const parsedArray = JSON.parse(retrievedString);
    console.log(parsedArray,"cvo")
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-green-50  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]">
                </div>
            </div>
            <div style={{ width: "600px", marginLeft: "400px" }}>
                <h1 className='text-2xl text font-bold text-center mt-10' >
                    <span className='text-green-500'> &lt; </span>
                    Password Act
                    <span className='text-green-500'>ivity Log / &gt;</span>
                </h1>
                <table className="table-auto rounded-md overflow-hidden mb-10 mt-10">
                    <thead className='bg-green-800 text-white'>
                        <tr>
                            <th className='py-2 border-r-2 border-black-400' style={{ width: "500px" }}>Site</th>
                            <th className='py-2 border-r-2 border-black-400' style={{ width: "450px" }}>Location</th>
                            <th className='py-2 border-r-2 border-black-400' style={{ width: "400px" }}>Modification time</th>
                        </tr>
                    </thead>
                    <tbody className='bg-green-100'>
                        {parsedArray.map((item, index) => (
                            <tr key={index}>
                                <td className='py-2 border border-white text-center'>
                                    {item.site}
                                </td>
                                <td className='py-2 border border-white text-center'>
                                    Latitude: {item.latitude} and Longitude: {item.longitude}
                                </td>
                                <td className='py-2 border border-white text-center'>
                                    {item.time}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ActivityTab
