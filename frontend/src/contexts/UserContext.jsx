import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [account, setAccount] = useState({
    id_plan: undefined,
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ account, setAccount }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

UserProvider.defaultProps = {
  children: null,
};
