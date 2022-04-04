/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screens/Account/Account";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='account-stack'
				component={Account}
				options={{ title: "Cuenta" }}
			/>
		</Stack.Navigator>
	);
}
