const SessionStorageKey = 'PREES _ FREQUENCY'
const count  = document.getElementById('count')
const ancrement = document.getElementById('add')
const clearItem = document.getElementById('Clear')
// Pengecekan: apakah data sessionStorage dengan key count tersedia atau belum
if(typeof sessionStorage !== undefined){
  // Jika item pada local storage belum ada, data akan diberi nilai awal, yakni 0
  if(sessionStorage.getItem == null){
    sessionStorage.setItem(SessionStorageKey,0)
  }
   // Memberikan nilai item dari local storage
   count.innerText = sessionStorage.getItem(SessionStorageKey)
    // Update nilai dari item local storage jika tombol ditekan
    ancrement.addEventListener('click',() => {
        let addCount = sessionStorage.getItem(SessionStorageKey)
        addCount++
        sessionStorage.setItem(SessionStorageKey,addCount)
        count.innerText = sessionStorage.getItem(SessionStorageKey)
    })

     // Memberikan nilai 0 ke tampilan karena di-reset dan menghapus item
    clearItem.addEventListener('click',() => {
        sessionStorage.removeItem(sessionStorage)
        count.innerText = 0
    }) 
}
else{
    alert('your browser is not support')
}