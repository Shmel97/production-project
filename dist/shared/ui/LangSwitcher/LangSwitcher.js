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
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
export var LangSwitcher = memo(function (_a) {
    var className = _a.className, short = _a.short;
    var _b = useTranslation(), t = _b.t, i18n = _b.i18n;
    var toggle = function () {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (_jsx(Button, __assign({ className: classNames('', {}, [className]), theme: ButtonTheme.CLEAR, onClick: toggle }, { children: t(short ? 'Короткий язык' : 'Язык') }), void 0));
});
