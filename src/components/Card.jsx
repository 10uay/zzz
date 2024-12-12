import { MagicCard } from "@/components/ui/magic-card";
import "./Card.css";

export function Card({ content_of_card, number, clasification }) {
  const { theme } = "light";
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <MagicCard
        className={`cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl
          px-14 pt-8 pb-5 min-w-[250px] ${
            clasification === "user" &&
            number === "1" &&
            "bg-gray-500 bg-opacity-20"
          }
          ${
            clasification === "employee" &&
            number === "2" &&
            "bg-gray-500 bg-opacity-20"
          }`}
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D9"}
      >
        <span className="mb-8 text-center block text-white text-2xl card">
          {number}
        </span>
        <div className="text-main_color text-[30px] capitalize">
          {content_of_card}
        </div>
      </MagicCard>
    </div>
  );
}
