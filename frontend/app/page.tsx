"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ContractDisplay from "@/components/ContractDisplay";
import UserAnswer from "@/components/UserAnswer";
import ShowAnswerButton from "@/components/ShowAnswerButton";
import AnswerExplanation from "@/components/AnswerExplanation";

export default function Home() {
  const [answer, setAnswer] = useState("");
  const [showExplanation, setShowExplanation] = useState(false);

  const codeSnippet = `pragma solidity ^0.8.0;

contract UnsafeWithdraw {
  mapping(address => uint256) balances;

  function deposit() external payable {
      balances[msg.sender] += msg.value;
  }

  function withdraw() public {
      uint amount = balances[msg.sender];
      require(amount > 0, "No funds available");
      (bool success,) = msg.sender.call{value: amount}("");
      require(success, "Transfer failed");
      balances[msg.sender] = 0;
  }
}`;

  const explanation = `This contract is vulnerable to re-entrancy. Use Checks-Effects-Interactions to secure it.`;

  return (
    <main className="container mx-auto max-w-3xl px-4 py-10">
      <Header />
      <ContractDisplay contractCode={codeSnippet} />
      <UserAnswer answer={answer} setAnswer={setAnswer} />
      <ShowAnswerButton onClick={() => setShowExplanation(true)} />
      {showExplanation && <AnswerExplanation explanation={explanation} />}
    </main>
  );
}
