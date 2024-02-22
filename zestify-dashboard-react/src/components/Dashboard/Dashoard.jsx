// Dashboard.jsx
import { useState } from 'react';
import './Dashboard.css';
import { UilSearch } from '@iconscout/react-unicons';
import { LuBell } from "react-icons/lu";
import { IoFilter } from "react-icons/io5";
import profileImage from '../../assets/an-avatar-of-a-brown-guy-looking-at-you-with-cute-smiles-with-transparent-background-hes-wearing-a-627855248.png';

const Dashboard = () => {
  const [hasNotification, setHasNotification] = useState(true);
  

  return (
    <div className="dashboard-container p-0 sm:ml-60">
      {/* Dashboard Header */}
      <div className="dashboard-header grid grid-cols-3 gap-4 mb-4">
        {/* Left: Dashboard Heading */}
        <div className="col-span-1 flex items-center">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        </div>

        {/* Middle: Search Bar with Search Icon */}
        <div className="col-span-1 flex items-center relative search-bar bg-white rounded-md">
          {/* Search Bar Input */}
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none py-2 px-8 w-full placeholder-gray-500 text-gray-800"
          />
          {/* Search Icon */}
          <span className="absolute right-3 text-2xl text-gray-500 search-icon">
            <UilSearch />
          </span>
        </div>

        {/* Right: Bell Icon and Circular Profile Image */}
        <div className="col-span-1 flex items-center justify-end space-x-4">
          <div className="relative text-gray-800">
            {/* Bell Icon with notification dot */}
            <button className="focus:outline-none" onClick={() => setHasNotification(!hasNotification)}>
              <div className={`text-2xl bell-icon ${hasNotification ? 'has-notification' : ''}`}>
                <LuBell className='bell' />
              </div>
              {hasNotification && <div className="notification-dot"></div>}
            </button>
          </div>

          <div className="profile-image-container">
            {/* Circular Profile Image */}
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>

      <div className="dashboard-container p-4">
        {/* Channel List Title */}
        <div className="dashboard-section mb-4">
          <h2 className="text-2xl font-bold mb-2">Channel Listing</h2>

          {/* Eagle View 1 */}
          <div className="dashboard-view-section mb-4">
            <div className="channel-heading">
              <h3 className="text-xl font-semibold mb-2">EAGLE VIEW 1</h3>
            </div>
            <table className="table-list">
              <thead>
                <tr>
                  <th>Chat Links</th>
                  <th>Agency</th>
                  <th>Total Member</th>
                  <th>Member Join</th>
                  <th>Member Left</th>
                  <th><IoFilter />Filter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>https://t.me/+qCJbGLeN</td>
                  <td>
                    {/* Well-designed dropbox for Agency */}
                    <div className="agency-dropdown-container">
                      <select className="agency-dropdown" defaultValue="">
                        <option value="" disabled>Select</option>
                        <option value="Agency A">Agency A</option>
                        <option value="Agency B">Agency B</option>
                        <option value="Agency C">Agency C</option>
                      </select>
                    </div>
                  </td>
                  <td>1000</td>
                  <td>+100</td>
                  <td>-10</td>
                  <td></td>
                  <td></td>
                </tr>
                {/* Add more rows as needed */}

                 <tr>
                  <td>https://t.me/+qCJbGLeN</td>
                  <td>
                    {/* Well-designed dropbox for Agency */}
                    <div className="agency-dropdown-container">
                      <select className="agency-dropdown" defaultValue="">
                        <option value="" disabled>Select</option>
                        <option value="Agency A">Agency A</option>
                        <option value="Agency B">Agency B</option>
                        <option value="Agency C">Agency C</option>
                      </select>
                    </div>
                  </td>
                  <td>1000</td>
                  <td>+100</td>
                  <td>-10</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Eagle View 2 */}
          <div className="dashboard-view-section">
            <div className="channel-heading">
              <h3 className="text-xl font-semibold mb-2">EAGLE VIEW 2</h3>
            </div>
            <table className="table-list">
              <thead>
                <tr>
                  <th>Name of Chat Links</th>
                  <th>Agency</th>
                  <th>Total Member</th>
                  <th>Member Join</th>
                  <th>Member Left</th>
                  <th>Filter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>https://t.me/+qCJbGLeN</td>
                  <td>
                    {/* Well-designed dropbox for Agency */}
                    <div className="agency-dropdown-container">
                      <select className="agency-dropdown" defaultValue="">
                        <option value="" disabled>Select</option>
                        <option value="Agency A">Agency +100A</option>
                        <option value="Agency B">Agency -10B</option>
                        <option value="Agency C">Agency C</option>
                      </select>
                    </div>
                  </td>
                  <td>1000</td>
                  <td>+100</td>
                  <td>-10</td>
                  <td></td>
                  <td></td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
