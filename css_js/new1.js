<!--延迟加载-->
<!--如果要写自定义内容建议都加到这个延迟加载的范围内-->
<div id="customize" style="display: none;">
    <div>
        <br />
        <center class="dibu">
            <div style=" line-height: 20px;font-size: 9pt;font-weight: bold;">
                <span>
                    "
                    <span style="color: rgb(13, 109, 252); font-weight: bold;" id="hitokoto">
                        <a href="#" id="hitokoto_text">
                            "人生最大的遗憾,就是在最无能为力的时候遇到一个想要保护一生的人."
                        </a>
                    </span> "
                </span>
                <p style="margin-left: 10rem;font-size: 8pt;">
                    <small>
                        —— 御坂网络
                    </small>
                </p>
            </div>
				<br />
				<span>
                    本"<span style="color: rgb(13, 109, 252); font-weight: bold;"><a href="#">目录</a></span>"访问量 <span id="busuanzi_value_page_pv" style="color: rgb(13, 109, 252); font-weight: bold;"></span> 次 本站总访问量 <span id="busuanzi_value_site_pv" style="color: rgb(13, 109, 252); font-weight: bold;"></span>                次 本站总访客数 <span id="busuanzi_value_site_uv" style="color: rgb(13, 109, 252); font-weight: bold;"></span> 人
                </span>
                <br />
            </div>
        </center>
        <br />
        <br />
    </div>



    <!--一言API-->
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
<!--延迟加载范围到这里结束-->
</div>
<!--延迟加载配套使用JS-->
<script>
    let interval = setInterval(() => {
        if (document.querySelector(".footer")) {
            document.querySelector("#customize").style.display = "";
            clearInterval(interval);
        }
    }, 200);
</script>

<!-- 网页鼠标点击特效 - 核心价值观关键字 -->
<script>
    (function () {
        var a_idx = 0;
        window.onclick = function (event) {
            var a = new Array("❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤",
                "❤敬业❤", "❤诚信❤", "❤友善❤");
            var heart = document.createElement("b"); //创建b元素
            heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

            document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
            a_idx = (a_idx + 1) % a.length;
            heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

            var f = 13, // 字体大小
                x = event.clientX - f / 2 - 30, // 横坐标
                y = event.clientY - f, // 纵坐标
                c = randomColor(), // 随机颜色
                a = 1, // 透明度
                s = 0.8; // 放大缩小

            var timer = setInterval(function () { //添加定时器
                if (a <= 0) {
                    document.body.removeChild(heart);
                    clearInterval(timer);
                } else {
                    heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                        c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                        s + ");";

                    y--;
                    a -= 0.016;
                    s += 0.002;
                }
            }, 15)
        }
        // 随机颜色
        function randomColor() {
            return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
                .random() * 255)) + ")";
        }
    }());
</script>