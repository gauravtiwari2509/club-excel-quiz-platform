import { render } from "@react-email/render";
import Signup from "@/lib/email/template/Signup";

export async function getSignupTemplate(name: string) {
  return await render(<Signup name="John" />);
}
