import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://images.tcdn.com.br/img/img_prod/460977/estatua_batman_batman_vs_superman_a_origem_da_justica_art_scale_escala_1_10_iron_studios_19861_1_20201211173301.png">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
