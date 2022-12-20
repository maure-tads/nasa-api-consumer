import http from "../http-common"

class NasaApiService {
  get(date: string) {
    return http.get("", {params: {date: date}});
  }
}

export default new NasaApiService();