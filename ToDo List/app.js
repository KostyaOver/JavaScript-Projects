let list = document.querySelector('.list');
let input = document.querySelector('input');
let addBtn = document.querySelector('.add');
let isEdit = false;



input.addEventListener('keypress', function(event) {
    func(event);
})

addBtn.addEventListener('click', function(event) {
    func(event);
});

function func(event) {
    if(event.key == 'Enter' || event.type == 'click' && isEdit == false) {
        let li = document.createElement('li');
        let text = document.createElement('span');

        let checkbox = document.createElement('span');
        checkbox.classList.add('checkbox');
        checkbox.addEventListener('click', function(){
            checkbox.classList.toggle('checkbox');
            checkbox.classList.toggle('checked');
            text.classList.toggle('checked-text');
            text.classList.toggle('text');
        })
        li.appendChild(checkbox);
        
        text.innerHTML = input.value;
        text.classList.add('text');
        text.addEventListener('dblclick', function(){
            input.value = this.innerHTML;
            isEdit = true;
            input.focus();
            let newText = this;

            input.addEventListener('keypress' ,function(event) {
                if(event.key == 'Enter' && isEdit == true){
                    newText.innerHTML = input.value;
                    input.value = '';
                    isEdit = false;
                }
            })
        })
        li.appendChild(text);
        input.value = '';

        let remove = document.createElement('img');
        remove.classList.add('remove');
        remove.src = 'trash.svg';
        remove.addEventListener('click', function(){
            this.parentElement.remove();
        })
        li.appendChild(remove);


        list.appendChild(li)
    }
}