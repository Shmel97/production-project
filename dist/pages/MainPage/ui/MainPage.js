import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
var MainPage = function () {
    var t = useTranslation().t;
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var onChange = function (val) {
        setValue(val);
    };
    return (_jsx("div", { children: t('Главная страница') }, void 0));
};
export default MainPage;
