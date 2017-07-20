var el = document.getElementById("recognize");
  el.addEventListener("click", (e)=>{
    var el = document.getElementById("capture_image");
    Tesseract.recognize(el.files[0],{lang:"eng", classify_bln_numeric_mode: 1, tessedit_char_whitelist:"1234567890"})
    .progress(p => console.log('progress', p))
    .then(result =>{
      const output = document.getElementById("recognize_number")
      output.value = result.text;
  })
}, false);

