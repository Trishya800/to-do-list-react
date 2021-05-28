import Form from "./Form";


function App() {
  return (
    <main className="container">

    <section>
        <h1 className="headline">Lista zadań</h1>
    </section>

    <section className="section">

        <header className="section__header">
            <h2 className="section__title">Dodaj nowe zadanie</h2>
       </header>

        <div className="section__body">

            <Form />

        </div>

    </section>

    <section className="section">

        <header className="section__header">
            <h2 className="section__title">Lista zadań</h2>
            <div className="buttons js-buttonsTop"></div>
        </header>

        <div className="section__body">
            <ul className="section__tasks js-tasks"></ul>
            <span className="buttons js-buttonsBottom"></span>
        </div>

    </section>

</main>
  );
}

export default App;
