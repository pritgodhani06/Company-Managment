import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const instance = axios.create();

instance.interceptors.response.use(
  (res) => res.data,
  (error) => {
    // if (error.response.data?.inValidToken) {
    //   localStorage.clear();
    //   window.location.reload();
    // }
    throw error.response.data;
  }
);

export const REQUEST_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const REQUEST_CONTENT_TYPE = {
  JSON: "application/json",
  MULTIPART: "multipart/form-data",
};

const defaultReqDetails = {
  method: REQUEST_METHODS.GET,
  contentType: REQUEST_CONTENT_TYPE.JSON,
  body: {},
};

export const doFetch = (url, reqDetails = defaultReqDetails) => {
  const {
    method = defaultReqDetails.method,
    body = defaultReqDetails.body,
    ...otherOptions
  } = reqDetails;

  const { contentType = defaultReqDetails.contentType } =
    otherOptions ?? {};
  const options = {
    url: `${url}`,
    method,
    headers: {
      ...otherOptions?.header,
      "Content-Type": contentType,
      // "ngrok-skip-browser-warning": true
    },
  };

  // const token = localStorage.getItem("token");
  // if (token) {
  //   options.headers.Authorization = `Bearer ${token}`;
  // }

  // const token = localStorage.getItem("authToken");
  // if (token && !useAdminAuth) {
  //   options.headers.Authorization = `Bearer ${token}`;
  // }

  // const apt = localStorage.getItem("apt");
  // if (useAdminAuth) {
  //   options.headers.Authaccesstoken = `Accesstoken ${apt}`;
  // }

  // if (showToast !== undefined) {
  //   options.headers.showToast = showToast;
  // }

  // signal to cancel request
  // if (signal) {
  //   options.signal = signal;
  // }

  if (contentType && contentType.includes("json")) {
    options.data = JSON.stringify(body);
  } else {
    options.data = body;
  }

  return instance(options);
};