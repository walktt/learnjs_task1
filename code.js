let money, time;
money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    money: money, timeData :time,expenses:{}, optionalExpenses :{}
};

let rashod = prompt("Введите обязательную статью расходов в этом месяце");
let summ = prompt("Во сколько обойдется?");
appData.expenses[rashod] = summ;
alert("Бюджет: " + appData.money/30);
