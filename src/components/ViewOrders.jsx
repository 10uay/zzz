import { Card } from './Card';
import { useState } from '@/utils/Imports';

export default function ViewOrders() {
  const [orderNo, setOrderNo] = useState("user");

  return (
    <div className="mt-10 my-80 ">
      <div className="flex items-center justify-center gap-7 flex-col lg:flex-row">
        <div onClick={() => setOrderNo("user")}>
          <Card content_of_card={"243856"} number={"1"} />
        </div>
        <div onClick={() => setOrderNo("employee")}>
          <Card content_of_card={"283876"} number={"2"} />
        </div>
      </div>
    </div>
  );
}
