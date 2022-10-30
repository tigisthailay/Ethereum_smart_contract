import styled from "styled-components";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
	primary: "#ffffff",
	secondary: "#E5E7EB",
	teritary: "#1F2937",
	darkLight: "#9CA3AF",
	brand: "#214a4a",
	green: "#10B981",
	red: "#EF4444",
};

const { primary, secondary, teritary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
	flex: 1;
	padding: 25px;
	padding-top: ${StatusBarHeight + 30}px;
	background-color: ${primary};
`;

export const InnerContainer = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
`;

export const PageLogo = styled.Image`
	width: 250px;
	height: 200px;
`;

export const WelcomeContainer = styled(InnerContainer)`
	padding: 25px;
	padding-top: 10px;
	justify-content: center;
`;

export const Avatar = styled.Image`
	width: 100px;
	height: 100px;
	margin: auto;
	border-radius: 50px;
	border-width: 2px;
	border-color: ${secondary};
	margin-bottom: 10px;
	margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
	height: 50%;
	min-width: 100%;
`;

export const PageTitle = styled.Text`
	font-size: 30px;
	text-align: center;
	font-weight: bold;
	color: ${brand};
	padding: 10px;

	${(props) =>
		props.welcome &&
		`
       font-size: 35px;
    `}
`;

export const SubTitle = styled.Text`
	font-size: 18px;
	margin-bottom: 20px;
	letter-spacing: 1px;
	font-weight: bold;
	color: ${teritary};

	${(props) =>
		props.welcome &&
		`
        margin-bottom: 5px
        font-weight: normal
    `}
`;

export const StyledFormArea = styled.View`
	width: 90%;
`;

export const StyledTextInput = styled.TextInput`
	background-color: ${secondary};
	padding: 15px;
	padding-left: 55px;
	padding-right: 55px;
	border-radius: 5px;
	font-size: 16px;
	height: 60px;
	margin-vertical: 3px;
	margin-bottom: 10px;
	color: ${teritary};
`;

export const StyledInputLabel = styled.Text`
	color: ${teritary};
	font-size: 13px;
	text-align: left;
`;

export const LeftIcon = styled.View`
	left: 15px;
	top: 38px;
	position: absoulte;
	z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
	left: 250px;
	top: -57px;
	position: absoulte;
	z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
	padding: 15px;
	background-color: ${brand};
	justify-content: center;
	border-radius: 5px;
	align-items: center;
	margin-vertical: 5px;
	height: 60px;
`;

export const ButtonText = styled.Text`
	color: ${primary};
	font-size: 16px;
`;

export const MsgBox = styled.Text`
	text-align: center;
	font-size: 13px;
`;

export const Line = styled.View`
	height: 1px;
	width: 100%;
	background-color: ${darkLight};
	margin-vertical: 10px;
`;
