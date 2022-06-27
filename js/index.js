import boton_scroll from "./boton_scroll.js";
import cuenta_regresiva from "./cuenta_regresiva.js";
import { menuhamburgesa } from "./menu_hamburgesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { teclado, moverPelota } from "./teclado.js";
import tema_oscuro from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import detencionDispositivos from "./detencion_dispositivo.js";
import resposiveTexter from "./prueba_resposiva.js";
import networkStatus from "./detencion_red.js";
import getGeolocation from "./geolocation.js";
import searchFilter from "./filtro_busquedas.js";
import sorteoDigital from "./sorteo_digital.js";
import Slide from "./carrusul.js";
import scrollSpy from "./scroll_espia.js";
import smallVideo from "./video_inteligente.js";
import form from "./validar_form.js";
import lazyLoad from "./lazy_img.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menuhamburgesa(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  cuenta_regresiva(
    "countdown",
    "Jun 28,2022 02:15",
    "Feliz Cumpleaños Duanly Vega Alderete"
  );
  boton_scroll(".scroll-top-btn", ".hidden");
  responsiveMedia(
    "youtube",
    "(min-width:575px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc" target="_blank rel="noopener>Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/rRBjzrRihseC7x616" target="_blank rel="noopener>Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56303.30396491058!2d-15.474636713555041!3d28.117356301533793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40950e91c097d1%3A0xab36b5ac5338ba65!2sLas%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1654634745997!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  detencionDispositivos("user-device");
  resposiveTexter("responsive-tester");
  getGeolocation("geolocation");
  searchFilter(".card-filter", ".card");
  sorteoDigital("#winner-btn", ".player", "res");
  Slide(".slider-slide", ".slider-btns .prev", ".slider-btns .next");
  scrollSpy();
  smallVideo();
  form();
  lazyLoad();
});

d.addEventListener("keydown", (e) => {
  moverPelota(e, ".ball", ".stage");
});

d.addEventListener("keyup", (e) => {
  teclado(e);
});

d.addEventListener("click", (e) => {});

tema_oscuro(".dark-theme-btn", "dark-mode");
networkStatus();
