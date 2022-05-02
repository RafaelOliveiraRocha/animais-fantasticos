import ScrollSuave from "./modules/scroll-suave.js";
import iniciaAnimacaoScroll from "./modules/scroll-animacao.js";
import iniciaAccordion from "./modules/accordion.js";
import iniciaNavTab from "./modules/nav-tab.js";
import iniciaModal from "./modules/modal.js";
import iniciaTooltip from "./modules/tooltip.js";
import iniciaMenuDropDown from "./modules/menu-dropdown.js";
import iniciaMenuMobile from "./modules/menu-mobile.js";
import iniciaFuncionamento from "./modules/funcionamento.js";
import iniciaFetchAnimais from "./modules/fetch-animais.js";
import iniciaFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

iniciaAnimacaoScroll();
iniciaAccordion();
iniciaNavTab();
iniciaModal();
iniciaTooltip();
iniciaMenuDropDown();
iniciaMenuMobile();
iniciaFuncionamento();
iniciaFetchAnimais();
iniciaFetchBitcoin();
