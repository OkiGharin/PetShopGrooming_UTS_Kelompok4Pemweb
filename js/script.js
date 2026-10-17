
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const formatRupiah = (price) => "Rp " + price.toLocaleString("id-ID");


const PRODUCTS = [
  { name: "Whiskas Tuna Crunch Makanan Kucing 480 g", cat: "Food", price: 31900, image: "images/Whiskas Tuna Crunch Makanan Kucing 480 g.jpg" },
  { name: "Pedigree Beefy Bites Makanan Anjing 1,5 kg", cat: "Food", price: 78900, image: "images/Pedigree Beefy Bites Makanan Anjing 1,5 kg.webp" },
  { name: "Pedigree Beefy Gravy Makanan Anjing Basah 400 g", cat: "Food", price: 27900, image: "images/Pedigree Beefy Gravy Makanan Anjing Basah 400 g.jpg" },
  { name: "Number 1 Pasir Kucing Anti Bau 6 kg", cat: "Cat", price: 189900, image: "images/Number 1 Pasir Kucing Anti Bau 6 kg.webp" },
  { name: "Number 1 Pasir Kucing Anti Bau Jumbo 12 kg", cat: "Cat", price: 399900, image: "images/Number 1 Pasir Kucing Anti Bau Jumbo 12 kg.webp" },
  { name: "Coolpet Kitty Collar Kalung Kucing Abu-Abu", cat: "Cat", price: 43900, image: "images/Coolpet Kitty Collar Kalung Kucing Abu-Abu.jpeg" },
  { name: "Hot Chips Mainan Gigitan Anjing Merah", cat: "Dog", price: 89900, image: "images/Hot Chips Mainan Gigitan Anjing Merah.webp" },
  { name: "Peanut Butter Mainan Gigitan Anjing Biru", cat: "Dog", price: 87900, image: "images/Peanut Butter Mainan Gigitan Anjing Biru.jpg" },
  { name: "Mouthwash Mainan Gigitan Anjing Biru", cat: "Dog", price: 43900, image: "images/Mouthwash Mainan Gigitan Anjing Biru.webp" },
  { name: "Pawise Paw Bowl Tempat Makan Anjing M 550 ml", cat: "Accessories", price: 57900, image: "images/Pawise Paw Bowl Tempat Makan Anjing M 550 ml.jpg" },
  { name: "Pawise Paw Bowl Tempat Makan Anjing S 300 ml", cat: "Accessories", price: 47900, image: "images/Pawise Paw Bowl Tempat Makan Anjing S 300 ml.webp" },
  { name: "Coolpet Doggy Collar Kalung Anjing Medium Abu-Abu", cat: "Accessories", price: 52900, image: "images/Coolpet Doggy Collar Kalung Anjing Medium Abu-Abu.webp" }
];


const groomingPackages = [
  {
    id: 1,
    name: "Basic Bath",
    price: 75000,
    duration: "±45 menit",
    description: "Paket mandi dasar untuk menjaga kebersihan dan kesegaran hewan kesayanganmu.",
    facilities: [
      "Mandi dengan shampoo khusus hewan",
      "Pengeringan bulu (blow dry)",
      "Sisir bulu",
      "Semprot parfum hewan"
    ],
    pets: ["Kucing", "Anjing"],
    note: "Hewan harus dalam kondisi sehat. Harga dapat berbeda untuk hewan berukuran besar."
  },
  {
    id: 2,
    name: "Fresh & Care",
    price: 125000,
    duration: "±75 menit",
    description: "Paket perawatan menengah yang mencakup kebersihan dan kesehatan dasar hewan.",
    facilities: [
      "Semua fasilitas Basic Bath",
      "Pembersihan telinga",
      "Pemotongan kuku",
      "Penghilangan bulu kusut ringan",
      "Pembersihan area mata"
    ],
    pets: ["Kucing", "Anjing"],
    note: "Hewan harus dalam kondisi sehat. Harga dapat berbeda untuk hewan berukuran besar.",
    popular: true
  },
  {
    id: 3,
    name: "Premium Spa",
    price: 200000,
    duration: "±120 menit",
    description: "Paket lengkap dengan perawatan menyeluruh dan spa agar hewan tampil bersih, wangi, dan nyaman.",
    facilities: [
      "Semua fasilitas Fresh & Care",
      "Mandi dengan kondisioner bulu",
      "Pijat relaksasi (massage)",
      "Perawatan anti kutu dan jamur",
      "Sikat gigi dan pembersihan mulut",
      "Aksesori bandana atau pita"
    ],
    pets: ["Kucing", "Anjing"],
    note: "Hewan harus dalam kondisi sehat. Harga dapat berbeda untuk hewan berukuran besar."
  }
];


