let array=[
"Амплуа игроков в волейболе и их функции. Доигровщики – игроки, атакующие с края сетки. Диагональные - как правило, атакуют с задней линии. Центральные блокирующие – атакуют из третьей зоны. Связующий – игрок, определяющий варианты атаки. Либеро – основной принимающий."    ,

    "Судейская бригада на матче состоит из: Первый судья. Он выполняет свои обязанности, сидя или стоя на судейской вышке, которая расположена у одного из концов сетки. Второй судья. Находится за пределами игровой площадки около стойки, на противоположной стороне от первого судьи."
    ,
    'Международная федерация волейбола (от фр. Fédération Internationale de Volleyball, сокр. FIVB) – международная федерация, которая объединяет 220 национальных федераций. Штаб-квартира находится в швейцарском городе Лозаннаю.'
    ,
    'Европейская конфедерация волейбола (фр. Confédération Européenne de Volleyball, сокр. CEV) – структура, управляющая европейским волейболом. Объединяет в себе 55 национальных федераций.'
    ,
    'Сетка устанавливается вертикально над осью средней линии. Верхний край сетки устанавливается на высоте 2,43 м для мужчин и 2,24 м для женщин.Зона подачи — это участок шириной 9 м позади каждой лицевой линии.'
    ,
    'Партия выигрывается командой, которая первой набирает 25 очков с преимуществом минимум в 2 очка. В случае равного счета 24-24, игра продолжается до достижения преимущества в 2 очка (26-24, 27-25 и т. д.).Победителем матча является команда, которая выигрывает три партии.'
    ,
    "В 1895 году американец Уильям Морган — преподаватель физкультуры в колледже выделил игру с мячом в отдельную спортивную дисциплину. Он назвал ее «минтонет» из-за сходства с бадминтоном. Чуть позже игра получила действующее название.",

    "Самым престижным для спортсменов является участие в Олимпийских играх. Состав национальных олимпийских сборных определяется по итогам Кубка мира. Победители первенства гарантированно получают право на участие в Олимпийских играх."
]

let tip = document.querySelector('.tip');
window.onload=function(){
    if(!localStorage.getItem('disabled')){
        let radioItem;
        setTimeout(()=> {
            var fragment = document.createDocumentFragment();
            for (let i = 0; i < array.length; i++) {
                radioItem = document.createElement('i');
                radioItem.classList.add('radio-item');
                radioItem.setAttribute('name', i + 1);
                fragment.appendChild(radioItem);
            }
            document.querySelector('.radio-wrapper').appendChild(fragment);
            document.querySelector('.radio-item:first-child').classList.add('current');
            tip.innerHTML = array[0];
            document.querySelector('.window').classList.remove('close');
        },2500)
    }
}

let closer = document.querySelector('.icon-cancel');
function close(){
    document.querySelector('.window').classList.add('close');
}

closer.addEventListener('click',close);

let checkbox = document.querySelector('input[type=checkbox]');
function toStorage(){
    if (checkbox.checked)
        localStorage.setItem('disabled', true);
    else localStorage.removeItem('disabled', true);
}

checkbox.addEventListener('click',toStorage);


let leftArrow = document.querySelector('.icon-left-circled2');
leftArrow.addEventListener('click', ()=>{move('toLeft')});

let rightArrow = document.querySelector('.icon-right-circled2');
rightArrow.addEventListener('click', ()=>{move('toRight')});

let radioWrapper = document.querySelector('.radio-wrapper');
function navigate(){
    let target = event.target;
    if (target.tagName !== 'I') return;
    let current = document.querySelector('.current');
    current.classList.remove('current');
    target.classList.add('current');
    let targetIndex=target.getAttribute('name');
    tip.innerHTML=array[targetIndex-1];
}
radioWrapper.addEventListener('click', navigate);


document.addEventListener("keydown", e =>{
    if (e.keyCode === 27) close();
    if (e.keyCode === 39) move('toRight');
    if (e.keyCode === 37) move('toLeft');
    return;
});

function move(){


    let current = document.querySelector('.current');
    let currentIndex = current.getAttribute('name');
    current.classList.remove('current');
    if(arguments[0]==='toRight'){
        if (+currentIndex === array.length) currentIndex=0;
        document.querySelector(`.radio-item:nth-child(${++currentIndex})`).classList.add('current');
    }
    if(arguments[0]==='toLeft'){
        if (+currentIndex === 1) currentIndex=array.length+1;
        document.querySelector(`.radio-item:nth-child(${--currentIndex})`).classList.add('current');
    }
    tip.innerHTML=array[currentIndex-1];
}