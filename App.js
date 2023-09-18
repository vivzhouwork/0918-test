import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, { useEffect, useState } from "react";
import { db, storage } from "./firebaseconfig";
import { ref } from "firebase/storage";
import { getDocs, collection } from "firebase/firestore";

export default function App() {
  const [list, setList] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const [imageUrls, setImageUrls] = useState([]);
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    // Create a reference to the "data0915" collection
    const data0915Collection = collection(db, "test-text");
   
    // Fetch documents from the collection
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(data0915Collection);

        // Initialize an empty array to store the data
        const dataList = [];

        // Loop through the documents in the query snapshot
        querySnapshot.forEach((doc) => {
          // Get the data from each document
          const data = doc.data();

          // Push the data into the dataList array
          dataList.push(data);
        });

        // Update the state with the retrieved data
        setList(dataList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);
   
  return (
    <View style={styles.container}>
     {list.map((item,index)=>(<View key={index}>
      <Text >{item.title}</Text>
      <Text >{item.text}</Text>
     </View>))}
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
