LoggedIn = new Meteor.Collection('loggedIn');
MainChat = new Meteor.Collection('mainMessages');
Challenges = new Meteor.Collection('challenges');
Games = new Meteor.Collection('games');

// game bits
leftTank=[0,0,0,0,{"path":"M69.988,405.009H28.229c0,0-8.458,4.368,0,9.007h41.759 C69.988,414.016,81.088,405.009,69.988,405.009z","fill":"#808285","type":"path","stroke":"#000000"},{"fill":"#939598","type":"circle","stroke":"#000000","cy":409.412,"cx":66.926,"r":3.379},{"fill":"#939598","type":"circle","stroke":"#000000","cy":409.412,"cx":57.746,"r":3.379},{"fill":"#939598","type":"circle","stroke":"#000000","cy":409.412,"cx":48.566,"r":3.378},{"fill":"#939598","type":"circle","stroke":"#000000","cy":409.513,"cx":30.207,"r":3.379},{"fill":"#939598","type":"circle","stroke":"#000000","cy":409.412,"cx":39.386,"r":3.379},{"path":"M77.835,407.618H28.019c0,0-4.01,1.631-3.545-5.256 c0.463-6.887,4.105-4.98,7.747-4.345h38.94L77.835,407.618z","fill":"#808285","type":"path","stroke":"#000000"},{"path":"M54.661,396.31 88.088,380.239 86.554,376.864     52.469,391.487   z","fill":"#808285","type":"path","stroke":"#000000"},{"path":"M61.125,398.084c0,0-1.238-8.901-6.211-9.564H43.306 c0,0-6.023-0.769-5.167,9.564H61.125z","fill":"#808285","type":"path","stroke":"#000000"}];
rightTank=[0,0,0,0,{"path":"M602.6,415.603h41.76c0,0,8.457,4.368,0,9.007H602.6 C602.6,424.609,591.5,415.603,602.6,415.603z","fill":"#808285","type":"path","stroke":"#000000"},{"fill":"#939598","type":"circle","stroke":"#000000","cy":420.006,"cx":605.662,"r":3.379},{"fill":"#939598","type":"circle","stroke":"#000000","cy":420.006,"cx":614.842,"r":3.379},{"fill":"#939598","type":"circle","stroke":"#000000","cy":420.006,"cx":624.021,"r":3.379},{"fill":"#939598","type":"circle","stroke":"#000000","cy":420.106,"cx":642.381,"r":3.379},{"fill":"#939598","type":"circle","stroke":"#000000","cy":420.006,"cx":633.201,"r":3.379},{"path":"M594.753,418.212h49.816c0,0,4.01,1.631,3.546-5.256 c-0.463-6.887-4.105-4.98-7.748-4.345h-38.939L594.753,418.212z","fill":"#808285","type":"path","stroke":"#000000"},{"path":"M617.928,406.903 584.5,390.833 586.034,387.458     620.119,402.081   z","fill":"#808285","type":"path","stroke":"#000000"},{"path":"M611.463,408.678c0,0,1.238-8.901,6.212-9.564h11.606 c0,0,6.023-0.769,5.168,9.564H611.463z","fill":"#808285","type":"path","stroke":"#000000"}];
ground=[0,0,0,0,{"path":"M801,363.386c-7.556,0.071-25.453,0.073-47.058-1.063c-28.738-1.513-24.201,15.653-24.201,15.653 c5.546,34.308-27.73,57.959-37.814,53.421s-38.822-9.075-65.041-9.58c-26.218-0.504-76.637,9.58-78.149,0 c-1.513-9.579,17.143-18.15-18.151-27.73c-35.293-9.579-24.705-49.915-35.293-84.704s-34.789-16.134-34.789-16.134 c-10.084,16.134-1.513,29.747-12.605,58.485c-11.092,28.739-46.386,42.353-46.386,42.353v97.31H801V363.386z","fill":"#006838","type":"path","stroke":"none"},{"path":"M801,367.73c-9.359-0.052-22.73-0.298-37.909-1.097c-29.238-1.539-24.622,15.925-24.622,15.925 c5.643,34.904-28.212,58.967-38.472,54.35c-10.259-4.616-39.497-9.232-66.171-9.746c-26.673-0.513-77.969,9.746-79.507,0 c-1.539-9.746,17.44-18.466-18.467-28.212c-35.906-9.746-25.134-50.782-35.906-86.176c-10.771-35.394-35.394-16.415-35.394-16.415 c-10.259,16.415-1.539,30.265-12.824,59.503c-11.284,29.238-47.191,43.088-47.191,43.088v99H801V367.73z","fill":"#754C29","type":"path","stroke":"none"},{"path":"M801,500V373.766c-7.575,0.072-25.548,0.076-47.248-1.081c-28.847-1.539-24.292,15.925-24.292,15.925 c5.566,34.904-27.835,58.966-37.957,54.35c-10.121-4.616-38.968-9.233-65.284-9.746s-76.925,9.746-78.443,0 c-1.518-9.746,17.207-18.467-18.218-28.213c-35.427-9.746-24.799-50.782-35.427-86.176c-10.627-35.394-34.92-16.414-34.92-16.414 c-10.121,16.414-1.518,30.264-12.652,59.502C435.426,391.15,400,405,400,405v95H801z","fill":"#006838","type":"path","stroke":"none"},{"path":"M458.481,404.114c-86.075-82.489-103.696-12.043-103.696-12.043c-23.043,7.226-86.75-7.224-86.75-7.224 c-29.142-14.452,18.977-43.354-4.066-39.139c-23.043,4.215-28.465-14.451-31.854-36.729c-3.388-22.278-1.356-53.588-33.209-51.781 c-31.854,1.806-30.498,22.881-37.276,43.954c-6.777,21.074-26.432,21.074-26.432,21.074 c-44.972,1.428-33.208,89.715-33.208,89.715c-16.266-4.214-88.784,0-88.784,0C14.027,398.207,5.48,395.66,0,395.42v91.185h509.987 v-83.093C495.756,407.124,458.481,404.114,458.481,404.114z","fill":"#006838","type":"path","stroke":"none"},{"path":"M460.804,411.416c-86.718-83.705-104.47-12.221-104.47-12.221c-23.217,7.333-87.402-7.33-87.402-7.33 c-29.361-14.666,19.118-43.992-4.097-39.715c-23.216,4.277-28.678-14.665-32.092-37.271c-3.414-22.606-1.366-54.378-33.458-52.546 c-32.093,1.833-30.727,23.218-37.556,44.603c-6.828,21.385-26.63,21.385-26.63,21.385c-45.31,1.448-33.458,91.038-33.458,91.038 c-16.388-4.276-89.449,0-89.449,0C12.964,406.331,5.489,403.224,0,402.674v92.449h512.699l3.101-70.885 C501.458,427.902,460.804,411.416,460.804,411.416z","fill":"#754C29","type":"path","stroke":"none"},{"path":"M2,500h480.695l51.021-0.36l-0.77-85.904c-14.919,3.84-54.11,1.004-54.11,1.004 c-91.197-84.646-109.059-11.681-109.059-11.681c-24.143,7.642-91.213-6.827-91.213-6.827 c-30.751-14.724,19.539-44.961-4.634-40.432c-24.171,4.528-30.041-14.73-33.808-37.736c-3.766-23.008-1.919-55.394-35.37-53.29 c-33.451,2.104-31.833,23.882-38.758,45.72c-6.925,21.839-27.576,21.983-27.576,21.983c-47.238,1.809-34.062,93-34.062,93 c-17.129-4.237-93.281,0.657-93.281,0.657C11.694,414.202,5.435,410.48,0,409.47v90.915C0.579,500.142,1.243,500,2,500z","fill":"#006838","type":"path","stroke":"none"}];
map=[0,0,800,500,{"fill":"#00AEEF","y":1,"type":"rect","stroke":"none","x":0.5,"width":801,"height":497.95},{"path":"M446.277,47.067c-8.871-14.045,12.566-17.742,19.22-10.35 c5.914-8.131,5.914-10.349,16.263-11.827c14.785-2.218,38.44-2.218,50.268,8.131c4.436-14.785,40.657-14.785,53.225-11.088 c6.652,2.218,5.174,4.435,9.609,8.871c5.175,5.175,4.436,4.436,11.089,8.131c28.091,14.785,19.959,42.875-9.61,45.832 c-17.741,2.218-29.568,9.61-49.527,5.175c-5.175-1.479-11.828-2.218-17.003-4.436c-2.218-0.739-3.696-5.175-5.174-5.914 c-9.61-2.218-17.003,3.696-26.612,4.435c-11.828,0.739-20.699-7.392-29.569-13.306c-2.957-2.217-5.913-7.392-8.132-8.871 c-2.957-2.218-7.392-1.479-10.349-4.435C447.756,54.459,447.017,50.024,446.277,47.067","fill":"#F1F2F2","type":"path","stroke":"#F1F2F2"},{"path":"M87.496,45.893c10.083,0.685,10.083,5.48,16.385,7.535 c11.344,3.425,8.822,2.055,22.687,0c27.728-4.11,44.113-3.425,68.061,5.48c2.52,0.685,1.26,4.11,2.52,4.11 c3.782,2.055,10.083,0.685,15.125,2.74c13.864,5.48,12.604,3.425,13.864,12.33c0,2.055-6.302,3.425-6.302,5.479 c0,2.74,6.302,5.48,8.823,8.22c5.042,4.11,21.427,10.96,15.125,17.125c-6.303,6.85-59.238,8.22-70.582,8.904 c-15.124,0-32.77,0.685-47.894-2.055c-8.823-1.37-10.083-4.11-20.167-4.795c-25.208-1.37-41.592,8.905-41.592-11.645 c-13.864-0.685-30.25,3.425-39.072-3.425c-6.302-5.48-1.26-15.069,3.781-19.864c-2.521,0-6.302-0.685-8.822-0.685 c0-7.535,18.906-8.905,30.249-10.275C49.685,65.072,59.768,44.523,87.496,45.893z","fill":"#F1F2F2","type":"path","stroke":"#F1F2F2"},{"path":"M800,99.762c-1.82-1.755-4.137-2.679-8.77-3.418 c-13.238-2.218-34.418-2.218-45.009,8.131c-3.972-14.784-36.405-14.784-47.657-11.088c-5.957,2.218-4.633,4.436-8.604,8.871 c-4.634,5.174-3.972,4.435-9.929,8.131c-25.152,14.785-17.871,42.875,8.605,45.832c15.885,2.217,26.476,9.61,44.347,5.174 c4.634-1.479,10.591-2.218,15.224-4.435c1.986-0.739,3.31-5.175,4.633-5.914c8.605-2.218,15.225,3.696,23.829,4.436 c9.196,0.642,16.395-5.404,23.331-10.879V99.762z","fill":"#F1F2F2","type":"path","stroke":"#F1F2F2"},{"path":"M409.162,162.74c-6.263-0.492-6.263-3.939-10.178-5.416 c-7.045-2.462-5.479-1.477-14.091,0c-17.223,2.954-27.4,2.462-42.274-3.939c-1.564-0.491-0.782-2.954-1.564-2.954 c-2.349-1.477-6.264-0.492-9.395-1.97c-8.611-3.938-7.828-2.462-8.611-8.862c0-1.477,3.914-2.461,3.914-3.938 c0-1.97-3.914-3.939-5.479-5.908c-3.131-2.954-13.309-7.878-9.395-12.31c3.915-4.924,36.794-5.908,43.84-6.4 c9.394,0,20.354-0.492,29.747,1.477c5.48,0.985,6.264,2.955,12.526,3.447c15.657,0.984,25.834-6.401,25.834,8.37 c8.611,0.492,18.788-2.462,24.269,2.462c3.914,3.939,0.782,10.831-2.349,14.278c1.565,0,3.914,0.492,5.479,0.492 c0,5.416-11.743,6.4-18.788,7.386C432.647,148.954,426.385,163.724,409.162,162.74z","fill":"#F1F2F2","type":"path","stroke":"#F1F2F2"}];

