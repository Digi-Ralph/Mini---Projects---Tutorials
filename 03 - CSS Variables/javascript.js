// //select sliders
// const slider = document.querySelector('#base');
// const sliderSpacing = document.querySelector('#spacing');
// const sliderBlur = document.querySelector('#blur');
// const img = document.querySelector('img')
// const title = document.querySelector('.h1')

// // creat functions to change parameters on silding 
// function handleUpdateA() {
//    img.style.backgroundColor = 'hsl' + '(' + `${slider.value}` + ',' + '100% '+ ',' + '50%' + ')';
//   title.style.color = 'hsl' + '(' + `${slider.value}` + ',' + '100% '+ ',' + '50%' + ')';
 
// }
// function handleUpdateB() {
//   img.style.padding = `${sliderSpacing.value}px`
// }
// function handleUpdateC() {
//   img.style.filter = "blur" + "(" + `${sliderBlur.value}px` + ")";

// }


// //creat events on sliding 
// slider.addEventListener('input' , handleUpdateA)
// sliderSpacing.addEventListener('input' , handleUpdateB)
// sliderBlur.addEventListener('input' , handleUpdateC)

/********************************************************************************* */
// 2nd solution
const inputs = document.querySelectorAll('.controls input')
console.log(inputs)

inputs.forEach(input => input.addEventListener('input' , sliderUpdate))

function sliderUpdate() {
    const data = this.dataset.sizing // return the value of data-sizing 
    
    document.documentElement.style.setProperty(`--${this.name}` , this.value + data )
    // go to the root of the document which is <html>
    //set the css property 
    // this.name => name in input spacing / hue / blur 
    // this.value => value in input 10 / 10 / 10 
    // data => the value of data-sizing which is px andd empty string .
    
    
    

}


