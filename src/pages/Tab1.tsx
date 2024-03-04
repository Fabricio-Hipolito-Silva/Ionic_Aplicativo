import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab A</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab a</IonTitle> 
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tabaaaaaaaaaaaaaaaaaaaaaaa page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
