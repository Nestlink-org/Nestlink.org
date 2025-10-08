import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (

      <div className="antialiased">
     {children}
        <Footer />
      </div>

  );
}
