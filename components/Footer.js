export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-8 px-6 border-t border-gray-200 flex justify-between">
        <p className="text-base text-gray-500">&copy; 2022 Colorwaze. All rights reserved.</p>
        <a className="text-base text-gray-500" href="mailto:colorwazeapp@gmail.com">Contact us</a>
      </div>
    </footer>
  );
}
