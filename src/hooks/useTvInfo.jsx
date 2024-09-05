import { useContext, useEffect } from "react";
import { context } from "../Contaxt/ContaxtApi";
import { Tvcard, TvCaste } from "../Api/Api";

export const useTvInfo = (paramsId) => {
  const { setGetTvInfo, getTvInfo, setCast, setLoading } = useContext(context);

  const getInfo = async (id) => {
    setLoading(true);

    try {
      const res = await Tvcard(id);
      setGetTvInfo(res?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const castApi = async (id) => {
    setLoading(true);
    try {
      const response = await TvCaste(id);
      setCast(response?.data?.cast);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch cast:", error);
    }
  };

  useEffect(() => {
    if (paramsId) {
      getInfo(paramsId);
      castApi(paramsId);
    }
  }, []);

  return getTvInfo;
};
