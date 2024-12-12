import {
  Label,
  Button,
  TextInput,
  Spinner,
  Alert,
  Link,
  useNavigate,
  useDispatch,
  useSelector,
  useState,
  logInStart,
  logInSuccess,
  logInFailure,
} from "@/utils/Imports";

export default function LogInForm({ clasification }) {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlePasswordCheck = () => {
    if (formData.password.length < 8) {
      dispatch(
        logInFailure("Make sure your password length is at least 8 characters")
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    dispatch(logInStart());

    setFormData({ clasification, ...formData });

    console.log(formData);

    if (!handlePasswordCheck()) {
      return;
    }
    if (!formData.number_of_Id || !formData.password || !clasification) {
      return dispatch(logInFailure("Please fill out all fields"));
    }

    dispatch(logInStart());
    await fetch("/api/auth/log-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        const data = res.json();
        if (data.success) {
          dispatch(logInSuccess(data.user));
          data.user.classification === "user"
            ? navigate("/user")
            : navigate("/employee");
        } else dispatch(logInFailure(data.message));
      })
      .catch((error) => {
        dispatch(logInFailure(error));
      });
  };

  return (
    <div className=" mt-10 bg-gray-500 bg-opacity-10 py-10 shadow-lg">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center lg:gap-5 gap-14">
        {/* left */}
        <div className="flex-1">
          <img
            src="/media/logo.png"
            alt="logo"
            className="max-w-48 mx-auto md:mx-0 select-none"
          />
        </div>

        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label
                htmlFor="number_of_Id"
                value="اسم المستفيد"
                className="ps-2"
              />
              <TextInput
                type="number"
                required
                placeholder="Your Id card"
                id="number_of_Id"
                autoComplete="number"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="password" value="كلمة السر" className="ps-2" />
              <TextInput
                type="password"
                required
                placeholder="*******"
                id="password"
                autoComplete="password"
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="bg-main_color capitalize text-white"
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "log in"
              )}
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>ليس لديك حساب؟</span>
            <Link to="/sign-up" className="text-main_color capitalize">
              اشتراك
            </Link>
          </div>
          <div className="flex gap-2 text-sm mt-2">
            <span>هل نسيت كلمة المرور؟</span>
            <Link to="/forget-password" className="text-main_color capitalize">
              فقط انقر
            </Link>
          </div>
          {error && (
            <Alert className="mt-5" color="failure">
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
