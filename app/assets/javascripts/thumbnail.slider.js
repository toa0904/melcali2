// $(function(){
//   var slider = ".slider"; // スライダー
//   var thumbnailItem = ".slider-thumb .thumbnail-item"; // サムネイル画像アイテム
  
//   // サムネイル画像アイテムに data-index でindex番号を付与
//   $(thumbnailItem).each(function(){
//    var index = $(thumbnailItem).index(this);
//    $(this).attr("data-index",index);
//   });
  
//   // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
//   // 「slickスライダー作成」の前にこの記述は書いてください。
//   $(slider).on('init',function(slick){
//    var index = $(".slide-item.slick-slide.slick-current").attr("data-slick-index");
//    $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
//   });

//   //slickスライダー初期化  
//   $(slider).slick({
//     arrows: false,
//     infinite: false //これはつけましょう。
//   });
//   //サムネイル画像アイテムをクリックしたときにスライダー切り替え
//   $(thumbnailItem).on('mouseenter',function(){
//     var index = $(this).attr("data-index");
//     $(slider).slick("slickGoTo",index,false);
//   });
  
//   //サムネイル画像のカレントを切り替え
//   $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
//     $(thumbnailItem).each(function(){
//       $(this).removeClass("thumbnail-current");
//     });
//     $(thumbnailItem+'[data-index="'+nextSlide+'"]').addClass("thumbnail-current");
//   });
// });