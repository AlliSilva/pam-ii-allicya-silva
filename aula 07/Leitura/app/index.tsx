import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCytwKfh0mfB3YB0EZnCEqZ8FVclBmOfow",
  authDomain: "meuprimeirofirebase-5bb7b.firebaseapp.com",
  projectId: "meuprimeirofirebase-5bb7b",
  storageBucket: "meuprimeirofirebase-5bb7b.appspot.com",
  messagingSenderId: "640077074103",
  appId: "1:640077074103:web:715e702369be07e6cd4732"
};


firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
      />
    </View>
  );
}
