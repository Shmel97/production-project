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
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';
export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
var Template = function (args) { return _jsx(Modal, __assign({}, args), void 0); };
export var Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet assumenda beatae corporis cum cupiditate doloremque dolores ea,\n'
        + '                explicabo labore laboriosam magnam natus necessitatibus nemo, nesciunt nostrum odio officia possimus quae ratione rem rerum soluta sunt tenetur vitae voluptatem.\n'
        + '                Ab aperiam architecto assumenda commodi deleniti eligendi eum exercitationem explicabo inventore iste itaque molestiae necessitatibus nostrum,\n'
        + '                quos reiciendis repellat velit, veritatis. Aspernatur at autem beatae consequuntur cum enim expedita ipsam itaque neque nesciunt, nulla porro quas quod sint tenetur,\n'
        + '                ut veniam? Ab aliquam amet animi aut dicta dolorum eum facere facilis illo laudantium nesciunt, nostrum provident quaerat unde voluptatem voluptatum!',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)];
export var Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet assumenda beatae corporis cum cupiditate doloremque dolores ea,\n'
        + '                explicabo labore laboriosam magnam natus necessitatibus nemo, nesciunt nostrum odio officia possimus quae ratione rem rerum soluta sunt tenetur vitae voluptatem.\n'
        + '                Ab aperiam architecto assumenda commodi deleniti eligendi eum exercitationem explicabo inventore iste itaque molestiae necessitatibus nostrum,\n'
        + '                quos reiciendis repellat velit, veritatis. Aspernatur at autem beatae consequuntur cum enim expedita ipsam itaque neque nesciunt, nulla porro quas quod sint tenetur,\n'
        + '                ut veniam? Ab aliquam amet animi aut dicta dolorum eum facere facilis illo laudantium nesciunt, nostrum provident quaerat unde voluptatem voluptatum!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
