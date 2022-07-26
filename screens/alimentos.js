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

let foods = require("../temp.json");

export default class Alimentos extends Component{
    constructor(props){
        super(props)

        this.state={
            verificado:false,
        }
    }

    componentDidMount(){
        this.verificaVencimento();
    }
    
    verificaVencimento(){
        let hoje = new Date();
        console.log(hoje)
        foods.map(f => {
            console.log(new Date(f.vencimento))
            //if(){

            //}
        })
        this.setState({
            verificado:true
        })

    }

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}>
                    <View style={styles.title}>
                        {foods.map(f => {
                            return( 
                                <View style={styles.titleKey} key={f.id}>
                                    <View>
                                        <Text style={styles.titleTextName}>{f.nome} </Text>
                                        <Text style={styles.titleText}>Vencimento:</Text>
                                        <Text style={styles.titleTextData}>{f.vencimento}</Text>
                                    </View>
                                    <View style={styles.viewButton}>
                                        <TouchableOpacity style={styles.routeCard} onPress={() =>
                                            this.props.navigation.navigate("Edicao",{food: f}) }>
                                            <Text style={styles.routeText}>Editar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })}
                       

                    </View>
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
    inputFont: {
        borderColor: "black",
        marginBottom: 30,
        marginLeft:20,
        color: "black",
        fontFamily: "Bubblegum-Sans"
      },
    routeCard: {
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 30,
        backgroundColor: "#00ffff"
    },
    title: {
        marginBottom:130,
    },
    titleKey: {
        border: "3px solid #000",
        margin: 10,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    titleText: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: "bold",
        color: "white"
    },
    titleTextName: {
        fontSize: 30,
        marginLeft: 20,
        fontWeight: "bold",
        color: "white",
    },
    titleTextData: {
        fontSize: 15,
        marginLeft: 20,
        fontWeight: "bold",
        color: "white"
    },
    viewButton: {
        alignSelf: "center",
        width: 200,
    },
    routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign:"center",
        padding:10,
    },
})