var tooltip = {
    
    tt_up: {
        
        show: function(el, opts) {
            
            var newEl       = $(el);
            var timeShow    = setTimeout(function(){

                opts = opts || {};

                if(tooltip.tt_AC == false || opts.textarea) {
                    
                    tooltip.tt_AC = true;
                    tooltip.tt_ID ++;

                    $(el).css({position: "relative", zIndex: 100});
                    $(el).parent().append("<div class='tt_w tt_default tt_up animated a_tt slideInUp' id='tt"+tooltip.tt_ID+"'><div class='tt_wrapped'><div class='tt_content'><div class='tt_header'>"+$(el).attr("tt_header")+"</div><div class='tt_text'>"+$(el).attr("tt_text")+"</div></div></div></div>");
                    
                    $("*").filter(function() {

                        return $(this).css('z-index') == 100;

                    }).each(function() {
                        
                        $(this).bind("mouseleave", function(el) {
                            
                            tooltip.tt_YE = true;
                            timeClose = setTimeout(function(){ tooltip.hide(newEl); }, 200);
                            
                        });
                        $(this).bind("mouseenter", function(){
                            
                            tooltip.tt_YE = false;
                            
                        });

                    });
                    
                    $("body").bind("mouseleave", function(){ tooltip.hide(newEl); });
                    
                    $("#tt" + tooltip.tt_ID).fadeIn(100);
                    $("#tt" + tooltip.tt_ID).css({

                        "top":  ($(el).position().top + $("#viewbox").scrollTop()) + $(el).innerHeight() + 15,
                        "left": $(el).position().left + ($(el).innerWidth() / 2) - 30

                    });

                    $("#tt" + parseInt(tooltip.tt_ID-1)).remove();

                }

            }, 200);
            
            $(el).bind("mouseleave", function(){ clearTimeout(timeShow); });
            
        }
        
    },
    
    tt_menu_up: {
        
        show: function(el, opts) {
            
            var newEl       = $(el);
            var timeShow    = setTimeout(function(){

                opts = opts || {};

                if(tooltip.tt_AC == false || opts.textarea) {
                    
                    tooltip.tt_AC = true;
                    tooltip.tt_ID ++;

                    $(el).css({position: "relative", zIndex: 100});
                    $(el).parent().append("<div class='tt_w tt_default tt_up animated a_tt slideInUp' id='tt"+tooltip.tt_ID+"'><div class='tt_wrapped'><div class='tt_min_nav'>"+$(el).attr("tt_html")+"</div></div>");
                    
                    $("*").filter(function() {

                        return $(this).css('z-index') == 100;

                    }).each(function() {
                        
                        $(this).bind("mouseleave", function(el) {
                            
                            tooltip.tt_YE = true;
                            timeClose = setTimeout(function(){ tooltip.hide(newEl); }, 200);
                            
                        });
                        $(this).bind("mouseenter", function(){

                            tooltip.tt_YE = false;
                            
                        });

                    });
                    
                    $("body").bind("mouseleave", function(){ tooltip.hide(newEl); });
                    
                    $("#tt" + tooltip.tt_ID).fadeIn(100);
                    $("#tt" + tooltip.tt_ID).css({

                        "top":  ($(el).position().top + $("#viewbox").scrollTop()) + $(el).innerHeight() + 10,
                        "left": $(el).position().left + ($(el).innerWidth() / 2) - 30

                    });

                    $("#tt" + parseInt(tooltip.tt_ID-1)).remove();

                }

            }, 200);
            
            $(el).bind("mouseleave", function(){ clearTimeout(timeShow); });
            
        }
        
    },
    
    tt_down: {
        
        show: function(el, opts) {
    
            var newEl       = $(el);
            var timeShow    = setTimeout(function(){

                opts = opts || {};

                if(tooltip.tt_AC == false || opts.textarea) {
                    
                    tooltip.tt_AC = true;
                    tooltip.tt_ID ++;

                    $(el).css({position: "relative", zIndex: 100});
                    $(el).parent().append("<div class='tt_w tt_default tt_down animated a_tt slideInDown' id='tt"+tooltip.tt_ID+"'><div class='tt_wrapped'><div class='tt_content'><div class='tt_header'>"+$(el).attr("tt_header")+"</div><div class='tt_text'>"+$(el).attr("tt_text")+"</div></div></div></div>");
                    
                    $("*").filter(function() {

                        return $(this).css('z-index') == 100;

                    }).each(function() {
                        
                        $(this).bind("mouseleave", function(el) {
                            
                            tooltip.tt_YE = true;
                            timeClose = setTimeout(function(){ tooltip.hide(newEl); }, 200);
                            
                        });
                        $(this).bind("mouseenter", function(){

                            tooltip.tt_YE = false;
                            
                        });

                    });
                    
                    $("body").bind("mouseleave", function(){ tooltip.hide(newEl); });
                    
                    $("#tt" + tooltip.tt_ID).fadeIn(100);
                    $("#tt" + tooltip.tt_ID).css({

                        "top":  ($(el).position().top + $("#viewbox").scrollTop()) - $("#tt" + tooltip.tt_ID).innerHeight() - 15,
                        "left": $(el).position().left + ($(el).innerWidth() / 2) - 30

                    });

                    $("#tt" + parseInt(tooltip.tt_ID-1)).remove();

                }

            }, 200);
            
            $(el).bind("mouseleave", function(){ clearTimeout(timeShow); });
            
        }
        
    },
    
    tt_left: {
        
        show: function(el, opts) {
            
            var newEl       = $(el);
            var timeShow    = setTimeout(function(){

                opts = opts || {};

                if(tooltip.tt_AC == false || opts.textarea) {
                    
                    tooltip.tt_AC = true;
                    tooltip.tt_ID ++;

                    $(el).css({position: "relative", zIndex: 100});
                    $(el).parent().append("<div class='tt_w tt_default tt_left animated a_tt slideInRight' id='tt"+tooltip.tt_ID+"'><div class='tt_wrapped'><div class='tt_content'><div class='tt_header'>"+$(el).attr("tt_header")+"</div><div class='tt_text'>"+$(el).attr("tt_text")+"</div></div></div></div>");
                    
                    $("*").filter(function() {

                        return $(this).css('z-index') == 100;

                    }).each(function() {
                        
                        $(this).bind("mouseleave", function(el) {
                            
                            tooltip.tt_YE = true;
                            timeClose = setTimeout(function(){ tooltip.hide(newEl); }, 200);
                            
                        });
                        $(this).bind("mouseenter", function(){
                            
                            tooltip.tt_YE = false;
                            
                        });

                    });
                    
                    $("body").bind("mouseleave", function(){ tooltip.hide(newEl); });
                    
                    $("#tt" + tooltip.tt_ID).fadeIn(100);
                    $("#tt" + tooltip.tt_ID).css({

                        "top":  ($(el).position().top + $("#viewbox").scrollTop()) - ($("#tt" + tooltip.tt_ID).innerHeight() / 2) + ($(el).innerHeight() / 2),
                        "left": $(el).position().left + $(el).innerWidth() + 15

                    });

                    $("#tt" + parseInt(tooltip.tt_ID-1)).remove();

                }

            }, 200);
            
            $(el).bind("mouseleave", function(){ clearTimeout(timeShow); });
            
        }
        
    },
    
    tt_right: {
        
        show: function(el, opts) {
            
            var newEl       = $(el);
            var timeShow    = setTimeout(function(){

                opts = opts || {};

                if(tooltip.tt_AC == false || opts.textarea) {
                    
                    tooltip.tt_AC = true;
                    tooltip.tt_ID ++;

                    $(el).css({position: "relative", zIndex: 100});
                    $(el).parent().append("<div class='tt_w tt_default tt_right animated a_tt slideInLeft' id='tt"+tooltip.tt_ID+"'><div class='tt_wrapped'><div class='tt_content'><div class='tt_header'>"+$(el).attr("tt_header")+"</div><div class='tt_text'>"+$(el).attr("tt_text")+"</div></div></div></div>");
                    
                    $("*").filter(function() {

                        return $(this).css('z-index') == 100;

                    }).each(function() {
                        
                        $(this).bind("mouseleave", function(el) {
                            
                            tooltip.tt_YE = true;
                            timeClose = setTimeout(function(){ tooltip.hide(newEl); }, 200);
                            
                        });
                        $(this).bind("mouseenter", function(){
                            
                            tooltip.tt_YE = false;
                            
                        });

                    });
                    
                    $("body").bind("mouseleave", function(){ tooltip.hide(newEl); });
                    
                    $("#tt" + tooltip.tt_ID).fadeIn(100);
                    $("#tt" + tooltip.tt_ID).css({

                        "top":  ($(el).position().top + $("#viewbox").scrollTop()) - ($("#tt" + tooltip.tt_ID).innerHeight() / 2) + ($(el).innerHeight() / 2),
                        "left": $(el).position().left - $("#tt" + tooltip.tt_ID).innerWidth() - 15

                    });

                    $("#tt" + parseInt(tooltip.tt_ID-1)).remove();

                }

            }, 200);
            
        }
        
    },
    
    tt_black_down: {
        
        show: function(el, opts) {
            
            opts = opts || {};
            tooltip.tt_ID ++;

            $(el).parent().append("<div class='tt_w tt_black tt_down animated a_tt slideInDown' id='tt"+tooltip.tt_ID+"'><div class='tt_text'>"+$(el).attr("tt_text")+"</div></div>");
            $(el).bind("mouseleave", function(){ tooltip.hide(el); });

            if(opts.center) var l = $(el).position().left + ($(el).innerWidth() / 2) - 20;
                else var l = $(el).position().left;
            
            $("#tt" + tooltip.tt_ID).fadeIn(100);
            $("#tt" + tooltip.tt_ID).css({

                "top":  ($(el).position().top + $("#viewbox").scrollTop()) - $("#tt" + tooltip.tt_ID).height() - 10,
                "left": l

            });

            $("#tt" + parseInt(tooltip.tt_ID-1)).remove();
            
        }
        
    },
    
    hide: function(el) {

        if(tooltip.tt_YE) {
            
            tooltip.tt_AC = false;
            $("#tt" + tooltip.tt_ID).fadeOut(200);
            $(el).css("z-index", 1);
            $(el).unbind();
            
        } 

    },
    
    tt_ID: 0,
    tt_YE: true,
    tt_AC: false
    
}