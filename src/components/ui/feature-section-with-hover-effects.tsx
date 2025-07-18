
import { cn } from "@/lib/utils";
import {
  Timer,
  Camera,
  Target,
  Calendar,
  PieChart,
  UserCheck,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Smart Time Capture",
      description: "Automatic time tracking with manual override options",
      icon: <Timer className="h-6 w-6" />,
    },
    {
      title: "Screenshot Monitoring",
      description: "Visual proof of work with customizable capture intervals",
      icon: <Camera className="h-6 w-6" />,
    },
    {
      title: "Project & Task Tracking",
      description: "Organize work by projects and track individual tasks",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Leave Management",
      description: "Handle time-off requests and attendance tracking",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "Reports & Analytics",
      description: "Detailed insights into productivity and time usage",
      icon: <PieChart className="h-6 w-6" />,
    },
    {
      title: "Team & User Control",
      description: "Manage permissions and team access levels",
      icon: <UserCheck className="h-6 w-6" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-700/50",
        (index === 0 || index === 3) && "lg:border-l border-gray-700/50",
        index < 3 && "lg:border-b border-gray-700/50"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-400 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
