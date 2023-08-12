import http from "@services/http.service";
import http2 from "./http2.service";

class FileUploadService {
  upload = async (file: File): Promise<Array<string>> => {
    let headers = {
      "Content-Type": "Content-Type: multipart/form-data",
    };
    const formData: FormData = new FormData();
    formData.append("fileList", file);

    const result = await http2.post("file", formData, {
      headers: headers,
    });

    return result.data.data;
  };
}

export default new FileUploadService();
