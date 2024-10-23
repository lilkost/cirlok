import { useDynamicAdapt } from "./components/da.js";
import createdSliders from "./components/slider.js";
import categoryOpenInfo from "./components/categoryOpenInfo.js";
import newsFilterSlider from "./components/newsFiltersSlider.js";
import phoneMask from "./components/phoneMask.js";
import scrollPage from "./components/scrollPage.js";
import modal from "./components/modal.js";
import searchLine from "./components/searchLine.js";
import dropdown from "./components/dropdown.js";
import count from "./components/count.js";
import catalogChangePosition from "./components/catalogChangePosition.js";
import catalogInputChecked from "./components/catalogInputs.js";
import textProductResize from "./components/textProductResize.js";

useDynamicAdapt();
scrollPage();
modal();

createdSliders();
categoryOpenInfo();
newsFilterSlider();
phoneMask();

searchLine();
dropdown();

count();

catalogChangePosition();
catalogInputChecked();
textProductResize();