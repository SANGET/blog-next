import axios, { AxiosInstance } from "axios";
import { getClientFingerprint } from "@/utils/get-fingerprint";

let $R: AxiosInstance | null;

export const initRequest = async (baseUrl: string) => {
  const fingerprint = await getClientFingerprint();
  if ($R) return;
  $R = axios.create({
    baseURL: baseUrl,
  });
  // if ($R) return $R;
  if ($R.defaults.headers) $R.defaults.headers.common["FP"] = fingerprint;
};

export default function req(): AxiosInstance {
  if (!$R) {
    throw new Error(`请先调用 initRequest 初始化请求对象`);
  }
  return $R;
}
