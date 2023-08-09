import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import {HStack} from "shared/ui/Stack";
import {ListBox} from "shared/ui/ListBox/ListBox";
import {Page} from "widgets/Page/Page";

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <Page>
            {t('Главная страница')}
            <div>sadasdasd</div>
            <HStack>
                <div>asdsadas</div>
                <ListBox
                    defaultValue={'Выберите значение'}
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        {value: '1', content: '123'},
                        {value: '12', content: '12asd3', disabled: true},
                        {value: '13', content: '12asdasd3'},
                    ]}
                />
            </HStack>
            <div>sadasdasd</div>
            <div>sadasdasd</div>
            <div>sadasdasd</div>
            <div>sadasdasd</div>
        </Page>
    );
};

export default MainPage;
