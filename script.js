const produtos = [
  {
    id: 1,
    nome: "Notebook Dell XPS 13",
    price: 7500,
    marca: "Dell",
    isDesconto: false,
  },
  {
    id: 2,
    nome: "Smartphone Samsung Galaxy S21",
    price: 3500,
    marca: "Samsung",
    isDesconto: true,
  },
  {
    id: 3,
    nome: "Smartwatch Apple Watch Series 7",
    price: 3000,
    marca: "Apple",
    isDesconto: false,
  },
  {
    id: 4,
    nome: "Fone de Ouvido Sony WH-1000XM4",
    price: 1300,
    marca: "Sony",
    isDesconto: true,
  },
  {
    id: 5,
    nome: "Carregador Rápido Anker PowerPort",
    price: 120,
    marca: "Anker",
    isDesconto: true,
  },
  {
    id: 6,
    nome: "Mouse Logitech MX Master 3",
    price: 450,
    marca: "Logitech",
    isDesconto: false,
  },
  {
    id: 7,
    nome: "Teclado Mecânico Corsair K95",
    price: 800,
    marca: "Corsair",
    isDesconto: false,
  },
  {
    id: 8,
    nome: "Monitor LG UltraWide 34'",
    price: 2500,
    marca: "LG",
    isDesconto: true,
  },
  {
    id: 9,
    nome: "SSD Externo Samsung T7",
    price: 500,
    marca: "Samsung",
    isDesconto: true,
  },
  {
    id: 10,
    nome: "Placa de Vídeo NVIDIA GeForce RTX 3080",
    price: 7500,
    marca: "NVIDIA",
    isDesconto: false,
  },
  {
    id: 11,
    nome: "Smart TV 4K Samsung",
    price: 3000,
    marca: "Samsung",
    isDesconto: true,
  },
  {
    id: 12,
    nome: "Alexa Echo Dot 4ª Geração",
    price: 350,
    marca: "Amazon",
    isDesconto: false,
  },
  {
    id: 13,
    nome: "Google Nest Hub",
    price: 500,
    marca: "Google",
    isDesconto: true,
  },
  {
    id: 14,
    nome: "Câmera de Segurança Arlo Pro 3",
    price: 2000,
    marca: "Arlo",
    isDesconto: false,
  },
  {
    id: 15,
    nome: "Hub USB-C Anker PowerExpand",
    price: 200,
    marca: "Anker",
    isDesconto: true,
  },
  {
    id: 16,
    nome: "Headset Gamer Razer Kraken",
    price: 600,
    marca: "Razer",
    isDesconto: false,
  },
  {
    id: 17,
    nome: "Router Wi-Fi Mesh TP-Link Deco",
    price: 800,
    marca: "TP-Link",
    isDesconto: true,
  },
  {
    id: 18,
    nome: "Cabo HDMI 2.1 Anker",
    price: 100,
    marca: "Anker",
    isDesconto: true,
  },
  {
    id: 19,
    nome: "Câmera Canon EOS Rebel T7",
    price: 2500,
    marca: "Canon",
    isDesconto: false,
  },
  {
    id: 20,
    nome: "Microfone USB Blue Yeti",
    price: 800,
    marca: "Blue",
    isDesconto: true,
  },
  {
    id: 21,
    nome: "Teclado Logitech G Pro X",
    price: 600,
    marca: "Logitech",
    isDesconto: false,
  },
  {
    id: 22,
    nome: "Fone de Ouvido Bose QuietComfort 35",
    price: 1200,
    marca: "Bose",
    isDesconto: true,
  },
  {
    id: 23,
    nome: "Câmera GoPro Hero 10",
    price: 3500,
    marca: "GoPro",
    isDesconto: false,
  },
  {
    id: 24,
    nome: "Câmera Instax Mini 11",
    price: 600,
    marca: "Fujifilm",
    isDesconto: true,
  },
  {
    id: 25,
    nome: "Drone DJI Mavic Air 2",
    price: 5000,
    marca: "DJI",
    isDesconto: false,
  },
  {
    id: 26,
    nome: "Laptop HP Spectre x360",
    price: 6000,
    marca: "HP",
    isDesconto: true,
  },
  {
    id: 27,
    nome: "Smartphone iPhone 13 Pro",
    price: 7000,
    marca: "Apple",
    isDesconto: false,
  },
  {
    id: 28,
    nome: "Router Wi-Fi ASUS RT-AX88U",
    price: 1000,
    marca: "ASUS",
    isDesconto: true,
  },
  {
    id: 29,
    nome: "Consola Playstation 5",
    price: 4000,
    marca: "Sony",
    isDesconto: false,
  },
  {
    id: 30,
    nome: "Xbox Series X",
    price: 4500,
    marca: "Microsoft",
    isDesconto: true,
  },
  {
    id: 31,
    nome: "Laptop Lenovo ThinkPad X1",
    price: 5000,
    marca: "Lenovo",
    isDesconto: false,
  },
  {
    id: 32,
    nome: "Monitor Dell UltraSharp 27'",
    price: 2000,
    marca: "Dell",
    isDesconto: true,
  },
  {
    id: 33,
    nome: "Tablet Apple iPad Air",
    price: 2500,
    marca: "Apple",
    isDesconto: false,
  },
  {
    id: 34,
    nome: "Adaptador Bluetooth TP-Link UB400",
    price: 50,
    marca: "TP-Link",
    isDesconto: true,
  },
  {
    id: 35,
    nome: "Laptop Acer Predator Helios",
    price: 7000,
    marca: "Acer",
    isDesconto: false,
  },
  {
    id: 36,
    nome: "Câmera 360º Ricoh Theta V",
    price: 3000,
    marca: "Ricoh",
    isDesconto: true,
  },
  {
    id: 37,
    nome: "Smartphone Google Pixel 6",
    price: 4000,
    marca: "Google",
    isDesconto: false,
  },
  {
    id: 38,
    nome: "SSD NVMe Kingston A2000",
    price: 450,
    marca: "Kingston",
    isDesconto: true,
  },
  {
    id: 39,
    nome: "Tablet Samsung Galaxy Tab S7",
    price: 3500,
    marca: "Samsung",
    isDesconto: false,
  },
  {
    id: 40,
    nome: "Cabo Lightning Anker",
    price: 80,
    marca: "Anker",
    isDesconto: true,
  },
  {
    id: 41,
    nome: "Smartphone Xiaomi Mi 11",
    price: 3500,
    marca: "Xiaomi",
    isDesconto: false,
  },
  {
    id: 42,
    nome: "Microfone Rode NT1-A",
    price: 1200,
    marca: "Rode",
    isDesconto: true,
  },
  {
    id: 43,
    nome: "Monitor Samsung Odyssey G7",
    price: 2500,
    marca: "Samsung",
    isDesconto: false,
  },
  {
    id: 44,
    nome: "Câmera de Vigilância Blink Mini",
    price: 200,
    marca: "Blink",
    isDesconto: true,
  },
  {
    id: 45,
    nome: "Laptop Microsoft Surface Pro 7",
    price: 6000,
    marca: "Microsoft",
    isDesconto: false,
  },
  {
    id: 46,
    nome: "Teclado Logitech K780",
    price: 300,
    marca: "Logitech",
    isDesconto: true,
  },
  {
    id: 47,
    nome: "Fone de Ouvido JBL Tune 700",
    price: 350,
    marca: "JBL",
    isDesconto: false,
  },
  {
    id: 48,
    nome: "Câmera Fujifilm X-T4",
    price: 6500,
    marca: "Fujifilm",
    isDesconto: true,
  },
  {
    id: 49,
    nome: "Smartphone OnePlus 9 Pro",
    price: 5000,
    marca: "OnePlus",
    isDesconto: false,
  },
  {
    id: 50,
    nome: "Carregador Solar Anker PowerPort",
    price: 300,
    marca: "Anker",
    isDesconto: true,
  },
];

