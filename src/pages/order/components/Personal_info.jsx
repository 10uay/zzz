import FixedNotification from "@/components/FixedNotification";
import {
  Dropdown,
  Label,
  useState,
  Textarea,
  Button,
  Alert,
  TextInput,
} from "@/utils/Imports";
import "./Personal_info.css";

export default function Personal_info({
  setUser,
  user,
  order_index,
  setPageNumber,
}) {
  const [date_of_birth, setDate_of_birth] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState("اختر");
  const [nationality, setNationality] = useState();
  const [id_expiry_date, setId_expiry_date] = useState();
  const [province, setProvince] = useState();
  const [city, setCity] = useState();
  const [current_work, setCurrent_work] = useState();
  const [insurance, setInsurance] = useState("اختر");
  const [error, setError] = useState("");

  const handelPersonalInfo = () => {
    setError("");

    if (
      !date_of_birth ||
      !age ||
      gender === "اختر" ||
      !nationality ||
      !id_expiry_date ||
      !province ||
      !city ||
      !current_work ||
      insurance === "اختر"
    ) {
      setError("Please fill out all required fields");
      return;
    }
    if (user) {
      const updatedOrders = user?.orders.map((order, index) => {
        if (index === order_index) {
          return {
            ...order,
            personal_info: {
              date_of_birth,
              age,
              gender,
              nationality,
              id_expiry_date,
              province,
              city,
              current_work,
              insurance,
            },
          };
        }
      });
      setUser({ ...user, orders: updatedOrders });
      // setPageNumber(3);
    }
    setPageNumber(3);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gray-500 bg-opacity-10 pb-10 pt-4 shadow-lg">
        <div className="container p-3 max-w-3xl mx-auto mb-4">
          <FixedNotification
            text="معلومات شخصية"
            color="#fff"
            opacity="100"
          />
        </div>
        <div className="container p-3 max-w-3xl mx-auto flex flex-col gap-8">
          {/* line one */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* Username */}
            <div className="flex-1">
              <Label
                htmlFor="Username"
                value="اسم المستفيد:"
                className="block mb-1 text-lg ms-[5px]"
              />
              <TextInput
                type="text"
                placeholder="username"
                value={user?.username}
                required
                disabled
                id="Username"
              />
            </div>
            {/* Date */}
            <div className="flex-1">
              <Label
                htmlFor="Date"
                value="تاريخ الميلاد:"
                className="block mb-1 text-lg ms-[5px]"
              />
              <TextInput
                type="date"
                placeholder="Date"
                required
                id="Date"
                className="flex-1"
                onChange={(e) => setDate_of_birth(e.target.value)}
              />
            </div>
          </div>
          {/* line two */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* type of Id */}
            <div className="flex-1">
              <Label
                htmlFor="type of Id"
                value="نوع الهوية :"
                className="block mb-1 ms-[5px] text-lg"
              />
              <Dropdown
                label={user?.type_of_id}
                size="md"
                style={{
                  backgroundColor: "#0DAABC",
                  width: "100%",
                }}
                disabled
                className="shadow-lg shadow-blue-gray-800 min-w-full"
              ></Dropdown>
            </div>
            {/* nationality */}
            <div className="flex-1">
              <Label
                htmlFor="nationality"
                value="الجنسية:"
                className="block mb-1 text-lg ms-[5px]"
              />
              <TextInput
                type="text"
                placeholder="nationality"
                required
                id="nationality"
                className="flex-1"
                onChange={(e) => setNationality(e.target.value)}
              />
            </div>
          </div>
          {/* line three */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* number of Id */}
            <div className="flex-1">
              <Label
                htmlFor="number of Id"
                value="رقم الهوية:"
                className="block mb-1 ms-[5px] text-lg"
              />
              <TextInput
                type="number"
                placeholder="number of your Id"
                value={user?.no_of_id}
                disabled
                required
                id="number of Id"
                className="flex-1"
              />
            </div>
            {/* id_expiry_date */}
            <div className="flex-1">
              <Label
                htmlFor="id_expiry_date"
                value="Id expiry date:"
                className="block mb-1 text-lg ms-[5px]"
              />
              <TextInput
                type="date"
                placeholder="تاريخ انتهاء الهوية"
                required
                id="id_expiry_date"
                className="flex-1"
                onChange={(e) => setId_expiry_date(e.target.value)}
              />
            </div>
          </div>
          {/* line four */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* age */}
            <div className="flex-1">
              <Label
                htmlFor="age"
                value="العمر:"
                className="block mb-1 ms-[5px] text-lg"
              />
              <TextInput
                type="number"
                placeholder="your age"
                required
                id="age"
                className="flex-1"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            {/* mobile */}
            <div className="flex-1">
              <Label
                htmlFor="mobile"
                value="رقم الجوال:"
                className="block mb-1 ms-[5px] text-lg"
              />
              <TextInput
                type="number"
                value={user?.mobile}
                placeholder="your mobile"
                disabled
                required
                id="mobile"
                className="flex-1"
              />
            </div>
            {/* gender */}
            <div className="flex-1">
              <Label
                htmlFor="gender"
                value="الجنس:"
                className="block mb-1 ms-[5px] text-lg"
              />
              <Dropdown
                label={gender}
                size="md"
                style={{
                  backgroundColor: "#0DAABC",
                  width: "100%",
                }}
                className="shadow-lg shadow-blue-gray-800 min-w-full"
              >
                <Dropdown.Item
                  value="options 1"
                  onClick={() => setGender("options 1")}
                  className="justify-center"
                >
                  option 1
                </Dropdown.Item>
                <Dropdown.Item
                  value="options 2"
                  onClick={() => setGender("options 2")}
                  className="justify-center"
                >
                  option 2
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
          {/* line five */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* province */}
            <div className="flex-1">
              <Label
                htmlFor="province"
                value="المنطقة:"
                className="block mb-1 ms-[5px] text-lg"
              />
              <TextInput
                type="text"
                placeholder="your province"
                value={province}
                required
                id="province"
                className="flex-1"
                onChange={(e) => setProvince(e.target.value)}
              />
            </div>
            {/* city */}
            <div className="flex-1">
              <Label
                htmlFor="city"
                value="المدينة:"
                className="block mb-1 text-lg ms-[5px]"
              />
              <TextInput
                type="text"
                placeholder="your city"
                required
                id="city"
                className="flex-1"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          {/* line six */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* current_work */}
            <div className="flex-1">
              <Label
                htmlFor="current_work"
                value="العمل الحالي:"
                className="block mb-1 ms-[5px] text-lg"
              />
              <TextInput
                type="text"
                placeholder="your current work"
                required
                id="current_work"
                className="flex-1"
                onChange={(e) => setCurrent_work(e.target.value)}
              />
            </div>
            {/* insurance */}
            <div className="flex-1">
              <Label
                htmlFor="Insurance"
                value="نوع التأمين الطبي:"
                className="block mb-1 ms-[5px] text-lg"
              />
              <Dropdown
                label={insurance}
                size="md"
                style={{
                  backgroundColor: "#0DAABC",
                  width: "100%",
                }}
                className="shadow-lg shadow-blue-gray-800 min-w-full"
              >
                <Dropdown.Item
                  value="options 1"
                  onClick={() => setInsurance("options 1")}
                  className="justify-center"
                >
                  option 1
                </Dropdown.Item>
                <Dropdown.Item
                  value="options 2"
                  onClick={() => setInsurance("options 2")}
                  className="justify-center"
                >
                  option 2
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-full flex justify-center items-center gap-7">
        <Button
          onClick={() => handelPersonalInfo()}
          className="min-w-28 bg-main_color"
        >
          التالي
        </Button>
        <Button
          onClick={() => setPageNumber(1)}
          className="min-w-28 bg-secondary_color"
        >
          السابق
        </Button>
      </div>
      <div>
        {error && (
          <Alert className="mx-auto w-fit" color="failure">
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
}
