import { Image, ImageProps, StyleSheet } from "react-native";

import React from "react";

interface Props extends ImageProps {}

const IImage = (props: Props) => <Image {...props} />;

export default IImage;
