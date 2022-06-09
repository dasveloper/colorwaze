export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-12 px-6 space-y-16">
        {children}
      </div>
    </div>
  );
}
