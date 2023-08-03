import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo, useCallback} from 'react';
import {ArticleList, ArticleView, ArticleViewSelector} from 'entities/Article';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {articlesPageActions, articlesPageReducer, getArticles} from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import {
    getArticlesPageError,
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {Page} from "widgets/Page/Page";
import {fetchNextArticlesPage} from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {initArticlesPage} from "../../model/services/initArticlesPage/initArticlesPage";
import {ArticlesPageFilters} from "pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from 'react-router-dom';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    let [searchParams] = useSearchParams();
    console.log(searchParams)
    const page = useSelector(getArticlesPageNum);
    const hasMore = useSelector(getArticlesPageHasMore);



    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage())
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticlesPageFilters />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                    className={cls.list}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
