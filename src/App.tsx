import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

function createNewNote(noteItem:any){
  return <Note
  key={noteItem.key}
  title={noteItem.title}
  content={noteItem.content}
  />
}

function App() {
  return (
    <div>
      <Header />
       {notes.map(createNewNote)}
      <Footer />
    </div>
  );
}

export default App;
