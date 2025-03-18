type Props = {
    onClick: () => void;
    loading?: boolean;
  };
  
  export default function ShowAnswerButton({ onClick, loading = false }: Props) {
    return (
      <button
        onClick={onClick}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg transition disabled:bg-blue-800"
      >
        {loading ? "Loading..." : "Reveal Vulnerability"}
      </button>
    );
  }
  