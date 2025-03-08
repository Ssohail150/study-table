import Image from 'next/image';
import ReusableButton from '../components/ReusableButton';
import { heroData } from '../helpers/data';

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16">
      
      <div className="max-w-xl">
        <h2 className="text-5xl font-bold">{heroData.title}</h2>
        <p className="mt-4 text-gray-600">{heroData.description}</p>
        <div className="mt-6 flex gap-4">
          <ReusableButton text={heroData.buttonText} className="font-bold" />
          <a href="#" className="text-black underline">{heroData.signInText}</a>
        </div>
      </div>

      <div className="mt-8 md:mt-0">
        <Image 
          src={heroData.imageSrc} 
          alt="Study Table Illustration" 
          width={550} 
          height={200} 
          className="transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </div>

    </section>
  );
}
