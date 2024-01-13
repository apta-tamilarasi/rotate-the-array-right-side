let a=Number(prompt("RIGHT: Enter which time you want rotate"))
let b=Number(prompt("LEFT: Enter which time you want rotate"))
let arr=[1,2,3,4,5,6,7,8,9]
let arr1=[]
let arr2=[]

	for(j=0;j<a;j++){
		arr1.push(arr[j+(arr.length)-a])
	}
	for(j=0;j<=(arr.length-1)-a;j++){
		arr1.push(arr[j])
	}
	for(j=b;j<arr.length;j++){
		arr2.push(arr[j])
	}
	for(j=0;j<b;j++){
		arr2.push(arr[j])
	}


document.write("arr=[1,2,3,4,5,6,7,8,9]"+"<br>"+"<br>")
document.write("RIGHT SIDE ROTATE = ["+arr1+"]"+"<br>"+"<br>")
document.write("LEFT SIDE ROTATE = ["+arr2+"]"+"<br>"+"<br>")