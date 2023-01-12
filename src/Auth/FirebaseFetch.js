import React, { useState, useEffect } from "react";

const firebase = require("firebase/app");
require("firebase/firestore");

function FirebaseFetch() {
  const [event, setEvent] = useState({});

  useEffect(() => {
    async function fetchData() {
      const firebaseConfig = {
        apiKey: "AIzaSyA93j-xHddJFbnAczeGY5k_5XlDoiGAPqY",
        authDomain: "university-search-81c87.firebaseapp.com",
        projectId: "university-search-81c87",
        storageBucket: "university-search-81c87.appspot.com",
        messagingSenderId: "645266288926",
        appId: "1:645266288926:web:0fdbd4cc77e42b6b65190f",
      };
    }
    fetchData();
  }, []);

  return (
    <div>
      {event && (
        <div>
          <p>Event: {event.event}</p>
          <p>University: {event.university}</p>
        </div>
      )}
    </div>
  );
}

export default FirebaseFetch;
