import ScrollSuave from "./modules/scroll-suave.js";
import Modal from "./modules/modal.js";
import iniciaAnimacaoScroll from "./modules/scroll-animacao.js";
import TabNav from "./modules/nav-tab.js";
import iniciaTooltip from "./modules/tooltip.js";
import iniciaMenuDropDown from "./modules/menu-dropdown.js";
import iniciaMenuMobile from "./modules/menu-mobile.js";
import iniciaFuncionamento from "./modules/funcionamento.js";
import iniciaFetchAnimais from "./modules/fetch-animais.js";
import iniciaFetchBitcoin from "./modules/fetch-bitcoin.js";
import Accordion from "./modules/accordion.js";

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

iniciaAnimacaoScroll();
iniciaTooltip();
iniciaMenuDropDown();
iniciaMenuMobile();
iniciaFuncionamento();
iniciaFetchAnimais();
iniciaFetchBitcoin();
