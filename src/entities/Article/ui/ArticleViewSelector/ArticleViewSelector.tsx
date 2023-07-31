import {classNames} from "shared/lib/classNames/classNames";
import cls from './ArticleViewSelector.module.scss'
import {useTranslation} from 'react-i18next';
import {memo} from 'react'
import { ArticleView } from "../../model/types/article";
import ListIcon from 'shared/assets/icons/bi_list.svg'
import TiledIcon from 'shared/assets/icons/fe_tiled.svg'
import {Icon} from "shared/ui/Icon/Icon";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
]

export const ArticleViewSelector = memo(({className, view, onViewClick}: ArticleViewSelectorProps) => {
    const {t} = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
        console.log('click svg articles')
    }

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map(viewType => (
                <Button
                    key={viewType.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon Svg={viewType.icon}
                          className={classNames('', {[cls.notSelected]: viewType.view !== view})}
                    />
                </Button>
            ))}
        </div>
    );
});

