import React from 'react';
import { Bell, LogOut, Settings, User, Mail, Phone, Shield, Moon, Sun } from 'lucide-react';
import { mockStudent } from '../../data/mockData';

interface TopBarProps {
  onNotificationClick: () => void;
  onSettingsClick: () => void;
  showNotifications: boolean;
  showSettings: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ 
  onNotificationClick, 
  onSettingsClick, 
  showNotifications, 
  showSettings 
}) => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [assignmentReminders, setAssignmentReminders] = React.useState(true);
  const [attendanceAlerts, setAttendanceAlerts] = React.useState(true);

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      alert('Logout functionality would be implemented here');
    }
  };

  const handleEditProfile = () => {
    alert('Edit Profile: This would open a profile editing form');
    onSettingsClick(); // Close settings dropdown
  };

  const handleChangeEmail = () => {
    const newEmail = prompt('Enter new email address:', mockStudent.email);
    if (newEmail && newEmail !== mockStudent.email) {
      alert(`Email change request submitted for: ${newEmail}\nVerification email will be sent.`);
    }
    onSettingsClick(); // Close settings dropdown
  };

  const handleUpdatePhone = () => {
    const newPhone = prompt('Enter new phone number:', mockStudent.phone);
    if (newPhone && newPhone !== mockStudent.phone) {
      alert(`Phone number update request submitted: ${newPhone}\nOTP verification required.`);
    }
    onSettingsClick(); // Close settings dropdown
  };

  const handleChangePassword = () => {
    const currentPassword = prompt('Enter current password:');
    if (currentPassword) {
      const newPassword = prompt('Enter new password:');
      if (newPassword) {
        const confirmPassword = prompt('Confirm new password:');
        if (newPassword === confirmPassword) {
          alert('Password changed successfully!');
        } else {
          alert('Passwords do not match. Please try again.');
        }
      }
    }
    onSettingsClick(); // Close settings dropdown
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    alert(`Dark mode ${!darkMode ? 'enabled' : 'disabled'}. This feature will be fully implemented in the next update.`);
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 relative">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">नमस्ते {mockStudent.name}!</h2>
          <p className="text-gray-600">SRM Institute of Science and Technology - Your academic dashboard</p>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Notification Button */}
          <div className="relative">
            <button 
              onClick={onNotificationClick}
              className={`relative p-2 rounded-lg transition-colors ${
                showNotifications ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
          
          {/* Settings Button */}
          <div className="relative">
            <button 
              onClick={onSettingsClick}
              className={`p-2 rounded-lg transition-colors ${
                showSettings ? 'text-blue-600 bg-blue-50' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Settings className="h-5 w-5" />
            </button>

            {/* Settings Dropdown */}
            {showSettings && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Settings</h3>
                </div>
                
                <div className="p-4 space-y-4">
                  {/* Profile Settings */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Profile Settings</h4>
                    <div className="space-y-2">
                      <button 
                        onClick={handleEditProfile}
                        className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Edit Profile</span>
                      </button>
                      <button 
                        onClick={handleChangeEmail}
                        className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Change Email</span>
                      </button>
                      <button 
                        onClick={handleUpdatePhone}
                        className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Update Phone</span>
                      </button>
                    </div>
                  </div>

                  {/* Appearance */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Appearance</h4>
                    <button 
                      onClick={toggleDarkMode}
                      className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {darkMode ? <Moon className="h-4 w-4 text-gray-400" /> : <Sun className="h-4 w-4 text-gray-400" />}
                        <span className="text-sm">Dark Mode</span>
                      </div>
                      <div className={`w-10 h-5 rounded-full transition-colors cursor-pointer ${darkMode ? 'bg-blue-600' : 'bg-gray-300'}`}>
                        <div className={`w-4 h-4 bg-white rounded-full transition-transform mt-0.5 ${darkMode ? 'translate-x-5 ml-1' : 'translate-x-0 ml-0.5'}`}></div>
                      </div>
                    </button>
                  </div>

                  {/* Security */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Security</h4>
                    <button 
                      onClick={handleChangePassword}
                      className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Shield className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">Change Password</span>
                    </button>
                  </div>

                  {/* Notifications Settings */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Notifications</h4>
                    <div className="space-y-2">
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm text-gray-600">Email Notifications</span>
                        <input 
                          type="checkbox" 
                          checked={emailNotifications}
                          onChange={(e) => setEmailNotifications(e.target.checked)}
                          className="rounded text-blue-600 focus:ring-blue-500" 
                        />
                      </label>
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm text-gray-600">Assignment Reminders</span>
                        <input 
                          type="checkbox" 
                          checked={assignmentReminders}
                          onChange={(e) => setAssignmentReminders(e.target.checked)}
                          className="rounded text-blue-600 focus:ring-blue-500" 
                        />
                      </label>
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-sm text-gray-600">Attendance Alerts</span>
                        <input 
                          type="checkbox" 
                          checked={attendanceAlerts}
                          onChange={(e) => setAttendanceAlerts(e.target.checked)}
                          className="rounded text-blue-600 focus:ring-blue-500" 
                        />
                      </label>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="pt-2 border-t border-gray-200">
                    <button 
                      onClick={() => {
                        alert('Settings saved successfully!');
                        onSettingsClick();
                      }}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Save Settings
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <img
              src={mockStudent.photo}
              alt={mockStudent.name}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="font-medium text-gray-900">{mockStudent.name}</p>
              <p className="text-gray-500">{mockStudent.rollNumber}</p>
            </div>
          </div>
          
          <button 
            onClick={handleLogout}
            className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
            title="Logout"
          >
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(showNotifications || showSettings) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            if (showNotifications) onNotificationClick();
            if (showSettings) onSettingsClick();
          }}
        ></div>
      )}
    </div>
  );
};