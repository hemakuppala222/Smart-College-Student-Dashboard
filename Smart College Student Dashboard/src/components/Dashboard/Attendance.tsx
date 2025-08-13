import React from 'react';
import { BarChart3, Target, TrendingUp, AlertTriangle } from 'lucide-react';
import { mockAttendance, mockSubjects } from '../../data/mockData';

export const Attendance: React.FC = () => {
  const getSubjectName = (subjectId: string): string => {
    const subject = mockSubjects.find(s => s.id === subjectId);
    return subject ? subject.name : 'Unknown';
  };

  const getSubjectCode = (subjectId: string): string => {
    const subject = mockSubjects.find(s => s.id === subjectId);
    return subject ? subject.code : 'UNK';
  };

  const calculatePercentage = (attended: number, total: number): number => {
    return (attended / total) * 100;
  };

  const getAttendanceColor = (percentage: number): string => {
    if (percentage >= 85) return 'text-green-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressBarColor = (percentage: number): string => {
    if (percentage >= 85) return 'bg-green-500';
    if (percentage >= 75) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const overallAttendance = () => {
    const totalClasses = mockAttendance.reduce((sum, a) => sum + a.totalClasses, 0);
    const totalAttended = mockAttendance.reduce((sum, a) => sum + a.attendedClasses, 0);
    return (totalAttended / totalClasses) * 100;
  };

  const lowAttendanceSubjects = mockAttendance.filter(a => 
    calculatePercentage(a.attendedClasses, a.totalClasses) < 75
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Attendance Tracker</h2>
        <p className="text-emerald-100">Monitor your attendance - Minimum 75% required for exam eligibility</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Overall Attendance</p>
              <p className={`text-3xl font-bold ${getAttendanceColor(overallAttendance())}`}>
                {overallAttendance().toFixed(1)}%
              </p>
            </div>
            <BarChart3 className="h-8 w-8 text-emerald-500" />
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${getProgressBarColor(overallAttendance())}`}
              style={{ width: `${overallAttendance()}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Target Achievement</p>
              <p className={`text-3xl font-bold ${overallAttendance() >= 75 ? 'text-green-600' : 'text-red-600'}`}>
                {overallAttendance() >= 75 ? '✓' : '✗'}
              </p>
            </div>
            <Target className="h-8 w-8 text-blue-500" />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {overallAttendance() >= 75 ? 'Eligible for exams' : 'Below minimum requirement'}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Subjects at Risk</p>
              <p className="text-3xl font-bold text-red-600">
                {lowAttendanceSubjects.length}
              </p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Risk of exam debarment</p>
        </div>
      </div>

      {/* Subject-wise Attendance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            Subject-wise Breakdown
          </h3>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {mockAttendance.map(attendance => {
              const percentage = calculatePercentage(attendance.attendedClasses, attendance.totalClasses);
              const isLow = percentage < 75;
              
              return (
                <div key={attendance.id} className={`border rounded-lg p-4 ${isLow ? 'border-red-200 bg-red-50' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {getSubjectName(attendance.subjectId)}
                      </h4>
                      <p className="text-sm text-gray-600">{getSubjectCode(attendance.subjectId)}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-2xl font-bold ${getAttendanceColor(percentage)}`}>
                        {percentage.toFixed(1)}%
                      </p>
                      <p className="text-sm text-gray-500">
                        {attendance.attendedClasses}/{attendance.totalClasses} classes
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className={`font-medium ${getAttendanceColor(percentage)}`}>
                        {attendance.attendedClasses} attended
                      </span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-300 ${getProgressBarColor(percentage)}`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {isLow && (
                    <div className="mt-3 p-3 bg-red-100 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 text-red-800">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-sm font-medium">Attendance Warning</span>
                      </div>
                      <p className="text-sm text-red-700 mt-1">
                        You need to attend {Math.ceil((0.75 * attendance.totalClasses) - attendance.attendedClasses)} more classes to reach 75%.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};