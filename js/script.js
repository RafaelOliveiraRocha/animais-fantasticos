import ScrollSuave from "./modules/scroll-suave.js";
import Modal from "./modules/modal.js";
import ScrollAnima from "./modules/scroll-anima.js";
import TabNav from "./modules/nav-tab.js";
import Tooltip from "./modules/tooltip.js";
import iniciaMenuDropDown from "./modules/menu-dropdown.js";
import iniciaMenuMobile from "./modules/menu-mobile.js";
import iniciaFuncionamento from "./modules/funcionamento.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import Accordion from "./modules/accordion.js";
import fetchAnimais from "./modules/fetch-animais.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="conteudo"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

iniciaMenuDropDown();
iniciaMenuMobile();
iniciaFuncionamento();

fetchAnimais("../../animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
