// author by removef
// https://removeif.github.io/
$(function () { //获取处理友链数据
    $.getJSON("../json_data/friend.json", function (data) {

        // var data0 = data[0];
        const oMain = $('.links-content').html("");

        // 随机排序过滤失效的
        let notValid = data.filter((item, a, b) => item.valid == 0);
        data = data.filter((item, a, b) => item.valid != 0).sort(function (a, b) {
            return Math.random() > .5 ? -1 : 1;
        });

        $(oMain).append("<div class='friend-title-item'><h1>FRIENDS!</h1></div>");
        
        // const oContent = $('.friend-card-content').html("");
        let content = '<div class="friend-card-content">'
        $.each(data, function (i, e) {
            const item = `
              <div class="friend-card-item">
                <a href="${e.url||'#'}">
                  <img class="ava" href="${e.url||'#'}" target="_blank" src="${e.src||'#'}"/>
                  <span class="text-desc">
                    ${e.name}
                  </span>
                </a>
              </div>
              `
              .trim()
              content+=item;
            // $(oContent).append(item);
        });
        content+='</div>'
        $(oMain).append(content)

        // 过期的
        if (notValid.length > 0) {
            $('.links-content').append("<div class='friend-title-item'><br>异常的大佬们<br><br><hr></div></div>");
            $.each(notValid, function (i, e) {
                var html = "<div class=\"friend-card-item\">";
                html += "    <img class=\"ava\" src=\"/img/links/nopic.jpg\" title=\"图片链接不可用，使用的默认图片\">";
                html +=
                    "<div class='text-desc' title=\""+e.desc+"\">    网址：<a href=\"" + e.url + "\" target=\"_blank\">" + e.name + "</a>" +
                    "    <br>访问时间：" + e.stopTime +
                    "<br>简介：" + e.desc + "</div>" +
                    "    </div>";

                $('.links-content').append(html);
            })
        }

        $('.links-content').append("</div>");
    })
});
