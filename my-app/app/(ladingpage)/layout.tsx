import Navbar from "@/components/Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="h-screen overflow-hidden bg-gradient-to-r from-purple-400 to-blue-400">
        <Navbar />
        <hr className="border-t-2 border-orange-500" />
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
