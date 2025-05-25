describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали кнопку "войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем, что после авторизации видим текст
        cy.get('#messageHeader').should('be.visible'); //  Текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Нажали кнопку «Забыли пароль»
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввели любой логин
        cy.get('#restoreEmailButton').click(); // Нажали кнопку "Отправить код"
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяем, что получили нужный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('andrey@dolnikov.ru'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали кнопку "войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем, что получили нужный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio5'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали кнопку "войти"
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяем, что получили нужный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Проверка валидации на наличие @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без "@"
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали кнопку "войти"
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяем, что получили нужный текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин с заглавными и строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажали кнопку "войти"
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяем, что после авторизации видим текст
        cy.get('#messageHeader').should('be.visible'); //  Текст виден для пользователя
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

})


