import FixedNotification from "@/components/FixedNotification";
import {
  Dropdown,
  Label,
  useState,
  Button,
  Alert,
  TextInput,
} from "@/utils/Imports";
import "./Personal_info.css";
import "./Application_attachments.css";

export default function Application_attachments({
  setUser,
  user,
  order_index,
  setPageNumber,
}) {
  const [
    hospital_appointment_notfication,
    setHospital_appointment_notfication,
  ] = useState();
  const [proof_of_insurance_refusal, setProof_of_insurance_refusal] =
    useState();
  const [recent_medical_report, setRecent_medical_report] = useState();
  const [cost_letter, setCost_letter] = useState();
  const [medical_report_date, setMedical_report_date] = useState();
  const [discounts, setDiscounts] = useState(false);
  const [service_provider, setService_provider] = useState("select one");

  const [error, setError] = useState("");
  const [files, setFiles] = useState([]);

  const MultipleImageUpload = async () => {
    setFiles([
      hospital_appointment_notfication,
      proof_of_insurance_refusal,
      recent_medical_report,
      cost_letter,
    ]);
    if (files.length !== 4) {
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

  const handelApplication_attachments = async () => {
    setError("");
    MultipleImageUpload();

    if (!medical_report_date || service_provider === "select one") {
      setError("Please fill out all required fields");
      return;
    }

    if (user) {
      const updatedOrders = user?.orders.map((order, index) => {
        if (index === order_index) {
          return {
            ...order,
            application_attachments: {
              hospital_appointment_notfication,
              proof_of_insurance_refusal,
              recent_medical_report,
              cost_letter,
              medical_report_date,
              discounts,
              service_provider,
            },
          };
        }
      });
      setUser({ ...user, orders: updatedOrders });
      //
      // add function to add order to user
      //
      // setPageNumber(5);
    }
    setPageNumber(5);
  };

  // console.log(hospital_appointment_notfication);

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-gray-500 bg-opacity-10 pb-10 pt-4 shadow-lg">
        <div className="container p-3 max-w-3xl mx-auto mb-4">
          <FixedNotification text="مرفقات الطلب" color="#fff" opacity="100" />
        </div>
        <div className="container p-3 max-w-3xl mx-auto flex flex-col gap-8">
          {/* line one */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* hospital appointment notfication */}
            <div className="flex-1">
              <Label
                htmlFor="hospital_appointment_notfication"
                value="Hospital appointment notfication:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="file"
                placeholder="hospital appointment notfication"
                required
                id="hospital_appointment_notfication"
                onChange={(e) =>
                  setHospital_appointment_notfication(e.target.files[0])
                }
              />
            </div>
            {/* proof of insurance refusal */}
            <div className="flex-1">
              <Label
                htmlFor="proof_of_insurance_refusal"
                value="دليل على رفض التأمين:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="file"
                placeholder="proof of insurance refusal"
                required
                id="proof_of_insurance_refusal"
                onChange={(e) => setProof_of_insurance_refusal(e.target.value)}
              />
            </div>
          </div>
          {/* line two */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* recent medical report */}
            <div className="flex-1 cursor-pointer">
              <Label
                htmlFor="recent_medical_report"
                value="تقرير طبي حديث:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="file"
                placeholder="recent medical report"
                required
                id="recent_medical_report"
                onChange={(e) => {
                  setRecent_medical_report(e.target.files[0]);
                }}
                className="!cursor-pointer"
              />
            </div>
            {/* cost letter */}
            <div className="flex-1">
              <Label
                htmlFor="cost_letter"
                value="خطاب التكلفة:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="file"
                placeholder="cost letter"
                required
                id="cost_letter"
                onChange={(e) => setCost_letter(e.target.files[0])}
              />
            </div>
          </div>
          {/* line three */}
          <div className="flex gap-5 lg:flex-row flex-col">
            {/* medical report date */}
            <div className="flex-1">
              <Label
                htmlFor="medical_report_date"
                value="تاريخ التقرير الطبي:"
                className="block text-lg ms-[5px]"
              />
              <TextInput
                type="date"
                placeholder="medical report date"
                required
                value={medical_report_date}
                id="medical_report_date"
                onChange={(e) => {
                  setMedical_report_date(e.target.value);
                }}
              />
            </div>
            {/* service_provider */}
            <div className="flex-1">
              <Label
                htmlFor="service_provider"
                value="مزود الخدمة:"
                className="block mb-1 ms-[5px] text-xl"
              />
              <Dropdown
                label={service_provider}
                size="md"
                style={{
                  backgroundColor: "#0DAABC",
                  width: "100%",
                }}
                className="shadow-lg shadow-blue-gray-800 min-w-full"
              >
                <Dropdown.Item
                  value="options 1"
                  onClick={() => setService_provider("options 1")}
                  className="justify-center"
                >
                  option 1
                </Dropdown.Item>
                <Dropdown.Item
                  value="options 2"
                  onClick={() => setService_provider("options 2")}
                  className="justify-center"
                >
                  option 2
                </Dropdown.Item>
                <Dropdown.Item
                  value="options 3"
                  onClick={() => setService_provider("options 3")}
                  className="justify-center"
                >
                  option 3
                </Dropdown.Item>
              </Dropdown>
            </div>
          </div>
          {/* line four */}
          <div className="flex gap-2 justify-center items-center">
            {/* discounts */}
            <TextInput
              type="checkbox"
              placeholder="discounts"
              required
              value={discounts}
              id="discounts"
              onClick={() => {
                setDiscounts(!discounts);
              }}
              className="!cursor-pointer"
            />
            <Label
              htmlFor="discounts"
              value="استفيد من الخصومات فقط وتحمل كامل التكلفة!"
              className="block text-lg ms-[5px] !cursor-pointer"
            />
          </div>
          {/* line five */}
          <div className="flex justify-center items-center">
            <Alert
              className="mx-auto w-fit text-center shadow-md select-none"
              color="blue"
            >
              تقرير طبي جديد ومفصل لا يتجاوز تاريخه 75 يوماً مختوماً بختم
              المستشفى وختم الطبيب المعالج.
            </Alert>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-full flex justify-center items-center gap-7">
        <Button
          onClick={() => handelApplication_attachments()}
          className="min-w-28 bg-main_color"
        >
          التالي
        </Button>
        <Button
          onClick={() => setPageNumber(2)}
          className="min-w-28 bg-secondary_color"
        >
          السابق
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
