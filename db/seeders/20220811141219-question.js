'use strict';

module.exports = {
  async up (queryInterface) {
    const quiz = [
      {
        question: "Как начать цикл WHILE?",
        var1: "while (i <= 7)",
        var2: "while (i=0; i <= 7; i--)",
        var3: "while (i <= 7; i++)",
        var4: "while i = 1 to 7",
      },
      {
        question: "Какой оператор используется для присвоения значения переменной?",
        var1: "=",
        var2: "-",
        var3: "x",
        var4: "*",
      },
      {
        question: "Как найти наибольшее из двух чисел?",
        var1: "Math.max(x, y)",
        var2: "Math.ceil(x, y)",
        var3: "top(x, y)",
        var4: "ceil(x, y)",
      },
      {
        question: "Что вернет следующий код console.log(10 > 9)",
        var1: "true",
        var2: "1",
        var3: "NaN",
        var4: "false",
      },
      {
        question: "Как объявить новый date в Javascript?",
        var1: "let date = Date()",
        var2: "let date = date('now')",
        var3: "let date = new Date()",
        var4: "let date = current()",
      },
      {
        question: "Используя какой оператор можно проверить наличие свойств в объекте?",
        var1: "in",
        var2: "of",
        var3: "include",
        var4: "contain",
      },
      {
        question: "Какое имя неккоректно для объявления переменной?",
        var1: "false",
        var2: "$cost",
        var3: "_name_",
        var4: "Object",
      },
      {
        question: "Сколько операндов принимает тернарный оператор?",
        var1: "Три оператора",
        var2: "Один оператор",
        var3: "Два оператора",
        var4: "Любое количество",
      },
      {
        question: "С помощью какого оператора можно создать экземпеляр объекта имеющего конструткор?",
        var1: "new",
        var2: "class",
        var3: "create",
        var4: "constructor",
      },
      {
        question: "Какой тип данных отсутствует в JavaScript?",
        var1: "float",
        var2: "null",
        var3: "bigint",
        var4: "symbol",
      },
      {
        question: "Какой национальный вид спорта Канады?",
        var1: "Лакросс",
        var2:"Баскетбол",
        var3:"Боулинг",
        var4:"Футбол",
      },
      {
        question: "Какой боксер был известен как “The Greatest” и “The People\'s Champion”?",
        var1:"Мухаммед Али",
        var2:"Майк Тайсон",
        var3:"Флойд Мейвезер",
        var4:"Оскар Дела Хойя",
      },
      {
        question: "Сколько минут длится матч по регби?",
        var1:"Восемьдесят минут",
        var2:"Тридцать минут",
        var3:"Сто двадцать минут",
        var4:"Шестьдесят минут",
      },
      {
        question: "В какой стране были проведены первые Олимпийские игры?",
        var1:"Греция",
        var2:"Италия",
        var3:"Япония",
        var4:"Франция",
      },
      {
        question: "Сколько игроков в бейсбольной команде?",
        var1:"9 игроков",
        var2:"10 игроков",
        var3:"8 игроков",
        var4:"11 игроков",
      },
      {
        question: "Какая единственная страна принимала участие во всех чемпионатах мира по футболу?",
        var1:"Бразилия",
        var2:"Англия",
        var3:"Испания",
        var4:"Испания",
      },
      {
        question: "Олимпийские игры проводятся каждые сколько лет?",
        var1:"Четыре года",
        var2:"Шесть лет",
        var3:"Пять лет",
        var4:"Семь лет",
      },
      {
        question: "В какой вид спорта, который играют на метлах в Гарри Поттере?",
        var1:"Квиддич",
        var2:"КвадПод",
        var3:"Взрывающийся щелчок",
        var4:"Скачки на крылатых лошадях",
      },
      {
        question: "Сколько колец на олимпийском флаге?",
        var1:"Пять",
        var2:"Семь",
        var3:"Четыре",
        var4:"Шесть",
      },
      {
        question: "Каков диаметр баскетбольного кольца в сантиметрах?",
        var1:"45.72 см",
        var2:"48.26 см",
        var3:"43.18 см",
        var4:"40.64 см",
      },
      {
        question: "Что стоит между окном и дверью?",
        var1:"И",
        var2:"Кровать",
        var3:"Стол",
        var4:"Ничего",
      },
];
    await queryInterface.bulkInsert('Questions', quiz.map((qa) => ({
      ...qa,
      createdAt: new Date(),
      updatedAt: new Date(),
    })));
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Questions');
  }
};
