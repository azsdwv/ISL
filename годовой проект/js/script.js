
function countClickPlus(c = 2) {
    c++;
    if (c == 3) {
        c = 0;
    }
    return c;
}
function countClickMinus(c = 1) {
    c--;
    if (c == -1) {
        c = 2;
    }
    return c;
}
let c;
const baseText = {
    0: `<h3><span class="count">1.</span> Определение</h3>
        <p>Международное космическое право (Далее - МКП) представляет собой совокупность правовых норм, регулирующих международные отношения по исследованию и использованию космического пространства.</p>`,

    1: `<h3><span class="count">2.</span> Принципы</h3>
            <p>Основными принципами МКП являются:
                <ol>
                    <li>Свобода исследований</li>
                    <li>Запрет на национальное присвоение <span class="underlined">космических тел</span></li>
                    <li>Предотвращение потенциально вредных последствий космической деятельности</li>
                    <li>Запрет использования оружия массового уничтожения в космосе</li>
                </ol>
            </p>`,
    2: `<h3><span class="count">3.</span> Источники</h3>
            <p>Основными источниками МКП являются:
                <ol>
                    <li>Договор о принципах деятельности государств в космосе, 1967г.</li>
                    <li>Договор о запрете испытаний ядерного оружия космосе, 1963г.</li>
                    <li>Соглашение о спасении космонавтов, 1968г.</li>
                    <li>Конвенция о международной ответственности, 1972г.</li>
                    <li>Конвенция о регистрации объектов, запускаемых в космос, 1975 г.</li>
                    <li>Соглашение о сотрудничестве в исследовании космоса, 1976 г.</li>
                </ol>
            </p>`
}
$(document).ready(function () {
    $('.base__content_rigth').click(function () {
        c = countClickPlus(c)
        $('.base__content_text').html(baseText[countClickPlus(c)])

    });
    $('.base__content_left').click(function () {
        c = countClickMinus(c)
        $('.base__content_text').html(baseText[countClickMinus(c)]) 
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
    $('#top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    (function ($) {
        $(function () {
            $("ul.tabs__caption").on("click", "li:not(.active)", function () {
                $(this)
                    .addClass("active")
                    .siblings()
                    .removeClass("active")
                    .closest("div.tabs")
                    .find("div.tab_item")
                    .removeClass("active")
                    .eq($(this).index())
                    .addClass("active");
            });
        });
    })(jQuery);


});