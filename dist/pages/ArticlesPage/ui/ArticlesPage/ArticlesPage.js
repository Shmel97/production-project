var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { getArticlesPageError, getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum, getArticlesPageView, } from '../../model/selectors/articlesPageSelectors';
import { Page } from "widgets/Page/Page";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { ArticlesPageFilters } from "pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from 'react-router-dom';
var reducers = {
    articlesPage: articlesPageReducer,
};
var ArticlesPage = function (props) {
    var className = props.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var articles = useSelector(getArticles.selectAll);
    var isLoading = useSelector(getArticlesPageIsLoading);
    var view = useSelector(getArticlesPageView);
    var error = useSelector(getArticlesPageError);
    var searchParams = useSearchParams()[0];
    console.log(searchParams);
    var page = useSelector(getArticlesPageNum);
    var hasMore = useSelector(getArticlesPageHasMore);
    var onLoadNextPart = useCallback(function () {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(initArticlesPage(searchParams));
    });
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: false }, { children: _jsxs(Page, __assign({ onScrollEnd: onLoadNextPart, className: classNames(cls.ArticlesPage, {}, [className]) }, { children: [_jsx(ArticlesPageFilters, {}, void 0), _jsx(ArticleList, { isLoading: isLoading, view: view, articles: articles, className: cls.list }, void 0)] }), void 0) }), void 0));
};
export default memo(ArticlesPage);
