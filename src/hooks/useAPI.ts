import { useState } from "react";
import { Endpoints } from "../constants/Endpoints";

import { api } from "../services/axios";

interface IUseAPIProps {
  queryParams?: Record<string, any>;
  headers?: Record<string, any>;
  body?: Record<string, any>;
  responseType?: any;
  endpoint?: string;
  url?: string;
}

export const useAPI = () => {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [response, setResponse] = useState<any>({} as any);

  const fetchGET = ({
    endpoint,
    url,
    queryParams,
    headers,
    responseType,
  }: IUseAPIProps) => {
    setLoading(true);
    api
      .get(url ?? Endpoints[endpoint], {
        params: queryParams,
        headers,
        responseType,
      })
      .then((data) => {
        setResponse(data);
        setSuccess(true);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    fetchGET,
    success,
    loading,
    error,
    response,
  };
};
