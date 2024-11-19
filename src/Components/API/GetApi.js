import axios from "axios";
import { useEffect, useState } from "react";
const URL = "https://fakestoreapi.com/products";
export const GetApi = () => {
  let [dataa, setDataa] = useState([]);
  let dataget = async () => {
    try {
      let res = await axios.get(URL);
      let datares = await res.data;
      setDataa(datares);
    } catch (error) {
      console.log("e", error);
    }
  };
  useEffect(() => {
    dataget();
  }, []);
  return { dataa };
};
