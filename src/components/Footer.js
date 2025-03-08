import ReusableButton from "./ReusableButton";
import { Instagram, MessageCircle, Pin } from "lucide-react"; 

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white p-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
        
        <h2 className="text-xl font-bold">
          Study<span className="text-gray-400">table</span>
        </h2>

        <div>
          <ReusableButton 
            text={
              <span className="flex items-center gap-2">
                <Pin size={16} /> Notice Board
              </span>
            }
            className="font-bold text-black"
          />
        </div>

        <div className="space-y-2 ">
          <h3 className="font-semibold">Socials</h3>
          <div className="flex items-center justify-center md:justify-start gap-2 cursor-pointer">
            <Instagram size={18} /> <p>Instagram</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 cursor-pointer">
            <MessageCircle size={18} /> <p>WhatsApp</p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Blogs</h3>
          <div className="cursor-pointer">
          <p>How we plan learning session?</p>
          <p>How we plan assessment session?</p>
          <p>How we manage student life?</p>
          <p>The effective student</p>
          </div>
        </div>
      </div>

      <p className="text-gray-200 mt-6 text-center">
        © Copyright 2025 Studytable
      </p>
    </footer>
  );
}
