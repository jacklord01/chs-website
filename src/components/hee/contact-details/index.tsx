import ContactDetailForm from "@/components/common/contact-detail-form";
import { ContactDetailInputDto } from "@services/common.dto";
import heeService, {
  _HeeContactDetailStoreKey,
  _HeeHomeDetailStoreKey,
} from "@services/hee/hee.service";
import { EncodeingUtil } from "@utils/encoading-util";
import { StoreUtil } from "@utils/store-util";
import { toast } from "react-toastify";

interface ContactDetailsProps {
  changeTab(nextStep: number): void;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  changeTab,
}: ContactDetailsProps) => {
  const processContactDetail = async (values: ContactDetailInputDto) => {
    try {
      StoreUtil.saveByKey(
        _HeeContactDetailStoreKey,
        EncodeingUtil.encodeBase64String(JSON.stringify(values))
      );
      changeTab(4);
    } catch (error) {
      toast.error("Something went wrong. Please, try again after sometime.");
    }
  };

  return (
    <div className="app-started overflow-hidden">
      <div className="container mx-auto px-[16px]">
        <h3 className="text-[#204971] pb-[16px]">You are nearly there</h3>
        <p>
          Please enter your details below and then submit your enquiry. We will
          email you a copy of the complete report.
        </p>

        <ContactDetailForm
          infoFor='hee'
          contactPrevious={() => changeTab(2)}
          onSubmitContact={processContactDetail}
        >
          <RightSideSummary />
        </ContactDetailForm>
      </div>
    </div>
  );
};

export default ContactDetails;

const RightSideSummary = () => {
  return (
    <>
      <h3 className="leading-8 !border-0 font-normal">
        Get Your FREE
        <b className="block">Home Energy Estimate Report</b> which includes
      </h3>
      <ul className="ts-list !mt-4">
        <li>
          <div className="icon">
            <svg width="12" viewBox="0 0 8 7" fill="currentColor">
              <use href="/images/sprite.svg#svg-check"></use>
            </svg>
          </div>
          Details of Estimated Costs
        </li>
        <li>
          <div className="icon">
            <svg width="12" viewBox="0 0 8 7" fill="currentColor">
              <use href="/images/sprite.svg#svg-check"></use>
            </svg>
          </div>
          Details of SEAI Grants Available
        </li>
        <li>
          <div>
            <div className="icon">
              <svg width="12" viewBox="0 0 8 7" fill="currentColor">
                <use href="/images/sprite.svg#svg-check"></use>
              </svg>
            </div>
          </div>
          Details of Additional Energy Credit Incentives
        </li>
        <li>
          <div className="icon">
            <svg width="12" viewBox="0 0 8 7" fill="currentColor">
              <use href="/images/sprite.svg#svg-check"></use>
            </svg>
          </div>
          Details of Low Cost Finance
        </li>
        <li>
          <div className="icon">
            <svg width="12" viewBox="0 0 8 7" fill="currentColor">
              <use href="/images/sprite.svg#svg-check"></use>
            </svg>
          </div>
          <b>FREE Expert Consultation</b>
        </li>
      </ul>
    </>
  );
};
