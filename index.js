
//for smooth scrolling
// document.getElementById('proj1-link').addEventListener('click', ()=> {
// 	let elmnt = document.getElementById('proj1');
// 	elmnt.scrollTo(0, 100);
// });

// document.getElementById('proj2-link').addEventListener('click', ()=> {
// 	let elmnt = document.getElementById('proj2');
// 	elmnt.scrollIntoView({behavior: "smooth", block: "end", inline: "start"});
	
// });
document.getElementById('name').addEventListener('click', ()=> {
	let elmnt = document.getElementById('banner');
	elmnt.scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
});

document.getElementById('bio-link').addEventListener('click', ()=> {
	let elmnt = document.getElementById('bio');
	elmnt.scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
});

document.getElementById('contact-link').addEventListener('click', ()=> {
	let elmnt = document.getElementById('contact');
	elmnt.scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
});

// toggle class for hamburger x animation
$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
		$('#links').toggleClass('open');
	});
});







	