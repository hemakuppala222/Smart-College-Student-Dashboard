import React, { useState } from 'react';
import { MessageCircle, Send, User, Clock } from 'lucide-react';
import { mockChatMessages } from '../../data/mockData';

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState(mockChatMessages);
  const [newMessage, setNewMessage] = useState('');
  const [selectedContact, setSelectedContact] = useState('Dr. Rajesh Kumar');

  const contacts = [
    'Dr. Rajesh Kumar (DSA)',
    'Dr. Priya Sharma (DBMS)', 
    'Dr. Amit Singh (OS)',
    'Academic Office',
    'Placement Cell',
    'Library Help Desk'
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now().toString(),
        from: 'Alex Johnson',
        to: selectedContact,
        message: newMessage,
        timestamp: new Date().toISOString(),
        type: 'sent' as const
      };
      
      setMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  };

  const formatTime = (timestamp: string): string => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getFilteredMessages = () => {
    return messages.filter(msg => 
      (msg.from === selectedContact && msg.to === 'Alex Johnson') ||
      (msg.from === 'Alex Johnson' && msg.to === selectedContact)
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-3">
          <MessageCircle className="h-8 w-8" />
          Faculty Connect & Support
        </h2>
        <p className="text-indigo-100">Connect with faculty, academic office, and support services</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-96 flex">
        {/* Contacts Sidebar */}
        <div className="w-1/3 border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Contacts</h3>
          </div>
          <div className="p-4 space-y-2">
            {contacts.map(contact => (
              <button
                key={contact}
                onClick={() => setSelectedContact(contact)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedContact === contact
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium">{contact}</p>
                    <p className="text-xs text-gray-500">Click to chat</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{selectedContact}</h4>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {getFilteredMessages().map(message => (
              <div
                key={message.id}
                className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.type === 'sent'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  <div className={`flex items-center gap-1 mt-1 text-xs ${
                    message.type === 'sent' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    <Clock className="h-3 w-3" />
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={`Message ${selectedContact}...`}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">Faculty Consultation</h4>
          <p className="text-sm text-gray-600 mb-3">Connect with subject faculty for doubts and academic guidance</p>
          <button className="text-blue-600 text-sm hover:text-blue-800 transition-colors">
            Contact Faculty →
          </button>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">Academic Office</h4>
          <p className="text-sm text-gray-600 mb-3">Get help with exam forms, certificates, and academic procedures</p>
          <button className="text-blue-600 text-sm hover:text-blue-800 transition-colors">
            Contact Office →
          </button>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-2">Placement Support</h4>
          <p className="text-sm text-gray-600 mb-3">Get assistance with placement drives and career guidance</p>
          <button className="text-blue-600 text-sm hover:text-blue-800 transition-colors">
            Contact Placement Cell →
          </button>
        </div>
      </div>
    </div>
  );
};