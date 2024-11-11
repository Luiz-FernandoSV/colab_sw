import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const navigation = useNavigation(); // Adicione o hook de navegação

  // Função para buscar os produtos da API
  const fetchProdutos = async () => {
    try {
      const response = await fetch('http://localhost/loja/controller/produto.php');
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error('Erro ao buscar os produtos:', error);
    }
  };

  useEffect(() => {
    fetchProdutos(); // Faz a requisição ao carregar o componente
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.containerProdutos}>
        {produtos.map((produto) => (
          <Card
            key={produto.ID}
            produto={produto}
            onEdit={() => navigation.navigate('ProductForm', { produto })} // Navega para a tela de formulário com o produto selecionado
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F5FB',
  },
  containerProdutos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
    height: 300,
  },
  btnAdicionar: {
    marginTop: 10,
    padding: 13,
    backgroundColor: '#335AFF',
    borderWidth: 1,
  },
  txt_add: {
    color: '#fff',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
