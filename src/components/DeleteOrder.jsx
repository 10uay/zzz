import { Label, TextInput, Button } from "@/utils/Imports";
import { useState } from "react";

export default function DeleteOrder() {
  const [orderNo, setOrderNo] = useState();
  return (
    <div className="flex gap-5 flex-col mt-20">
      {/* Username */}
      <div className="flex-1">
        <Label
          htmlFor="order-number"
          value="order number:"
          className="block mb-1 text-lg ms-[5px]"
        />
        <TextInput
          type="number"
          placeholder="username"
          value={orderNo}
          required
          id="order-number"
        />
      </div>
      <Button
        color="failure"
        onChange={(e) => setOrderNo(e.target.value)}
        className="min-w-28 "
      >
        Delete
      </Button>
    </div>
  );
}
