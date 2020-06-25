import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity, Modal} from 'react-native';

export default props => {
    return(
        <Modal onRequestClose={props.onCancel} 
            visible={props.isVisible} 
            animationType='slide' 
            transparent={true}>
            <View style={StyleSheet.frame}>
                <View style={StyleSheet.container}>
                    <Text style={StyleSheet.title}>Selecione o Nivel</Text>
                    <TouchableOpacity style={[styles.button, styles.bgEasy]} 
                        onPress={() => props.onSelected(0.1)}>
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgNormal]} 
                        onPress={() => props.onSelected(0.2)}>
                        <Text style={styles.buttonLabel}>Normal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.bgHard]} 
                        onPress={() => props.onSelected(0.3)}>
                        <Text style={styles.buttonLabel}>Dificil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',

    },
    container: {
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    button:{
        marginTop: 10,
        padding: 5,
    },
    bgEasy:{
        backgroundColor: '#49b65d'
    },
    bgNormal:{
        backgroundColor: '#2765f7'
    },
    bgHard: {
        backgroundColor: '#f26337'
    },
    buttonLabel:{
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold',
    }

})