leftPath = "M801,363.386c-7.556,0.071-25.453,0.073-47.058-1.063c-28.738-1.513-24.201,15.653-24.201,15.653 c5.546,34.308-27.73,57.959-37.814,53.421s-38.822-9.075-65.041-9.58c-26.218-0.504-76.637,9.58-78.149,0 c-1.513-9.579,17.143-18.15-18.151-27.73c-35.293-9.579-24.705-49.915-35.293-84.704s-34.789-16.134-34.789-16.134 c-10.084,16.134-1.513,29.747-12.605,58.485c-11.092,28.739-46.386,42.353-46.386,42.353v97.31H801V363.386z";
rightPath = "M458.481,404.114c-86.075-82.489-103.696-12.043-103.696-12.043c-23.043,7.226-86.75-7.224-86.75-7.224 c-29.142-14.452,18.977-43.354-4.066-39.139c-23.043,4.215-28.465-14.451-31.854-36.729c-3.388-22.278-1.356-53.588-33.209-51.781 c-31.854,1.806-30.498,22.881-37.276,43.954c-6.777,21.074-26.432,21.074-26.432,21.074 c-44.972,1.428-33.208,89.715-33.208,89.715c-16.266-4.214-88.784,0-88.784,0C14.027,398.207,5.48,395.66,0,395.42v91.185h509.987 v-83.093C495.756,407.124,458.481,404.114,458.481,404.114z"
// do intial check if user is logged in on the server
Meteor.startup(function(){
	loggedLocal();
});

