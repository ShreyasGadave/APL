import { Mail, Phone, Calendar } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:info@college.edu" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@college.edu</span>
            </a>
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 123 456 7890</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">Student Portal</a>
            <a href="#" className="hover:text-accent transition-colors">Staff Login</a>
            <a href="#" className="hover:text-accent transition-colors">Alumni</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
