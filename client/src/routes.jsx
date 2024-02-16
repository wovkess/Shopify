import {ShopRoute, HomeRoute} from "./utils/consts" // добавляем маршрут
import ShopPage from "./pages/shopPage" // добавляем страницу
import HomePage from "./pages/homePage";

export const publicRoutes = [
    {
        path: ShopRoute,
        Element: ShopPage
    },
    {
        path: HomeRoute,
        Element: HomePage
    },
];
