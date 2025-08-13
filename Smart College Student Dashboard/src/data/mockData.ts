import { Student, Subject, Mark, TimeTableEntry, Assignment, Attendance, Notification, DownloadItem, ChatMessage } from '../types';

export const mockStudent: Student = {
  id: '1',
  name: 'Arjun Sharma',
  rollNumber: 'RA2111003010156',
  email: 'arjun.sharma@srmist.edu.in',
  phone: '+91 98765 43210',
  department: 'Computer Science and Engineering',
  year: 3,
  semester: 6,
  photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
};

export const mockSubjects: Subject[] = [
  { id: '1', name: 'Data Structures and Algorithms', code: 'CS3001', credits: 4, semester: 6 },
  { id: '2', name: 'Database Management Systems', code: 'CS3002', credits: 3, semester: 6 },
  { id: '3', name: 'Operating Systems', code: 'CS3003', credits: 4, semester: 6 },
  { id: '4', name: 'Computer Networks', code: 'CS3004', credits: 3, semester: 6 },
  { id: '5', name: 'Software Engineering', code: 'CS3005', credits: 3, semester: 6 },
  { id: '6', name: 'Compiler Design', code: 'CS3006', credits: 3, semester: 6 },
  { id: '7', name: 'Machine Learning', code: 'CS3007', credits: 4, semester: 6 },
];

export const mockMarks: Mark[] = [
  { id: '1', subjectId: '1', marksObtained: 85, totalMarks: 100, examType: 'midterm', date: '2024-03-15' },
  { id: '2', subjectId: '1', marksObtained: 92, totalMarks: 100, examType: 'final', date: '2024-05-20' },
  { id: '3', subjectId: '2', marksObtained: 78, totalMarks: 100, examType: 'midterm', date: '2024-03-18' },
  { id: '4', subjectId: '2', marksObtained: 88, totalMarks: 100, examType: 'final', date: '2024-05-22' },
  { id: '5', subjectId: '3', marksObtained: 90, totalMarks: 100, examType: 'midterm', date: '2024-03-20' },
  { id: '6', subjectId: '4', marksObtained: 82, totalMarks: 100, examType: 'midterm', date: '2024-03-22' },
  { id: '7', subjectId: '5', marksObtained: 95, totalMarks: 100, examType: 'assignment', date: '2024-04-10' },
  { id: '8', subjectId: '6', marksObtained: 87, totalMarks: 100, examType: 'midterm', date: '2024-03-25' },
  { id: '9', subjectId: '7', marksObtained: 91, totalMarks: 100, examType: 'assignment', date: '2024-04-15' },
];

export const mockTimeTable: TimeTableEntry[] = [
  { id: '1', subjectId: '1', day: 'Monday', startTime: '08:00', endTime: '09:30', room: 'TP-101', type: 'lecture' },
  { id: '2', subjectId: '2', day: 'Monday', startTime: '09:45', endTime: '11:15', room: 'TP-205', type: 'lecture' },
  { id: '3', subjectId: '3', day: 'Monday', startTime: '11:30', endTime: '13:00', room: 'TP-102', type: 'lecture' },
  { id: '4', subjectId: '4', day: 'Tuesday', startTime: '08:00', endTime: '09:30', room: 'TP-301', type: 'lecture' },
  { id: '5', subjectId: '5', day: 'Tuesday', startTime: '09:45', endTime: '11:15', room: 'TP-103', type: 'lecture' },
  { id: '6', subjectId: '6', day: 'Tuesday', startTime: '14:00', endTime: '15:30', room: 'TP-204', type: 'lecture' },
  { id: '7', subjectId: '1', day: 'Wednesday', startTime: '08:00', endTime: '11:00', room: 'CSE-Lab1', type: 'lab' },
  { id: '8', subjectId: '7', day: 'Wednesday', startTime: '11:30', endTime: '13:00', room: 'TP-105', type: 'lecture' },
  { id: '9', subjectId: '2', day: 'Thursday', startTime: '08:00', endTime: '11:00', room: 'CSE-Lab2', type: 'lab' },
  { id: '10', subjectId: '3', day: 'Thursday', startTime: '14:00', endTime: '15:30', room: 'TP-206', type: 'tutorial' },
  { id: '11', subjectId: '4', day: 'Friday', startTime: '08:00', endTime: '09:30', room: 'TP-302', type: 'lecture' },
  { id: '12', subjectId: '7', day: 'Friday', startTime: '09:45', endTime: '12:45', room: 'ML-Lab', type: 'lab' },
];

