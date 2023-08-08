import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';
import {VStack} from "shared/ui/Stack";

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo(({ className, isLoading, comments }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <VStack gap={'16'} max className={classNames('', {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </VStack>
        );
    }

    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard isLoading={isLoading} comment={comment} />
                ))
                : <Text text={t('Комментарии отсутсвуют')} />}
        </VStack>
    );
});
