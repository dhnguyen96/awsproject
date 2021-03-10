import logo from './logo.svg';
import './App.css';

// Import Ionic 5 styles and components
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonButton
} from '@ionic/react';

import React, { Component } from 'react';

import './App.css';

import axios from 'axios';

class App extends Component {
  API_KEY = 'cd624a0d6ecd4775a788275902f9b89d';
  API_URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`

  state = {
    items: []
  }

  componentDidMount() {
    axios.get(this.API_URL).then(response => response.data)
    .then((data) => {
      this.setState({ items: data.articles })
      console.log(this.state.items)
     })
  }
  render() {
    return (
      <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Dustin's News Feed</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      {this.state.items.map((item) => (
                <IonCard>
                  <img src={item.urlToImage}/>
                <IonCardHeader>
                  <IonCardTitle>
                    {item.title}
                  </IonCardTitle>

                  <IonCardSubtitle>
                    {item.author}
                  </IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  <p>{item.content}</p>
                  <IonButton href={item.url}> Read</IonButton>
                </IonCardContent>
                </IonCard>
      ))}
      </IonContent>
    </IonApp>

    );
  }
}

export default App;
