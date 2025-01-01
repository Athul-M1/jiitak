import React from 'react'

const AdminDashboard = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-4">
            <div className="bg-gray-200 p-4 col-span-3">Cell 1 (Spans 2 columns)</div>
            <div className="bg-gray-300 p-4">Cell 2</div>
            <div className="bg-gray-400 p-4">Cell 3</div>
            <div className="bg-gray-500 p-4">Cell 4</div>
            <div className="bg-gray-600 p-4 row-span-2 col-span-2">Cell 5 (Spans 2 rows)</div>
            <div className="bg-gray-700 p-4">Cell 6</div>
            <div className="bg-gray-800 p-4">Cell 7</div>
            <div className="bg-gray-900 p-4">Cell 8</div>
            <div className="bg-gray-100 p-4">Cell 9</div>
            <div className="bg-gray-200 p-4">Cell 10</div>
            <div className="bg-gray-300 p-4">Cell 11</div>
            <div className="bg-gray-400 p-4">Cell 12</div>
            <div className="bg-gray-500 p-4">Cell 13</div>
            <div className="bg-gray-600 p-4">Cell 14</div>
            <div className="bg-gray-700 p-4">Cell 15</div>
            <div className="bg-gray-800 p-4">Cell 16</div>
        </div>
    )
}

export default AdminDashboard