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
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleViewSelector.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleView } from "../../model/types/article";
import ListIcon from 'shared/assets/icons/bi_list.svg';
import TiledIcon from 'shared/assets/icons/fe_tiled.svg';
import { Icon } from "shared/ui/Icon/Icon";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
var viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];
export var ArticleViewSelector = memo(function (_a) {
    var className = _a.className, view = _a.view, onViewClick = _a.onViewClick;
    var t = useTranslation().t;
    var onClick = function (newView) { return function () {
        onViewClick === null || onViewClick === void 0 ? void 0 : onViewClick(newView);
        console.log('click svg articles');
    }; };
    return (_jsx("div", __assign({ className: classNames(cls.ArticleViewSelector, {}, [className]) }, { children: viewTypes.map(function (viewType) {
            var _a;
            return (_jsx(Button, __assign({ theme: ButtonTheme.CLEAR, onClick: onClick(viewType.view) }, { children: _jsx(Icon, { Svg: viewType.icon, className: classNames('', (_a = {}, _a[cls.notSelected] = viewType.view !== view, _a)) }, void 0) }), viewType.view));
        }) }), void 0));
});
