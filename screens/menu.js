import React,{Component} from "react";
import { 
    View,
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
    Platform,
    StatusBar, 
    ImageBackground  
} from "react-native";

export default class Menu extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Vencimento de Alimentos</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("EscolhaTela")
                    }>
                        <Text style={styles.routeText}>ENTRAR</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "#00ffff"
    },
    titleBar: {

        marginTop: 130,
        marginBottom:100,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        textAlign: "center",
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        textAlign:"center",
        padding:10,
    },
});