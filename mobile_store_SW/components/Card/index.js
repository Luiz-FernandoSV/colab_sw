import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import produtoDelete from '../Functions/delete.js'

export default function Card({ produto }) {
  const [expanded, setExpanded] = useState(false);
  const navigation = useNavigation();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleEditProduct = () => {
    navigation.navigate('EditForm', { produto });
  };

  const handlePartialEditProduct = () => {
    navigation.navigate('PatchForm', { produto });
  };

  const handleDeleteProduct = () => {
    // Função para deletar o produto
    produtoDelete(produto.ID)
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleExpand}>
      <View style={styles.header}>
        <Text style={styles.info_produto}>Produto: {produto.Nome}</Text>
        <Icon
          name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={30}
          color="black"
        />
      </View>

      {expanded && (
        <>
          <Text style={styles.info_produto2}>ID: {produto.ID || "ID Inválido"}</Text>
          <Text style={styles.info_produto2}>Descrição: {produto.Descricao || "Sem descrição"}</Text>
          <Text style={styles.info_produto2}>Marca: {produto.Marca || "Sem marca"}</Text>
          <Text style={styles.info_produto2}>Quantidade: {produto.qtd}</Text>
          <Text style={styles.info_produto2}>Preço: R$ {produto.Preco}</Text>
          <Text style={styles.info_produto2}>Validade: {produto.Validade || "Indisponível"}</Text>

          <View style={styles.actionButtons}>
            {/* Botão para abrir página completa de edição */}
            <TouchableOpacity
              style={styles.fullWidthButton}
              onPress={handleEditProduct}
            >
              <Text style={styles.buttonText}>
                <FontAwesome name="pencil" size={24} color="black" /> Editar Produto
              </Text>
            </TouchableOpacity>

            {/* Botão para abrir página de edição parcial */}
            <TouchableOpacity
              style={styles.fullWidthButton}
              onPress={handlePartialEditProduct}
            >
              <Text style={styles.buttonText}>
                <FontAwesome name="pencil-square-o" size={24} color="black" /> Editar Parcialmente
              </Text>
            </TouchableOpacity>

            {/* Botão para deletar produto */}
            <TouchableOpacity
              style={styles.fullWidthButton}
              onPress={handleDeleteProduct}
            >
              <Text style={styles.buttonText}>
                <FontAwesome name="trash" size={24} color="red" /> Remover Produto
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '95%',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info_produto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    padding: 7,
  },
  info_produto2: {
    padding: 7,
    fontSize: 16,
    color: 'black',
  },
  actionButtons: {
    marginTop: 10,
  },
  fullWidthButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
  },
});
