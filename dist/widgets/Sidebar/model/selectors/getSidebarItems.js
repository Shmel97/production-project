import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticleIcon from "shared/assets/icons/article-20-20.svg";
export var getSidebarItems = createSelector(getUserAuthData, function (userData) {
    var sidebarItemsList = [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'О сайте',
        },
    ];
    if (userData) {
        sidebarItemsList.push({
            path: RoutePath.profile + userData.id,
            Icon: ProfileIcon,
            text: 'Профиль',
            authOnly: true,
        }, {
            path: RoutePath.articles,
            Icon: ArticleIcon,
            text: 'Статьи',
            authOnly: true,
        });
    }
    return sidebarItemsList;
});
