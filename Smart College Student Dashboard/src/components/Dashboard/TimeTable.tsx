import React from 'react';
import { Clock, MapPin, Book } from 'lucide-react';
import { mockTimeTable, mockSubjects } from '../../data/mockData';

export const TimeTable: React.FC = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

  const getSubjectName = (subjectId: string): string => {
    const subject = mockSubjects.find(s => s.id === subjectId);
    return subject ? subject.name : 'Unknown';
  };

  const getSubjectCode = (subjectId: string): string => {
    const subject = mockSubjects.find(s => s.id === subjectId);
    return subject ? subject.code : 'UNK';
  };

  const getClassForTime = (day: string, time: string) => {
    return mockTimeTable.find(entry => {
      const entryDay = entry.day;
      const entryStartHour = parseInt(entry.startTime.split(':')[0]);
      const slotHour = parseInt(time.split(':')[0]);
      
      return entryDay === day && entryStartHour === slotHour;
    });
  };

  const getTypeColor = (type: string): string => {
    switch (type) {
      case 'lecture':
        return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'lab':
        return 'bg-emerald-100 border-emerald-300 text-emerald-800';
      case 'tutorial':
        return 'bg-purple-100 border-purple-300 text-purple-800';
      default:
        return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Class Timetable</h2>
        <p className="text-indigo-100">Semester 6 - Even Semester 2023-24 | CSE Department</p>
      </div>

      {/* Timetable Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Clock className="h-5 w-5 text-indigo-600" />
            Class Schedule
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                {days.map(day => (
                  <th key={day} className="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {timeSlots.map(time => (
                <tr key={time} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {time}
                  </td>
                  {days.map(day => {
                    const classEntry = getClassForTime(day, time);
                    
                    return (
                      <td key={`${day}-${time}`} className="px-4 py-4">
                        {classEntry ? (
                          <div className={`p-3 rounded-lg border-l-4 ${getTypeColor(classEntry.type)}`}>
                            <div className="flex items-center gap-2 mb-1">
                              <Book className="h-4 w-4" />
                              <span className="font-medium text-sm">
                                {getSubjectCode(classEntry.subjectId)}
                              </span>
                            </div>
                            <p className="text-xs opacity-90 mb-1">
                              {getSubjectName(classEntry.subjectId)}
                            </p>
                            <div className="flex items-center gap-1 text-xs opacity-80">
                              <MapPin className="h-3 w-3" />
                              {classEntry.room}
                            </div>
                            <div className="text-xs mt-1 opacity-80">
                              {classEntry.startTime} - {classEntry.endTime}
                            </div>
                          </div>
                        ) : (
                          <div className="h-20 flex items-center justify-center text-gray-400 text-sm">
                            Free
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-3">Class Types</h4>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span className="text-sm text-gray-600">Theory Class</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-emerald-500 rounded"></div>
            <span className="text-sm text-gray-600">Practical Lab</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rounded"></div>
            <span className="text-sm text-gray-600">Tutorial</span>
          </div>
          <div className="text-sm text-gray-500 ml-4">
            <strong>Note:</strong> Lunch break: 13:00 - 14:00
          </div>
        </div>
      </div>
    </div>
  );
};