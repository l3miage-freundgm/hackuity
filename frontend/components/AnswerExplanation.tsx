import { motion } from "framer-motion";

type Props = {
  explanation: string;
};

export default function AnswerExplanation({ explanation }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-green-900 text-green-100 px-6 py-4 rounded-lg my-6"
    >
      <h2 className="font-semibold mb-2">✅ Explanation:</h2>
      <p className="text-sm">{explanation}</p>
    </motion.section>
  );
}