export const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Binary Search Tree Implementation in C++',
    subjectId: '1',
    description: 'Implement a complete binary search tree with insertion, deletion, and traversal operations using C++.',
    dueDate: '2024-01-25',
    status: 'pending'
  },
  {
    id: '2',
    title: 'Library Management System Database Design',
    subjectId: '2',
    description: 'Design a normalized database schema for a library management system with ER diagrams.',
    dueDate: '2024-01-28',
    status: 'submitted',
    marks: 95
  },
  {
    id: '3',
    title: 'CPU Scheduling Algorithms Simulation',
    subjectId: '3',
    description: 'Create a simulation of FCFS, SJF, and Round Robin scheduling algorithms in Java.',
    dueDate: '2024-01-30',
    status: 'pending'
  },
  {
    id: '4',
    title: 'Network Protocol Analysis Report',
    subjectId: '4',
    description: 'Analyze TCP/IP protocol stack and create a detailed report with Wireshark captures.',
    dueDate: '2024-02-02',
    status: 'pending'
  },
  {
    id: '5',
    title: 'Linear Regression Model Implementation',
    subjectId: '7',
    description: 'Implement linear regression from scratch using Python and compare with scikit-learn.',
    dueDate: '2024-02-05',
    status: 'submitted',
    marks: 88
  }
];

export const mockAttendance: Attendance[] = [
  { id: '1', subjectId: '1', totalClasses: 48, attendedClasses: 45 },
  { id: '2', subjectId: '2', totalClasses: 42, attendedClasses: 38 },
  { id: '3', subjectId: '3', totalClasses: 45, attendedClasses: 43 },
  { id: '4', subjectId: '4', totalClasses: 38, attendedClasses: 35 },
  { id: '5', subjectId: '5', totalClasses: 40, attendedClasses: 38 },
  { id: '6', subjectId: '6', totalClasses: 36, attendedClasses: 34 },
  { id: '7', subjectId: '7', totalClasses: 44, attendedClasses: 42 },
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Semester End Examination Schedule Released',
    message: 'The final examination schedule for Semester 6 (Even Semester 2023-24) has been published on the SRM portal. Please check your exam dates and hall tickets.',
    type: 'academic',
    date: '2024-01-20',
    read: false
  },
  {
    id: '2',
    title: 'Aaruush 2024 - Technical Festival Registration',
    message: 'Registration is now open for Aaruush 2024, SRM\'s annual technical festival. Register before January 30th for early bird discounts.',
    type: 'event',
    date: '2024-01-18',
    read: true
  },
  {
    id: '3',
    title: 'Republic Day Holiday Notice',
    message: 'The college will remain closed on January 26th, 2024 (Friday) on account of Republic Day. Regular classes will resume on January 29th.',
    type: 'general',
    date: '2024-01-15',
    read: false
  },
  {
    id: '4',
    title: 'Placement Drive - TCS Digital',
    message: 'TCS Digital placement drive scheduled for February 5-7, 2024. Eligible students can register through the placement portal.',
    type: 'academic',
    date: '2024-01-22',
    read: false
  },
  {
    id: '5',
    title: 'Fee Payment Reminder',
    message: 'Semester fee payment deadline is January 31st, 2024. Late fee charges will apply after the deadline.',
    type: 'general',
    date: '2024-01-19',
    read: true
  }
];

export const mockDownloads: DownloadItem[] = [
  {
    id: '1',
    title: 'CSE Semester 6 Syllabus 2023-24',
    category: 'syllabus',
    url: '#',
    uploadDate: '2024-01-10'
  },
  {
    id: '2',
    title: 'DBMS Lab Manual - Dr. Priya Sharma',
    category: 'notes',
    url: '#',
    uploadDate: '2024-01-12'
  },
  {
    id: '3',
    title: 'Previous Year Question Papers - Semester 5',
    category: 'papers',
    url: '#',
    uploadDate: '2024-01-14'
  },
  {
    id: '4',
    title: 'Data Structures Notes - Unit 1 to 3',
    category: 'notes',
    url: '#',
    uploadDate: '2024-01-16'
  },
  {
    id: '5',
    title: 'Operating Systems Question Bank',
    category: 'papers',
    url: '#',
    uploadDate: '2024-01-18'
  },
  {
    id: '6',
    title: 'Machine Learning Course Material',
    category: 'notes',
    url: '#',
    uploadDate: '2024-01-20'
  },
  {
    id: '7',
    title: 'Academic Calendar 2023-24',
    category: 'syllabus',
    url: '#',
    uploadDate: '2024-01-08'
  }
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    from: 'Arjun Sharma',
    to: 'Dr. Rajesh Kumar',
    message: 'Good morning sir, I have a doubt regarding the assignment on Binary Search Trees.',
    timestamp: '2024-01-20T10:30:00',
    type: 'sent'
  },
  {
    id: '2',
    from: 'Dr. Rajesh Kumar',
    to: 'Arjun Sharma',
    message: 'Good morning Arjun! Sure, what specific doubt do you have? Feel free to ask.',
    timestamp: '2024-01-20T10:35:00',
    type: 'received'
  },
  {
    id: '3',
    from: 'Arjun Sharma',
    to: 'Dr. Rajesh Kumar',
    message: 'Sir, should we implement the deletion operation for all three cases or just the basic case?',
    timestamp: '2024-01-20T10:37:00',
    type: 'sent'
  },
  {
    id: '4',
    from: 'Dr. Rajesh Kumar',
    to: 'Arjun Sharma',
    message: 'Please implement all three cases: node with no children, one child, and two children. This will give you complete understanding.',
    timestamp: '2024-01-20T10:40:00',
    type: 'received'
  }
];