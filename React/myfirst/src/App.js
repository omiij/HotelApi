function Header(props) {
  return <h1>{props.name}'s Kitchen</h1>;
}
function Main(props) {
  return (
    <section>
      <p>We serve {props.adjective} food around.</p>

      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish, i) => (
          <li key={i}>{dish}</li>
        ))}
      </ul>
    </section>
  );
}
function Footer(props) {
  return <p>Copyright {props.year}</p>;
}

const dishes = ["Chicken Tandori", "Mutton", "Paya Soup", "Panner Masala"];

dishes.map((dish) => console.log(dish));

function App() {
  return (
    <div className="App">
      <Header name="Jadhav" />
      <Main adjective="Amazing" dishes={dishes} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
export default App;
