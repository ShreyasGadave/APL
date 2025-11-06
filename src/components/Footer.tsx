import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">College of Engineering</h3>
            <p className="text-sm opacity-90 mb-4">
              Leading the way in engineering education with a commitment to academic excellence, research, and innovation since 2000.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-10 w-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-accent transition-colors">Academics</Link></li>
              <li><Link to="/departments" className="hover:text-accent transition-colors">Departments</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Placements</a></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">E-Learning</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Publications</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Career Services</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                <span>123 University Road, Engineering Campus, City 411007</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-accent" />
                <a href="tel:+911234567890" className="hover:text-accent transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-accent" />
                <a href="mailto:info@college.edu" className="hover:text-accent transition-colors">
                  info@college.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} College of Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
