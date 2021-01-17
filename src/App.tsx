import React from 'react';
import './App.css';
import CreatedQuestions from './CreatedQuestions/CreatedQuestions';
import Form from './Form/Form';
import Summary from './Summary/Summary';
import './Summary/Summary.tsx';

function App() {
  return (
    <div className="App">
      <div className="App-layout">
        <aside className="App-sidebar">
          <h1 className="App-logo">Q|A</h1>
          <section className="App-summary">
            <Summary />
          </section>
          <footer className="App-footer">
            Made by{' '}
            <a href="https://github.com/oshibka404">Andrey Ozornin</a>{' '}
            on 17th of January, 2020 as a test assignment for Studocu.
          </footer>
        </aside>
        <div className="App-content">
          <section className="App-questions">
            <CreatedQuestions />
          </section>
          <section className="App-form">
            <Form />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
