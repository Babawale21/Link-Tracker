let myLeads = []
const inputEl = document.querySelector("#input-el")
const button = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")
let ulEl = document.querySelector("#ul-el")
const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))
let tabBtn = document.querySelector("#tab-btn")
const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen"}
]



if(leadsFromStorage) {
    myLeads = leadsFromStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    console.log("crazy")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

    })

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


button.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


function render(leads){let listItems = ""
for (i= 0; i <  leads.length; i++) {
    //  listItems += "<li>" + '<a href="https://fb.com" target="_blank">' + myLeads[i]+'</a>' + "</li>"
listItems += `<li>
     <a href=${leads[i]} target="_blank">
    ${leads[i]}
    </a>
    </li>`    
     // const li = document.createElement("li")
    // li.innerText = myLeads[i]
    // ulEl.append(li)
    }
     ulEl.innerHTML = listItems
}


 















