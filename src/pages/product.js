import React from 'react';
import { WebView } from 'react-native-webview';

const Product = ({ navigation }) => (
    <WebView source={{ uri: navigation.state.params.product.url}} />
);

// obs: não pode ter estado
Product.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.product.title,
    headerTitleStyle: { flex: 1, textAlign: 'center'},
});

export default Product;