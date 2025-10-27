// Thay đổi nội dung búc thư ở đây
var letterContent ="Hẹ hẹ thiệp kiểu này có được hem vợ iu của anh. Fact trước nhé: Chưa bao giờ a viết tay hay làm thiệp dạng nào cho ai cả cho đến khi gặp em. Anh không biết sao nhưng mỗi lần bên em anh lại thấy yêu em hơn và muốn nỗ lực hơn để xứng đáng với em hơn.  Anh có yêu em không? Anh có. Anh có thương em không? Cũng có luôn. Lúc nào a cũng mong được nói câu đó mỗi ngày với em. Anh cũng chỉ mong mình đủ tinh ý để không khiến em buồn, nếu có điều gì khiến em không hài lòng cứ nói với anh, anh sẽ thay đổi.

Anh có thể là người trẻ nhất trong bộ sưu tập của em nhưng anh sẽ cố gắng để trở thành một người có đủ sự quan tâm ấm áp khi bên em và hiểu em nhiều hơn nữa. Có là 5 năm, 10 năm anh cũng đợi em vì thực ra, chờ đợi luôn là lời tỏ tình dài nhất. Dù có thể bây giờ anh chưa thực sự khiến em cảm thấy yên tâm về tương lai, anh hiểu như thế nhưng bằng tất cả những gì anh có ở hiện tại và tương lai, anh cũng đều sẽ hướng tất cả đến em và yêu em <3 

p/s: làm list những việc cần thui nhỉ GIA ĐÌNH MINMAX :> "

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