Session.set('error', {});

Template.hello.events = {
	'click #logout': function(e, tpl){
		e.preventDefault();

		console.log('logout');

		logoutLocal();
	}
};

Template.gameRoom.rendered = function(){
	paper = new Raphael(document.getElementById('game'), 910, 500);
	var mapEle = paper.add(map);
	var groundEle = paper.add(ground);
	var leftTankEle = paper.add(leftTank);
	var rightTankEle = paper.add(rightTank);
	collidables = [groundEle, leftTankEle, rightTankEle];
	var parameters = {
		angle: 165,
		power: 85
	};
	fireProjectile(paper, leftTankEle, parameters);
};

fireProjectile = function(paper, tank, parameters){
	var scale = 1.2;
	var bbox = tank.getBBox();

	var y = bbox.y;
	var x = bbox.x + bbox.width;

	var bullet = paper.circle(x, y, 5);
	bullet.attr({fill: "black"});


	var frameCount = 0;
	parameters.angle = parameters.angle - 90;
	parameters.power = parameters.power * scale;
	var v0x = parameters.power * Math.cos(parameters.angle * Math.PI/180);
	var v0y = parameters.power * Math.sin(parameters.angle * Math.PI/180);
	var startX = x;
	var startY = y;
	var gravity = 9.8;
	var mapHeight = 500;
	var mapWidth = 800;
	var radius = 5;

	gameLoop = setInterval(function(){
		if(y < mapHeight - radius){
			y = startY - ( v0y * frameCount - (1/2 * gravity * Math.pow(frameCount,2)) );
		}
		else{
			clearInterval(gameLoop);
		}

		if( x < mapWidth - radius){
			x = startX + v0x * frameCount;
		}
		else{
			clearInterval(gameLoop);
		}
		
		bullet.attr({
			cx: x,
			cy: y
		});

		var eleSet = paper.getElementsByPoint(x, y);
		
		_.each(eleSet, function(ele){
			if(_.contains(collidables[0], ele)){
				clearInterval(gameLoop);
				console.log('collision at x: '+x+', y: '+y);
				bullet.animate({r: 30}, 750, ">", function(){
					bullet.remove();
				});
			}
			else if(_.contains(collidables[1], ele)){ // collision with player tank (left)
				clearInterval(gameLoop);
				console.log('collision at x: '+x+', y: '+y);
				bullet.animate({r: 30}, 750, ">", function(){
					bullet.remove();
				});

				// player killed, do stuff
				alert("Left Player killed!");
			}
			else if(_.contains(collidables[2], ele)){ // collision with player tank (right)
				clearInterval(gameLoop);
				console.log('collision at x: '+x+', y: '+y);
				bullet.animate({r: 30}, 750, ">", function(){
					bullet.remove();
				});

				// player killed, do stuff
				alert("Right Player killed!");
			}
		});

		frameCount+=.1;
	}, 1000 / 30);
};

Template.chat.rendered = function(){
	$('#mainChat').scrollTop($('.innerChat').height());
};

Template.userList.users = function(){
	return LoggedIn.find({});
};

Meteor.autorun(function(){
	if(Session.get('credentials')){
		var uid = Session.get('credentials').uid;
		Meteor.subscribe('challenges', uid);
	}
	Meteor.subscribe('loggedIn');
	Meteor.subscribe('mainMessages');
	Meteor.subscribe('games');
});

Meteor.setInterval(function(){ // this checks to see if user is logged in
	console.log('checking if logged in on the server');
	loggedLocal();
}, 60000);