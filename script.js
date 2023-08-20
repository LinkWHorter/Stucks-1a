function splitNumber() {
    var alltd = document.getElementsByTagName("td");
    var st = document.getElementById("stucks");
    var it = document.getElementById("items");
    var shb = document.getElementById("shb");
    for(i=0;i<alltd.length;i++){
            alltd[i].innerHTML="";
            alltd[i].style.opacity="0";
    }
    let number = document.getElementById("number").value;
    let groups = Math.ceil(number / 64);
    let group = Math.floor(number / 64);
    let remainder = number % 64;
    let table = document.getElementById("table");
    let rows = table.rows;
    console.log(rows);
    if (number>=0)
    {
        if (group==1) 
        {
            st.innerHTML = group + " стак";
        }
        if (group<=4 && group>1) 
        {
            st.innerHTML = group + " стака";
        }
        if (group>4 || group<1)
        {
            st.innerHTML = group + " стаков";
        }
        it.innerHTML = "и " + remainder + " предметов";
    }
    if (number<0) 
    {
        if (group==1) 
        {
            st.innerHTML = group + " стак, мля,";
        }
        if (group<=4 && group>1) 
        {
            st.innerHTML = group + " стака, мля,";
        }
        if (group>4 || group<1)
        {
            st.innerHTML = group + " стаков, мля,";
        }
        it.innerHTML = "и " + remainder + " предметов, <br>но на кой тебе минус, гений";
    }

    shb.innerHTML = "<br>"+Math.floor(group/27);

    if (isNaN(group)) {
        st.innerHTML = "Введите правильное";
        it.innerHTML = " число";
        return;
    }

    for (let i = 0; i < groups; i++) {     
          let cells = rows[i%6].cells;
          let value = i == groups - 1 && remainder != 0 ? remainder : 64;
          cells[Math.floor(i/6)].style.opacity="1";
          cells[Math.floor(i/6)].innerHTML = value;
    }
    
  }