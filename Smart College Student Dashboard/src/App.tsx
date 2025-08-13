import React, { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { TopBar } from './components/Layout/TopBar';
import { Profile } from './components/Dashboard/Profile';
import { Academic } from './components/Dashboard/Academic';
import { TimeTable } from './components/Dashboard/TimeTable';
import { Assignments } from './components/Dashboard/Assignments';
import { Attendance } from './components/Dashboard/Attendance';
import { Notifications } from './components/Dashboard/Notifications';
import { Downloads } from './components/Dashboard/Downloads';
import { Chat } from './components/Dashboard/Chat';

function App() {
  const [activeSection, setActiveSection] = useState('profile');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <Profile />;
      case 'academic':
        return <Academic />;
      case 'timetable':
        return <TimeTable />;
      case 'assignments':
        return <Assignments />;
      case 'attendance':
        return <Attendance />;
      case 'notifications':
        return <Notifications />;
      case 'downloads':
        return <Downloads />;
      case 'chat':
        return <Chat />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 hidden lg:block">
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <TopBar 
          onNotificationClick={() => {
            setShowNotifications(!showNotifications);
            setActiveSection('notifications');
          }}
          onSettingsClick={() => setShowSettings(!showSettings)}
          showNotifications={showNotifications}
          showSettings={showSettings}
        />
        
        <main className="flex-1 p-6 overflow-y-auto">
          {renderContent()}
        </main>
      </div>

      {/* Mobile Sidebar Overlay (for future mobile implementation) */}
      <div className="lg:hidden">
        {/* Mobile menu implementation would go here */}
      </div>
    </div>
  );
}

export default App;