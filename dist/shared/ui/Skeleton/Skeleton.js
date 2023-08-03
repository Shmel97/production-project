import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
export var Skeleton = function (props) {
    var className = props.className, height = props.height, width = props.width, borderRadius = props.borderRadius;
    var styles = {
        height: height,
        width: width,
        borderRadius: borderRadius,
    };
    return (_jsx("div", { className: classNames(cls.Skeleton, {}, [className]), style: styles }, void 0));
};
