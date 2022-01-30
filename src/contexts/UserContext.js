import React from "react";

const UserContext = React.createContext({
  userInfo: {},
  setUserInfo: (info) => {},
});

export default UserContext;