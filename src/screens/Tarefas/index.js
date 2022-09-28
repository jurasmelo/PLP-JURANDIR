import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Feather from "react-native-vector-icons/Feather";
import {widthPercentageToDP} from "../../util/normalizador";
import {useNavigation, DrawerActions} from "@react-navigation/native";

export default function Tarefas(){
    const Navigation = useNavigation()
    //StackNavigator, usado no botão de adicionar tarefa pra que quando clicado seja aberto o componente de NovaAtividade
    function NavigateToCreatActivity() {
        Navigation.navigate('CriarTarefa')
    }
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <TouchableOpacity onPress={() => Navigation.navigate('Nova Tarefa')} style={styles.addButton}>
                <Feather name={'plus'} size={widthPercentageToDP('6%')} color={'white'}/>
            </TouchableOpacity>
            <Text>Visualizar tarefas</Text>
        </View>
    );
}