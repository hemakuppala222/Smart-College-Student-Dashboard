import React from 'react';
import { TrendingUp, Award, Target } from 'lucide-react';
import { mockSubjects, mockMarks } from '../../data/mockData';

export const Academic: React.FC = () => {
  const calculateGrade = (percentage: number): string => {
    if (percentage >= 90) return 'O'; // Outstanding
    if (percentage >= 80) return 'A+';
    if (percentage >= 70) return 'A';
    if (percentage >= 60) return 'B+';
    if (percentage >= 55) return 'B';
    if (percentage >= 50) return 'C';
    return 'RA'; // Re-appear
  };

  const getSubjectMarks = (subjectId: string) => {
    return mockMarks.filter(mark => mark.subjectId === subjectId);
  };

  const calculateSubjectAverage = (subjectId: string): number => {
    const marks = getSubjectMarks(subjectId);
    if (marks.length === 0) return 0;
    const totalPercentage = marks.reduce((sum, mark) => 
      sum + (mark.marksObtained / mark.totalMarks) * 100, 0
    );
    return totalPercentage / marks.length;
  };

  const overallCGPA = (): number => {
    const totalCredits = mockSubjects.reduce((sum, subject) => sum + subject.credits, 0);
    const weightedSum = mockSubjects.reduce((sum, subject) => {
      const avg = calculateSubjectAverage(subject.id);
      const gradePoint = avg >= 90 ? 10 : avg >= 80 ? 9 : avg >= 70 ? 8 : avg >= 60 ? 7 : avg >= 55 ? 6 : avg >= 50 ? 5 : 0;
      return sum + (gradePoint * subject.credits);
    }, 0);
    return weightedSum / totalCredits;
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100">Current CGPA</p>
              <p className="text-3xl font-bold">{overallCGPA().toFixed(2)}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100">Subjects Enrolled</p>
              <p className="text-3xl font-bold">{mockSubjects.length}</p>
            </div>
            <Award className="h-8 w-8 text-emerald-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100">Total Credits</p>
              <p className="text-3xl font-bold">{mockSubjects.reduce((sum, s) => sum + s.credits, 0)}</p>
            </div>
            <Target className="h-8 w-8 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Subject Details */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Subject-wise Performance</h3>
        </div>
        <div className="p-6">
          <div className="grid gap-4">
            {mockSubjects.map(subject => {
              const average = calculateSubjectAverage(subject.id);
              const grade = calculateGrade(average);
              const marks = getSubjectMarks(subject.id);
              
              return (
                <div key={subject.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                      <p className="text-sm text-gray-500">{subject.code} • {subject.credits} Credits</p>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        grade === 'O' ? 'bg-emerald-100 text-emerald-800' :
                        grade === 'A+' ? 'bg-green-100 text-green-800' :
                        grade === 'A' ? 'bg-blue-100 text-blue-800' :
                        grade === 'B+' ? 'bg-blue-100 text-blue-800' :
                        grade === 'B' ? 'bg-yellow-100 text-yellow-800' :
                        grade === 'C' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {grade}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{average.toFixed(1)}%</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {marks.map(mark => (
                      <div key={mark.id} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600 capitalize">{mark.examType}</span>
                        <span className="font-medium">
                          {mark.marksObtained}/{mark.totalMarks} ({((mark.marksObtained / mark.totalMarks) * 100).toFixed(1)}%)
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-3 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        average >= 90 ? 'bg-emerald-500' :
                        average >= 80 ? 'bg-green-500' :
                        average >= 70 ? 'bg-blue-500' :
                        average >= 60 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${Math.min(average, 100)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};