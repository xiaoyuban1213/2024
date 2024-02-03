<!--Alist V3建议添加的，已经默认添加了，如果你的没有建议加上-->
<script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>

<!--引入字体，全局字体使用-->
<link rel="stylesheet" href="https://npm.elemecdn.com/lxgw-wenkai-webfont@1.1.0/lxgwwenkai-regular.css" />

<!-- Font6，自定义底部使用和看板娘使用的图标和字体文件-->
<link type='text/css' rel="stylesheet" href="https://npm.elemecdn.com/font6pro@6.0.1/css/fontawesome.min.css" media='all'>
<link href="https://npm.elemecdn.com/font6pro@6.0.1/css/all.min.css" rel="stylesheet">

<style>
/* 去除通知栏 右上角 X */
.notify-render .hope-close-button{
	display: none;
}

/*白天背景图*/
.hope-ui-light{
  background-image: url("http://pic.rmb.bdstatic.com/bjh/7569b014a1abafd5481298763300ae1d.png") !important;
  background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position-x:center;
}
/*夜间背景图*/
.hope-ui-dark {
    background-image: url(http://pic.rmb.bdstatic.com/bjh/ebe942a9de49856f389c65f25a338335.png) !important;
    background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position-x:center;
}
/*主列表夜间模式透明，50%这数值是控制透明度大小的*/
.obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-iigjoxS-css{
background-color:rgb(0 0 0 / 50%) !important;
}
/*readme夜间模式透明，50%这数值是控制透明度大小的*/
.hope-c-PJLV.hope-c-PJLV-iiuDLME-css{
background-color:rgb(0 0 0 / 50%) !important;
}
/*主列表透明*/
.obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-igScBhH-css {
background-color: rgba(255, 255, 255, 0.5) !important;
}
/*readme透明*/
.hope-c-PJLV.hope-c-PJLV-ikSuVsl-css{
background-color: rgba(255, 255, 255, 0.5) !important;
}
/*顶部右上角切换按钮透明*/
.hope-c-ivMHWx-hZistB-cv.hope-icon-button{
background-color: rgba(255, 255, 255, 0.3) !important;
}
/*右下角侧边栏按钮透明*/
.hope-c-PJLV-ijgzmFG-css{
background-color: rgba(255, 255, 255, 0.5) !important;
}


/*白天模式代码块透明*/
.hope-ui-light pre{
    background-color: rgba(255, 255, 255, 0.1) !important;
}
/*夜间模式代码块透明*/
.hope-ui-dark pre {
    background-color: rgba(255, 255, 255, 0) !important;
}

/*底部CSS，.App .table这三个一起的*/
dibu {
    border-top: 0px;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0px;
    padding: 0px;
}
.App {
    min-height: 85vh;
}
.table {
    margin: auto;
}


/*去掉底部*/
.footer {
    display: none !important;
}

/*全局字体*/
*{font-family:LXGW WenKai}
*{font-weight:bold}
body {font-family: LXGW WenKai;}

/*输入栏里面跳舞的小人背景图*/
.vedit{
    background-image:url(https://cdn.jsdelivr.net/gh/anwen-anyi/imgAnwen/images/OuNiJiang.gif); 
    background-size:contain;
    background-repeat:no-repeat;
    background-position:right bottom;
    transition:all 0.25s ease-in-out 0s;
    }
    textarea#comment-textarea:focus{
    background-position-y:120px;
    transition:all 0.25s ease-in-out 0s;
}	


</style>