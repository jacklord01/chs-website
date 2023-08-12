import AddressSearch from "@/components/common/address-search";
import { DropDownDto } from "@services/common.dto";
import consultationRequestService from "@services/consultation-request/consultation-request.service";
import { ConsultationRequestFormDto } from "@services/consultation-request/request-form.dto";
import React, { ReactNode, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AddressBuild } from "@/components/common/address-search/address-types";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import utilService from "@services/utility/util.service";

interface ConsultationFormProps {
  formSubmitted?(status: boolean): void;
}

enum EirCodeCheckStateEnum {
  "Pending" = 1,
  "Available" = 2,
  "NotAvailable" = 3,
}

const ConsultationForm: React.FC<ConsultationFormProps> = ({
  formSubmitted,
}: ConsultationFormProps) => {
  const ConsultationRequestFormValidation = Yup.object().shape({
    fkConsultationServiceId: Yup.number().min(1, "Please, select a service."),
    firstName: Yup.string().required("Please, enter your first name."),
    lastName: Yup.string().required("Please, enter your last name."),
    email: Yup.string()
      .required("Please, enter your email")
      .email("Please enter a valid email"),
    phone: Yup.string()
      .required("Please, enter your contact number.")
      .matches(/^[0-9]{8,}$/, "Phone number should be at least 8 digit."),
    county: Yup.string().required("Please, enter your county."),
    eirCode: Yup.string()
      .required("Please, enter your EIR Code.")
      .matches(
        /^([AC-FHKNPRTV-Y]{1}[0-9]{1}[0-9W]{1})\s*([0-9AC-FHKNPRTV-Y]{4})$/,
        "Please enter valid EIR Code"
      ),
    address: Yup.string(),
    city: Yup.string(),
    fkCountryId: Yup.number(),
    additionalDetail: Yup.string(),
    gotErrInAddressSearch: Yup.bool()
  });

  const initialValues: ConsultationRequestFormDto = {
    fkConsultationServiceId: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eirCode: "",
    county: "",
    address: "",
    city: "",
    fkCountryId: 0,
    additionalDetail: "",
    gotErrInAddressSearch: false,
  };

  const [servicesDll, setServiceDll] = useState<Array<DropDownDto>>([]);
  const [countryDll, setCountryDll] = useState<Array<DropDownDto>>([]);
  const [countyReadState, setCountyReadState] = useState(false);
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [eirCodeCheckState, setEirCodeCheckState] =
    useState<EirCodeCheckStateEnum>(EirCodeCheckStateEnum.Pending);
  const [formSubmitStatus, setFormSubmitSatus] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await Promise.all([
        consultationRequestService.getServices(),
        utilService.getCountries()
      ])
      if (data.length) {
        setServiceDll(data[0]);
        setCountryDll(data[1]);
      }
    };
    fetchServices();
  }, []);

  const checkServiceAvailabilityForEirCode = async (
    e?: React.ChangeEvent<HTMLInputElement>,
    value?: string
  ) => {
    const code = e?.currentTarget.value || value;
    if (code && code.length >= 3) {
      try {
        setLoadingState(true);
        const output = await consultationRequestService.checkEirCode(code);
        setLoadingState(false);
        setEirCodeCheckState(
          output
            ? EirCodeCheckStateEnum.Available
            : EirCodeCheckStateEnum.NotAvailable
        );
      } catch (error) {
        setEirCodeCheckState(EirCodeCheckStateEnum.NotAvailable);
      }
    }
  };

  const handleClick = () => {
    document.body.classList.remove("overflow-hidden");
  };

  const identifyAddressByEirCode = async (values: ConsultationRequestFormDto) => {
    try {
      const { results } = await utilService.sendReq(values.eirCode);
      if (results.length) {
        const addressResult = await utilService.indentifyAddress(results[0].identification);
        const { address, county, town } = utilService.buildAddress(addressResult.results);
        values.fkCountryId = countryDll.find(x => x.isDefault)?.id || 106;
        values.county = county;
        values.city = town;
        values.address = address;
      }
    } catch (error) {
      values.gotErrInAddressSearch = true;
    }
    return values;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ConsultationRequestFormValidation}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {

          //Checking if address is populated.
          if (!values.address.length)
            values = await identifyAddressByEirCode(values);

          await consultationRequestService.submit(values);
          // toast.success(
          //   "Thanks for your interest. We will be in contact soon.",
          //   {
          //     hideProgressBar: true,
          //   }
          // );
          // window.gtag('event', 'form_submission', { event_category: 'success' });
          setFormSubmitSatus(1);
          setSubmitting(false);
          resetForm();

          // formSubmitted && formSubmitted(true);
          // document.body.classList.remove("overflow-hidden");
        } catch (error) {
          setFormSubmitSatus(2);
          // window.gtag('event', 'form_submission', { event_category: 'failure' });
          // toast.error("Something went wrong. Please try after sometime.");
        }
      }}
    >
      {({ setFieldValue, isSubmitting, handleChange, values, isValid }) => (
        <Form id="consultation-form">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <FormField
                label="Interested In"
                name="fkConsultationServiceId"
                as="select"
                className="form-select white"
              >
                <option value={0} disabled>
                  Select a Service
                </option>
                {servicesDll.map((st) => (
                  <option key={st.id} value={st.id}>
                    {st.name}
                  </option>
                ))}
              </FormField>
            </div>
            <div className="sm:col-span-1 col-span-2">
              <FormField label="First Name" name="firstName" />
            </div>
            <div className="sm:col-span-1 col-span-2">
              <FormField label="Last Name" name="lastName" />
            </div>
            <div className="sm:col-span-1 col-span-2">
              <FormField label="Email" name="email" />
            </div>
            <div className="sm:col-span-1 col-span-2">
              <FormField label="Contact Number" name="phone" type="number" />
            </div>
            <div className="col-span-2">
              <label htmlFor="contactNumber" className="form-label text-white">
                Search Your Area
              </label>
              <div className="white-input">
                <AddressSearch
                  onItemSelect={(result: AddressBuild) => {
                    setCountyReadState(true);
                    ["eirCode", "county", "address", "town", "country"].map(
                      (key) =>
                        setFieldValue(key, result[key as keyof AddressBuild])
                    );
                    checkServiceAvailabilityForEirCode(
                      undefined,
                      result.eirCode
                    );
                  }}
                />
              </div>
            </div>
            <div className="sm:col-span-1 col-span-2">
              <FormField label="County" name="county" readOnly={countyReadState} />
            </div>
            <div className="sm:col-span-1 col-span-2">
              <FormField
                label="Eircode"
                name="eirCode"
                handleFieldBlured={checkServiceAvailabilityForEirCode}
              />
            </div>
            <div className="col-span-2">
              <FormField
                label="Additional Details (If required)"
                name="additionalDetail"
                as="textarea"
                rows={4}
              />
            </div>
            <div className="col-span-2 form-button">
              {eirCodeCheckState != EirCodeCheckStateEnum.NotAvailable && (
                <>
                  <button
                    type="submit"
                    className="btn btn-white secondary-hover mb-[12px] mt-[3px]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting || loadingState
                      ? "Please wait ..."
                      : "Submit"}
                  </button>

                  {formSubmitStatus == 1 && <div id="success-form-submission" className="bg-green-500 text-white rounded-lg p-4">
                    <h5>Thanks for your interest. We will be in contact soon.</h5>
                  </div>}

                  {formSubmitStatus == 2 && <div id="failed-form-submission" className="bg-red-500 text-white rounded-lg p-4">
                    <h5>Something went wrong. Please try after sometime.</h5>
                  </div>}

                  <p className="text-white">
                    By submitting this form you accept the{" "}
                    <Link
                      onClick={handleClick}
                      href="/privacy-policy"
                      className="hover:text-[#08a8ff] font-bold"
                    >
                      privacy policy.
                    </Link>
                  </p>
                </>
              )}
              <p className="text-white">
                {eirCodeCheckState == EirCodeCheckStateEnum.NotAvailable &&
                  "Sorry,unfortunately we do not provide any services in your area at the moment"}
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
export default ConsultationForm;

const FormField = (props: {
  label: string;
  name: string;
  type?: string;
  as?: string;
  children?: ReactNode;
  rows?: number;
  readOnly?: boolean;
  className?: string;
  handleFieldBlured?(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
  return (
    <div className="form-group">
      <label className="form-label text-white" htmlFor={props.name}>
        {props.label}
      </label>
      <Field
        className={props.className || "form-control white"}
        type={props.type || "text"}
        placeholder="Type Here"
        name={props.name}
        as={props.as}
        rows={props.rows}
        onBlur={props.handleFieldBlured}
        readOnly={!!props.readOnly}
      >
        {props.children}
      </Field>
      <div className="error text-danger">
        <ErrorMessage name={props.name} />
      </div>
    </div>
  );
};
