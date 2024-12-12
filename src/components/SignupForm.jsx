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
  signUpStart,
  signUpSuccess,
  signUpFailure,
  Dropdown,
} from "@/utils/Imports";

export default function SignupForm() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const [typeOfId, setTypeOfId] = useState("select one");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlePasswordCheck = () => {
    if (formData.password !== confirmPassword) {
      dispatch(signUpFailure("Ensure both passwords match"));
      return false;
    }
    if (formData.password.length < 8) {
      dispatch(
        signUpFailure("Make sure your password length is at least 8 characters")
      );
      return false;
    }
    return true; // Return true if all checks pass
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    dispatch(signUpStart());
    setFormData({ ...formData, type_of_Id: typeOfId });

    if (!handlePasswordCheck()) {
      return;
    }

    if (
      !formData.username ||
      !formData.mobile ||
      formData.type_of_Id === "select one" ||
      formData.type_of_Id === "اختر واحدة" ||
      !formData.number_of_Id ||
      !formData.password
    ) {
      return dispatch(signUpFailure("Please fill out all fields."));
    }

    setFormData({ ...formData });
    dispatch(signUpStart());
    await fetch("/api/auth/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        const data = res.json();
        if (data.success) {
          dispatch(signUpSuccess(data.user));
          navigate("/verify-account");
        } else dispatch(signUpFailure(data.message));
      })
      .catch((error) => {
        dispatch(signUpFailure(error));
      });
  };

  return (
    <div className="bg-gray-500 bg-opacity-10 py-10 shadow-lg">
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
              <Label htmlFor="username" value="Your username" />
              <TextInput
                type="text"
                required
                placeholder="username"
                id="username"
                autoComplete="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="mobile" value="Your mobile phone" />
              <TextInput
                type="number"
                required
                placeholder="05*******"
                id="mobile"
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="type_of_Id" value="Your Id type:" />
              <Dropdown
                label={typeOfId}
                size="md"
                style={{
                  backgroundColor: "var(main_color)",
                }}
                className="shadow-lg shadow-blue-gray-800 "
              >
                <Dropdown.Item
                  value="options 1"
                  onClick={() => setTypeOfId("options 1")}
                >
                  option 1
                </Dropdown.Item>
                <Dropdown.Item
                  value="options 2"
                  onClick={() => setTypeOfId("options 2")}
                >
                  option 2
                </Dropdown.Item>
                <Dropdown.Item
                  value="options 3"
                  onClick={() => setTypeOfId("options 3")}
                >
                  option 3
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div>
              <Label htmlFor="number_of_Id" value="Your Id number" />
              <TextInput
                type="number"
                required
                placeholder="123456789"
                id="number_of_Id"
                autoComplete="number"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="password" value="Your password" />
              <TextInput
                type="password"
                required
                placeholder="********"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label
                htmlFor="new-confirm-password"
                value="Confirm your password"
              />
              <TextInput
                type="password"
                required
                placeholder="********"
                id="new-confirm-password"
                autoComplete="new-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
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
                "sign up"
              )}
            </Button>
          </form>

          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/log-in" className="text-main_color capitalize">
              log In
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
