import FixedNotification from "@/components/FixedNotification";
import {
  Dropdown,
  Label,
  useState,
  Textarea,
  Button,
  Alert,
} from "@/utils/Imports";

export default function Order_info({
  setUser,
  user,
  order_index,
  setPageNumber,
}) {
  const [typeOfService, setTypeOfService] = useState("select one");
  const [section, setSection] = useState("select one");
  const [description, setDescription] = useState("select one");
  const [error, setError] = useState("");

  const handelOrderInfo = () => {
    setError("");
    if (typeOfService === "select one" || section === "select one") {
      setError("Please fill out all required fields");
      return;
    }
    if (user) {
      const updatedOrders = user?.orders.map((order, index) => {
        if (index === order_index) {
          return {
            ...order,
            order_info: {
              type_of_service: typeOfService,
              category_of_service: section,
              description: description,
            },
          };
        }
      });
      setUser({ ...user, orders: updatedOrders });
      // setPageNumber(2);
    }
    setPageNumber(2);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gray-500 bg-opacity-10 pb-10 pt-4 shadow-lg">
        <div className="container p-3 max-w-3xl mx-auto mb-4">
          <FixedNotification
            text="Order Information"
            color="#fff"
            opacity="100"
          />
        </div>
        <div className="container p-3 max-w-3xl mx-auto flex flex-col gap-8">
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* type of service */}
            <div className="flex-1">
              <Label
                htmlFor="type_of_Service"
                value="Type of service:"
                className="block mb-1 text-lg ms-[5px]"
              />
              <Dropdown
                label={typeOfService}
                size="md"
                style={{
                  backgroundColor: "#0DAABC",
                  width: "100%",
                }}
                className="shadow-lg shadow-blue-gray-800 min-w-full"
              >
                <Dropdown.Item
                  value="options 1"
                  onClick={() => setTypeOfService("options 1")}
                  className="justify-center"
                >
                  option 1
                </Dropdown.Item>
                <Dropdown.Item
                  value="options 2"
                  onClick={() => setTypeOfService("options 2")}
                  className="justify-center"
                >
                  option 2
                </Dropdown.Item>
                <Dropdown.Item
                  value="options 3"
                  onClick={() => setTypeOfService("options 3")}
                  className="justify-center"
                >
                  option 3
                </Dropdown.Item>
              </Dropdown>
            </div>
            {/* section */}
            <div className="flex-1">
              <Label
                htmlFor="section"
                value="Section:"
                className="block mb-1 ms-[5px] text-xl"
              />
              <Dropdown
                label={section}
                size="md"
                style={{
                  backgroundColor: "#0DAABC",
                  width: "100%",
                }}
                className="shadow-lg shadow-blue-gray-800 min-w-full"
              >
                <Dropdown.Item
                  value="options 1"
                  onClick={() => setSection("options 1")}
                  className="justify-center"
                >
                  option 1
                </Dropdown.Item>
                <Dropdown.Item
                  value="options 2"
                  onClick={() => setSection("options 2")}
                  className="justify-center"
                >
                  option 2
                </Dropdown.Item>
                <Dropdown.Item
                  value="options 3"
                  onClick={() => setSection("options 3")}
                  className="justify-center"
                >
                  option 3
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
          {/* desicription */}
          <div>
            <Label
              htmlFor="desicription"
              value="Description:"
              style={{
                fontSize: "18px",
                marginInlineStart: "5px",
              }}
            />
            <Textarea
              className="mt-1"
              id="description"
              style={{
                fontSize: "16px",
                minHeight: "150px", // Set the minimum height here
              }}
              onChange={(e) => setDescription(e.target.value)}
              sizing="sm"
              placeholder="please type your description, if you want..."
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full">
        <Button
          onClick={() => handelOrderInfo()}
          className="min-w-28 mx-auto bg-main_color"
        >
          Next
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
