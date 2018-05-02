$(function () {
	// body...
	$('body').append('Hello World');
});

$(function(){
	var br=$('<div/>');
	br.append($('<div/>',{text:'Brazil'}));
	br.append($('<img/>',{src:'../static/flags/br.gif'}));
	$('body').append(br);
	$('img').css('border','solid 3px gray');
	$('img').css('width',200);
	$('div div').css('text-align','center');
	$('bdoy').css('font-family','arial');
	$('body').css('font-size','x-large');
	
	
	
});
$(function(){
	var fr=$('<div/>');
	fr.append($('<div/>',{text:'France'}));
	fr.append($('<img/>',{src:'../static/flags/fr.gif'}));
	$('body').append(fr);
	$('img').css('border','solid 3px gray');
	$('img').css('width',200);
	$('div div').css('text-align','center');
	$('bdoy').css('font-family','arial');
	$('body').css('font-size','x-large');


});
$(function(){
	var gr=$('<div/>');
	gr.append($('<div/>',{text:'Greece'}));
	gr.append($('<img/>',{src:'../static/flags/gr.gif'}));
	$('body').append(gr);
	$('img').css('border','solid 3px gray');
	$('img').css('width',200);
	$('div div').css('text-align','center');
	$('bdoy').css('font-family','arial');
	$('body').css('font-size','x-large');
	
});

$(function(){
	$('body>div').css({
		'width':'206',
		'border':'2px solid black',
		'padding':'2px',
		'display':'inline-block',
		'margin':'1ex',
	});
});
$(function(){

	var clist=[
	["br","Brazil"],
	["fr","France"],
	["gr","Greece"],
	["za","South Africa"],
	];




$(function (){
	createOne();
})
function createOne(){
	var i=Math.floor(clist.length*Math.random());
	var code=clist[i][0];
	var name=clist[i][1];
	var qu=$('<div id="qu"/>');
	qu.append($('<div/>',{text:name,id:'ans'}).hide());
	qu.append($('<img/>',{src:'../static/flags/'+code+'.gif'}));
	qu.append($('<input/>',{id:'response'}));
	$('body').append(qu);
	$('#response').keyup(function(){
	 if($('#response').val()==$('#ans').text()){
		alert("Well Done");

	}
});
}
});