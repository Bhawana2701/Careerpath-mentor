import { useState } from 'react';
import OnboardingScreens from './components/OnboardingScreens';
import UserTypeSelection from './components/UserTypeSelection';
import CareerQuiz from './components/CareerQuiz';
import HomeDashboard from './components/HomeDashboard';
import CareerExplorer from './components/CareerExplorer';
import CareerDetail from './components/CareerDetail';
import RoadmapScreen from './components/RoadmapScreen';
import StudyResources from './components/StudyResources';
import NextSteps from './components/NextSteps';
import { LucideIcon } from 'lucide-react';

export interface Career {
  id: string;
  name: string;
  icon: LucideIcon;
  tags?: string[];
  description: string;
  color: string;
  iconColor: string;
  category?: string;
}

export interface UserData {
  name: string;
  userType: string;
  interests: string[];
  selectedCareer: Career | null;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<string>('onboarding');
  const [userData, setUserData] = useState<UserData>({
    name: 'User',
    userType: '',
    interests: [],
    selectedCareer: null,
  });

  const navigateTo = (screen: string) => {
    setCurrentScreen(screen);
  };

  const updateUserData = (data: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {currentScreen === 'onboarding' && (
          <OnboardingScreens onComplete={() => navigateTo('userType')} />
        )}
        {currentScreen === 'userType' && (
          <UserTypeSelection
            onSelect={(type) => {
              updateUserData({ userType: type });
              navigateTo('quiz');
            }}
            onBack={() => navigateTo('onboarding')}
          />
        )}
        {currentScreen === 'quiz' && (
          <CareerQuiz
            onComplete={(data) => {
              updateUserData({
                name: data.name,
                interests: data.interests,
              });
              navigateTo('home');
            }}
            onBack={() => navigateTo('userType')}
          />
        )}
        {currentScreen === 'home' && (
          <HomeDashboard
            userData={userData}
            onNavigate={navigateTo}
            onSelectCareer={(career) => {
              updateUserData({ selectedCareer: career });
              navigateTo('careerDetail');
            }}
          />
        )}
        {currentScreen === 'explorer' && (
          <CareerExplorer
            onSelectCareer={(career) => {
              updateUserData({ selectedCareer: career });
              navigateTo('careerDetail');
            }}
            onBack={() => navigateTo('home')}
          />
        )}
        {currentScreen === 'careerDetail' && (
          <CareerDetail
            career={userData.selectedCareer}
            onBack={() => navigateTo('explorer')}
            onStartRoadmap={() => navigateTo('roadmap')}
          />
        )}
        {currentScreen === 'roadmap' && (
          <RoadmapScreen
            career={userData.selectedCareer}
            userData={userData}
            onBack={() => navigateTo('careerDetail')}
          />
        )}
        {currentScreen === 'resources' && (
          <StudyResources
            career={userData.selectedCareer}
            onBack={() => navigateTo('home')}
          />
        )}
        {currentScreen === 'nextSteps' && (
          <NextSteps
            userData={userData}
            onBack={() => navigateTo('home')}
          />
        )}
      </div>
    </div>
  );
}
