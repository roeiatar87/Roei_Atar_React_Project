import { toast } from "react-toastify";
import { messages } from "./Constants";

export class UsersModel {
  usersInput;

  constructor(usersInputArgument) {
    this.usersInput = usersInputArgument.trim();
  }

  validateName() {
    if (this.usersInput.length < 3) {
      toast.info(messages.errorToShortInput);
      return false;
    }
    if (this.usersInput.length > 15) {
      toast.info(messages.errorToBigInput);
      return false;
    }
    return true;
  }

  validatePassword() {
    if (this.usersInput.length < 6) {
      toast.info(messages.errorToShortPass);
      return false;
    }
    if (this.usersInput.length > 8) {
      toast.info(messages.errorToBigPass);
      return false;
    }

    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,8}$/;

    if (regex.test(this.usersInput)) {
      return true;
    } else {
      toast.info(messages.errorForPassword);
      return false;
    }
  }
}
