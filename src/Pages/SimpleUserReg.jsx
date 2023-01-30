import SignUp from "../Components/SignUp";
import { messages } from "../Helpers/Constants";
import { toast } from "react-toastify";
export default function RegularUserReg() {
  const ButtonName = "Sign Up";
  const TitleName = "Simple user registration";
  const Category = "Simple";
  const SignUpAlert = () => {
    return toast.success(
      messages.successfullyReg,
      setTimeout(() => {
        location.pathname = "/home";
      }, 1800)
    );
  };

  return (
    <div>
      <SignUp
        ButtonName={ButtonName}
        TitleName={TitleName}
        SignUpAlert={SignUpAlert}
        Category={Category}
      ></SignUp>
    </div>
  );
}
