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
      <div style={{ marginBottom: 48 }}>
        <h2>
          Bem-vinde. Estou muito feliz de anunciar minha primeira mudança {"<3"}{" "}
          Pra isso, separei uma lista de utensílios e eletrodomésticos para
          compartilhar com vocês, amigos e família, para, se quiserem, me darem
          uma forcinha nesse momento importante!
        </h2>
        <p style={{ textAlign: "left" }}>
          A lista de presentes contempla produtos desde baratinhos até valores
          mais altos. Fique a vontade para escolher o que for possível: mesmo
          que seja só um abraço e um bate-papo!
        </p>
      </div>
      <div style={{ marginBottom: 48, textAlign: "left" }}>
        <h2 style={{ textAlign: "center" }}>COMO FUNCIONA?</h2>
        <p>
          A lista abaixo tem vários produtos. Você vai escolher o item que
          deseja presentear e clicar no botão &quot;Escolhi meu Presente&quot;,
          que vai te direcionar pro meu WhatsApp. A partir dali, você escolhe a
          forma de pagamento do valor do item escolhido e voilá! Recebi meu
          presente!
        </p>
        <p>
          Só não esqueça de conferir se o presente escolhido ainda está
          disponível. Estarei atualizando o site sempre que possível!
        </p>
        <p>
          Ah! E você pode conferir os valores certinho pela minha Wishlist da
          Amazon{" "}
          <a
            target="_blank"
            href="https://www.amazon.com.br/hz/wishlist/ls/29LHKZO577R0S?ref_=wl_share"
          >
            aqui!
          </a>
        </p>
      </div>
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
