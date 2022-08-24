const textArea = document.querySelector('textarea')
const fileNameInput = document.querySelector('.file-name input')
const selectMenu = document.querySelector('.save-as select ')
const saveBtn = document.querySelector('.save-btn')

selectMenu.addEventListener('change', function(){
    let seletedOption = selectMenu.options[selectMenu.selectedIndex].text ;
    console.log(seletedOption);
   saveBtn.innerHTML = `Save as Text ${seletedOption.split(" ")[2]} File`;

    

})

saveBtn.addEventListener('click', function(){
    const blob = new Blob([textArea.value], {type: selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click();
    
});