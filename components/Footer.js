import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-8 px-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
        <p className="text-base text-gray-500">&copy; 2022 Colorwaze. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <Link href="/contrast-tester"><a className="text-base text-gray-500">Contrast tester</a></Link>
          <a className="text-base text-gray-500" href="mailto:colorwazeapp@gmail.com">Contact us</a>
        </div>
      </div>
    </footer>
  );
}
