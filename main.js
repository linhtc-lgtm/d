// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn Bích Hạnh đã dành thời gian để nhìn những trò trẻ con của tớ và tớ có những điều muốn gởi gắm đến cô gái của tớ❤️. Cảm ơn cậu đã động viên những lúc tớ cô đơn buồn tủi nhất. Cậu cho tớ những lời khuyên về cách tớ yêu bản thân . Cậu làm cho tớ luôn cảm thấy đặc biệt và hoàn hảo. Tớ chẳng biết nói gì ngoài lời cảm ơn cậu, thế nên nếu có gì buồn thì tâm sự với tớ nhé. Tớ sẽ chân trọng và lắng nghe tất cả. 💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})