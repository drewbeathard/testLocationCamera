import * as Location from "expo-location";
import { Slot, Stack } from "expo-router";
import React, { useEffect, useState } from "react";

const Layout = () => {
  const [location, setLocation] = useState<Location.LocationObject>();

  const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log('not granted')
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(
        "got location: ",
        JSON.stringify(location.coords.latitude, null, 2)
      );
      setLocation(location);

  }

  useEffect(() => {
    // camera next is breaking even if we don't call this
    getLocation()
  }, []);

  console.log("layout top layer");
  return <Stack />;
};

export default Layout;
