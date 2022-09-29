$(document).ready(function(){

    // 변수에 브라우저의 높이 값을 지정
    let ht = $(window).height();
    // section에 적용
    $('section').height(ht);

    // resize 이벤트 구현
    $(window).resize(function(){
        let ht = $(window).height();
        $('section').height(ht);
    })

    // 마우스의 움직임에 반응하는 서브이미지 설정
    $('section').mousemove(function(e){
        
        // 변수 posX와 posY 마우스의 커서 위치 지정
        let posX = e.pageX;
        let posY = e.pageY;
        // console.log(posX, posY);

        // 첫 번째 이미지 위치 값을 마우스 커서의 위치 값과 연동
        $('img.p11').css({'right':20-(posX/30), 'bottom':20-(posY/30)});
        $('img.p12').css({'right':130+(posX/20), 'bottom':-40+(posY/20)});
        $('img.p13').css({'right':60+(posX/20), 'top':180+(posY/20)});

        // 두 번째 이미지 위치 값을 마우스 커서의 위치 값과 연동
        $('img.p21').css({'right':-180-(posX/30), 'bottom':-480-(posY/30)});
        $('img.p22').css({'right':130+(posX/50), 'bottom':-40+(posY/50)});

        // 세 번째 이미지 위치 값을 마우스 커서의 위치 값과 연동
        $('img.p31').css({'right':280-(posX/30), 'bottom':30-(posY/30)});
        $('img.p32').css({'right':110+(posX/20), 'bottom':-270+(posY/20)});
        $('img.p33').css({'right':-70+(posX/20), 'top':-130+(posY/20)});

        // 네 번째 이미지 위치 값을 마우스 커서의 위치 값과 연동
        $('img.p41').css({'right':20-(posX/30), 'bottom':-120-(posY/30)});
        $('img.p42').css({'right':0+(posX/20), 'bottom':-180+(posY/20)});

    })

    // 메뉴 클릭시 이동
    $('ul#menu li').click(function(e){

        // 링크 이동기능 해제
        e.preventDefault();

        // 변수 ht에 브라우저의 높이 값 지정
        let ht = $(window).height();
        // 변수 i에 현재 클릭한 li의 순서 값을 지정
        let i = $(this).index();
        console.log(i);
        // 브라우저의 높이 값*박스의 순서값을 크롤 위치 값과 동일
        let nowTop = i*ht;
        console.log(nowTop);
        // 해당 스크롤의 위치 값으로 문서 이동
        $('html, body').stop().animate({'scrollTop':nowTop}, 1400);

    })
	
    // 화면이 스크롤 될 때 해당하는 메뉴 활성화
    $(window).scroll(function(){

        // 브라우저의 현재 높이 값
        let ht = $(window).height();
        // 변수 scroll에 현재 문서가 스크롤 된 거리 지정(위치 값 top)
        let scroll = $(window).scrollTop();

        // if ( scroll >= ht*0 && scroll < ht*1 ) {
        //     $('ul#menu li').removeClass();
        //     $('ul#menu li').eq(0).addClass('on');
        // }
        // if ( scroll >= ht*1 && scroll < ht*2 ) {
        //     $('ul#menu li').removeClass();
        //     $('ul#menu li').eq(1).addClass('on');
        // }
        // if ( scroll >= ht*2 && scroll < ht*3 ) {
        //     $('ul#menu li').removeClass();
        //     $('ul#menu li').eq(2).addClass('on');
        // }
        // if ( scroll >= ht*3 && scroll < ht*4 ) {
        //     $('ul#menu li').removeClass();
        //     $('ul#menu li').eq(3).addClass('on');
        // }
        
        let ind = $('ul#menu li');
        for ( let i=0; i < ind.length; i++ ) {

            if ( scroll >= ht*i && scroll < ht*(i+1) ) {
                $('ul#menu li').removeClass();
                $('ul#menu li').eq(i).addClass('on');
            }

        }
    })

    $('section').mousewheel(function(event, delta){

        // 마우스 휠을 올렸을 때
        if ( delta > 0 ) {
            // 변수 prev에 현재 휠을 움직인 section에서 
            // 이전 section의 offset().top위치 저장
            let prev = $(this).prev().offset().top;
            // 문서 전체를 prev에 저장된 위치로 이동
            $('html, body').stop().animate({'scrollTop':prev}, 1400, 'easeOutBounce');
        }
        // 마우스 휠을 내렸을 때
        if ( delta < 0 ) {
            // 변수 next에 현재 휠을 움직인 section에서 
            // 이전 section의 offset().top위치 저장
            let next = $(this).next().offset().top;
            // 문서 전체를 next에 저장된 위치로 이동
            $('html, body').stop().animate({'scrollTop':next}, 1400, 'easeOutBounce');
        }

    })

});















