(function () {
     var zoom_flag = 1;
    function zoomout() {
   
    $(".zoomout").each(function(i, obj) {

        var clone;

        var position;

        $(obj).bind("mouseover", function(e){

                                if(zoom_flag==1){

                        var init_width = $(obj).find("img").width();

                        var init_height = $(obj).find("img").height();

                        if(init_width > init_height) {

                            var zoom_width = init_width + 10;

                            var zoom_height = init_height * zoom_width / init_width;

                        } else {

                            var zoom_height = init_height + 10;

                            var zoom_width = init_width * zoom_height / init_height;

                        }

                        

                        clone = $(obj).clone();

                        $(clone).addClass("clonedItem").find("img").css({"height":zoom_height+"px", "width":zoom_width+"px"});

                        

                        var $this = $(this);

                        position = $this.find("img").position();

                

                        var zoom_left = position.left - (zoom_width-init_width)/2;

                        var zoom_top = position.top - (zoom_height-init_height)/2;


                        $(".clonedItem").animate({

                            height: init_height+"px",

                            width: init_width+"px"

                        }, 0, function(){$(".clonedItem").remove();});

                        

                        $this.css("z-index", 1);

                        $(clone).css("top", zoom_top).css("left", zoom_left).css("z-index", 99);

                        

                        $(clone).appendTo("body").css({"position":"absolute", "margin":0}).animate({

                            height: zoom_height+"px",

                            width: zoom_width+"px"

                        }, 0, function(){

                            $(clone).bind("mouseout", function(e){

                            $(clone).animate({

                                height: init_height+"px",

                                width: init_width+"px"

                            }, 0, function(){$(clone).remove();});



                            }); // end mouseout

                            

                        }); // end animate callback

        

                   }//end if zoom_flag

                          }); // end mouseover



    }); // end document.ready



    }           //end function zoomout

$(document).ready(function(){

    zoomout(); 
 $('.clonedItem').on('click',function(e){



if($(this).attr('isget')==4 ){
   
  // $('#myModal').modal('show');
  
  }
}); 




/**/ 
$('.main_body_right_part_right_line3_line1_pic_1').on('mouseout','img',function(){


     $(this).attr("src","./images/system/company_introduction.jpg");
});
$('.main_body_right_part_right_line3_line1_pic_1').on('mouseover','img',function(){

     $(this).attr("src","./images/system/company_introduction1.jpg");
});

$('.main_body_right_part_right_line3_line1_pic_2').on('mouseout','img',function(){

     $(this).attr("src","./images/system/news.jpg");
});
$('.main_body_right_part_right_line3_line1_pic_2').on('mouseover','img',function(){
     $(this).attr("src","./images/system/news1.jpg");
});

$('.main_body_right_part_right_line3_line1_pic_3').on('mouseout','img',function(){

     $(this).attr("src","./images/system/teaminfo.jpg");
});
$('.main_body_right_part_right_line3_line1_pic_3').on('mouseover','img',function(){
     $(this).attr("src","./images/system/teaminfo1.jpg");
});

$('.main_body_right_part_right_line3_line1_pic_4').on('mouseout','img',function(){

     $(this).attr("src","./images/system/aboutus.jpg");
});
$('.main_body_right_part_right_line3_line1_pic_4').on('mouseover','img',function(){
     $(this).attr("src","./images/system/aboutus1.jpg");
});

$('.main_body_left_part_line_3_pic_1').on('mouseout','img',function(){
     $(this).attr("src","./images/system/designing1.jpg");
});
$('.main_body_left_part_line_3_pic_1').on('mouseover','img',function(){
     $(this).attr("src","./images/system/designing.jpg");
});

$('.main_body_right_part_right_line1_right').on('mouseout','img',function(){
     $(this).attr("src","./images/system/constructing1.jpg");
});
$('.main_body_right_part_right_line1_right').on('mouseover','img',function(){
     $(this).attr("src","./images/system/constructing.jpg");
});


 });


}).call(this);