function lista() {
  const lista = document.getElementById("box");

  if (lista.childElementCount > 0) {
    return alert("A lista já estar disponivel na tela para você!");
  }

  let input = document.getElementById("buscar-item").value.toLocaleUpperCase();

  const produtoFiltrado = produtos.filter(
    (item) =>
      item.nome.toLocaleUpperCase().includes(input) ||
      item.marca.toLocaleUpperCase().includes(input) ||
      item.price.toString().includes(input) ||
      (item.isDesconto === true && "desconto".includes(input))
  );

  for (let mercado of produtoFiltrado) {
    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    ul.style.background = "#333";
    ul.style.padding = "1rem";
    ul.style.borderRadius = "5px";

    let nome = document.createElement("li");
    nome.textContent = ` ${mercado.nome}`;
    nome.classList.add("box-list");
    nome.style.fontWeight = "400";
    nome.style.color = "#afafaf";
    nome.style.marginBottom = "8px";
    nome.style.textAlign = "center";

    let price = document.createElement("li");
    price.textContent = ` R$ ${mercado.price.toFixed(2)}`;
    price.style.fontWeight = "600";
    price.style.color = "#3cad69";
    price.style.marginBottom = "4px";
    price.style.textAlign = "center";

    let marca = document.createElement("li");
    marca.textContent = ` ${mercado.marca}`;
    marca.style.fontWeight = "200";
    marca.style.color = "#afafaf";
    marca.style.textAlign = "center";

    ul.append(nome, price, marca);

    lista.appendChild(ul);
  }
}
document.getElementById("buscar-item").addEventListener("input", buscar);
lista();

