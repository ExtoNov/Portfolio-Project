// let openModal = (title, content, method) => {
//     let html = 
//     `<div class="modal">
//         <strong>${title}</strong>
//         <p>${content ? content : ''}</p>
//         <a href="javascript:${method ? method : ''};">확인</a>
//     </div>`;
//     document.body.insertAdjacentHTML('afterbegin', html);
// }
const modals = [
    `<div class="modal">
        <strong>2024년 연하장을 작성합니다.</strong>
        <p></p>
        <a href="javascript:closeModal();">확인</a>
    </div>`,
    `<div class="modal">
        <strong>보내시는 분의 이름을 적어주세요.</strong>
        <input type="text" name="senderName">
        <a href="javascript:closeModal();">확인</a>
    </div>`,
    `<div class="modal">
        <strong>받으시는 분의 이름을 적어주세요.</strong>
        <input type="text" name="receiverName">
        <a href="javascript:closeModal();">확인</a>
    </div>`,
    `<div class="modal">
        <strong>적고 싶은 내용이 있으신가요?<br>없으면 제가 만들어 드릴께요!</strong>
        <textarea rows="10" name="cardContent"></textarea>
        <a href="javascript:closeModal();">확인</a>
    </div>`
]
let index = 0;
let senderName;
let receiverName;
let cardContent;
let card = document.querySelector("#card");
let closeModal = () => {
    let modal = document.querySelector('.modal');
    let input = modal.querySelector('input');
    let textarea = modal.querySelector('textarea');
    if(input) {
        if(input.getAttribute('name') == 'senderName'){
            if(input.value.trim()==''){
                alert('보내시는 분의 이름을 적어주세요!');
                return;
            }
            senderName = input.value;
        }
        if(input.getAttribute('name') == 'receiverName'){
            if(input.value.trim()==''){
                alert('받으시는 분의 이름을 적어주세요!');
                return;
            }
            receiverName = input.value;
        }
    }
    if(textarea) {
        if(textarea.getAttribute('name') == 'cardContent'){
            if(textarea.value.trim()=='') {
                cardContent =
                `<strong>${receiverName}님,</strong>
                새해 복 많이 받으세요! 올해에도 빛나는 디자인과 창의력이 넘치는 순간들이 가득하길 기원합니다. 새로운 프로젝트에서 더 큰 성과를 이뤄내고, 예술적 업적을 더해 나가는 멋진 한 해가 되길 바라요.
                새로운 아이디어가 풍부하게 솟아나고, 작업이 즐거움으로 가득 찬 시간이 되길 기대합니다. 힘들 때는 작은 휴식도 중요하니, 자신을 챙기면서 도전적인 프로젝트에 응해 나가길 바라요.
                새해에도 예술적인 업적과 창의적인 도전이 가득하길 기원합니다. 함께 놀라운 작업들을 만들어내는 것을 기대하며, 항상 응원하고 있어요.
                새해 복 많이 받으세요!
                감사합니다.
                    
                <strong>${senderName} 드림</strong>`
            } else {
                cardContent = 
                `<strong>${receiverName}님,</strong>
                ${textarea.value}
                <strong>${senderName} 드림</strong>`
            }
        }
    }
    modal.remove();
    index++;
    if(index < modals.length){
        openModal();
    } else {
        card.querySelector('p').innerHTML = cardContent;
        card.style.visibility = 'visible';
        setTimeout(() => {
            card.style.animation = 'opening 0.3s forwards';
        }, 10);
    }
}
let openModal = () => {
    document.body.insertAdjacentHTML('afterbegin',modals[index]);
}
openModal();