const GALLERY = [
  { src: "images/hero-kucing-anjing.jpg", alt: "Anak anjing golden retriever dan kucing berbulu oranye duduk berdampingan", big: true },
  { src: "images/grooming-kucing.jpg", alt: "Kuku kucing dipotong dengan gunting kuku khusus hewan" },
  { src: "images/grooming-anjing.jpg", alt: "Anjing dimandikan dengan shower saat grooming" },
  { src: "images/Whiskas Tuna Crunch Makanan Kucing 480 g.jpg", alt: "Makanan kucing Whiskas Tuna Crunch 480 g", contain: true },
  { src: "images/Hot Chips Mainan Gigitan Anjing Merah.webp", alt: "Mainan gigitan anjing Hot Chips warna merah", contain: true },
  { src: "images/Pawise Paw Bowl Tempat Makan Anjing M 550 ml.jpg", alt: "Tempat makan anjing Pawise Paw Bowl ukuran M", contain: true }
];


const PAW_ICON = `
<svg class="paw" viewBox="0 0 24 24" aria-hidden="true">
  <circle cx="6" cy="10" r="2.2"/><circle cx="10.5" cy="6" r="2.2"/>
  <circle cx="15.5" cy="6" r="2.2"/><circle cx="19" cy="10.5" r="2.2"/>
  <path d="M12.5 11c-3 0-5.5 3-5.5 5.5 0 1.6 1.2 2.5 2.6 2.5 1 0 1.9-.5 2.9-.5s1.9.5 2.9.5c1.4 0 2.6-.9 2.6-2.5 0-2.5-2.5-5.5-5.5-5.5z"/>
</svg>`;

const CHECK_ICON = `<svg viewBox="0 0 24 24" class="mt-0.5 h-4 w-4 flex-none text-teal" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>`;


const menuBtn = $("#menu-btn");
const mobileMenu = $("#mobile-menu");

function setMenu(open) {
  mobileMenu.classList.toggle("hidden", !open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
}

menuBtn.addEventListener("click", () => {
  setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
});
mobileMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

let lastFocused = null;

function openModal(modal) {
  lastFocused = document.activeElement;
  modal.classList.remove("hidden");
  modal.classList.add("is-open");
  document.body.classList.add("overflow-hidden");
  $("[data-close]", modal).focus();
}

function closeModal(modal) {
  modal.classList.add("hidden");
  modal.classList.remove("is-open");
  document.body.classList.remove("overflow-hidden");
  if (lastFocused) lastFocused.focus();
}

$$(".modal-overlay").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    // klik di area gelap atau tombol X menutup modal
    if (event.target === modal || event.target.closest("[data-close]")) closeModal(modal);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  $$(".modal-overlay.is-open").forEach(closeModal);
});


let category = "Semua";
let keyword = "";

function renderProducts() {

  const filtered = PRODUCTS.filter((product) => {
    const matchCategory = category === "Semua" || product.cat === category;
    const matchKeyword = product.name.toLowerCase().includes(keyword);
    return matchCategory && matchKeyword;
  });

  const container = $("#products");

  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty">Produk tidak ditemukan. Coba kata kunci atau kategori lain.</div>';
    return;
  }

  container.innerHTML = filtered.map((product) => `
    <article class="prod">
      <div class="img"><img src="${encodeURI(product.image)}" alt="${product.name}" loading="lazy"></div>
      <div class="body">
        <span class="pill">${product.cat}</span>
        <h3>${product.name}</h3>
        <div class="price">${formatRupiah(product.price)}</div>
      </div>
    </article>
  `).join("");

 
  $$("#products img").forEach((img) => {
    img.addEventListener("error", () => {
      img.parentElement.innerHTML = PAW_ICON;
    }, { once: true });
  });
}

