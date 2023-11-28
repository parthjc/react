import React from "react";
import axios from "axios";

export const ApiTokenDemo = () => {
  const postData = async () => {
    try {
      const data = {
        name: "eliet paper",
        email: "elietpaper@gmail.com",
        status: "active",
        gender: "male",
      };

      const res = await axios.post("https://gorest.co.in/public/v2/users", data, {
        headers: {
          Authorization: "Bearer 5ac1f420a6cdeb56dfcf80aa77dcf330096ced6bfdc758c20406e07341fd64c1",
        },
      });

      console.log("Response:", res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={() => postData()}>PostData</button>
    </div>
  );
};
