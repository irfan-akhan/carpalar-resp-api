import { object, string } from "yup";

export default object({
  name: string().required("name is required"),
  password: string().required("passwors is required"),
  email: string().email("must be an email").required("email is required"),
});
