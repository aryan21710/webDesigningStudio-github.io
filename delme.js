
## owl.video.js

Currently support YouTube, Vimeo, and vzaar videos only.

To add video into carousel just put `<a class="owl-video" href="_straight URL from YouTube, Vimeo, or vzaar"></a>`.
A tag is not mandatory, can be any other tag but `"owl-video"` and href with url link is required.

Thumbnails are automaticaly fetched from servers. [See demo](/demos/demo.html)

#### Usage:
```
$('.owl-carousel').owlCarousel({
	video:true,
	videoHeight:200, //optional
	videoWidth: 200 //optional
});
```
#### HTML Markup:
```
<div class="owl-carousel">
	<div class="article-video"><a class="owl-video" href="https://vimeo.com/23924346"></a></div>
	<div class="article-video"><a class="owl-video" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ"></a></div>
	<div class="article-video"><a class="owl-video" href="https://www.youtube.com/watch?v=FBu_jxT1PkA"></a></div>
	<div class="article-video"><a class="owl-video" href="https://www.youtube.com/watch?v=oy18DJwy5lI"></a></div>
</div>
```

## owl.autoheight.js

Adjusts stage height to highest element on viewport. No special HTML markup required. [See demo](/demos/demo.html)

#### Usage:
```
$('.owl-carousel').owlCarousel({
	autoHeight:true,
	autoHeightClass: 'owl-height' //default
});
```

## owl.animate.js

Owl Carousel CSS has built-in only fade out transition. To get more fancy looking animations you have to create them yourself in CSS or use fantastic Animate.css library created by Daniel Eden https://daneden.github.io/animate.css/
Animate functions works only with one item and only in browsers that support perspective property.

To get fade out effect just set `animateOut: 'fadeOut'`

#### Default options:
```
animateOut:false;
animateIn:false;
```
Read more on demo page. --}}

{{/markdown }}

