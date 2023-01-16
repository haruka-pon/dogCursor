//マウスストーカー用のdivを取得
const stalker = document.getElementById('stalker');

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});


// // JSレスポンシブ
// $windowWidth = window.innerWidth;

// $breakPointA = 560;
// $breakPointB = 960;

// isMobileSize = ($windowWidth < $breakPointA);
// isTabletSize = ($windowWidth <= $breakPointB) && ($windowWidth > $breakPointA);
// isPcSize = ($windowWidth > $breakPointB);

// if (isMobileSize) {
//     //横幅560px以下（スマホ）

// }

// if (isTabletSize) {
//     //横幅560px以上、960px以下（タブレット）
// }

// if (isPcSize) {
//     //横幅960px以上（PC）

// }
