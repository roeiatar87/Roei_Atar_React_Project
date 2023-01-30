import SignUp from "../Components/SignUp";
import { messages } from "../Helpers/Constants";
import { toast } from "react-toastify";

export default function BusinessUserReg() {
  const ButtonName = "Next";
  const TitleName = "Business user registration";
  const Category = "Business";
  const SignUpAlert = () => {
    return (
      toast.success(messages.successfullystep),
      setTimeout(() => {
        // location.pathname = "/BusinessCardPage";
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
