import Image from "next/image";
import { practiceSessionData } from "../helpers/data";

export default function PracticeSession() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-5">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold">{practiceSessionData.title}</h2>
        <p className="mt-4 text-gray-600">{practiceSessionData.description}</p>
        <p className="font-200 text-gray-800">
          {practiceSessionData.highlight}
        </p>
      </div>
      <div className="mt-8 md:mt-0">
        <Image
          src={practiceSessionData.imageSrc}
          alt="Practice Session Illustration"
          width={500}
          height={200}
          className="transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </section>
  );
}
