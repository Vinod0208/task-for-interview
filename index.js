	var item = [];
	getItem = () => {
	
	var data = "";
	item.map((xitem,  index)  =>  {
	data = data + "<tr>";
	data = data + "<td align='center'>" + (index+1) + "</td>";
	data = data + "<td align='center'>" + xitem + "</td>";
	data =data +"<td align='center'> <button onclick ='delItem(" +index +")'> Delete </button></td>";
	
	data = data + "</tr>";
	console.log(data);
	});
	document.getElementById("itemlist").innerHTML = data;
	};
	
	save = () => {
	
	var newItem = document.getElementById('one').value;
	newItem += document.getElementById('two').value;
	newItem += document.getElementById('three').value;
	newItem += document.getElementById('four').value;
	console.log(newItem)
	item.push(newItem);
	getItem();
	document.getElementById('one').value = "";
	document.getElementById('two').value = "";
	document.getElementById('three').value = "";
	document.getElementById('four').value = "";
	
	};
	delItem = (index = null) => {
	var status = confirm("are you sure !");
	if (status == true) {	
	item.splice(index, 1);
	getItem();
	
	
	}
	};




