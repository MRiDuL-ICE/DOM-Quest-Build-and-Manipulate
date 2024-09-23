function showSection(id){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.add('hidden');
    
    
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.remove('hidden');
}

document.getElementById('donation-field').addEventListener('click', function(){
    document.getElementById('history-field').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-field').classList.add('bg-[#B4F461]');
    
})

document.getElementById('history-field').addEventListener('click', function(){
    document.getElementById('donation-field').classList.remove('bg-[#B4F461]');
    document.getElementById('history-field').classList.add('bg-[#B4F461]');
    
})