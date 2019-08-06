function myFunction() {
    let txt = String(document.getElementById("input").value);
    let vietnam = ["xin chao", "tam biet", "con meo", "tinh yeu", "qua tao", "trai dat", "con ho"];
    let english = ["hello", "good bye", "cat", "love", "apple", "earth", "tiger"];
    let checker = false;
    let result = [];
    for (let i = 0; i < english.length; i++){
        if (txt === english[i]){
            result.push(vietnam[i]);
            checker = true;

        }
    }
    if ( checker == false){
         alert("No search words found!")
    }
    document.getElementById('output').innerHTML = result;
}