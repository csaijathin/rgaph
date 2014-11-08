
MenuHints={};function menuMouseover(e,span)
{e=RGraph.FixEventObject(e);MenuHints.Show(e,span);}
function menuMouseout(e)
{e=RGraph.FixEventObject(e);MenuHints.Hide();}
MenuHints.Show=function(e)
{var tagName=e.target.tagName.toLowerCase();var id=e.target.innerHTML.replace(/<[^>]+>/g,'').toLowerCase();var height=e.target.offsetHeight;var width=e.target.offsetWidth;var divXY=MenuHints.getXY(e.target);var text=e.target.getAttribute('data-tooltip')
    var div=$('<div>').css({left:0,top:divXY[1]+height+15+'px',padding:'9px',backgroundColor:'black',color:'white',textAlign:'center',position:'fixed',fontWeight:'bold',fontFamily:'Arial',fontSize:'90%',boxShadow:'1px 1px 2px gray',borderRadius:'2px',zIndex:5}).html(text).appendTo($('body')).get(0);div.style.width=div.offsetWidth+'px';var img=$('<img>').attr({src:'/images/menu-hover-pointer.png',width:10,height:10}).css({position:'absolute',left:'50px',top:'-10px'}).appendTo(div).get(0);div.style.left=e.target.offsetLeft+(e.target.offsetWidth/2)-(div.offsetWidth/2)+'px';img.style.left=(div.offsetWidth/2)-5+'px';clearTimeout(MenuHints.hidetimer);if(!MenuHints.div){MenuHints.Fadein(div)}else{MenuHints.div.style.opacity=0;MenuHints.div.style.display='none';MenuHints.div=null;div.style.opacity=1;}
    if(div.addEventListener){div.addEventListener('mouseover',function(e)
    {clearTimeout(MenuHints.hidetimer);});div.addEventListener('mousemove',function(e)
    {clearTimeout(MenuHints.hidetimer);});div.addEventListener('mouseout',function(e)
    {MenuHints.Fadeout();});}else if(div.attachEvent){div.attachEvent('onmouseover',function(e){clearTimeout(MenuHints.hidetimer);});div.attachEvent('onmousemove',function(e){clearTimeout(MenuHints.hidetimer);});div.attachEvent('onmouseout',function(e){MenuHints.Fadeout();});}
    MenuHints.div=div;}
MenuHints.Hide=function()
{MenuHints.hidetimer=setTimeout(function()
{MenuHints.Fadeout(MenuHints.div);},500)}
MenuHints.Fadein=function(div)
{div.style.opacity=1;MenuHints.fading=false;}
MenuHints.Fadeout=function()
{var div=MenuHints.div;var delay=250;if(!RGraph.ISOLD){setTimeout(function(){MenuHints.fading=true;div.style.opacity=0.9;},delay+30)
    setTimeout(function(){div.style.opacity=0.8;},delay+45)
    setTimeout(function(){div.style.opacity=0.7;},delay+60)
    setTimeout(function(){div.style.opacity=0.6;},delay+75)
    setTimeout(function(){div.style.opacity=0.5;},delay+90)
    setTimeout(function(){div.style.opacity=0.4;},delay+105)
    setTimeout(function(){div.style.opacity=0.3;},delay+120)
    setTimeout(function(){div.style.opacity=0.2;},delay+135)
    setTimeout(function(){div.style.opacity=0.1;},delay+150)}
    setTimeout(function()
    {div.style.opacity=0;MenuHints.fading=false;div.style.display='none';div.style.visibility='hidden';div=null;},delay+165);}
MenuHints.getXY=function(obj)
{var x=0;var y=0;var el=obj;do{x+=el.offsetLeft;y+=el.offsetTop;el=el.offsetParent;}while(el&&el.tagName.toLowerCase()!='body');var paddingLeft=obj.style.paddingLeft?parseInt(obj.style.paddingLeft):0;var paddingTop=obj.style.paddingTop?parseInt(obj.style.paddingTop):0;var borderLeft=obj.style.borderLeftWidth?parseInt(obj.style.borderLeftWidth):0;var borderTop=obj.style.borderTopWidth?parseInt(obj.style.borderTopWidth):0;if(navigator.userAgent.indexOf('Firefox')>0){x+=parseInt(document.body.style.borderLeftWidth)||0;y+=parseInt(document.body.style.borderTopWidth)||0;}
    return[x+paddingLeft+borderLeft,y+paddingTop+borderTop];}
/**
 * Created by Sai Jathin Chekhilla on 07/11/2014.
 */
