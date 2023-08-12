import { DropDownDto } from "@services/common.dto";
import http from "@services/http.service";
import { ConsultationRequestFormDto } from "./request-form.dto";
import http2 from "@services/http2.service";

class ConsultationRequestService {
  checkEirCode = async (code: string): Promise<boolean> => {
    const result = await http.get(
      `web/consultation/validate-routing-number?eircode=${code}`
    );
    return result.data.data;
  };

  getServices = async (): Promise<Array<DropDownDto>> => {
    const result = await http2.get(`web/consultation-request/service-dll`);
    return result.data.data;
  };

  submit = async (data: ConsultationRequestFormDto): Promise<boolean> => {
    const result = await http2.post(`web/consultation-request`, data);
    return result.data.data;
  };
}

export default new ConsultationRequestService();
