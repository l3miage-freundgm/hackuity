import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 border-b border-gray-800">
      <div className="flex items-center gap-4">
        <Image src="/assets/logo.svg" width={40} height={40} alt="Hackuity Logo" />
        <div>
          <h1 className="text-3xl font-bold text-gray-100">Hackuity</h1>
          <p className="text-sm text-gray-400">
            Interactive Solidity security training powered by AI.
          </p>
        </div>
      </div>
      <nav>
        <a href="#" className="text-sm text-gray-300 hover:text-white">
          Documentation
        </a>
      </nav>
    </header>
  );
}
