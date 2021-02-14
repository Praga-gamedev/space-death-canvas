import React, { useState, FormEvent } from 'react';

import { history } from '@store/initStore';

import { Paper, Input, Button, Link } from '@components';

import { registration } from '@api/registration';

import { S } from '../units';

export const RegistrationPage = () => {
    const [login, setLogin] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitRegistr = async (e: FormEvent<HTMLDivElement>) => {
        e.preventDefault();

        const testValid =
            login && firstName && secondName && email && phone && password;

        if (testValid) {
            try {
                await registration({
                    first_name: firstName,
                    second_name: secondName,
                    login,
                    email,
                    phone,
                    password,
                });

                history.push('/game');
            } catch (e) {
                console.log('Ошибка:', e);
            }
        } else {
            console.error('Введены не все данные.');
        }
    };

    return (
        <S.WrapperPage background={true}>
            <Paper
                style={{ padding: '80px' }}
                onSubmit={(e) => onSubmitRegistr(e)}
                as={'form'}
            >
                <S.PaperColumn>
                    <S.TitlePage style={{ marginBottom: '50px' }}>
                        Регистрация
                    </S.TitlePage>

                    <Input
                        label={'Логин'}
                        onChange={({ target: { value } }) => setLogin(value)}
                    />

                    <Input
                        label={'Имя'}
                        onChange={({ target: { value } }) =>
                            setFirstName(value)
                        }
                    />

                    <Input
                        label={'Фамилия'}
                        onChange={({ target: { value } }) =>
                            setSecondName(value)
                        }
                    />

                    <Input
                        type={'email'}
                        label={'E-Mail'}
                        onChange={({ target: { value } }) => setEmail(value)}
                    />

                    <Input
                        type={'tel'}
                        label={'Телефон'}
                        onChange={({ target: { value } }) => setPhone(value)}
                    />

                    <Input
                        type={'password'}
                        label={'Пароль'}
                        onChange={({ target: { value } }) => setPassword(value)}
                    />

                    <Button
                        style={{ margin: '30px auto 0 auto' }}
                        children={'Регистрация'}
                    />

                    <Link
                        style={{ marginTop: '15px' }}
                        path={'/auth'}
                        children={'Вход'}
                    />
                </S.PaperColumn>
            </Paper>
        </S.WrapperPage>
    );
};
