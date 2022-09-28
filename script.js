const quoteArray = ['Я обожаю когда ты улыбаешься', 'Твое чувство юмора лучшее', 'Ты очень заботливый', 'Про чувство стиля вообще молчу, мода у тебя в крови', 'С тобой хоть на край света!', 'Я тебя люблю!', 'Ты очень обаятельный', 'Ты супер-любовник', 'С тобой я всегда чувствую себя в безопасности', 'У тебя большое доброе сердце', 'Ты лучший трейдер в мире', 'Обожаю когда тебя что-то начинает интересовать и ты с головой погружаешься в эту тему', 'Ты очень вкусно готовишь!', 'Иногда поражаюсь твоему терпению в отношении меня', 'Твоя избирательность в еде сводит меня с ума', 'Ты всегда дашь вменяемый совет', 'Благодаря тебе теперь у меня в плейлисте есть Zivert и Анна Asti', 'У тебя красивые теееемно-зеленые глазки', 'Мне нравится, что ты занимаешься саморазвитием', 'Ты достоин самого лучшего в этой жизни', 'Иногда я нахожу моменты, в которых хотел бы быть похожим на тебя', 'Часто я доверяю тебе больше чем себе', 'Ты самый милый псих, из всех психов, которых я встречал', 'Завтрак в твоем исполнении - это лучшее, что можно представить', 'Обожаю когда ты так брутально на меня смотришь', 'Ты лучше  всех исполняешь песню Аллегровой - Войди в меня', 'Ты - единственный человек, чьи пуки и рыгания я готов терпеть', 'Твоя сочная жопка сводит меня с ума', 'Обожаю твои усики (если они конечно есть)', 'Обожаю запах твоего тела', 'Мне никогда не было так комфортно как с тобой', 'Я не знаю, что я такого хорошего сделал в жизни, что мне посчастливилось встретить тебя', 'У тебя великолепно получается меня передразнивать'];


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

