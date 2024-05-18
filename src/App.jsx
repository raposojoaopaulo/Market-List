import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from './services/firebaseConfig'; 

const db = getFirestore(app);

async function addData() {
  try {
    const docRef = await addDoc(collection(db, "nomes_da_coleção"), {
      chave: "valor",
      outra_chave: "outro_valor"
    });
    console.log("Documento escrito com ID: ", docRef.id);
  } catch (e) {
    console.error("Erro ao adicionar documento: ", e);
  }
}

function App() {

  const handleAddData = () => {
    addData(); 
  };


  return (
    <>
      <div className='home'>
        <div className="container">
          <h1>Lista de compras</h1>
          <div>
            <button onClick={handleAddData}>Adicionar Item</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

