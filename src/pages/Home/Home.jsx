import { Button, Link } from "@/utils/Imports";

export default function Home() {
  return (
    <div className="container mx-auto md:px-2 max-w-screen-xl relative">
      <img
        src="/media/home-img.jpg"
        alt="muafa"
        className="rounded-2xl shadow-gray-400 shadow-lg mb-28"
      />
      <div className="absolute top-[65%] left-1/2 transform translate-x-[-50%] text-3xl font-bold text-main_color py-3 px-8">
        <span className="relative z-10">'نحن هنا لمساعدتك على التحسن!'</span>
        <div className="absolute inset-0  backdrop-blur-lg "></div>
        <div className="flex justify-center items-center gap-5 mt-5">
          <Button className="min-w-28 bg-main_color">
            <Link to="/sign-up">تسجيل حساب جديد</Link>
          </Button>
          <Button className="min-w-28  bg-main_color">
            <Link to="/log-in">تسجيل الدخول</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
