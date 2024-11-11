import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import produtoPost from '../components/Functions/post.js';
import Header from '../components/Header/index.js';

export default function PostProduct({ route, navigation }) {
  const produto = route.params?.produto;

  // Estado para armazenar os valores atualizados
  const [nome, setNome] = useState(produto?.Nome || '');
  const [descricao, setDescricao] = useState(produto?.Descricao || '');
  const [marca, setMarca] = useState(produto?.Marca || '');
  const [quantidade, setQuantidade] = useState(produto?.qtd?.toString() || '');
  const [preco, setPreco] = useState(produto?.Preco?.toString() || '');
  const [validade,setValidade] = useState(produto?.Validade || '');

  // Função para lidar com a atualização do produto
  const handleSave = () => {
    const novoProduto = {
      Nome: nome,
      Descricao: descricao,
      Marca: marca,
      qtd: parseInt(quantidade),
      Preco: parseFloat(preco),
      Validade: validade
    };

    produtoPost(novoProduto).then((sucesso) => {
      if (sucesso) {
        navigation.goBack();
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Produto</Text>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />
      <TextInput
        placeholder="Marca"
        value={marca}
        onChangeText={setMarca}
        style={styles.input}
      />
      <TextInput
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Validade - YYYY-MM-DD"
        value={validade}
        onChangeText={setValidade}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});
