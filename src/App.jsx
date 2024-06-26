import "./App.css";
import items from "./items.json";

function App() {
  function sendToZap(e) {
    const [item, price] = e.target.textContent.split(" - ");
    const text = `Raquel, vou comprar o ${item}. Gera um pix no valor de ${price}`;
    window.open(
      `https://api.whatsapp.com/send?phone=5511955507444&text=${encodeURI(
        text
      )}`,
      "_blank"
    );
  }
  return (
    <>
      <h1>Chá da Minhoca</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "center",
        }}
      >
        {Object.entries(items).map(([key, items]) => {
          return (
            <div key={key}>
              <h2 style={{ textTransform: "capitalize" }}>{key}</h2>
              {items.map((item) => (
                <p
                  onClick={(e) => !item.comprado && sendToZap(e)}
                  key={item.nome}
                  style={{
                    ...(item.comprado && { textDecoration: "line-through" }),
                    cursor: "pointer",
                  }}
                  className="item"
                >
                  {item.nome} - {item.valor}
                </p>
              ))}
            </div>
          );
        })}
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
