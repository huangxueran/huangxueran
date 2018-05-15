
/*
@param
    ele -- object 节点对象

@return
*/

/*(function(){
    //requestAnimationFrame的兼容
    var requestAnimationFrame = window.requestAnimationFrame || function (fn){return setTimeout(fn,1000/60)};

    function Move(ele , attr , targetVal , time) {

        //初始值的获取
        var CSSObj = ele.currentStyle || getComputedStyle(ele);
        var startVal = parseFloat(CSSObj[attr]) || 0;

        //初始事件的获取
        var startDate = new Date();

        //动画
        function m(){
            var nowDate = new Date();
            var prop = (nowDate-startDate) / time;
            var ifEnd = prop >= 1;
            ifEnd && (prop = 1);

            //匀速的
            //var Sx = (targetVal - startVal)*prop + startVal;

            //匀加速的
            var Sx = (targetVal-startVal)*Math.pow((nowDate-startDate),2)/(time*time) + startVal;

            ele.style[attr] = Sx + 'px';
            !ifEnd && requestAnimationFrame(m)
        }
        requestAnimationFrame(m)

    }

    window.Move = Move;
})();
*/
(function() {
    //requestAnimationFrame的兼容
    var requestAnimationFrame = window.requestAnimationFrame || function (fn) {
        return setTimeout(fn, 1000 / 60)
    };

    function Move(ele, attr, targetVal, time) {

        //初始值的获取
        var CSSObj = ele.currentStyle || getComputedStyle(ele);
        var startVal = parseFloat(CSSObj[attr]) || 0;

        //初始事件的获取
        var startDate = new Date();

        //动画
        function m() {
            var nowDate = new Date();

            var prop = (nowDate - startDate) / time;

            var ifEnd = prop >=1;

            ifEnd && (prop = 1);
            //匀速的
            var S = (targetVal - startVal) * prop + startVal;

            ele.style[attr] = S + 'px';

            !ifEnd && requestAnimationFrame(m);
        }

        requestAnimationFrame(m);
    }
    window.Move = Move;
})();













