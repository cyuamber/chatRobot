$(document).ready(function () {
    $("#robot").on("keydown", function (e) {
        e = e || window.event;
        var code = e.which || e.keyCode;
        if (code == 13) {
            $("#btn").trigger("click");
            $("#robot").val("") = "";
        }
    });

    $("#btn").click(function () {

        var text = $("#robot").val().toString();

        $.ajax({
            url: 'http://www.tuling123.com/openapi/api?key=24a8c1d25410abe212c221ed0708e18e&info=' + text,
            success: function (data) {
                $('#box').append($('<div id="ask"></div>').text(text));
                if (text === "我是新人") {
                    console.log(data, 'data')
                    $('#box').append($('<div id="answer"><a href=http://wiki.inwaimai.baidu.com/pages/viewpage.action?pageId=4544363 target="_blank">欢迎新同学啊～</a></div>'));
                    return
                } else if (text === "如何把大象装冰箱") {
                    $('#box')
                        .append($('<div id="answer">第一步：把冰箱门打开</div>'))
                        .append($('<div id="answer">第二步：把大象装进去</div>'))
                        .append($('<div id="answer">第三步：把冰箱门带上。<span>是否解决？<a href=#> 是</a><a target="_blank" href=https://baike.baidu.com/item/%E5%AE%8C%E5%85%A8%E8%87%AA%E6%9D%80%E6%89%8B%E5%86%8C/4359?fr=aladdin> 否</a></span></div>'));

                } else {
                    $('#box').append($('<div id="answer"></div>').text(data.text));
                    $('#box').append($('<div id="answer"></div>').text(data.url));
                }
            },
            error: function () {
                alert(false);
            }
        });

    });
});

var text = "";
function gunping() {
    var box1 = document.getElementById("box");
    if (text != box1.innerHTML) {
        text = box1.innerHTML;
        box1.scrollTop = box1.scrollHeight;
    }
    setTimeout("gunping()", 0);
}