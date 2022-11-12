let form=document.getElementById('formId')
let ul=document.getElementById('ulId')

function adduser(){
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let number=document.getElementById('number').value
    let obj={
        "name":name,
        "email":email,
        "ph_number":number
    }
    async function post(){
   let user=await axios.post('http://localhost:4000/book-call',obj)
   console.log(user)
    
    }
    post()
}


ul?.addEventListener('click', remove)
let emailId=''
function displayItems(item1,item2,item3){
     let spam1=document.createElement('spam')
     spam1.textContent=item1

     let spam2=document.createElement('spam')
     spam2.textContent=item2
     
     let spam3=document.createElement('spam')
     spam3.textContent=item3
     
     let li=document.createElement('li')
     li.id='liId'
     li.appendChild(spam1)
     li.appendChild(spam2)
     li.appendChild(spam3)
   let edtBtn=document.createElement('button')
   edtBtn.id='edtId'
    edtBtn.textContent='Edit'
   edtBtn.classList.add("edit")
   let delBtn=document.createElement('button')
   delBtn.id='delId'
   delBtn.classList.add("delete")
   delBtn.textContent='Delet'
   li.appendChild(edtBtn)
   li.appendChild(delBtn)
     ul?.appendChild(li)
     }
function addItems(e){
     e.preventDefault()
     console.log("clicked")
     let item1=document.getElementById("nameId").value
     let item2=document.getElementById("mailId").value
     let item3= document.getElementById("numberId").value
     const obj={
          'name':item1,
          'mail':item2,
          'number':item3
     }

     if(emailId!=''){
          axios.put(`http://localhost:4000/book-call/${emailId}`,obj)
          .then((res)=>{
               console.log(res)
          })
          .catch(err=>console.log(err))
     emailId=''
     }
     else{
     axios.post(`http://localhost:4000/book-call`,obj)
     .then((res)=>console.log(res))
     .catch(err=>console.log(err))
     }
     displayItems(item1,item2,item3)
     
}
let userId={}
window.addEventListener('DOMContentLoaded',()=>{
     axios.get("http://localhost:4000/book-call")
     .then((res)=>{
          for(let i=0;i<res.data.length;i++){
               let n=res.data[i].name
               let e=res.data[i].mail
               let num=res.data[i].number
               userId[e]=res.data[i]._id
               console.log(n,e,num,userId[e])
               displayItems(n,e,num)
          }
     })
})
// console.log(Object.keys(userId)[0])
function remove(e){
     // e.preventDefault()
     let list=e.target.parentElement
     let email=list.children[1].textContent
     let number=list.children[2].textContent
    if(e.target.classList.contains('delete')){
     if(confirm('are you sure?')) {
          ul?.removeChild(list)}
          axios.delete(`http://localhost:4000/book-call/${number}`)
          .then((res)=> console.log(res))
          .catch(err=>console.log(err))
          // ul?.removeChild(list)}
    }
    else if(e.target.classList.contains('edit')){
     emailId=userId[email]
     let name=list.children[0].textContent

     document.getElementById("nameId").value=name
     document.getElementById("mailId").value=email
     document.getElementById("numberId").value=number

     ul?.removeChild(list)

    }
}