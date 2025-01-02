import React from "react";
import Sidebar from "./Sidebar";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const barChartData = {
    labels: ['Male', 'Female', 'Other'],
    datasets: [
      {
        label: 'Gender Ratio',
        data: [70, 25, 5],
        backgroundColor: '#FF9500',
        borderColor: '#FF9500',
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Cumulative Gender Ratio',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar */}
      <div className="w-16 sm:w-52 bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-4 sm:p-6 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Total Users */}
          <div className="bg-white p-6 text-black shadow-md rounded-md">
            <h3 className="text-center text-sm sm:text-lg font-medium">Total Users</h3>
            <p className="text-center text-lg sm:text-2xl font-semibold mt-2">2000</p>
          </div>

          {/* Registered Users */}
          <div className="bg-white p-6 text-black shadow-md rounded-md">
            <h3 className="text-center text-sm sm:text-lg font-medium">Registered Users</h3>
            <p className="text-center text-lg sm:text-2xl font-semibold mt-2">2000</p>
          </div>

          {/* Suspended Users */}
          <div className="bg-white p-6 text-black shadow-md rounded-md">
            <h3 className="text-center text-sm sm:text-lg font-medium">Suspended Users</h3>
            <p className="text-center text-lg sm:text-2xl font-semibold mt-2">100</p>
          </div>

          {/* Active Users */}
          <div className="bg-white p-6 text-black shadow-md rounded-md">
            <h3 className="text-center text-sm sm:text-lg font-medium">Active Users</h3>
            <p className="text-center text-lg sm:text-2xl font-semibold mt-2">1000</p>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-9 h-64 text-white col-span-2 row-span-3 sm:col-span-2 sm:row-span-2 md:col-span-3 md:row-span-2 lg:col-span-2 lg:row-span-3">
            <Bar data={barChartData} options={barChartOptions} />
          </div>

          {/* Inactive Users */}
          <div className="bg-white p-6 text-black shadow-md rounded-md">
            <h3 className="text-center text-sm sm:text-lg font-medium">Inactive Users</h3>
            <p className="text-center text-lg sm:text-2xl font-semibold mt-2">200</p>
          </div>

          {/* Others */}
          <div className="bg-white p-6 text-black shadow-md rounded-md">
            <h3 className="text-center text-sm sm:text-lg font-medium">Others</h3>
            <p className="text-center text-lg sm:text-2xl font-semibold mt-2">800</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
