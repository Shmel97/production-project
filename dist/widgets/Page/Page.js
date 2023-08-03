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
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Page.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useRef } from 'react';
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUIScrollByPath, uiActions } from "features/UI";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
export var Page = memo(function (_a) {
    var className = _a.className, children = _a.children, onScrollEnd = _a.onScrollEnd;
    var t = useTranslation().t;
    var wrapperRef = useRef();
    var triggerRef = useRef();
    var dispatch = useAppDispatch();
    var pathname = useLocation().pathname;
    var scrollPosition = useSelector(function (state) { return getUIScrollByPath(state, pathname); });
    useInfiniteScroll({
        triggerRef: triggerRef,
        wrapperRef: wrapperRef,
        callback: onScrollEnd
    });
    useInitialEffect(function () {
        wrapperRef.current.scrollTop = scrollPosition;
    });
    var onScroll = useThrottle(function (e) {
        dispatch(uiActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);
    return (_jsxs("section", __assign({ ref: wrapperRef, className: classNames(cls.Page, {}, [className]), onScroll: onScroll }, { children: [children, onScrollEnd ? _jsx("div", { className: cls.trigger, ref: triggerRef }, void 0) : null] }), void 0));
});
