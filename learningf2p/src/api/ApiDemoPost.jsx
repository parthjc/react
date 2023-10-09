import React from "react";
import axios from "axios";

export const ApiDemoPost = () => {
  const postData = async () => {
    const data = {
      name: "ram",
      job: "development",
    };

    const res = await axios.post("https://reqres.in/api/users", data);
    console.log(res);
    if (res.status === 201) {
      alert("Data sent successfully");
    }
    console.log(res.data);
  };

  return (
    <div>
      <button onClick={() => postData()}>PostData</button>
    </div>
  );
};
