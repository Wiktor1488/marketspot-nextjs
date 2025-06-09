import Header from "./Header";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
