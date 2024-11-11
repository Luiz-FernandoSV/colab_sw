import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker } from 'react-native';
import produtoPatch from '../components/Functions/patch.js';
import Header from '../components/Header/index.js';

export default function PatchProduct({ route, navigation }) {
  const produto = route.params?.produto;

  // Estado para armazenar o campo selecionado e o novo valor
  const [campoSelecionado, setCampoSelecionado] = useState('Nome');
  const [novoValor, setNovoValor] = useState('');

  // Função para lidar com a atualização do produto
  const handleSave = () => {
    // Objeto com os dados do produto a serem atualizados
    const produtoAtualizado = {
      ID: produto?.ID, // Inclua o ID para identificar o produto a ser atualizado
      Campo: campoSelecionado, // Campo selecionado para atualização
      Valor: campoSelecionado === 'qtd' || campoSelecionado === 'Preco'
        ? parseFloat(novoValor) // Converte para número se for quantidade ou preço
        : novoValor
    };

    // Chama a função produtoPatch e navega de volta em caso de sucesso
    produtoPatch(produtoAtualizado).then((sucesso) => {
      if (sucesso) {
        navigation.goBack();
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Produto</Text>

      {/* Select para escolher o campo a ser atualizado */}
      <Text style={styles.label}>Selecione o campo a ser atualizado:</Text>
      <Picker
        selectedValue={campoSelecionado}
        onValueChange={(itemValue) => setCampoSelecionado(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Nome" value="Nome" />
        <Picker.Item label="Descrição" value="Descricao" />
        <Picker.Item label="Marca" value="Marca" />
        <Picker.Item label="Quantidade" value="qtd" />
        <Picker.Item label="Preço" value="Preco" />
        <Picker.Item label="Validade" value="Validade" />
      </Picker>

      {/* Campo de entrada para definir o novo valor */}
      <Text style={styles.label}>Novo Valor:</Text>
      <TextInput
        placeholder="Digite o novo valor"
        value={novoValor}
        onChangeText={setNovoValor}
        keyboardType={campoSelecionado === 'qtd' || campoSelecionado === 'Preco' ? 'numeric' : 'default'}
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
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});
