import { Card } from "@/components/Card";
import LogInForm from "@/components/LoginForm";
import { useState } from "@/utils/Imports";

export default function LogIn() {
  const [clasification, setClasification] = useState("user");

  return (
    <div className="flex flex-col gap-10">
      {/* <header className="">
        <img src="" alt="" />
        <div className="flex justify-around items-center">
          <img src="" alt="a doctor" />
          <img src="" alt="muafa logo" />
        </div>
      </header> */}

      {/* user / employee */}
      <div className="container mx-auto px-3 mt-10">
        <span className="block text-center w-full mx-auto mb-6 text-[28px] text-secondary_color">
          قم بتسجيل الدخول إلى الخدمة المطلوبة
        </span>
        <div className="flex items-center justify-center gap-7 flex-col lg:flex-row">
          <div onClick={() => setClasification("user")}>
            <Card
              content_of_card={"user"}
              number={"1"}
              clasification={clasification}
            />
          </div>
          <div onClick={() => setClasification("employee")}>
            <Card
              content_of_card={"موظف"}
              number={"2"}
              clasification={clasification}
            />
          </div>
        </div>
      </div>
      <div>
        <LogInForm clasification={clasification} />
      </div>
    </div>
  );
}
