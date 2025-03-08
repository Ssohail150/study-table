export default function Card({ title, description, buttonText }) {
    return (
      <div className="bg-[#2A2A2A] text-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
        <button className="mt-4 text-white underline cursor-pointer">{buttonText}</button>
      </div>
    );
  }
  