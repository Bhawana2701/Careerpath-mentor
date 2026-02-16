import {
  ChevronLeft,
  Users,
  GraduationCap,
  Award,
  BookOpen,
  DollarSign,
  TrendingUp,
  Target,
  Check,
  ExternalLink,
  LucideIcon,
} from 'lucide-react';

interface Career {
  id: string;
  name: string;
  icon: LucideIcon;
  tags?: string[];
  description: string;
  color: string;
  iconColor: string;
}

interface CareerDetailProps {
  career: Career | null;
  onBack: () => void;
  onStartRoadmap: () => void;
}

export default function CareerDetail({ career, onBack, onStartRoadmap }: CareerDetailProps) {
  if (!career) {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-6">
        <p className="text-gray-600">No career selected</p>
      </div>
    );
  }

  const Icon = career.icon;

  const roadmapSteps = [
    { id: 1, title: 'Choose Science Stream (PCM/PCB)', description: 'After 10th grade', time: '2 years' },
    { id: 2, title: 'Prepare for Entrance Exams', description: 'JEE/NEET/CLAT etc.', time: '1-2 years' },
    { id: 3, title: 'Complete Graduation', description: 'B.Tech/MBBS/LLB', time: '3-5 years' },
    { id: 4, title: 'Build Practical Skills', description: 'Internships and projects', time: '6 months' },
    { id: 5, title: 'Get Certified', description: 'Professional certifications', time: '3-6 months' },
    { id: 6, title: 'Apply for Jobs', description: 'Entry-level positions', time: 'Ongoing' },
  ];

  const skills = [
    'Problem Solving',
    'Communication',
    'Technical Skills',
    'Time Management',
    'Teamwork',
    'Creativity',
  ];

  const exams = [
    { name: 'JEE Main', type: 'National Level', deadline: 'April 2025' },
    { name: 'JEE Advanced', type: 'National Level', deadline: 'June 2025' },
    { name: 'State Engineering Exams', type: 'State Level', deadline: 'May 2025' },
  ];

  const resources = [
    {
      type: 'YouTube',
      name: 'MIT OpenCourseWare',
      description: 'Free engineering courses',
      url: '#',
    },
    {
      type: 'Course',
      name: 'Coursera - Computer Science',
      description: 'Online degree programs',
      url: '#',
    },
    {
      type: 'Book',
      name: 'Introduction to Algorithms',
      description: 'By CLRS',
      url: '#',
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <div className="flex-1">
          <h1 className="text-gray-900">{career.name}</h1>
        </div>
      </div>

      {/* Career Icon */}
      <div className={`bg-gradient-to-br ${career.color} rounded-2xl p-6 mb-6 text-center`}>
        <Icon className={`w-16 h-16 ${career.iconColor} mx-auto mb-3`} strokeWidth={1.5} />
        <p className="text-gray-700">{career.description}</p>
      </div>

      {/* What is this career */}
      <div className="mb-6">
        <h3 className="text-gray-900 mb-3 flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          What is this career?
        </h3>
        <p className="text-gray-600 bg-gray-50 p-4 rounded-xl">
          {career.name === 'Software Engineer'
            ? 'Software Engineers design, develop, and maintain software applications. They work on everything from mobile apps to large-scale systems, using programming languages and problem-solving skills to create technology solutions.'
            : 'A professional who specializes in this field, working to provide valuable services and expertise to individuals and organizations.'}
        </p>
      </div>

      {/* Who is this for */}
      <div className="mb-6">
        <h3 className="text-gray-900 mb-3 flex items-center gap-2">
          <Users className="w-5 h-5 text-purple-600" />
          Who is this for?
        </h3>
        <div className="flex flex-wrap gap-2">
          {['Analytical thinkers', 'Problem solvers', 'Tech enthusiasts', 'Creative minds'].map((trait) => (
            <span
              key={trait}
              className="px-3 py-2 bg-purple-100 text-purple-700 rounded-full"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      {/* Education Path */}
      <div className="mb-6">
        <h3 className="text-gray-900 mb-3 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-green-600" />
          Required Education Path
        </h3>
        <div className="space-y-2">
          {['After 12th: B.Tech/BE (4 years)', 'After 12th: Diploma (3 years) + Lateral Entry', 'Self-taught + Bootcamp'].map(
            (path, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
              >
                <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{path}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Roadmap Preview */}
      <div className="mb-6">
        <h3 className="text-gray-900 mb-3 flex items-center gap-2">
          <Target className="w-5 h-5 text-orange-600" />
          Step-by-Step Roadmap
        </h3>
        <div className="space-y-3">
          {roadmapSteps.slice(0, 3).map((step) => (
            <div
              key={step.id}
              className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200"
            >
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                {step.id}
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
                <p className="text-gray-500">⏱️ {step.time}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={onStartRoadmap}
          className="w-full mt-3 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors"
        >
          View Complete Roadmap
        </button>
      </div>

      {/* Top Exams */}
      <div className="mb-6">
        <h3 className="text-gray-900 mb-3 flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-600" />
          Top Exams to Prepare For
        </h3>
        <div className="space-y-2">
          {exams.map((exam) => (
            <div
              key={exam.name}
              className="p-3 bg-blue-50 rounded-lg border border-blue-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-gray-900">{exam.name}</h4>
                  <p className="text-gray-600">{exam.type}</p>
                </div>
                <span className="px-2 py-1 bg-blue-200 text-blue-700 rounded-full">
                  {exam.deadline}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Required */}
      <div className="mb-6">
        <h3 className="text-gray-900 mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-600" />
          Skills Required
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <button
              key={skill}
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Study Resources */}
      <div className="mb-6">
        <h3 className="text-gray-900 mb-3 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-600" />
          Study Resources
        </h3>
        <div className="space-y-2">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="p-3 bg-cyan-50 rounded-lg border border-cyan-200 flex items-center justify-between"
            >
              <div>
                <span className="px-2 py-1 bg-cyan-200 text-cyan-700 rounded text-xs mr-2">
                  {resource.type}
                </span>
                <h4 className="text-gray-900 inline">{resource.name}</h4>
                <p className="text-gray-600">{resource.description}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-cyan-600" />
            </div>
          ))}
        </div>
      </div>

      {/* Salary Range */}
      <div className="mb-6">
        <h3 className="text-gray-900 mb-3 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-green-600" />
          Salary Range (India)
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 bg-green-50 rounded-lg border border-green-200 text-center">
            <p className="text-gray-600 mb-1">Beginner</p>
            <p className="text-gray-900">₹3-5 LPA</p>
          </div>
          <div className="p-3 bg-green-100 rounded-lg border border-green-300 text-center">
            <p className="text-gray-600 mb-1">Average</p>
            <p className="text-gray-900">₹8-15 LPA</p>
          </div>
          <div className="p-3 bg-green-200 rounded-lg border border-green-400 text-center">
            <p className="text-gray-600 mb-1">Expert</p>
            <p className="text-gray-900">₹20+ LPA</p>
          </div>
        </div>
      </div>

      {/* Future Scope */}
      <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl border-2 border-blue-200">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <h3 className="text-gray-900">Future Scope</h3>
        </div>
        <p className="text-gray-700">
          🚀 Excellent growth potential with increasing demand in AI, Cloud Computing, and Software Development.
        </p>
      </div>
    </div>
  );
}