const desconto = () => {
  const lista = document.getElementById("box");
  lista.innerHTML = "";

  const produtosComDesconto = produtos.filter(
    (produto) => produto.isDesconto === true
  );

  for (let produto of produtosComDesconto) {
    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    ul.style.background = "#333";
    ul.style.padding = "1rem";
    ul.style.borderRadius = "5px";

    let nome = document.createElement("li");
    nome.textContent = `${produto.nome}`;
    nome.style.fontWeight = "400";
    nome.style.color = "#afafaf";
    nome.style.marginBottom = "8px";
    nome.style.textAlign = "center";

    let price = document.createElement("li");
    price.textContent = ` R$ ${produto.price.toFixed(2)}`;
    price.style.fontWeight = "600";
    price.style.color = "#3cad69";
    price.style.marginBottom = "4px";
    price.style.textAlign = "center";

    let marca = document.createElement("li");
    marca.textContent = `${produto.marca}`;
    marca.style.fontWeight = "200";
    marca.style.color = "#afafaf";
    marca.style.textAlign = "center";

    ul.append(nome, price, marca);

    lista.appendChild(ul);
  }
};

function notDesconto() {
  const lista = document.getElementById("box");
  lista.innerHTML = "";

  const produtosComDesconto = produtos.filter(
    (produto) => produto.isDesconto === false
  );

  for (let produto of produtosComDesconto) {
    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    ul.style.background = "#333";
    ul.style.padding = "1rem";
    ul.style.borderRadius = "5px";

    let nome = document.createElement("li");
    nome.textContent = ` ${produto.nome}`;
    nome.style.fontWeight = "400";
    nome.style.color = "#afafaf";
    nome.style.marginBottom = "8px";
    nome.style.textAlign = "center";

    let price = document.createElement("li");
    price.textContent = ` R$ ${produto.price.toFixed(2)}`;
    price.style.fontWeight = "600";
    price.style.color = "#3cad69";
    price.style.marginBottom = "4px";
    price.style.textAlign = "center";

    let marca = document.createElement("li");
    marca.textContent = ` ${produto.marca}`;
    marca.style.fontWeight = "200";
    marca.style.color = "#afafaf";
    marca.style.textAlign = "center";

    ul.append(nome, price, marca);

    lista.appendChild(ul);
  }
}

function buscar() {
  const lista = document.getElementById("box");
  lista.innerHTML = "";

  let input = document.getElementById("buscar-item").value.toLocaleUpperCase();
  console.log(input);

  const produtoFiltrado = produtos.filter(
    (item) =>
      item.nome.toLocaleUpperCase().includes(input) ||
      item.marca.toLocaleUpperCase().includes(input) ||
      item.price.toString().includes(input)
  );

  for (let produto of produtoFiltrado) {
    const ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    ul.style.background = "#333";
    ul.style.padding = "1rem";
    ul.style.borderRadius = "5px";

    let nome = document.createElement("li");
    nome.textContent = ` ${produto.nome}`;
    nome.style.fontWeight = "400";
    nome.style.color = "#afafaf";
    nome.style.marginBottom = "8px";
    nome.style.textAlign = "center";

    let price = document.createElement("li");
    price.textContent = `R$ ${produto.price.toFixed(2)}`;
    price.style.fontWeight = "600";
    price.style.color = "#3cad69";
    price.style.marginBottom = "4px";
    price.style.textAlign = "center";

    let marca = document.createElement("li");
    marca.textContent = ` ${produto.marca}`;
    marca.style.fontWeight = "200";
    marca.style.color = "#afafaf";
    marca.style.textAlign = "center";

    ul.append(nome, price, marca);

    lista.appendChild(ul);
  }
}
