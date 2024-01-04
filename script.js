const section1 = document.querySelector('.secOne');
    const section2 = document.querySelector('.secTwo');
    const firstDiv = document.querySelector('.firstDiv');
    const btn = document.querySelector('button');
    const input = document.querySelector('input');

    console.log(section1.style);
    firstDiv.style.fontWeight = 'bold';
    input.style.opacity = '1';
    input.style.textAlign = 'center';
    input.style.outline = 'none';
    input.style.border = '1px solid lightgrey';

    btn.addEventListener('click', (e) =>{
        // console.log('clicking');

        if (input.value == '') {
            alert('You can\'t add an empty Todo')
        } else {
            section2.style.opacity = '1';
            let toDo = document.createElement('div');

            //creating the Todo container and styling

            toDo.style.padding = '5px 8px';
            toDo.style.borderRadius = '5px';
            toDo.style.backgroundColor = 'rgb(13, 110, 253)';
            toDo.style.color = '#fff';
            toDo.style.margin = '5px';
            toDo.style.cursor = 'pointer';
            toDo.style.fontWeight = 'bold';

            toDo.textContent = input.value;
            input.value = '';
            section2.append(toDo)
        }
        
    })

    // const Todos = document.querySelectorAll('div');

    // Todos.forEach(() => {
    //     Todos.addEventListener('click', () =>{
    //         Todos.target.remove()
    //     })
    // });
  
    // using event bubbling by calling the parent container

    section2.addEventListener('click', (e)=>{
        if (e.target.tagName === 'DIV') {
            e.target.style.textDecoration = 'line-through';
            // e.target.remove();
        }
    })
