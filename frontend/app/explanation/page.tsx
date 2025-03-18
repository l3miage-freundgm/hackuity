"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Explanation {
  title: string;
  introduction: string;
  history: string;
  detailedExplanation: string;
  examples: string[];
  securePractices: string[];
  references: string[];
}

export default function ExplanationPage() {
  const [explanation, setExplanation] = useState<Explanation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadExplanation() {
      try {
        // Placeholder, replace with real API call
        const data: Explanation = {
          title: "Re-entrancy Vulnerability",
          introduction:
            "Re-entrancy occurs when a contract makes an external call without first updating its state, leading to potential repeated calls by attackers.",
          history:
            "Famously exploited during Ethereum's DAO hack in 2016, re-entrancy vulnerabilities have led to significant financial losses in multiple incidents.",
          detailedExplanation:
            "Re-entrancy vulnerabilities occur because the state of the smart contract is updated only after making external calls. Attackers exploit this by repeatedly invoking the external calls, thereby draining Ether from contracts. The key to preventing re-entrancy is updating the contract state first (Checks-Effects-Interactions).",
          examples: [
            "DAO Hack (Ethereum, 2016)",
            "Lendf.me Incident (Ethereum, 2020)",
            "Cream Finance exploit (Ethereum, 2021)",
          ],
          securePractices: [
            "Use Checks-Effects-Interactions pattern consistently",
            "Implement OpenZeppelin's ReentrancyGuard",
            "Limit external calls and always update state before interacting externally",
          ],
          references: [
            "https://consensys.net/diligence/blog/2019/09/stop-using-soliditys-transfer-now/",
            "https://docs.openzeppelin.com/contracts/5.x/api/security#ReentrancyGuard",
          ],
        };

        setExplanation(data);
      } catch (e) {
        setError("Failed to load explanation.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadExplanation();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-400">
        Loading detailed explanation...
      </div>
    );

  if (error || !explanation)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-red-400">
        {error || "No explanation available."}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-950 py-12 px-6 md:px-16 lg:px-24 text-gray-200">
      <Link href="/" className="text-sm text-blue-500 hover:text-blue-300 transition">
        &larr; Back to Challenge
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-10 text-white border-b border-gray-800 pb-4">
        {explanation.title}
      </h1>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">Introduction</h2>
          <p className="text-gray-300 leading-relaxed">{explanation.introduction}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">Historical Context & Impact</h2>
          <p className="text-gray-300 leading-relaxed">{explanation.history}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">Detailed Explanation</h2>
          <p className="text-gray-300 leading-relaxed">{explanation.detailedExplanation}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">Real-World Examples</h2>
          <ul className="list-disc ml-6 text-gray-300 leading-relaxed">
            {explanation.examples.map((ex, idx) => (
              <li key={idx}>{ex}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">Secure Coding Best Practices</h2>
          <ul className="list-disc ml-6 text-gray-300 leading-relaxed">
            {explanation.securePractices.map((practice, idx) => (
              <li key={idx}>{practice}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-white">References & Further Reading</h2>
          <ul className="list-disc ml-6 text-blue-400 leading-relaxed">
            {explanation.references.map((ref, idx) => (
              <li key={idx}>
                <a href={ref} target="_blank" className="hover:underline">
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
