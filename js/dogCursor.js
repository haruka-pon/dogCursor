//マウスストーカー用のdivを取得
const stalker = document.getElementById('stalker');

const stalkerJust = document.getElementById('stalker_just_wrapp');

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

document.addEventListener('mousemove', function (f) {
    stalkerJust.style.transform = 'translate(' + f.clientX + 'px, ' + f.clientY + 'px)';
});




// パララックスのターゲット取得
const target = document.getElementsByClassName('js-parallax');

// パララックスを行うエリア
const activeArea = document.getElementById('js-parallaxArea');

// ウィンドウの中心の取得
const xCenter = window.innerWidth / 2;
const yCenter = window.innerHeight / 2;

// パララックスで移動させる距離
const parallaxVal = 10; //中心からマウスの距離の10分１移動

// マウスがパララックスエリアに入った時のイベント
activeArea.addEventListener('mousemove', (e) => {
    // マウスの座標を取得して 中心からの距離取得、 そこからpararaxValで距離を調整
    const x = (xCenter - e.pageX) / parallaxVal;
    const y = (yCenter - e.pageY) / parallaxVal;
    // パララックスさせる要素にstyleの指定
    for (var i = 0; i < target.length; i++) {
        target[i].style.transform = `translate(${-x}px, ${-y}px)`;
    }
});