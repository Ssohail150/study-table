import Image from "next/image";
import { ManagingData } from "../helpers/data";

export default function Managing() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-5">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold">{ManagingData.title}</h2>
        <p className="mt-4 text-gray-600">{ManagingData.description}</p>
      </div>
      <div className="mt-8 md:mt-0">
        <Image
          src={ManagingData.imageSrc}
          alt="Practice Session Illustration"
          width={500}
          height={200}
          className="transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
    </section>
  );
}
