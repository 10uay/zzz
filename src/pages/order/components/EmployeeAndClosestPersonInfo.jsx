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

export default function EmployeeAndClosestPersonInfo({
  setUser,
  user,
  order_index,
  setPageNumber,
}) {
  const [employer, setEmployer] = useState();
  const [type_of_active, setType_of_active] = useState();
  const [work_phone, setWork_phone] = useState();
  const [name_of_relative, setName_of_relative] = useState();
  const [relationship, setRelationship] = useState();
  const [relative_mobile, setRelative_mobile] = useState();

  const [error, setError] = useState("");

  const handelEmployeeAndClosestPersonInfo = () => {
    setError("");

    if (
      !employer ||
      !type_of_active ||
      !work_phone ||
      !name_of_relative ||
      !relationship ||
      !relative_mobile
    ) {
      setError("Please fill out all required fields");
      return;
    }
    if (user) {
      const updatedOrders = user?.orders.map((order, index) => {
        if (index === order_index) {
          return {
            ...order,
            employer_and_closest_person_info: {
              employer,
              type_of_active,
              work_phone,
              name_of_relative,
              relationship,
              relative_mobile,
            },
          };
        }
      });
      setUser({ ...user, orders: updatedOrders });
      // setPageNumber(4);
    }
    setPageNumber(4);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gray-500 bg-opacity-10 pb-10 pt-4 shadow-lg">
        <div className="container p-3 max-w-3xl mx-auto mb-4">
          <FixedNotification
            text="Personal Information"
            color="[#fff]"
            opacity="100"
          />
        </div>
        <div className="container p-3 max-w-3xl mx-auto flex flex-col gap-8">
          {/* line one */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* employer */}
            <div className="flex-1">
              <Label
                htmlFor="employer"
                value="Employer:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="text"
                placeholder="employer"
                value={employer}
                required
                id="employer"
                onChange={(e) => setEmployer(e.target.value)}
              />
            </div>
            {/* type of active */}
            <div className="flex-1">
              <Label
                htmlFor="type_of_active"
                value="Type of active:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="text"
                placeholder="type of active"
                value={type_of_active}
                required
                id="type_of_active"
                onChange={(e) => setType_of_active(e.target.value)}
              />
            </div>
          </div>
          {/* line two */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* work_phone */}
            <div className="flex-1">
              <Label
                htmlFor="work_phone"
                value="work phone:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="text"
                placeholder="work phone"
                value={work_phone}
                required
                id="work_phone"
                onChange={(e) => setWork_phone(e.target.value)}
              />
            </div>
            {/* name of relative */}
            <div className="flex-1">
              <Label
                htmlFor="name_of_relative"
                value="Type of active:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="text"
                placeholder="type of active"
                value={name_of_relative}
                required
                id="name_of_relative"
                onChange={(e) => setName_of_relative(e.target.value)}
              />
            </div>
          </div>
          {/* line three */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* relationship */}
            <div className="flex-1">
              <Label
                htmlFor="relationship"
                value="Relationship:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="text"
                placeholder="relationship"
                value={relationship}
                required
                id="relationship"
                onChange={(e) => setRelationship(e.target.value)}
              />
            </div>
            {/* relative mobile */}
            <div className="flex-1">
              <Label
                htmlFor="relative_mobile"
                value="relative mobile:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="number"
                placeholder="relative mobile"
                value={relative_mobile}
                required
                id="relative_mobile"
                onChange={(e) => setRelative_mobile(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-full flex justify-center items-center gap-7">
        <Button
          onClick={() => handelEmployeeAndClosestPersonInfo()}
          className="min-w-28 bg-main_color"
        >
          Next
        </Button>
        <Button
          onClick={() => setPageNumber(2)}
          className="min-w-28 bg-secondary_color"
        >
          Prev
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
