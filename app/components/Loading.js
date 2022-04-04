/** @format */

import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading(props) {
	const { isVisible, text } = props;

	return (
		<Overlay
			isVisible={isVisible}
			windowBackgroundColor='rgba(0, 0, 0, .5)'
			overlayBackgroundColor='transparent'
			overlayStyle={styles.overlayPrimary}>
			<View style={styles.View}>
				<ActivityIndicator size='large' color='#00A680' />
				{text && <Text style={styles.text}>{text}</Text>}
			</View>
		</Overlay>
	);
}

const styles = StyleSheet.create({
	overlayPrimary: {
		height: 100,
		width: 200,
		backgroundColor: "#fff",
		borderColor: "#00A680",
		borderWidth: 2,
		borderRadius: 10,
	},
	View: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: "#00A680",
		textTransform: "uppercase",
		marginTop: 10,
	},
});
