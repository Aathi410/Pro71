import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {Header} from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Header 
                    backgroundColor = {'red'}
                    centerComponent = {{
                        text : 'Story Hub',
                        style : { color: 'black', fontSize: 23, fontWeight: 'bold',}
                    }}
                />
                <TextInput 
                    placeholder="Story Title "
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="Author "
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>

                <TouchableOpacity
                    style={styles.submitButton}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  title:{
    marginTop: 50,
    margin: 20,
    height: 40,
    borderWidth: 2,
  },
  author: {
    margin: 20,
    height: 40,
    borderWidth: 2,
  },
  storyText: {
    margin: 20,
    height: 250,
    borderWidth: 2,
  },
  submitButton:{
    backgroundColor: 'red',
    width: 75,
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});