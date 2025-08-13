import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, GraduationCap } from 'lucide-react';
import { mockStudent } from '../../data/mockData';

export const Profile: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
        <div className="flex items-center gap-6">
          <img
            src={mockStudent.photo}
            alt={mockStudent.name}
            className="h-24 w-24 rounded-full object-cover border-4 border-white/20"
          />
          <div>
            <h1 className="text-3xl font-bold">{mockStudent.name}</h1>
            <p className="text-xl opacity-90">{mockStudent.rollNumber}</p>
            <p className="text-blue-100">{mockStudent.department} • {mockStudent.year}{mockStudent.year === 1 ? 'st' : mockStudent.year === 2 ? 'nd' : mockStudent.year === 3 ? 'rd' : 'th'} Year</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <User className="h-5 w-5 text-blue-600" />
            Personal Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{mockStudent.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium">{mockStudent.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Department</p>
                <p className="font-medium">Dept. of {mockStudent.department}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            Academic Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Current Year</p>
                <p className="font-medium">{mockStudent.year}{mockStudent.year === 1 ? 'st' : mockStudent.year === 2 ? 'nd' : mockStudent.year === 3 ? 'rd' : 'th'} Year B.Tech</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Current Semester</p>
                <p className="font-medium">Semester {mockStudent.semester} (Even Sem 2023-24)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="h-4 w-4 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Registration Number</p>
                <p className="font-medium">{mockStudent.rollNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};