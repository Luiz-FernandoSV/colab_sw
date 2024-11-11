// Header.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation(); // Hook para navegação

  // Função para abrir a tela de adicionar produto
  const handleAddProduct = () => {
    // A navegação vai para a tela 'ProductForm' (ou 'ProductPost' se preferir)
    navigation.navigate('ProductForm');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleAddProduct}>
        <FontAwesome name="plus" size={24} color="#fff" /> {/* Ícone de "+" */}
      </TouchableOpacity>
      <Text style={styles.title}>MOBILE STORE</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwesome name="home" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Alinhando os itens na horizontal
    alignItems: 'center', // Centralizando verticalmente
    padding: 15,
    borderBottomWidth: 1,
    backgroundColor: '#7cde5b', // Fundo verde para o cabeçalho
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1, // Isso permite que o título ocupe o espaço restante
    textAlign: 'center', // Centraliza o título
  },
});
