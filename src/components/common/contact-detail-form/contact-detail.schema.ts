import * as Yup from "yup";

const ContactDetailFormSchema = Yup.object().shape({
  firstName: Yup.string().required("Please enter your first name."),
  lastName: Yup.string().required("Please enter your last name."),
  email: Yup.string()
    .required("Please enter your email address.")
    .email("Please enter a valid email address."),
  phone: Yup.string()
    .required("Please, enter your phone number.")
    .matches(/^(?:\+353|353|0)(?:\d{1,2})(?:\s?\d){8}$/, "Phone number should start with +353/353/0 and 9 digit after that."),
  eirCode: Yup.string()
    .required("EIR Code is required.")
    .matches(
      /^([AC-FHKNPRTV-Y]{1}[0-9]{1}[0-9W]{1})\s*([0-9AC-FHKNPRTV-Y]{4})$/,
      "Please enter valid EIR Code"
    ),
  address: Yup.string().required("Address is required."),
  city: Yup.string().required("City is required."),
  county: Yup.string().required("County is required."),
  fkCountryId: Yup.number().required("Country is requied."),
  agreedPrivacyPolicy: Yup.bool(),
});

export default ContactDetailFormSchema;
