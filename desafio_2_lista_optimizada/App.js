import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function App() {

  let initialState  = [
    { id: 1, text: "Harina" },
    { id: 2, text: "Azucar" },
    { id: 3, text: "Cereales" }
  ] 
  
  const [list, setList] = useState(initialState);
  const [text, setText] = useState('');

  const addItem = () => {
    if (text == "") {
      return
    }
    let newList = [...list]
    newList.push({
      id: Math.random(),
      text: text,
    })
    setList( newList )  
    setText( "" )
  }

  const removeItem = (asd) => {
    let newList = [...list]
    let elementToDelete = newList.findIndex(el => el.id == asd)
    newList.splice(elementToDelete,1)
    setList( newList ) 
  }

  const clearList = () => {
    setList([])
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={ {uri: "https://png.pngtree.com/png-vector/20191001/ourmid/pngtree-check-list-icon-isolated-on-abstract-background-png-image_1776830.jpg"}}
      />
      <Text style={styles.title} >Listado</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Escriba aquí..."
            style = { styles.input }
            value = { text }
            onChangeText = { (value) => setText(value) }
          />
        </View>
        <Pressable style={ styles.button } onPress={ () => addItem() }>
          <Ionicons name="add-circle-outline" size={40} color="lightgreen" />
        </Pressable>
      </View>

      <FlatList
        data={ list }
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.listContainer} >
              <Text style={styles.listElement}> {item.text} </Text>
              <Pressable style={styles.listSustractItem} onPress={ () => removeItem(item.id) } >
                <Ionicons name="remove-circle-outline" size={20} style={styles.listSustractItemIcon} />
              </Pressable>
              </View>
            )
          }
      />
      <Pressable style={styles.buttonTrash} onPress={() => clearList()}>
        <Ionicons name="trash" size={40} color={'red'} />
      </Pressable>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    height: 100,
    width: 100,
    marginTop: 40
  },

  title: {
    marginTop: 20,
    fontSize: 30,
    borderBottomColor: "blue",
    borderBottomWidth: 5
  },

  listContainer: {
    display: "row",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center"
  },

  listElement: {
    fontSize: 20,
    marginVertical: 2
  },

  listSustractItem: {
    justifyContent: 'center',
    alignContent: "center"
  },

  listSustractItemIcon: {
    color: "red"
  },

  input: {
    padding: 5,
    fontSize: 18,
    width: 180,
    alignContent: "center",
    justifyContent: "center"
  },

  inputContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderColor: "blue",
    borderWidth: 1,
    alignContent: "center",
    justifyContent: "space-between"
  },

  buttonContainer: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center"
  },

  button: {
    justifyContent: 'center',
    alignContent: "center",
    color: "green"
  },

  buttonTrash: {
    color: "red",
    justifyContent: 'center',
    alignContent: "center",
    marginTop: 20,
    marginBottom: 120
  }

});