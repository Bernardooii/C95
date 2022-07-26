import React,{Component} from "react";
import { 
    View,
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity, 
    Platform,
    StatusBar, 
    ImageBackground,
    TextInput,
} from "react-native";

export default class Cadastro extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Nome do alimento</Text>
                        <TextInput style={styles.input}/>
                        <Text style={styles.titleText}>Data de vencimento</Text>
                        <TextInput style={styles.input}/>
                        <Text style={styles.titleText}>Quantidade</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <TouchableOpacity style={styles.routeCard}> 
                        <Text style={styles.routeText}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("EscolhaTela")
                    }>
                        <Text style={styles.routeText}>Voltar para a tela inicial</Text>
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
    input: {
        borderColor: "black",
        marginBottom: 30,
        marginLeft:20,
        marginRight:20,
        color: "white",
        backgroundColor:"white",
      },
    routeCard: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 30,
        borderRadius: 30,
        backgroundColor: "#00ffff"
    },
    title: {
        marginTop: 50,
        marginBottom:130,
    },
    titleText: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign:"center",
        padding:5,
    },
})