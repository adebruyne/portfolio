function toggle_visibility(id){
    var item = document.getElementById(id);
    if(item.style.display == 'block'){
        item.style.display = 'none';
    } else {
        item.style.display = 'block';
    }
}