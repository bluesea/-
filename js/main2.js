$(function(){
    var mobile   = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    var touchstart = mobile ? "touchstart" : "mousedown";
    var touchend = mobile ? "touchend" : "mouseup";
    var touchmove = mobile ? "touchmove" : "mousemove";
    var tap = mobile ? "tap" : "click";

    //é˜»æ­¢å±å¹•æ»‘åŠ¨
    $('html,body').on(touchmove,function(e){
        e.preventDefault()
    });
	
	_mz_wx_view (1);//ç§’é’ˆæ£€æµ‹
	
	
    var motionObj = {};
    var loadingPath='images/';
    var stageH=$(window).height();
    var stageW=$(window).width();

    //å®šä¹‰æ—¶é—´åŠ¨ç”»ï¼š
    for(var i=0; i<10; i++){
        motionObj["page"+(i+1)] = new TimelineMax();
    };

    //ä¿®æ”¹å¾®ä¿¡ç”¨æˆ·ä¿¡æ¯
    //$('#msg15 .mname').text(nickname);
    //$('.cont').text(nickname+'é‚€è¯·ä½ åŠ å…¥äº†â€œäº¿ä¸‡å¯Œè±ªâ€ç¾¤èŠï¼Œç¾¤èŠå‚ä¸Žäººè¿˜æœ‰ï¼šæ»´æ»´CEO -ç¨‹ç»´ã€äº¬ä¸œï¼åˆ˜å¼ºä¸œã€ä¸‡ç§‘-çŽ‹çŸ³ã€è”æƒ³-æŸ³ä¼ å¿—ã€SOHOä¸­å›½ï¼æ½˜çŸ³å±¹ã€å…¨æ°‘è€å…¬-çŽ‹æ€èªâ€¦â€¦');
    //$('#msg15 .headimg>img').attr('src',headimgurl);
    //wxDefault['desc'] = nickname+'é‚€è¯·ä½ åŠ å…¥ç¾¤èŠäº¿ä¸‡å¯Œè±ªçº¢åŒ…ç¾¤ï¼Œç‚¹å‡»æŸ¥çœ‹è¯¦æƒ…ã€‚'
    //wxShare();

    //åˆå§‹åŒ–éŸ³ä¹
    var _music;
    function intsound(){
        var sounds = [
            {src: "bg1.mp3", id: 1}
        ];
        createjs.Sound.alternateExtensions = ["ogg"];
        createjs.Sound.registerSounds(sounds, loadingPath);
    }
    intsound();

    //åˆå§‹åŒ–é˜»æ­¢å±å¹•åŒå‡»ï¼Œå½“æœ‰è¡¨å•é¡µçš„æ—¶å€™ï¼Œè¦å…³é—­é˜»æ­¢äº‹ä»¶ï¼Œå¦åˆ™ä¸èƒ½è¾“å…¥æ–‡å­—äº†ï¼Œè¯·ä¼ å…¥falseå€¼ï¼Œå†æ¬¡è¿è¡Œå³å¯
    initPreventPageDobuleTap(true);
    initPageMotion();
    //initButtons();

    //åˆå§‹åŒ–åŠ¨ç”»
    function initPageMotion(){

        $(".main").fadeIn(300,function(){
            setTimeout(function(){
                $('.longpage').show();
                document.title='äº¿ä¸‡å¯Œè±ªæ–°å¹´çº¢åŒ…ç¾¤ï¼ˆ20ï¼‰';
                //setTimeout(function(){
                //    motionObj['page'+1].play();
                //},1000)
                messages1();
            },2000)
        });
    }

    //äº§ç”Ÿéšæœºå§“å
    function GetRandomNum(Min,Max)
    {
        var Range = Max - Min;
        var Rand = Math.random();
        return(Min + Math.round(Rand * Range));
    }
    var userNamesArray = ['ç¨‹ç»´','åˆ˜å¼ºä¸œ','çŽ‹çŸ³','æŸ³ä¼ å¿—','æ½˜çŸ³å±¹','çŽ‹æ€èª'];
    var _uid = GetRandomNum(0,5);
    var _userName = userNamesArray[_uid];
    console.log(_userName);

    function getUrlParam (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]); return "";
    }
    var nameParameter = getUrlParam('id');
    //alert(nameParameter)
    if(nameParameter !='' && nameParameter != null && nameParameter != undefined){
        //alert(userNamesArray[parseInt(_uid)])
        //alert(userNamesArray[parseInt(nameParameter)])
        $('.cont').text(userNamesArray[parseInt(nameParameter)]+'é‚€è¯·ä½ åŠ å…¥äº†â€œäº¿ä¸‡å¯Œè±ªæ–°å¹´çº¢åŒ…ç¾¤â€ç¾¤èŠï¼Œç¾¤èŠå‚ä¸Žäººè¿˜æœ‰ï¼šç¨‹ç»´ æ»´æ»´ã€åˆ˜å¼ºä¸œ äº¬ä¸œã€çŽ‹çŸ³ ä¸‡ç§‘ã€æŸ³ä¼ å¿— è”æƒ³ã€æ½˜çŸ³å±¹ SOHOä¸­å›½ã€çŽ‹æ€èª å›½æ°‘è€å…¬-â€¦â€¦');
    }


    /*wxdata['title'] = _userName+'é‚€è¯·ä½ åŠ å…¥ç¾¤èŠ';

    wxdata['desc'] = _userName+'é‚€è¯·ä½ åŠ å…¥ç¾¤èŠäº¿ä¸‡å¯Œè±ªçº¢åŒ…ç¾¤ï¼Œè¿›å…¥æŸ¥çœ‹è¯¦æƒ…ã€‚'
    wxdata['link'] = wxdata['link']+'?id='+_uid;
    setShare();  //å¾®ä¿¡åˆ†äº«*/


    var _DIST = 0
    var _space = stageH/2-520;
    var _space2 = 0;

    var _timer;
    var msgID;
    var dist;
    //æ˜¾ç¤ºæ¶ˆæ¯1
    function messages1(){
        msgID=1;
        //dist = -150+_space;
        dist = -150;
        _timer = setInterval(setMS1,1500)
    }

    //æ˜¾ç¤ºæ¶ˆæ¯2
    function messages2(){
        //$('#msg'+15).fadeIn();
        //msgID=7;
        dist = 0;
        //dist = _space;
        clearInterval(_timer);
        _timer = setInterval(setMS2,1500)
    }

    //æ’­æ”¾æ¶ˆæ¯å£°éŸ³
    function playmessagesSound(){
        _music = createjs.Sound.play('1');
        _music.volume = 0.1;
    }

    function setMS1(){
        if(msgID<=6){
            if(msgID==4){
                console.log(_space)
                TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':dist+100+_space+'px'},ease:Linear.easeNone});
                dist += -50+_space;
                _DIST = dist;

            }else if(msgID>4){
                if(msgID == 6){
                    console.log(_space)
                    TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':dist-80+_space+'px'},ease:Linear.easeNone});
                    dist += -230+_space;
                    _DIST = dist;
                }else{
                    TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':dist+50+'px'},ease:Linear.easeNone});
                    dist += -100;
                    _DIST = dist;
                }
            }
            if(msgID==4) receiveMoney();
            $('#msg'+msgID).fadeIn();
            playmessagesSound();
        }else{
            clearInterval(_timer);
        }
        msgID++;
    }

    function setMS2(){
        if(msgID<=19){
            if(msgID==9){
                _btn1 = 2;
                _btn2 = 2;
                _btn3 = 2;
            }

            if(msgID==11) {
                TweenMax.to($(".longpage>div").not($('.di')), .5, { css: {'top': _DIST + dist - 130 + 'px'}, ease: Linear.easeNone });
                dist += -280;
            }else if(msgID>=11 && msgID<=14){
                TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':_DIST+dist+'px'},ease:Linear.easeNone});
                dist += -100;
                if(msgID==14){
                    clearInterval(_timer);
                    _timer = setInterval(setMS2,1000);
                }
            }else if(msgID==15){
                TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':_DIST+dist-50+'px'},ease:Linear.easeNone});
                dist += -150;
                clearInterval(_timer);
                _timer = setInterval(setMS2,1500);
            }else if(msgID==18){
                TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':_DIST+dist-100+'px'},ease:Linear.easeNone});
                dist += -250;
            }else if(msgID==19){
                TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':_DIST+dist-150+'px'},ease:Linear.easeNone});
                dist += -300;
            }else{
                TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':_DIST+dist+'px'},ease:Linear.easeNone});
                dist += -150;
            }
            //}else if(msgID>11 && msgID<16){
            //    TweenMax.to($(".longpage>div").not($('.di')),.4, {css:{'top':_DIST+dist+'px'},ease:Linear.easeNone});
            //    dist += -100;
            //    if(msgID==13){
            //        clearInterval(_timer);
            //        _timer = setInterval(setMS2,1300);
            //    }
            //}else if(msgID==16){
            //    TweenMax.to($(".longpage>div").not($('.di')),.4, {css:{'top':_DIST+dist-50+'px'},ease:Linear.easeNone});
            //    dist += -100;
            //}else if(msgID==18){
            //    TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':_DIST+dist-120+'px'},ease:Linear.easeNone});
            //    //dist += -280;
            //}else if(msgID==17){
            //    TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':_DIST+dist-200+'px'},ease:Linear.easeNone});
            //    dist += -350;
            //    clearInterval(_timer);
            //    _timer = setInterval(setMS2,1500);
            //}else{
            //    TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':_DIST+dist+'px'},ease:Linear.easeNone});
            //    dist += -150;
            //}

            if(msgID==9) msgID =msgID+1;
            $('#msg'+msgID).fadeIn();
            playmessagesSound();
        }else{
            clearInterval(_timer);
        }
        msgID++;
    }

    var _btn1 = 1;
    var _btn2 = 1;
    var _btn3 = 1;

    //æ‰“å¼€çº¢åŒ…
    var isTheFirstReceive = true;
    var ct = true;
    function receiveMoney(){
        $('#redpick1, #msg6 .hand').one(touchstart, function(){
            $('#msg6 .circle').css({'animation':'none','-webkit-animation':'none'});
            $('#msg6 .circle,#msg6 .hand').fadeOut();
			_mz_wx_view (2);//é©¬äº‘çº¢åŒ…é¡µ
			_mz_wx_custom(1); 
            if(isTheFirstReceive){
                if(ct){
                    $('.hongbao,#hb1').show();
                    TweenMax.to('#hb1',.5, {alpha:1, scale:1, ease:Bounce.easeOut});
                }else{
                    $('.hongbao,#hb1Open,#btn3').show();
                    TweenMax.to('#hb1Open',.5, {alpha:1, scale:1, ease:Bounce.easeOut});
                }
            }else{
                $('.hbnull,#null1').show();
            }
        })
    }

    //æ‹†çº¢åŒ…ï¼š
    var canRemoveMoney = true;
    $('#btn2').on(touchstart, function(){
        if(_btn2==1){
            if(canRemoveMoney){
				_mz_wx_view (3);//é©¬äº‘çº¢åŒ…æ´¾å®Œé¡µ
				_mz_wx_custom(2); 
                $('#hb1Open,#btn3').show();
                $('#hb1').hide();
                TweenMax.to('#hb1',{scale:0.5, alpha:0});
                setTimeout(function(){
                    $('#hongbao .circle').show();
                    $('#hongbao .hand').show();
                },2000);
                //canRemoveMoney = false;
                //ç¬¬ä¸€æ¬¡æ‹†çº¢åŒ…ï¼Œè®¾ç½®å…³é—­æŒ‰é’®ä¸ºç¬¬äºŒé¡µçš„å…³é—­
                isTheFirstClose = false;
            }else{
                alert('å·²ç»æ‹†è¿‡çº¢åŒ…äº†');
            }
        }else{
            //CEOçš„çº¢åŒ…
			_mz_wx_view (6);//æ»´æ»´ç¨‹ç»´é¢†çº¢åŒ…
			_mz_wx_custom(5); 
            $('.hbnull').css('transform','scale('+stageW/640+','+stageH/1039+')');
            $('.hbnull').css('-webkit-transform','scale('+stageW/640+','+stageH/1039+')');
            $('.hbnull').css('top',stageH/2-520+'px');

            $('.hongbao,#hb2').hide();
            TweenMax.set('#hb2',{alpha:0, scale:0.5});
            $('.hbnull,#null2,#btn4,#btn5').show();
            //alert($('#btn5'))
            goshare();
        }
    })

    //çœ‹æ‰‹æ°”ï¼š
    $('#btn3').on(touchstart, function(){
        $('.hbnull,#null1').show();
        $('#hb1Open').hide();
		_mz_wx_view (4);//é©¬äº‘çº¢åŒ…çœ‹æ‰‹æ°”é¡µ
		_mz_wx_custom(3); 
        setTimeout(function(){
            $('#hbnull .circle').show();
            $('#hbnull .hand').show();
        },2000);
    })

    //è¯¦æƒ…é¡µï¼š
    //var isTheFirst = true;
    $('#null1').on(touchstart, function(){
        $('#null1,.hbnull').fadeOut();
        $('.hongbao').hide();
        $('#hbnull .circle').remove();
        $('#hbnull .hand').remove();
        $('#hongbao .circle').remove();
        $('#hongbao .hand').remove();
        isTheFirstReceive = false;
        goNextAnimation();
    })

    //å…³é—­
    var isTheFirstClose = true;
    $('#btn1').on(touchstart, function(){
        if(_btn1 == 1){
            if(isTheFirstClose){
                //æ‹†çº¢åŒ…é¡µå…³é—­
                $('.hongbao,#hb1').hide();
                $('#hongbao .circle').remove();
                $('#hongbao .hand').remove();
                TweenMax.set('#hb1', {alpha:0, scale:0.5});
                goNextAnimation();
                //isTheFirstClose = false;
            }else{
                $('.hongbao,#hb1Open,#btn3').hide();
                $('#hongbao .circle').remove();
                $('#hongbao .hand').remove();
                TweenMax.to('#hb1Open',.5, {alpha:0, scale:0.5, ease:Bounce.easeOut});
                //ç¬¬äºŒé¡µç‚¹å‡»å…³é—­æŒ‰é’®ï¼š
                ct = false;
                goNextAnimation();
            }
        }else{

        }
    })

    //ç»§ç»­ä¸‹é¢çš„åŠ¨ç”»ï¼š
    var cangoNext = true;
    function goNextAnimation(){
        if(cangoNext){
            //$('.iputmessage').show();
            //TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':_DIST+60+'px'},ease:Linear.easeNone});
            //TweenMax.from('#imessage',1, {y:530, ease:Expo.easeOut,onStart:function(){ $('#imessage').show();  }})
            //sendMessages();
            //cangoNext = false;
            messages2();
        }
    }

    //å‘é€è‡ªå·±çš„æ¶ˆæ¯
    function sendMessages(){
        $('.send').on(touchstart, function(){
            //TweenMax.to($(".longpage>div").not($('.di')),.5, {css:{'top':_DIST+150+'px'},ease:Linear.easeNone});
            //TweenMax.to('#imessage',.6, {y:0, ease:Linear.easeNone,onComplete:function(){
            //    $('#imessage,.iputmessage').hide();
            //    //motionObj['page'+2].play();
            //    messages2();
            //}})
            //messages2();
        })
    }

    //æ‰“å¼€CEOçš„çº¢åŒ…
    $('#redpick2, #msg19 .hand').on(touchstart, function(){
        $('.hongbao,#hb2').show();
		_mz_wx_view (5);//æ‰“å¼€æ»´æ»´ç¨‹CEOçº¢åŒ…
		_mz_wx_custom(4); 
        TweenMax.to('#hb2',.5, {alpha:1, scale:1, ease:Bounce.easeOut});
    })

    function goshare(){
        $('#btn4,#btn5').show();
        $('#btn4').on(touchstart, function(){
			_mz_wx_custom(6); 

			setTimeout(function(){
				
				location.href='http://r.zbs6.com';
				
				},500); 
            
        });
        $('#btn5').on(touchstart, function(){
						_mz_wx_custom(7); 

            $('.sharepop').fadeIn(300,function(){
                setTimeout(function(){
                    $('.sharepop').fadeOut(300);
                },1500)
            })
        });
    }

    //é˜»æ­¢å±å¹•åŒå‡»ä»¥åŽå‘ä¸Šä½ç§»,å½“æœ‰è¡¨å•é¡µçš„æ—¶å€™ï¼Œè¦å…³é—­é˜»æ­¢äº‹ä»¶ï¼Œå¦åˆ™ä¸èƒ½è¾“å…¥æ–‡å­—äº†
    function initPreventPageDobuleTap(isPreventPageDobuleTap){
        if(isPreventPageDobuleTap){
            $('.page').on(touchstart,function(e){
                e.preventDefault();
            })
        }else{
            $('.page').off(touchstart);
        }
    }

    //å…³é—­æµ®å±‚
    $('.sharemask').on(touchstart,function(){
        $(this).hide();
    })
});
