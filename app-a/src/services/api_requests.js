import axios from "axios";

const apiUrl = "http://192.168.1.39:8000/";

class ApiService {
  downloadSplunkData(share_link) {
    const req_url = apiUrl + `file_req?sp_link=${share_link}`;
    return axios.get(req_url, { responseType: "blob" });
  }
}

export default new ApiService();
