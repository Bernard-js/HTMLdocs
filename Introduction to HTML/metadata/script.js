var list = document.createElement('ul')
var html = document.querySelector('html')

document.body.appendChild(list)
document.body.appendChild(info)

html.onclick = function(){
    var listItem = document.createElement('li')
    var listContent = window.prompt('what do you want to be on the list?')
    if(listContent.length > 0){
        listItem.textContent = listContent
        list.appendChild(listItem)
    }
    

    listItem.onclick = function(e){
        e.stopPropagation()
        var listContent = window.prompt('enter new content for your items list: ')
        if(listContent.length > 0){
            this.textContent = listContent;
        }
    }
}