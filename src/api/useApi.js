import axios from "axios";
import { useEffect, useState } from "react";

export default function useApi(url) {
  const [emp, setEmp] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const token =
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCIsImN0eSI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1vY2tAbWFpbC5jb20iLCJuYW1laWQiOiJkMmM3Y2U5OC05OWQxLTQ3ZTMtYjkwMy1kMzMxYWQ1YWIxZTkiLCJlbWFpbCI6Im1vY2tAbWFpbC5jb20iLCJuYmYiOjE2NTUyMjk0ODUsImV4cCI6MTY1NTgzNDI4NSwiaWF0IjoxNjU1MjI5NDg1fQ.j3BPpREI10zk7R0_xSCi17x6qlWBNAX6bfSX-_AZUOVy8EgKpZzQ6S3I971iz07DQe77y8PoA_tyBtmdcgPrPw";
  useEffect(() => {
    (async function () {
      try {
        axios.defaults.headers.common = { Authorization: `bearer ${token}` };
        await axios.get(url).then((response) => {
          //console.log(response)
          setEmp(response.data);
        });
        setLoading(true);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return { emp, error, loading };
}
