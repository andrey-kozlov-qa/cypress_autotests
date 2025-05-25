describe('Проверка покупки нового аватара для своего тренера', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {

         cy.visit('https://pokemonbattle.ru/');  // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[id="k_email"]').type('USER_LOGIN');  // вводим логин
         cy.get('input[id="k_password"]').type('USER_PASSWORD');  // вводим пароль
         cy.get('button[type="submit"]').click(); // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header_card_trainer').click(); // Нажимаем в шапке на аватар тренера
         cy.wait(2000);
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click();  // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();  // Нажимаем купить у свободного аватара
         cy.get('.card_number').type('4627100101654724');  // вводим номер карты
         cy.get('.card_date').type('1225');  // вводим срок действия карты
         cy.get('.card_csv').type('125');  // вводим CVV карты
         cy.get('.card_name').type('UVANOV IVAN');  // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456');  // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');  // проверяем наличие и видимость сообщения об успешной покупке
         cy.get('.style_1_base_link_blue').should('be.visible').click();  // проверяем кнопку вернуться в магазин, видимость и действие
     });
 });
