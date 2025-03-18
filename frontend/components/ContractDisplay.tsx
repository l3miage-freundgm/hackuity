import { ClipboardCopy } from "lucide-react";
import { useState } from "react";

type Props = {
  contractCode: string;
};

export default function ContractDisplay({ contractCode }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-gray-900 rounded-lg shadow-xl overflow-hidden my-6">
      <header className="bg-gray-800 px-4 py-2 flex justify-between items-center">
        <h2 className="text-sm font-semibold text-gray-300">Smart Contract</h2>
        <button onClick={handleCopy} className="text-gray-400 hover:text-gray-200">
          <ClipboardCopy size={16} />
        </button>
      </header>
      <pre className="text-sm px-6 py-4 overflow-auto whitespace-pre-wrap text-gray-200">
        {contractCode}
      </pre>
      {copied && (
        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs py-1 px-2 rounded">
          Copied!
        </div>
      )}
    </section>
  );
}
