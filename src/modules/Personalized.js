import Image from "next/image";
import { PersonalizedData } from "../helpers/data";

export default function Personalized() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-5">
      <div className="mt-8 md:mt-0">
        <Image
          src={PersonalizedData.imageSrc}
          alt="Practice Session Illustration"
          width={550}
          height={200}
          className="transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold">{PersonalizedData.title}</h2>
        <p className="mt-4 text-gray-600">{PersonalizedData.description}</p>
        <p className="mt-2 font-200 text-gray-800">
          {PersonalizedData.highlight}
        </p>
      </div>
    </section>
  );
}