$("#chips").addEventListener("click", (event) => {
  const button = event.target.closest(".chip");
  if (!button) return;
  $$(".chip").forEach((chip) => chip.classList.toggle("active", chip === button));
  category = button.dataset.c;
  renderProducts();
});

$("#q").addEventListener("input", (event) => {
  keyword = event.target.value.trim().toLowerCase();
  renderProducts();
});


function renderGrooming() {
  const list = $("#grooming-list");
  let html = "";

 
  for (const pkg of groomingPackages) {
    const preview = pkg.facilities.slice(0, 3);
    const rest = pkg.facilities.length - preview.length;
    const buttonClass = pkg.popular
      ? "bg-paw text-white hover:bg-paw-dark"
      : "border-2 border-teal text-teal hover:bg-mint";

    html += `
      <article class="relative flex flex-col rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg ${pkg.popular ? "ring-2 ring-paw" : ""}">
        ${pkg.popular ? '<span class="absolute right-4 top-4 rounded-full bg-peach px-3 py-1 text-xs font-bold text-paw-dark">Populer</span>' : ""}
        <h3 class="font-heading text-xl font-bold">${pkg.name}</h3>
        <p class="mt-1 text-sm text-ink/70">${pkg.duration}</p>
        <p class="mt-3 text-sm">${pkg.description}</p>
        <p class="mt-4 font-heading text-2xl font-bold text-paw">${formatRupiah(pkg.price)}</p>
        <ul class="mt-4 flex-1 space-y-2 text-sm">
          ${preview.map((item) => `<li class="flex gap-2">${CHECK_ICON}<span>${item}</span></li>`).join("")}
          ${rest > 0 ? `<li class="pl-6 text-ink/70">+ ${rest} fasilitas lainnya</li>` : ""}
        </ul>
        <button type="button" data-id="${pkg.id}"
                class="mt-6 rounded-full px-6 py-3 font-bold transition hover:-translate-y-0.5 ${buttonClass}">
          Detail
        </button>
      </article>`;
  }

  list.innerHTML = html;
}

function findPackage(id) {
  for (const pkg of groomingPackages) {
    if (pkg.id === id) return pkg;
  }
  return null;
}

const modalPaket = $("#modal-paket");
let selectedPackageId = null;

function openPackage(id) {
  const pkg = findPackage(id);
  if (!pkg) return;
  selectedPackageId = pkg.id;

  $("#mp-title").textContent = pkg.name;
  $("#mp-price").textContent = formatRupiah(pkg.price);
  $("#mp-duration").textContent = "Durasi " + pkg.duration;
  $("#mp-desc").textContent = pkg.description;
  $("#mp-pets").textContent = pkg.pets.join(" & ");
  $("#mp-note").textContent = pkg.note;
  $("#mp-facilities").innerHTML = pkg.facilities
    .map((item) => `<li class="flex gap-2">${CHECK_ICON}<span>${item}</span></li>`)
    .join("");

  openModal(modalPaket);
}

$("#grooming-list").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-id]");
  if (button) openPackage(Number(button.dataset.id));
});

// Tombol "Booking Sekarang" di modal: pilih paket otomatis lalu ke form
$("#mp-book").addEventListener("click", () => {
  $("#service").value = String(selectedPackageId);
  closeModal(modalPaket);
  $("#booking").scrollIntoView({ behavior: "smooth" });
  $("#owner").focus({ preventScroll: true });
});


const form = $("#booking-form");
const fields = {
  owner: { input: $("#owner"), error: $("#err-owner") },
  pet: { input: $("#pet"), error: $("#err-pet") },
  service: { input: $("#service"), error: $("#err-service") },
  date: { input: $("#date"), error: $("#err-date") }
};

