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
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import cls from './ArticleDetailsPage.module.scss';
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsCommentsReducer, getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddCommentForm } from "features/addCommentForm";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Page } from "widgets/Page/Page";
import { articleDetailsPageRecommendationsReducer } from "../../model/slices/articleDetailsPageRecommendationsSlice";
var reducers = {
    articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
};
var ArticleDetailsPage = function (props) {
    var className = props.className;
    var t = useTranslation('article-details').t;
    var id = useParams().id;
    var dispatch = useDispatch();
    var comments = useSelector(getArticleComments.selectAll);
    var commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    var navigate = useNavigate();
    var onBackToList = useCallback(function () {
        navigate(RoutePath.articles);
    }, [navigate]);
    var onSendComment = useCallback(function (text) {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);
    useInitialEffect(function () {
        dispatch(fetchCommentsByArticleId(id));
    });
    if (!id) {
        return (_jsx(Page, __assign({ className: classNames('', {}, [className]) }, { children: t('Статья не найдена') }), void 0));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, removeAfterUnmount: true }, { children: _jsxs(Page, __assign({ className: classNames(cls.ArticleDetailsPage, {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.OUTLINE, onClick: onBackToList }, { children: t('Назад к списку') }), void 0), _jsx(ArticleDetails, { id: id }, void 0), _jsx(Text, { className: cls.commentTitle, title: t('Комментарии') }, void 0), _jsx(AddCommentForm, { onSendComment: onSendComment }, void 0), _jsx(CommentList, { isLoading: commentsIsLoading, comments: comments }, void 0)] }), void 0) }), void 0));
};
export default memo(ArticleDetailsPage);
