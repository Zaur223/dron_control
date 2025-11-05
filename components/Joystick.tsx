import { AxisPad, AxisPadTouchEvent } from "@fustaro/react-native-axis-pad";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Joystick() {
  const onTouchEvent = (event: AxisPadTouchEvent) => {
    if (event.eventType === "start") {
      console.log("start x", event.ratio.x, "start y", event.ratio.y);
    } else if (event.eventType === "end") {
      console.log("end x", event.ratio.x, "end y", event.ratio.y);
    } else if (event.eventType === "pan") {
      console.log("pan x", event.ratio.x, "pan y", event.ratio.y);
    }
  };

  return (
    // Use a simple View container so the Joystick can be placed inside other layouts
    <View style={styles.joystickContainer}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AxisPad
          id={"pad-1"}
          size={250}
          padBackgroundStyle={AxisPadStyles.padBackgroundStyle}
          controlStyle={AxisPadStyles.controlStyle}
          ignoreTouchDownInPadArea={false}
          initialTouchType={"no-snap"}
          onTouchEvent={onTouchEvent}
        />
      </GestureHandlerRootView>
    </View>
  );
}

const AxisPadStyles: { [k: string]: ViewStyle } = {
  padBackgroundStyle: {
    backgroundColor: "#e8e8e8",
    borderRadius: 250 / 2,
    borderWidth: 2,
    borderColor: "#d0d0d0",
  },
  stickStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#666666",
  },
  controlStyle: {
    width: 28,
    height: 28,
    borderRadius: 50,
    backgroundColor: "#aaaaaa",
  },
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  joystickContainer: {
    width: '100%',
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
});