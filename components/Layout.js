import Nav from '@components/Nav';
import Footer from '@components/Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-6 px-6">
        <Nav />
      </div>
      <main className="max-w-6xl mx-auto py-12 px-6 space-y-16">
        {children}
      </main>
      <div className="max-w-6xl mx-auto py-12 px-6">
        <Footer />
      </div>
    </div>
  );
}
