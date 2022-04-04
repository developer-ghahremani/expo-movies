import { FlatList, FlatListProps } from "react-native";

import React from "react";

interface Props extends FlatListProps<any> {}

const IFlatList = (props: Props) => {
  return (
    <FlatList
      keyExtractor={(item, index) => item.uuid || item._id || `${index}`}
      {...props}
    />
  );
};

export default IFlatList;
