const app = "I don't do much."
function moveDodgerRight() {
    var rightNumbers = 
        dodger.style.right.replace('px', '')
    var right = parseInt(rightNumbers, 10)
     dodger.style.right = '${right-1}px'
    
}