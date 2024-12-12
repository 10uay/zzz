import FixedNotification from "@/components/FixedNotification";
import {
  Dropdown,
  Label,
  useState,
  Textarea,
  Button,
  Alert,
  TextInput,
  useNavigate,
} from "@/utils/Imports";
import "./Personal_info.css";
import "./Application_attachments.css";

export default function Document_attachments({
  setUser,
  user,
  order_index,
  setPageNumber,
}) {
  const navigate = useNavigate();
  const [id_photo, setId_photo] = useState();
  const [
    residence_permit_validity_date_for_non_Saudis,
    setResidence_permit_validity_date_for_non_Saudis,
  ] = useState();
  const [salary_definition, setSalary_definition] = useState();

  const [error, setError] = useState("");
  const [files, setFiles] = useState([]);

  const MultipleImageUpload = async () => {
    setFiles([
      id_photo,
      residence_permit_validity_date_for_non_Saudis,
      salary_definition,
    ]);
    if (files.length !== 3) {
      setError("Please select files to upload.");
      return;
    }
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }
    await fetch("/api/images/upload", { method: "POST", body: formData })
      .then((res) => {
        const data = res.json();
        if (data.seccess) {
          console.log(`Files uploaded successfully: ${data.images.join(", ")}`);
        } else {
          setError(data.message);
        }
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handelDocument_attachments = async () => {
    setError("");
    MultipleImageUpload();

    if (user) {
      const updatedOrders = user?.orders.map((order, index) => {
        if (index === order_index) {
          return {
            ...order,
            document_attachments: {
              id_photo,
              residence_permit_validity_date_for_non_Saudis,
              salary_definition,
            },
          };
        }
      });
      setUser({ ...user, orders: updatedOrders });
      //
      // add function to add order to user
      //
      // navigate("/user/profile");
    }
    navigate("/user/profile");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gray-500 bg-opacity-10 pb-10 pt-4 shadow-lg">
        <div className="container p-3 max-w-3xl mx-auto mb-4">
          <FixedNotification
            text="Document attachments"
            color="#fff"
            opacity="100"
          />
        </div>
        <div className="container p-3 max-w-3xl mx-auto flex flex-col gap-8">
          {/* line one */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* id photo */}
            <div className="flex-1">
              <Label
                htmlFor="id_photo"
                value="id photo:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="file"
                placeholder="id photo"
                required
                id="id_photo"
                onChange={(e) => setId_photo(e.target.files[0])}
              />
            </div>
            {/* residence permit validity date for non Saudis */}
            <div className="flex-1">
              <Label
                htmlFor="residence_permit_validity_date_for_non_Saudis"
                value="residence permit validity date for non Saudis:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="file"
                placeholder="residence permit validity date for non Saudis"
                required
                id="residence_permit_validity_date_for_non_Saudis"
                onChange={(e) =>
                  setResidence_permit_validity_date_for_non_Saudis(
                    e.target.value
                  )
                }
              />
            </div>
          </div>
          {/* line two */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* salary definition */}
            <div className="flex-1 cursor-pointer">
              <Label
                htmlFor="salary_definition"
                value="salary definition:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="file"
                placeholder="salary definition"
                required
                id="salary_definition"
                onChange={(e) => {
                  setSalary_definition(e.target.files[0]);
                }}
                className="!cursor-pointer"
              />
            </div>
            {/* */}
            <div className="flex-1 cursor-pointer"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-full flex justify-center items-center gap-7">
        <Button
          onClick={() => handelDocument_attachments()}
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
          <Alert
            className="mx-auto w-fit shadow-md select-none"
            color="failure"
          >
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
}
