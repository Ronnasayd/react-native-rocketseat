/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { WebView } from 'react-native-webview';


const Product = ({ navigation }) => (
    <WebView source={{ uri: navigation.state.params.product.url }} />
)
Product.navigationOption = ({ navigation }) => ({
    title: navigation.state.params.product.title,
});
export default Product;