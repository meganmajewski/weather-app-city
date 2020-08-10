import React, { useState } from "react";
import { useUserContext } from "./context/UserContext";

export default function CityInput() {
  const { updateUserLocation } = useUserContext();
  const [city, setCity] = useState<string>("");
  function handleSubmit() {
    console.log("handle");
    if (city !== "") {
      updateUserLocation({ city });
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <label htmlFor="city">Enter your city</label>
      <input
        name="city"
        type="text"
        onChange={({ target: { value } }) => setCity(value)}
      />
      <br />

      <button type="submit">Get Weather</button>
    </form>
  );
}
