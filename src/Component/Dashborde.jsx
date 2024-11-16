import { useState } from 'react';

const Sidebar = () => {
  const [appointments, setAppointments] = useState([
    { patientName: 'John Doe', time: '10:00 AM' },
    { patientName: 'Jane Doe', time: '11:00 AM' },
    { patientName: 'Bob Smith', time: '12:00 PM' },
  ]);

  const [notifications, setNotifications] = useState(5);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-blue-500 w-64 p-4 text-white">
        {/* Profile Section */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div
              className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16"
              aria-label="Profile Picture"
              role="img"
            />
            <div className="ml-4">
              <h2 className="text-lg font-bold">Dr. Jane Smith</h2>
              <p className="text-sm">Doctor</p>
            </div>
          </div>
          {/* Notifications Icon */}
          <div className="flex items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-labelledby="bell-icon-title"
            >
              <title id="bell-icon-title">Notifications</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="ml-2">{notifications}</span>
          </div>
        </div>
        {/* Sidebar Links */}
        <ul>
          <li className="mb-4">
            <a
              href="javascript:void(0);"
              className="block py-2 px-4 hover:bg-blue-700 rounded"
            >
              Settings
            </a>
          </li>
          <li className="mb-4">
            <a
              href="javascript:void(0);"
              className="block py-2 px-4 hover:bg-blue-700 rounded"
            >
              Notifications
            </a>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4">
        <h2 className="text-lg font-bold mb-4">Appointments</h2>
        <ul>
          {appointments.map((appointment, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded p-4 mb-4"
            >
              <h3 className="text-lg font-bold">
                {appointment.patientName}
              </h3>
              <p className="text-sm">{appointment.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
