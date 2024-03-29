import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {memo, useCallback} from 'react';
import {ArticleDetails} from 'entities/Article';
import {useParams} from 'react-router-dom';
import {Text, TextSize} from 'shared/ui/Text/Text';
import {CommentList} from 'entities/Comment';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useDispatch, useSelector} from 'react-redux';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {AddCommentForm} from 'features/addCommentForm';
import {Page} from 'widgets/Page/Page';
import {ArticleDetailsPageHeader} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {addCommentForArticle} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {fetchCommentsByArticleId} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {getArticleCommentsIsLoading} from '../../model/selectors/comments';
import {getArticleComments} from '../../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';
import {articleDetailsPageReducer} from '../../model/slices';
import {VStack} from "shared/ui/Stack";
import {ArticleRecommendationsList} from "features/articleRecommendationsList";
import {ArticleDetailsComments} from "pages/ArticleDetailsPage/ui/ArticleDetailsComments/ArticleDetailsComments";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();


    if (!id) {
        return (
            <Page className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap={'16'} max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
