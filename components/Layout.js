import Nav from '@components/Nav';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-6 px-6">
        <Nav />
      </div>
      <div className="max-w-6xl mx-auto py-12 px-6 space-y-16">
        {children}
      </div>
    </div>
  );
}
