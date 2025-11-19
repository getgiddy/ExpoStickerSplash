import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#C2F84C",
				headerStyle: {
					backgroundColor: "#25292e",
				},
				headerShadowVisible: false,
				headerTintColor: "#fff",
				tabBarStyle: {
					backgroundColor: "#25292e",
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: HomeTabBarIcon,
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
					title: "About",
					tabBarIcon: AboutTabBarIcon,
				}}
			/>
		</Tabs>
	);
}

function HomeTabBarIcon({
	focused,
	color,
}: {
	focused: boolean;
	color: string;
}) {
	return (
		<Ionicons
			name={focused ? "home-sharp" : "home-outline"}
			size={24}
			color={color}
		/>
	);
}

function AboutTabBarIcon({
	focused,
	color,
}: {
	focused: boolean;
	color: string;
}) {
	return (
		<Ionicons
			name={focused ? "information-circle" : "information-circle-outline"}
			size={24}
			color={color}
		/>
	);
}
