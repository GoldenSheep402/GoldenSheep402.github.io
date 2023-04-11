$(function () { 
  $.getJSON("../json_data/movie.json", function (data) {
      const Count = data.length;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


      const title = `<h1 class="center" style="text-align: center; margin-buttom:20px; font-size: 34px;
      font-weight: 900;">截止目前观影+阅读量(754部)</h1>`;
      const oMain = $('.links-content').html("");
      $(oMain).prepend(title);
      let content = '<div>'
      $.each(data, function (i, e) {
          const imgStyle = isMobile ? "display: none;" : "";
          const imgCardPadding = isMobile ? "padding-left: 0px;" : "";
          const cardHeight = isMobile ? "height: 25vh;" : "";
          const cardPostition = isMobile ? "bottom: 3vh;right: 3vh;":"";
          const item = `
          <div class="container" style="
            margin: 0;
            margin-bottom: 30px;
            padding: 0;
            ${imgCardPadding}
            box-sizing: border-box; 
            width: 100%;
            height: 50vh;
            ${cardHeight}
            background-color: #efefef;
            border-radius: 2.4vh;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
            position: relative;"
          >
      
            <div class="card" style="
              margin: 0;
              padding: 0;
              box-sizing: border-box; 
              display: flex;
              align-items: center;
              width: 100%;
              height: 50vh;
              ${cardHeight}
              padding-left: 2.5vh;
              ${imgCardPadding}
              position: absolute;
              overflow: hidden;"
            >
        
              <div class="img" style="
                margin: 0;
                padding: 0;
                box-sizing: border-box; 
                width: 30vh;
                height: 45vh;
                border-radius: 2vh;
                overflow: hidden;
                flex-shrink: 0;
                box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
                ${imgStyle}">
                <img src="${e.imgUrl}" alt="" style="margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                  width: 100%;
                  height: 100%;
                  opacity: 1;
                  transition: 0.6s;
                  ${imgStyle}" >
              </div>
          
              <div class="content" style="margin: 0;
                padding: 0;
                box-sizing: border-box;
                align-self: start;
                margin-top: 2.5vh;
                flex: 1;
                height: 100%;
                padding: 0 4vh 0 0;
                position: relative;
                left: 2.5vh;
                opacity: 1;
                transition: 0.6s;" >
          
                <div class="title" style="
                  font-size: 1.7rem;
                  font-weight: 700;
                  margin-bottom: 1vh;">
                  ${e.title}
                </div>
            
                <div class="text" style="
                  font-size: 1rem;
                  color: #555;
                  text-align: justify;
                  word-break: break-all;
                  margin-bottom: 25px;">
                  ${e.description}
                </div>
                    
                <a href="${e.details}" style="
                  padding: 0.5rem 0.6rem;
                  background-color: #000;
                  color: #fff;
                  text-decoration: none;
                  border-radius: 50px;
                  letter-spacing: 0.07rem;
                  font-weight: 600;
                  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.2);
                  float: right;
                  position: absolute;
                  bottom: 5.3vh;
                  right: 5.3vh;
                  ${cardPostition}">details
                </a>
            </div>
          </div>
        </div>
            `
            .trim()
            content+=item;
      });

      content+='</div>'
      $(oMain).append(content)

      $('.links-content').append("</div>");
  })
});
