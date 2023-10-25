const localStorageKey = 'PREES _ FREQUENCY'
const count  = document.getElementById('count')
const ancrement = document.getElementById('add')
const clearItem = document.getElementById('Clear')
// Pengecekan: apakah data localStorage dengan key count tersedia atau belum
if(typeof localStorage !== undefined){
  // Jika item pada local storage belum ada, data akan diberi nilai awal, yakni 0
  if(localStorage.getItem == null){
    localStorage.setItem(localStorageKey,0)
  }
   // Memberikan nilai item dari local storage
   count.innerText = localStorage.getItem(localStorageKey)
    // Update nilai dari item local storage jika tombol ditekan
    ancrement.addEventListener('click',() => {
        let addCount = localStorage.getItem(localStorageKey)
        addCount++
        localStorage.setItem(localStorageKey,addCount)
        count.innerText = localStorage.getItem(localStorageKey)
    })

     // Memberikan nilai 0 ke tampilan karena di-reset dan menghapus item
    clearItem.addEventListener('click',() => {
        localStorage.removeItem(localStorage)
        count.innerText = 0
    }) 
}
else{
    alert('your browser is not support')
}