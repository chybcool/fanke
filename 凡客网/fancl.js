$(function(){
	//顶部菜单效果
	$('#top_bg #top_right li.has_hide').hover(function(){
		$(this).addClass('cur');
		$(this).find('.menu_a').addClass('cur');
		$(this).find('.hide_box').show();
	},function(){
		$(this).removeClass('cur');
		$(this).find('.menu_a').removeClass('cur');
		$(this).find('.hide_box').hide();
	})
	
	//凡客诚品和V+商城点击切换效果
	$('#main #logo_box #on_search li').click(function(){
		$(this).removeClass('no_bg').siblings().addClass('no_bg');
	})
	
	//购物车效果
	
	$("#main #logo_box #gouwuche").hover(function(){
		$(this).addClass('cur');
		$(this).find('.hide_box').show();
	},function(){
		$(this).removeClass('cur');
		$(this).find('.hide_box').hide();
	})
	//凡客诚品旗下网站
$('#main #logo_box #fankeqixia_box .fankeqixia').mouseover(function(){
	$(this).addClass('cur');
	$(this).siblings('.hide_box').show();
})



$('#main #logo_box #fankeqixia_box .fankeqixia').mouseout(function(){
	$(this).removeClass('cur');
	$(this).siblings('.hide_box').hide();
})


	$('#main #logo_box #fankeqixia_box .hide_box').mouseover(function(){
		$(this).siblings('.fankeqixia').addClass('cur');
		$(this).show();
	})
	$('#main #logo_box #fankeqixia_box .hide_box').mouseout(function(){
		$(this).siblings('.fankeqixia').removeClass('cur');
		$(this).hide();
	})
	
	//灰色导航条区域
	$('#main #menu2_box .menu2_left .list').mouseover(function(){//鼠标移入时的事件
		$(this).find('.list_a').addClass('cur');//让当前li里面的a标签加一个cur class
		$(this).find('.hide_box').show();//让当前li里面的隐藏区域显示出来
	})
	$('#main #menu2_box .menu2_left .list').mouseout(function(){//鼠标移出时的事件
		$(this).find('.list_a').removeClass('cur');//移除cur class
		$(this).find('.hide_box').hide();//让当前li里面的隐藏区域隐藏
	})



//右图区轮播-->
           //    <div class="flash">
             //  	<img src="images/flash/1.jpg" />
             //  	<img src="images/flash/2.jpg" />
             //  	<img src="images/flash/3.jpg" />
             //  	<img src="images/flash/4.jpg" />
             //  	<img src="images/flash/5.jpg" />
            //   	<img src="images/flash/6.jpg" />
            //   	<img src="images/flash/7.jpg" />
            //   	<ul>
            //   		<li class="cur">1</li>
            //   		<li>2</li>
            //   		<li>3</li>
            //   		<li>4</li>
            //   		<li>5</li>
            //   		<li>6</li>
            //   		<li>7</li>
            //   	</ul>
            //   </div>
            //   <!--图片轮换板结束-->
	//图片轮播
	var flash_sta=0;
	var timer=setInterval(autoRun,1000);//设定每秒自动播放变量
	function autoRun(){
		flash_sta++;
		//if(flash_sta==7){
		//	flash_sta==0;	
		//}
		
	  flash_sta=(flash_sta==7)?0:flash_sta;//判断flash_sta值是否到最后，如果到最后再选回到0初位上
	  $('.flash img').eq(flash_sta).fadeIn().siblings('img').hide();//让对应的图片显示 ，同时兄弟图片隐藏
	  $('.flash ul li').eq(flash_sta).addClass('cur').siblings('li').removeClass('cur');//控制li样式
	}
	
	$('.flash ul li').mouseover(function(){
		clearInterval(timer);
		flash_sta=$(this).index();
		$('.flash img').eq(flash_sta).fadeIn().siblings('img').hide();
		$('.flash ul li').eq(flash_sta).addClass('cur').siblings('li').removeClass('cur');
	})

$('.flash ul li').mouseout(function(){
	timer=setInterval(autoRun,1000);
	
})


/*无缝滚动轮播*/
var ul_width = 0;
	$('.wufeng .wufeng_right ul.list1 li').each(function(){
		ul_width = ul_width + $(this).width();//计算ul的宽度
	})
	$('.wufeng .wufeng_right ul').css('width',ul_width+'px');//将宽度加到ul上面
	$('.wufeng .wufeng_right ul.list2').css('left',ul_width+'px');//给第二个ul设置left值

	var change_left = 710 - ul_width*2;
	function wufeng(obj){
		setInterval(function(){

			var old_left = obj.position().left;//获得obj现有的left
			var new_left = old_left-1;
			if(new_left<change_left){
				obj.css('left','710px');
				new_left = 710;
			}
			obj.css('left',new_left+'px');
		},20)
	}
	wufeng($('.wufeng .wufeng_right ul.list1'))
	wufeng($('.wufeng .wufeng_right ul.list2'))


//所有商品分类效果
$('#main #fenlei_box .fenlei_list .list').mouseover(function(){
	$(this).find('.left').addClass('l_cur');
	$(this).find('.right').addClass('r_cur');
})

$("#main #fenlei_box .fenlei_list .list").mouseout(function(){
	$(this).find('.left').removeClass('l_cur');
	$(this).find('.right').removeClass('r_cur');
})


$('#main #fenlei_box .news_tab .tab_title li').mouseover(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		var cur = $(this).index();
		$('#main #fenlei_box .news_tab .con').eq(cur).show().siblings('.con').hide();
	})
})

