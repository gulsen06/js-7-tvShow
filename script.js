let yeniDizi = [];
const gosterimYeri = document.querySelector(".tvShowList");
const verileriAl = async () => {
  const res = await fetch("tv-shows.json");
  const veri = await res.json();
  yeniDizi = veri;
  ekranaBastir(yeniDizi);
  //   console.log(veri);
};

const ekranaBastir = (veri) => {
  gosterimYeri.innerHTML = "";
  veri.forEach((card) => {
    gosterimYeri.innerHTML += `
    <div class="card" style="width: 21rem;">
    <img  src="${card.show.image.medium}" alt="${card.show.name}">
      <div class="card-body ">
      <h2 class="fs-4 " >${card.show.name}</h2>
      <a href="${card.show.url}"  target="_blank" class="btn btn-primary mt-5 ">Detaylar</a>
      </div>
    </div>
    `;
  });
};

document.querySelector("input").oninput = (e) => {
  console.log(e.target.value);
  let arananGösteri = yeniDizi.filter((a) => {
    console.log(a.show.name);
    return a.show.name.toLowerCase().includes(e.target.value.toLowerCase());
  });
  ekranaBastir(arananGösteri);
};
verileriAl();
