let input = document.querySelector('.message')
let btn = document.querySelector('.add')
let ul = document.querySelector('.todo')

let todoList = []

if(localStorage.getItem('TODO')) {
    todoList = JSON.parse(localStorage.getItem('TODO'))
    createItemInArr()
}



btn.addEventListener('click', function() {
    let Container = document.createElement('div')
    let buttonDone = document.createElement('button')
    let buttonDelete = document.createElement('button')
    buttonDelete.textContent = 'Удалить'
    buttonDone.textContent = 'Готово'
    Container.classList.add('btn-container')
    buttonDelete.classList.add('btn', 'del')
    buttonDone.classList.add('btn', 'done')
    Container.append(buttonDone)
    Container.append(buttonDelete)
    
    if(!input.value) return
    let item = document.createElement('li')
    item.classList.add('list-item')
    createItem(item)
    localStorage.setItem('TODO', JSON.stringify(todoList))
    item.append(Container)
    ul.prepend(item)
    buttonDone.addEventListener('click', function(){
        if(buttonDone.parentElement.parentElement.classList.contains('btnDone')) {
            buttonDone.parentElement.parentElement.classList.remove('btnDone')
        } else {
            buttonDone.parentElement.parentElement.classList.add('btnDone')
        }
    })
    buttonDelete.addEventListener('click', function(){
        if (confirm('Вы уверены?')) {
            buttonDelete.parentElement.parentElement.remove()
            let index = todoList.indexOf(buttonDelete.parentElement.parentElement.innerText.split('').reverse().join('').substring(13).split('').reverse().join(''))
            todoList.splice(index, 1)
            localStorage.removeItem('TODO')
            localStorage.setItem('TODO', JSON.stringify(todoList))
        }
    })
    localStorage.setItem('TODO', JSON.stringify(todoList))
    input.value = ''

})

function createItem(item) {
    item.textContent = input.value
    todoList.push(item.textContent)
    return item
}

function createItemInArr() {
    for(i in todoList) {
        let Container = document.createElement('div')
        let buttonDone = document.createElement('button')
        let buttonDelete = document.createElement('button')
        buttonDelete.textContent = 'Удалить'
        buttonDone.textContent = 'Готово'
        Container.classList.add('btn-container')
        buttonDelete.classList.add('btn', 'del')
        buttonDone.classList.add('btn', 'done')
        Container.append(buttonDone)
        Container.append(buttonDelete)
        let item = document.createElement('li')
        item.append(Container)
        item.classList.add('list-item')
        item.textContent = todoList[i]
        item.append(Container)
        buttonDone.addEventListener('click', function(){
            if(buttonDone.parentElement.parentElement.classList.contains('btnDone')) {
                buttonDone.parentElement.parentElement.classList.remove('btnDone')
            } else {
                buttonDone.parentElement.parentElement.classList.add('btnDone')
            }
        })
        buttonDelete.addEventListener('click', function(){
            if (confirm('Вы уверены?')) {
                buttonDelete.parentElement.parentElement.remove()
                let index = todoList.indexOf(buttonDelete.parentElement.parentElement.innerText.split('').reverse().join('').substring(13).split('').reverse().join(''))
                todoList.splice(index, 1)
                localStorage.removeItem('TODO')
                localStorage.setItem('TODO', JSON.stringify(todoList))

            }
        })
        // localStorage.removeItem('TODO')
        localStorage.setItem('TODO', JSON.stringify(todoList))

        
        ul.prepend(item)
    }
}


