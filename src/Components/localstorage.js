import Swal from 'sweetalert2'
const getStoredBook = ()=>{
    const storeBookSTR = localStorage.getItem("readList")
    if( storeBookSTR){
        const  storeBookData = JSON.parse(storeBookSTR)
        return storeBookData
        }
        else{
            return[]
        }
    
}
const addToStoreDB = (id)=>{
const storeBookData = getStoredBook()

if (storeBookData.includes(id)){
 Swal.fire({
  title: "Vai already Install hoisa🙂‍↕️",
  icon: "error",
  draggable: false,
  allowOutsideClick: false
});
}
else{
    storeBookData.push(id)
    const data =JSON.stringify(storeBookData)
    localStorage.setItem("readList",data)
      Swal.fire({
      title: "Installed",
      icon: "success",
      draggable: true
    }).then(()=>{
        window.location.reload()
    })


}

}
const removeToStoreDB = (id) => {
  const storeBookData = getStoredBook();

  const remainingData = storeBookData.filter(
    (bookId) => bookId !== id
  );

  localStorage.setItem("readList", JSON.stringify(remainingData));
  

 Swal.fire({
      title: "Uninstalled",
      icon: "success",
      draggable: true
    }

).then(()=>{
        window.location.reload()
    })




    

};


export {addToStoreDB,getStoredBook,removeToStoreDB}