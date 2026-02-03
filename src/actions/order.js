"use server";

import connect from "@/lib/database";
import { sendEmail } from "@/lib/sendEmail";
import Order from "@/models/Order";

export const orderedMail = async (id) => {
  try {
    await connect();
    const getOrder = await Order.findById(id);
    await sendEmail({
      order: getOrder,
      email: getOrder.email,
      subject: "welcome to Car Rental",
      message: `hi there, you have booking`,
    });

    await sendEmail({
      order: getOrder,
      email: "junedmd019@gmail.com",
      subject: "welcome to Car Rental",
      message: `hi there, you have booking`,
    });
    return getOrder;
  } catch (error) {}
};
