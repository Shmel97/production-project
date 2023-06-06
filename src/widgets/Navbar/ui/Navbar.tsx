import React, {useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './Navbar.module.scss';
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ButtonTheme} from "shared/ui/Button/Button";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t("Войти")}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet assumenda beatae corporis cum cupiditate doloremque dolores ea,
                explicabo labore laboriosam magnam natus necessitatibus nemo, nesciunt nostrum odio officia possimus quae ratione rem rerum soluta sunt tenetur vitae voluptatem.
                Ab aperiam architecto assumenda commodi deleniti eligendi eum exercitationem explicabo inventore iste itaque molestiae necessitatibus nostrum,
                quos reiciendis repellat velit, veritatis. Aspernatur at autem beatae consequuntur cum enim expedita ipsam itaque neque nesciunt, nulla porro quas quod sint tenetur,
                ut veniam? Ab aliquam amet animi aut dicta dolorum eum facere facilis illo laudantium nesciunt, nostrum provident quaerat unde voluptatem voluptatum!
            </Modal>
        </div>
    );
};
