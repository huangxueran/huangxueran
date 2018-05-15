
/*
            可变的因素：
                节点对象
                属性
                最终值
                速度
             */
(function(){

    var requestAnimationFrame = window.requestAnimationFrame || function (fn){return setTimeout(fn,1000/60)},
        cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout
    ;

    function Move( ele , attr , targetVal , speed ){
        //获取对应的attr的初始值
        var CSSObj = ele.currentStyle || getComputedStyle(ele);
        var startVal = parseFloat(CSSObj[attr]) || 0;

        //判断初始值和目标值谁大谁小
        var bool = targetVal > startVal;
        speed = bool?speed:-speed;

        //动画
        function m(){
            startVal += speed;
            var ifEnd = bool?startVal>=targetVal:startVal<=targetVal;
            ifEnd && (startVal = targetVal);
            ele.style[attr] = startVal + 'px';
            !ifEnd && requestAnimationFrame(m);
        }
        requestAnimationFrame(m);
    }

    window.Move = Move;
})();

