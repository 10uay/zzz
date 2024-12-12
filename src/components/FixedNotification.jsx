export default function FixedNotification({ text, color, opacity }) {
  return (
    <div
      className={`container py-5 ps-5 pe-3text-[20px] max-w-[300px] relative ${
        color ? `!bg-[#fff]` : "bg-gray-500"
      } ${
        opacity ? `bg-opacity-${opacity}` : "bg-opacity-10"
      } rounded-e-lg select-none
        before:content before:absolute before:w-2 before:h-full before:bg-main_color before:top-0 lg:before:-start-2 before:start-0`}
    >
      {text}
    </div>
  );
}
