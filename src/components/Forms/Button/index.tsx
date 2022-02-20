import React from "react";
import { GestureHandlerRootView, RectButton, RectButtonProps } from "react-native-gesture-handler";

import { 
    Container,
    Title
 } from "./styles";

interface Props extends RectButtonProps{
    title: string;
    onPress: () => void;
}

export function Button({title, ...rest} : Props){
    return(
        <GestureHandlerRootView>
        <Container {...rest}>
            <Title>
                {title}
            </Title>
        </Container>
        </GestureHandlerRootView>
    );
}