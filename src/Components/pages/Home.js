import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
const Home = () => {
  const appContext = useContext(AppContext);
  const [isLoggedin, setIsloggedin] = appContext.value5;
  console.log(isLoggedin, "isloggges in");
  return (
    <>
      {isLoggedin.active ? (
        <div
          style={{
            margin: "20px auto",
            backgroundColor: "#8D3DAF",
            maxWidth: "900px",
            padding: "20px",
            color: "#fff",
            borderRadius: "10px",
            fontFamily: "Poppins",
          }}
        >
          <h1> Welcome back {isLoggedin.active ? isLoggedin.name : ""}</h1>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
