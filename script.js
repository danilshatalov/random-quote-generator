const quoteArray = ['Я обожаю когда ты улыбаешься', 'Твое чувство юмора лучшее', 'Ты очень заботливый', 'Про чувство стиля вообще молчу, мода у тебя в крови', 'С тобой хоть на край света!', 'Я тебя люблю!', 'Ты очень обаятельный', 'Ты супер-любовник', 'С тобой я всегда чувствую себя в безопасности', 'У тебя большое доброе сердце', 'Ты лучший трейдер в мире', 'Обожаю когда тебя что-то начинает интересовать и ты с головой погружаешься в эту тему', 'Ты очень вкусно готовишь!', 'Иногда поражаюсь твоему терпению в отношении меня', 'Твоя избирательность в еде сводит меня с ума', 'Ты всегда дашь вменяемый совет', 'Благодаря тебе теперь у меня в плейлисте есть Zivert и Анна Asti', 'У тебя красивые теееемно-зеленые глазки', 'Мне нравится, что ты занимаешься саморазвитием', 'Ты достоин самого лучшего в этой жизни', 'Иногда я нахожу моменты, в которых хотел бы быть похожим на тебя', 'Часто я доверяю тебе больше чем себе', 'Ты самый милый псих, из всех психов, которых я встречал', 'Завтрак в твоем исполнении - это лучшее, что можно представить', 'Обожаю когда ты так брутально на меня смотришь', 'Ты лучше  всех исполняешь песню Аллегровой - Войди в меня', 'Ты - единственный человек, чьи пуки и рыгания я готов терпеть', 'Твоя сочная жопка сводит меня с ума', 'Обожаю твои усики (если они конечно есть)', 'Обожаю запах твоего тела', 'Мне никогда не было так комфортно как с тобой', 'Я не знаю, что я такого хорошего сделал в жизни, что мне посчастливилось встретить тебя', 'У тебя великолепно получается меня передразнивать', 'Ты очень добрый человек!', 'Ты очень горячий (в прямом и переносном смысле)', 'Люблю проводить время вместе с тобой', 'Обожаю смотреть, когда ты хозяйничаешь по дому', 'Успокаивает то, что я всегда знаю, что могу на тебя положиться', 'Ты обояшка', 'Ты лучший!', 'Обожаю спать с тобой в обнимку', 'Из тебя бы мог получиться крутой массажист и чесальщик', 'Твоей искренности многие могли бы позавидовать', 'Мне нравится когда ты делаешь хвостик из волос', 'Я знаю, что ты можешь справиться с любой задачей, даже не разбираешься в этой теме', 'Ты знаешь как довести меня до мурашек :)', 'Мне нравится твой музыкальный вкус ', 'Небритость увеличивает твою сексуальность', 'Улыбнись! Ведь тебе это так идет', 'Тебе очень идет серьезный вид, сразу хочется заобнимать', 'Хотел придумать комплимент, но вспомнил, что ты идеальный', 'Мне кажется,ты не представляешь, как я счастлив, что у меня есть ты!', 'Не люблю быть с тобой на расстоянии', 'Вообще я не умею говорить комплименты, но после встречи с тобой это невозможно', 'Я думаю мы были бы прекрасным мужем и мужем :)', 'Иногда поражаюсь как ты генерируешь комплименты', 'Я бы откусил твой сладкий носик', 'Мечтаю о густых бровях как у тебя', 'Ты - одно из моих желаний на Новый год', 'Люблю есть ночью с тобой шоколадки', 'Мне нравятся 95% тик-токов, которые ты мне скидываешь. А это значит, что с чувством юмора у тебя все хорошо', 'Ты единственный, кто не побоялся сесть со мной в машину, когда я за рулем', 'Не помню, что я делал заказ на сайте самыйлучшийпарень.ru'];


const quoteText = document.querySelector('.main-quote');
const authorName = document.querySelector('.author .name')
const quoteBtn = document.querySelector('.new-quote');
const soundBtn = document.querySelector('.sound');
const copyBtn = document.querySelector('.copy');
const twitterBtn = document.querySelector('.twitter');

let getRandomNumb = function (arr) {
    return Math.floor(Math.random() * arr.length);
}

let randomQuote = function () {

    return quoteArray[getRandomNumb(quoteArray)];

}

function showNewQuote() {
    quoteBtn.classList.add('loading');
    quoteBtn.innerHTML = 'Комплимент загружается';

    quoteText.innerHTML = randomQuote();

    quoteBtn.innerHTML = 'Новый комплимент';

    quoteBtn.classList.remove('loading');
}

soundBtn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} говорил Шаталов Данил`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteText.innerHTML)
});

twitterBtn.addEventListener('click', () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
    window.open(tweetUrl, '_blank'); // _blank - opens the linked document in a new window or tab 
});

quoteBtn.addEventListener('click', showNewQuote);

