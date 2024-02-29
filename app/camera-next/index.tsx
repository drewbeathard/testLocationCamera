import { CameraType, CameraView, useCameraPermissions } from "expo-camera/next";
import { Stack } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Page = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    console.log("waiting for camera permission, returning");
    return;
  }

  if (!permission.granted) {
    console.log("no permission for camera");
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: "center", margin: 20, fontSize: 18 }}>
          We require use of your camera...
        </Text>
        <Button title="ok" onPress={requestPermission} />
      </View>
    );
  }

  return (
    <>
    {/* <Stack screenOptions={{
      headerShown: true
    }}/> */}
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'white'}}>Old Camera view..</Text>
        </View>
      </CameraView>
    </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    width: "100%",
    height: "100%",
  },
});
