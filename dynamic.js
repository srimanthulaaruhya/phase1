function getfile(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("Application/json");
	xhr.open('GET',file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	
	}
	xhr.send(null);
}
getfile("dynamic.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	languages(data.languages);

})
var left=document.querySelector(".left");
function profile(e){
	var img=document.createElement("img");
	img.src=e.Image;
	left.appendChild(img);
	var h2=document.createElement("h2");
	h2.textContent=e.Name;
	left.appendChild(h2);
	var h2=document.createElement("h2");
	h2.textContent=e.RollNo;
	left.appendChild(h2);
	var h2=document.createElement("h2");
	h2.textContent=e.Place;
	left.appendChild(h2);
	var h2=document.createElement("h2");
	h2.textContent=e.Gmail;
	left.appendChild(h2);

}
var right=document.querySelector(".right");
function career(e){
	var h1=document.createElement("h1");
	h1.innerHTML="RESUME BUILDING";
	right.appendChild(h1);
	var h1=document.createElement("h2");
	h1.textContent="career objective";
	right.appendChild(h1);
	var hr=document.createElement("hr");
	right.appendChild(hr);
	var p=document.createElement("P");
	p.textContent=e.Info;
	right.appendChild(p);

}
function education(e){
	var h2=document.createElement("h2");
	h2.innerHTML="EDUCATION DETAILS";
	right.appendChild(h2);
	var ww=document.createElement("hr");
	right.appendChild(ww);
	var table=document.createElement("table");
	table.border="1";
	var tr1="<tr><td>Sno</td><td>Degree</td><td>Institute</td><td>Percentage</td><td>Yop</td></tr>";
	var tr2="";
	for(i=0;i<e.length;i++)
	{
		tr2=tr2+"<tr><td>"+e[i].Sno+"</td><td>"+e[i].Degree+"</td><td>"+e[i].Institute+"</td><td>"+e[i].Percentage+"</td><td>"+e[i].Yop+"</td></tr>";

	}
	table.innerHTML=tr1+tr2;
	right.appendChild(table);

}
function languages(e){
	var h2=document.createElement("h2");
	h2.textContent="know languages";
	right.appendChild(h2);
	var tt=document.createElement("hr");
	right.appendChild(tt);
	var u1=document.createElement("u1");
	for(i=0;i<e.length;i++)
	{
		var li=document.createElement("li");
		li.innerHTML=e[i].Lang;
		u1.append(li);

    }

	right.append(u1);
}