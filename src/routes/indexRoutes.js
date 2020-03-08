import NewItems from "../components/NewItems.js";
import Collections from "../components/Collections.js";
import Items from "../components/Items.js";
import AdvancedSearch from "../components/AdvancedSearch.js";
import About from "../components/About.js";

let indexRoutes = [
  {
    path: "/",
    name: "Home",
    component: Items
  },
  {
    path: "/newitems",
    name: "NewItems",
    component: NewItems
  },
  {
    path: "/newitems",
    name: "NewItems",
    component: NewItems
  },
  {
    path: "/collections",
    name: "Collections",
    component: Collections
  },
  {
    path: "/advanced-search",
    name: "AdvancedSearch",
    component: AdvancedSearch
  },
  {
    path: "/items",
    name: "Items",
    component: Items
  }
]
export default indexRoutes;
