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


export default class Edicao extends Component{

    componentDidMount(){
        console.log(this.props)
    }


    render(){

        let food = this.props.route.params.food

        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
                    <View>
                        <Text style={styles.titleText}>Nome:</Text>
                        <Text style={styles.titleText}>{food.nome}</Text>
                        <Text style={styles.titleText}>Vencimento:</Text>
                        <Text style={styles.titleText}>{food.vencimento}</Text>
                        <Text style={styles.titleText}>Quantidade:</Text>
                        <Text style={styles.titleText}>{food.quantidade}</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard}> 
                        <Text style={styles.routeText}>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard}> 
                        <Text style={styles.routeText}>Excluir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Alimentos")
                    }>
                        <Text style={styles.routeText}>Voltar</Text>
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
        color: "white",
      },
    routeCard: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
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
        marginTop:10,
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