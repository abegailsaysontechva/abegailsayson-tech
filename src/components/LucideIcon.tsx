import React from 'react';
import {
  Cpu,
  Database,
  Sparkles,
  MessageSquare,
  FileCheck,
  Camera,
  Layers,
  Bot,
  FileText,
  Calendar,
  Mail,
  CheckCircle,
  Zap,
  Award,
  DollarSign,
  Smile,
  Server,
  Clock,
  AlertCircle,
  ChevronDown,
  Check,
  ArrowRight,
  Menu,
  X,
  Star,
  Eye,
  Send,
  Briefcase,
  Plus,
  TrendingUp,
  HelpCircle,
  Linkedin,
  Twitter,
  Github,
  PhoneCall,
  ChevronRight,
  Shield
} from 'lucide-react';

interface LucideIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
  size?: number | string;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className = '', size = 24, ...props }) => {
  const iconMap: Record<string, React.FC<any>> = {
    Cpu,
    Database,
    Sparkles,
    MessageSquare,
    FileCheck,
    Camera,
    Layers,
    Bot,
    FileText,
    Calendar,
    Mail,
    CheckCircle,
    Zap,
    Award,
    DollarSign,
    Smile,
    Server,
    Clock,
    AlertCircle,
    ChevronDown,
    Check,
    ArrowRight,
    Menu,
    X,
    Star,
    Eye,
    Send,
    Briefcase,
    Plus,
    TrendingUp,
    HelpCircle,
    Linkedin,
    Twitter,
    Github,
    PhoneCall,
    ChevronRight,
    Shield,
    BsChatDots: Sparkles // fallback
  };

  const IconComponent = iconMap[name] || HelpCircle;

  return <IconComponent className={className} size={size} {...props} />;
};

export default LucideIcon;
