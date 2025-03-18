type Props = {
  answer: string;
  setAnswer: (val: string) => void;
};

export default function UserAnswer({ answer, setAnswer }: Props) {
  return (
    <div className="my-6">
      <label className="block mb-2 text-sm font-medium text-gray-300">
        Describe the vulnerability:
      </label>
      <textarea
        className="w-full px-4 py-3 rounded-md border border-gray-800 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
        rows={5}
        placeholder="Your detailed answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
    </div>
  );
}
