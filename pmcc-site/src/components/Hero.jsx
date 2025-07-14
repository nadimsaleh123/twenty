import { Link } from 'react-router-dom';
import logo from '/assets/pmcc-logo.svg';

export default function Hero() {
  return (
    <div className="relative bg-pmccRed text-white flex items-center justify-center h-64">
      <img src={logo} alt="PMCC" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Building Better Futures</h1>
        <Link
          to="/contact"
          className="bg-pmccBlack text-white px-4 py-2 rounded"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
