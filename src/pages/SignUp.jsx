import FixedNotification from "@/components/FixedNotification";
import SignupForm from "@/components/SignupForm";


export default function SignUp() {
  return (
    <div className="flex flex-col gap-10 mt-5">
      <div className="lg:ms-72">
        <FixedNotification text="The beneficiary must be himself and not someone else acting on his behalf" />
      </div>
      <SignupForm />
    </div>
  );
}
