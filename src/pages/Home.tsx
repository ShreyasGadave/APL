import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import NoticeBoard from "@/components/NoticeBoard";
import DepartmentsSection from "@/components/DepartmentsSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <Hero />
      <StatsSection />
      <NewsEventsSection />
      <NoticeBoard />
      <DepartmentsSection />
      <Footer />
    </div>
  );
};

export default Home;
