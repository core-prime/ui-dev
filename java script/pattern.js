let num=5;
for (let i=1; i<=num; i++){
    for (let j=1; j<=i; j++){
        document.write('*')
    }
    document.write("<br>")

}

 document.write("<br>")

for (let i=num; i>=1; i--){
    for (let j=1; j<=i; j++){
        document.write('*')
    }
    document.write("<br>")

}
document.write("<br>")

for (let i=num; i>=1; i--){
    for (let j=1; j<=i; j++){
        document.write(i)
    }
    document.write("<br>")

}
document.write("<br>")

for (let i=1; i<=num; i++){
    for (let j=1; j<=num; j++){
        document.write('*')
    }
    document.write("<br>")

}
document.write("<br>")

for (let i=1; i<=num; i++){
    for (let j=1; j<=num; j++){
      if (i==1 || i==num || j==1 || j==num){

        document.write('*')
    } 
    else{
        document.write('&nbsp;&nbsp;')      
    }
}
 document.write("<br>")
}

let n =7
let pattern = "";

for (let i=n; i>=1; i--){
    for (let j=0; j<n-i; j++){
        pattern+="&nbsp";
    }
    for (let k =1;k<=i;k++){
        pattern+="*&nbsp";
    }
    pattern+= "<br>"
}


for (let i=2; i<=n; i++){
    for (let j=0; j<n-i; j++){
        pattern+="&nbsp";
    }
    for (let k =1;k<=i;k++){
        pattern+="*&nbsp";
    }
    pattern+= "<br>"
}
document.write(pattern)