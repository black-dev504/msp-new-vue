const faqData = [
  {
    img: '/icons/compicon.svg',
    head: 'What is MSP?',
    text: 'MySkoolPortal is an all-in-one school management platform designed to simplify administrative tasks, improve communication, and enhance learning experiences for students, teachers, and parents.',
  },
  {
    img: '/icons/gradicon.svg',
    head: 'Who can use MSP?',
    text: 'MySkoolPortal is built for all types of educational institutions, including K-12 schools and tertiary institutions, whether public or private.',
  },
  {
    img: '/icons/computericon.svg',
    head: 'Can I migrate from another learning to MSP?',
    text: 'Yes! MySkoolPortal makes migration easy by supporting data import from existing learning management systems. Our team will assist you in transferring student records, grades, and other important data to ensure a smooth transition.',
  },
  {
    img: '/icons/safeicon.svg',
    head: 'Is MSP secure?',
    text: 'Yes, security is our top priority. MySkoolPortal uses advanced encryption and data protection measures to ensure that student and school data remain safe and private.',
  },
  {
    img: '/icons/idicon.svg',
    head: "Can parents track their child's progress on MSP?",
    text: 'Absolutely! Parents can log in to view attendance, grades, report cards, and teacher feedback, ensuring they stay informed about their child’s education.',
  },
  {
    img: '/icons/fileicon.svg',
    head: 'How much does MySkhoolPortal cost?',
    text: 'Pricing depends on the size of your school and the features required. Contact us for a tailored quote that best fits your institution’s needs.',
  },
]

const K12details = [
  {
    head: 'Academic & Classroom Management',
    img: '/images/k-infopic1.png',
    left: false,
    attributes: [
      {
        title: 'Subject Management ',
        body: 'Organize curricula, syllabi, and resources for effective lesson planning and delivery.',
      },
      {
        title: 'Classroom Coordination',
        body: 'Assign classes, optimize timetables, and allocate resources efficiently.',
      },
      {
        title: 'Teacher Coordination',
        body: 'Simplify lesson planning, resource sharing, and professional development.',
      },
      {
        title: 'Performance Insight',
        body: 'Generate detailed reports and analytics to support student growth.',
      },
    ],
  },
  {
    head: 'Student & Parent Engagement',
    img: '/images/k-infopic2.png',
    left: true,
    attributes: [
      {
        title: 'Student-Teacher-Parent Interactions',
        body: 'Facilitate transparent communication with real-time updates. ',
      },
      {
        title: 'Student Conduct Oversight',
        body: 'Monitor behavior, promote a respectful environment, and address discipline issues.',
      },
      {
        title: 'School Clinic',
        body: 'Manage student health records and appointments for accurate documentation and care.',
      },
    ],
  },
  {
    head: 'School Operations & Administration',
    img: '/images/k-infopic3.png',
    left: false,
    attributes: [
      {
        title: 'School Operations ',
        body: 'Streamline enrollment, scheduling, and daily record-keeping.',
      },
      {
        title: 'School Fees Handeling ',
        body: 'Manage fee collection, invoicing, and payment tracking transparently.',
      },
      {
        title: 'System Integration ',
        body: 'Connect with LMS, library databases, and accounting software for a unified system.',
      },
    ],
  },
]

const tertiaryDetails = [
  {
    head: 'Academic & Campus Management',
    img: '/images/t-infopic1.png',
    left: false,
    attributes: [
      {
        title: 'College Management',
        body: 'Centralize admissions, course registration, and campus logistics.',
      },
      {
        title: 'Educational Resource Management',
        body: 'Optimize libraries, labs, and academic resources.',
      },
      {
        title: 'Faculty Administration',
        body: 'Streamline onboarding, workload management, and professional development.',
      },
      {
        title: 'Data Analysis',
        body: 'Use analytics to evaluate academic performance and strategic planning.',
      },
    ],
  },
  {
    head: 'Student Life & Engagement',
    img: '/images/t-infopic2.png',
    left: true,
    attributes: [
      {
        title: 'Scholastic Activities',
        body: 'Organize extracurricular events, academic conferences, and student organizations.',
      },
      {
        title: 'Communications',
        body: 'Establish secure channels for announcements, collaboration, and faculty-student interactions.',
      },
      {
        title: 'Health Services',
        body: 'Manage student health records, campus clinics, and wellness initiatives.',
      },
      {
        title: 'Disciplinary Affairs',
        body: 'Implement clear protocols for misconduct reporting and resolution.',
      },
    ],
  },
  {
    head: 'Administrative & Financial Operations',
    img: '/images/t-infopic3.png',
    left: false,
    attributes: [
      {
        title: 'Financial Transactions Oversight',
        body: 'Handle billing, fee collection, and budgeting with financial controls.',
      },
      {
        title: 'Integrations',
        body: 'Connect with e-learning platforms, accreditation databases, and HR software.',
      },
    ],
  },
]

