import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Container, Content, Form, Item, Input, Label, Header} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: 'white',
    fontSize: 20
  },
  containerStyle: {
    backgroundColor: 'lightblue'
  },
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      berat: 0,
      tinggi: 0,
      nilai: 0,
      diagnosa: ''
    };
  }

  render() {
    const {textStyle, containerStyle, viewStyle} = styles;

    var hitung = () => {
      const { berat, tinggi } = this.state;
      var hasil = berat / (tinggi * tinggi / 10000);
    
      console.log(hasil);
      this.setState({nilai: hasil});
    }

      if(this.state.nilai < 18.5)
        this.state.diagnosa = 'BB Anda kurang'
      else if(this.state.nilai >= 18.5 && hasil <= 24.9)
        this.state.diagnosa = 'BB Anda ideal'
      else if(this.state.nilai >= 25 && hasil <= 29.9 )
        this.setState({diagnosa: 'BB Anda berlebih'})
      else if(this.state.nilai >= 30 && hasil <= 39.9 )
        this.setState({diagnosa: 'BB Anda sangat berlebih'});
      else
        this.setState({diagnosa: 'Anda Obesitas'});    

    return (
      <Container style={containerStyle}>
        <Header>
          <View style={viewStyle}>
            <Text style={textStyle}>Indeks Massa Tubuh</Text>
          </View>
        </Header>
        <Content>
          <Form>
            <Grid>
              <Col>
                <Item floatingLabel>
                  <Label>Berat (kg) </Label>
                  <Input onChangeText={(berat) => this.setState({berat})} />
                </Item>
              </Col>
              <Col>
                <Item floatingLabel>
                  <Label>Tinggi (cm) </Label>
                  <Input onChangeText={(tinggi) => this.setState({tinggi})} />
                </Item>
              </Col>                          
            </Grid>
            <Text/><Text/><Text/>
            <Button title={"HITUNG IMT! "} full onPress={hitung} />
          </Form>  
          <Text>Berat Anda: {this.state.berat}</Text>
          <Text>Tinggi Anda: {this.state.tinggi} </Text>
          <Text>IMT Anda: {this.state.nilai}</Text>
          <Text>Hasil Diagnosa Anda: {this.state.diagnosa}</Text>
        </Content>
      </Container>
    );
  }
}
export default App;