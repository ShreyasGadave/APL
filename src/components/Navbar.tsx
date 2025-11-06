import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", path: "/" },
    { 
      name: "About Us", 
      path: "/about",
      submenu: [
        { name: "Vision & Mission", path: "/about#vision" },
        { name: "Administration", path: "/about#admin" },
        { name: "Infrastructure", path: "/about#infrastructure" }
      ]
    },
    { 
      name: "Academics", 
      path: "/academics",
      submenu: [
        { name: "Programs Offered", path: "/academics#programs" },
        { name: "Academic Calendar", path: "/academics#calendar" },
        { name: "Examination", path: "/academics#exam" }
      ]
    },
    { name: "Departments", path: "/departments" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-14 w-14 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">CE</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">College of Engineering</h1>
              <p className="text-xs text-muted-foreground">Excellence in Education</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-md flex items-center gap-1 text-foreground hover:bg-secondary transition-colors font-medium",
                    activeDropdown === item.name && "bg-secondary"
                  )}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>
                
                {/* Dropdown */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg shadow-lg py-2 animate-fade-in">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.path}
                        className="block px-4 py-2 text-foreground hover:bg-secondary transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-md hover:opacity-90 transition-opacity font-medium"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {menuItems.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  to={item.path}
                  className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md transition-colors font-medium"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        to={subitem.path}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:bg-secondary rounded-md transition-colors"
                        onClick={toggleMenu}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block mx-4 mt-4 px-6 py-2 bg-accent text-accent-foreground rounded-md hover:opacity-90 transition-opacity text-center font-medium"
              onClick={toggleMenu}
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