// Isi opsi layanan dari data paket
for (const pkg of groomingPackages) {
  const option = document.createElement("option");
  option.value = String(pkg.id);
  option.textContent = `${pkg.name} – ${formatRupiah(pkg.price)}`;
  fields.service.input.appendChild(option);
}


function todayISO() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}
fields.date.input.min = todayISO();

function showError(name, message) {
  const { input, error } = fields[name];
  error.textContent = message;
  input.setAttribute("aria-invalid", message ? "true" : "false");
  if (message) input.setAttribute("aria-describedby", error.id);
  else input.removeAttribute("aria-describedby");
}


function validateField(name) {
  const value = fields[name].input.value.trim();

  if (name === "owner") {
    if (value === "") return "Nama pemilik wajib diisi.";
    if (value.length < 3) return "Nama pemilik minimal 3 huruf.";
  }
  if (name === "pet" && value === "") return "Pilih jenis hewan: kucing atau anjing.";
  if (name === "service" && value === "") return "Pilih salah satu paket grooming.";
  if (name === "date") {
    if (value === "") return "Tanggal booking wajib diisi.";
    if (value < todayISO()) return "Tanggal tidak boleh sebelum hari ini. Pilih hari ini atau setelahnya.";
  }
  return "";
}


for (const name of Object.keys(fields)) {
  const { input } = fields[name];
  const eventName = input.tagName === "SELECT" || input.type === "date" ? "change" : "input";
  input.addEventListener(eventName, () => {
    if (input.getAttribute("aria-invalid") === "true") showError(name, validateField(name));
    $("#booking-success").classList.add("hidden");
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let firstInvalid = null;
  for (const name of Object.keys(fields)) {
    const message = validateField(name);
    showError(name, message);
    if (message && !firstInvalid) firstInvalid = fields[name].input;
  }

  if (firstInvalid) {
    firstInvalid.focus();
    $("#booking-success").classList.add("hidden");
    return;
  }

  // Semua valid: tampilkan konfirmasi
  const pkg = findPackage(Number(fields.service.input.value));
  const dateText = new Date(fields.date.input.value + "T00:00:00").toLocaleDateString("id-ID", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });

  $("#booking-summary").textContent =
    `Terima kasih, ${fields.owner.input.value.trim()}. ` +
    `Booking ${pkg.name} (${formatRupiah(pkg.price)}) untuk ${fields.pet.input.value.toLowerCase()} Anda ` +
    `dijadwalkan pada ${dateText}.`;
  $("#booking-success").classList.remove("hidden");

  form.reset();
  for (const name of Object.keys(fields)) showError(name, "");
});


function renderGallery() {
  const grid = $("#gallery");
  grid.innerHTML = GALLERY.map((item, index) => `
    <div class="${item.big ? "col-span-2 aspect-[2/1] md:row-span-2 md:aspect-auto" : "aspect-square"}">
      <button type="button" class="gallery-item" data-index="${index}" aria-label="Perbesar foto: ${item.alt}">
        <img src="${encodeURI(item.src)}" alt="${item.alt}" loading="lazy" class="${item.contain ? "contain" : ""}">
      </button>
    </div>
  `).join("");
}

const modalGambar = $("#modal-gambar");

$("#gallery").addEventListener("click", (event) => {
  const button = event.target.closest("[data-index]");
  if (!button) return;
  const item = GALLERY[Number(button.dataset.index)];
  $("#mg-img").src = encodeURI(item.src);
  $("#mg-img").alt = item.alt;
  $("#mg-caption").textContent = item.alt;
  openModal(modalGambar);
});


$("#faq-list").addEventListener("click", (event) => {
  const button = event.target.closest(".faq-btn");
  if (!button) return;

  const willOpen = button.getAttribute("aria-expanded") !== "true";

  $$(".faq-btn").forEach((btn) => {
    btn.setAttribute("aria-expanded", "false");
    document.getElementById(btn.getAttribute("aria-controls")).classList.remove("open");
  });

  if (willOpen) {
    button.setAttribute("aria-expanded", "true");
    document.getElementById(button.getAttribute("aria-controls")).classList.add("open");
  }
});

renderProducts();
renderGrooming();
renderGallery();
