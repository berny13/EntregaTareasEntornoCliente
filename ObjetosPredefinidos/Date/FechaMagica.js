function Magic(str) {
	var day =  str.split(' ')[0];
	var month = str.split(' ')[1];
	return str.endsWith(day * month) ? true : false;
}
