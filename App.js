import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase:'',
      img: require('./src/biscoito.png')
    }
    
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'O aprendizado é como o horizonte: não há limites.',
      'Não há que ser forte, há que ser flexível.',
      'Limitações são fronteiras criadas apenas pela nossa mente.',
      'O cão não ladra por valentia e sim por medo.',
      'Procure acender uma vela em vez de amaldiçoar a escuridão.',
      'A palavra é prata, o silêncio é ouro.',
      'Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.',
      'Um pouco de perfume sempre fica nas mãos de quem oferece flores.',
      'O homem só envelhece quando os lamentos substituem seus sonhos.',
      'A persistência realiza o impossível'
    ];

  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return(

      <View style={styles.container} >

        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}> {this.state.textoFrase} </Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}> 
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito!</Text>
          </View>
        </TouchableOpacity>

      </View>


    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20,
    alignItems:'center',
    justifyContent: 'center' 
  },
img:{
  width: 250,
  height: 250
},
textoFrase:{
  fontSize: 20,
  color: '#dd7b22',
  margin: 20,
  fontStyle: 'italic',
  textAlign: 'center'
},
botao:{
  width: 230,
  height: 50,
  borderWidth: 2,
  borderColor: '#dd7b22',
  borderRadius: 25,
},
btnArea:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
},
btnTexto:{
  fontSize: 18,
  fontWeight: 'bold',
  color: '#dd7b22',
}
});


export default App;