const reviewDetails = [
  {
    review:
      'MySkoolPortal has completely transformed how we manage student data. It’s fast, intuitive, and secure.',
    name: 'Jane Smith',
    role: 'School Administrator',
    profile: '/icons/profile.svg',
  },
  {
    review:
      'As a parent, I love being able to track my child’s academic progress and communicate with teachers seamlessly.',
    name: 'Michael Johnson',
    role: 'Parent',
    profile: '/icons/profile.svg',
  },
  {
    review:
      'The interface is user-friendly, and the features save us hours of administrative work every week.',
    name: 'Emily Davis',
    role: 'Teacher',
    profile: '/icons/profile.svg',
  },
  {
    review:
      'I appreciate how MySkoolPortal keeps everything in one place—from grades to attendance and even medical records.',
    name: 'Robert Lee',
    role: 'Principal',
    profile: '/icons/profile.svg',
  },
  {
    review:
      'A fantastic tool that bridges the gap between school and home. It’s modern education management done right.',
    name: 'Sophia Martinez',
    role: 'Education Consultant',
    profile: '/icons/profile.svg',
  },
]

const plansData = [
  {
    head: 'Basic',
    desc: 'Perfect for small schools & academies',
    attributes: ['Student Management', 'Attendance Tracking', 'Gradebook Management'],
  },

  {
    head: 'Standard',
    desc: 'Ideal for medium-sized institutions',
    attributes: ['All Basic Features', 'Parent-Teacher Communication', 'Fee Management'],
  },
  {
    head: 'Premium',
    desc: 'Comprehensive solution for large schools',
    attributes: ['All Standard Features', 'Advanced Analytics', 'Customizable Modules'],
  },
]

const featureData = [
  {
    head: 'Core administration',
    lists: [
      {
        title: 'Onboarding',
        marks: ['✔️', '✔️', '✔️'],
      },

      {
        title: 'Student Information Management',
        marks: ['✔️', '✔️', '✔️'],
      },
      {
        title: 'Staff information Management',
        marks: ['✔️', '✔️', '✔️'],
      },
      {
        title: 'Class Management',
        marks: ['✔️', '✔️', '✔️'],
      },
      {
        title: 'Term Management',
        marks: ['✔️', '✔️', '✔️'],
      },
      {
        title: 'Subject Management',
        marks: ['✔️', '✔️', '✔️'],
      },
      {
        title: 'Attendance',
        marks: ['✔️', '✔️', '✔️'],
      },
      {
        title: 'Activity Log',
        marks: [' ', '✔️', '✔️'],
      },
      {
        title: 'Hostel Management',
        marks: [' ', '✔️', '✔️'],
      },
      {
        title: 'Role-Based Access Control',
        marks: ['', '', '✔️'],
      },
      {
        title: 'Time Table Management',
        marks: ['', '', '✔️'],
      },
      {
        title: 'Transportation Management',
        marks: ['', '', '✔️'],
      },
    ],
  },
  {
    head: 'Academics',
    lists: [
      {
        title: 'Onboarding',
        marks: ['✔️', '✔️', '✔️'],
      },
    ],
  },
  {
    head: 'Communications & Engagement',
    lists: [
      {
        title: 'Onboarding',
        marks: ['✔️', '✔️', '✔️'],
      },
    ],
  },
  {
    head: 'Medical and Health',
    lists: [
      {
        title: 'Onboarding',
        marks: ['✔️', '✔️', '✔️'],
      },
    ],
  },
  {
    head: 'Descipline &behaviour',
    lists: [
      {
        title: 'Onboarding',
        marks: ['✔️', '✔️', '✔️'],
      },
    ],
  },
  {
    head: 'LMS',
    lists: [
      {
        title: 'Onboarding',
        marks: ['✔️', '✔️', '✔️'],
      },
    ],
  },
  {
    head: 'Analytics, Forms & Reporting',
    lists: [
      {
        title: 'Onboarding',
        marks: ['✔️', '✔️', '✔️'],
      },
    ],
  },
  {
    head: 'Staff Management',
    lists: [
      {
        title: 'Onboarding',
        marks: ['✔️', '✔️', '✔️'],
      },
    ],
  },
  {
    head: 'Fees Payement Management',
    lists: [
      {
        title: 'Onboarding',
        marks: ['✔️', '✔️', '✔️'],
      },
    ],
  },
  {
    head: 'External Plugin',
    lists: [
      {
        title: 'Onboarding',
        marks: ['✔️', '✔️', '✔️'],
      },
    ],
  },
]

export default faqData
export { K12details, reviewDetails, tertiaryDetails, plansData, featureData }
