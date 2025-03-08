export default function ReusableButton({ text, onClick, className }) {
    return (
      <button
        className={`px-4 py-2 bg-black text-white rounded-md hover:bg-gray-600 cursor-pointer ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }