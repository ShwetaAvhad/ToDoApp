const input=document.querySelector("#input-text");
const listContainer=document.querySelector("#list-Container");
const button=document.querySelector("button");
const completedContainer = document.querySelector("#completed-Container");

let listArray=[];

button.addEventListener("click",(e)=>{
        if(input.value ==='')
        {
            alert("Enter your task first");
        }
        else if(listArray.includes(input.value))
        {
            alert("task already exists");
            return
        }
        else
        {
            listArray.push(input.value);
            
            let li=document.createElement("li");
            
            let span=document.createElement("span");
            span.innerHTML="&#9679; "+" "+input.value;
            li.appendChild(span);
            listContainer.appendChild(li);

            const deleteButton=document.createElement("button");
            deleteButton.type="button";
            deleteButton.textContent="Delete";
            deleteButton.classList.add("btn","btn-danger");
            deleteButton.style.marginLeft="50%";
            li.appendChild(deleteButton); 

            deleteButton.addEventListener("click",(e)=>{
                let removeitem=e.target.parentElement;
                listContainer.removeChild(removeitem);
                let index=task.indexOf(removeitem);
                task.splice(index,1)               
            })
            
            const completeButton=document.createElement("button");
            completeButton.type="button";
            completeButton.textContent="Completed";
            completeButton.classList.add("btn","btn-success");
            completeButton.style.marginLeft="3%";
            completeButton.addEventListener('click',()=>{
                    li.remove(); 

                    let completedli = document.createElement("li");
                    completedli.innerHTML = span.innerHTML;

                    let undoButton = document.createElement("button");
                    undoButton.type = "button";
                    undoButton.textContent = "Undo";
                    undoButton.classList.add("btn", "btn-warning");
                    undoButton.style.marginLeft = "74%";
                    completedContainer.appendChild(completedli);

                    undoButton.addEventListener("click", (e) => {                        
                        completedli.remove();
                        listArray.push(e.target.parentElement);
                        let span=document.createElement("span");
                        span.innerHTML=input.value;
                        li.appendChild(span);
                        listContainer.appendChild(li);
                    });
                    completedli.appendChild(undoButton);
            })
        li.appendChild(completeButton);    
        }
        input.value="";
})

