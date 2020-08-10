import React, { ReactNode } from "react";

export type Props = {
  children?: ReactNode;
};
export interface UserLocation {
  city: string;
}
export const UserContext = React.createContext({
  location: {} as UserLocation,
  updateUserLocation: (location: UserLocation) => {},
});

function UserProvider(props: Props) {
  const { children } = props;
  const [location, setLocation] = React.useState<UserLocation>(
    {} as UserLocation
  );

  async function updateUserLocation(location: UserLocation) {
    setLocation(location);
  }
  return (
    <UserContext.Provider value={{ location, updateUserLocation }}>
      {children}
    </UserContext.Provider>
  );
}
const useUserContext = () => React.useContext(UserContext);

export { UserProvider, useUserContext };
