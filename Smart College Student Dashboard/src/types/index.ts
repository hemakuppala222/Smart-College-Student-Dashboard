export interface Student {
  id: string;
  name: string;
  rollNumber: string;
  email: string;
  phone: string;
  department: string;
  year: number;
  semester: number;
  photo: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  credits: number;
  semester: number;
}

export interface Mark {
  id: string;
  subjectId: string;
  marksObtained: number;
  totalMarks: number;
  examType: 'midterm' | 'final' | 'assignment' | 'quiz';
  date: string;
}

export interface TimeTableEntry {
  id: string;
  subjectId: string;
  day: string;
  startTime: string;
  endTime: string;
  room: string;
  type: 'lecture' | 'lab' | 'tutorial';
}

export interface Assignment {
  id: string;
  title: string;
  subjectId: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'late';
  marks?: number;
}

export interface Attendance {
  id: string;
  subjectId: string;
  totalClasses: number;
  attendedClasses: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'general' | 'academic' | 'event';
  date: string;
  read: boolean;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: 'syllabus' | 'notes' | 'papers';
  url: string;
  uploadDate: string;
}

export interface ChatMessage {
  id: string;
  from: string;
  to: string;
  message: string;
  timestamp: string;
  type: 'sent' | 'received';
}