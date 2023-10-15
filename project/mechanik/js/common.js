let mainContentText = document.querySelector("#main-visual > .container > .content > span > strong");
let mainContentTextArr = ["효율적인", "든든한", "안전한", "전문화된"];
let textIndex = 1;
setInterval(() => {
    setTimeout(() => {
        mainContentText.style.opacity = "1"; 
        mainContentText.innerText = mainContentTextArr[textIndex];
    }, 300);
    textIndex++;
    if(textIndex > 3)
        textIndex = 0;
    mainContentText.style.opacity = "0";
}, 2000);

//service section
let listItems = document.querySelectorAll("#service > .container > .list > .list-item");
let activeIndex = 0;
let contents = document.querySelectorAll("#service > .container > .content > div");
let texts = [
    [`Lorem ipsum dolor sit amet consectetur. Scelerisque amet felis nibh maecenas augue donec. Iaculis scelerisque convallis neque vel. Turpis pharetra aliquam est tempor sit egestas lorem etiam laoreet. Natoque volutpat nisl odio tellus tellus in lorem. Mi in mauris eget massa sit. Cras quam non aliquam sed habitant mi sit ac. Amet lectus tristique duis facilisis egestas. Pulvinar scelerisque interdum eget dictumst velit faucibus. Arcu elementum amet nec leo eget ut fermentum. Vulputate sed faucibus augue nibh vulputate felis.
    Viverra magna pulvinar eget augue posuere elit scelerisque adipiscing eget. Feugiat mi in amet molestie. Lorem nulla sit egestas massa dignissim malesuada. Vel diam quam nibh ante odio ac. Ut aliquet amet adipiscing volutpat quam. Tellus sollicitudin eget quam aliquam habitant dictum nibh integer enim. Condimentum lorem mattis dignissim accumsan phasellus leo posuere rutrum. Fermentum ac tincidunt fusce consectetur elit tristique donec scelerisque risus.`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam iure ullam culpa eos odio nulla debitis libero praesentium ab? Molestias aut nemo aliquam cumque cum consequuntur aperiam voluptas quod labore?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas placeat reiciendis nihil dolore asperiores alias eius, nobis ut voluptates. Nobis sint, accusantium velit ad consectetur tempora cum quia? Molestias.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis possimus eum fuga nesciunt in nisi illum suscipit veniam ex iure rerum, illo, quisquam cum. Libero reprehenderit quibusdam nihil ullam.`],

    [`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit doloremque autem maxime corporis, eaque voluptatibus accusantium. Ullam hic commodi, perferendis quam aliquid suscipit recusandae! Ea cum laboriosam qui hic autem?`,
    `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis voluptatum laudantium labore illo quisquam aperiam tempora, possimus hic doloremque at totam nesciunt consequatur veniam minus eum quod porro aliquid! Mollitia.`,
    `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit error totam consectetur accusantium ipsa facilis inventore, modi quaerat maxime similique possimus beatae, vel sed recusandae tenetur quibusdam eaque molestiae harum.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam eligendi natus unde temporibus commodi aspernatur ullam tenetur quo illo minus architecto fuga, praesentium cum accusamus fugit exercitationem consequuntur cumque.`]
];

let selectContent = () => {
    contents.forEach(element => {
        if(element.classList.contains('active'))
            element.classList.remove("active");
    });
    for(let i=0; i < contents.length; ++i) {
        let content = contents[i];
        if(activeIndex == i){
            content.classList.add("active");
        }
    }
}
let textChange = function(pageIndex, stepIndex){
    let text = document.querySelector('#service > .container > .content > div.active > .text');
    let stepListItems = document.querySelectorAll('#service > .container > .content > div.active > .step-list > a');
    stepListItems.forEach(element => {
        element.classList.remove('active');
    });
    stepListItems[stepIndex].classList.add('active');
    text.innerText = texts[pageIndex][stepIndex];
}

//service section initialize
for(let i=0; i < listItems.length; ++i) {
    let listItem =  listItems[i];
    listItem.addEventListener("click", function(){
        listItems.forEach(element => {
            if(element.classList.contains('active'))
                element.classList.remove("active");
        });
        listItem.classList.add("active");
        activeIndex = i;
        selectContent();
        textChange(i, 0);
    });
    textChange(i, 0);
}
//modal
let makeModal = (title, innerHtml) => {
    let modalClose = function(){
        modal.style.animation = "modalOpen 0.5s reverse";
        setTimeout(() => {
            modal.remove();
            document.querySelector('html').style.overflowY = 'auto';
        }, 500);
    }

    let modal = document.createElement('div');
    modal.classList.add('modal');
    let modalBg = document.createElement('div');
    modalBg.classList.add('modal-bg');
    let modalBody = document.createElement('div');
    modalBody.classList.add('body');
    modalBg.addEventListener('click', function(){
        modalClose();
    });

    let modalTitle = document.createElement('h1');
    modalTitle.classList.add('title');
    modalTitle.innerText = title;
    let content = document.createElement('div');
    content.classList.add('content');
    let modalCloseBtn = document.createElement('a');
    modalCloseBtn.classList.add('modal-close');
    modalCloseBtn.innerText = '✕';
    modalCloseBtn.addEventListener('click', function(){
        modalClose();
    })

    modal.append(modalBg);
    modal.append(modalBody);
    modalBody.append(modalTitle);
    modalBody.append(modalCloseBtn);
    modalBody.append(content);
    content.innerHTML = innerHtml;

    document.querySelector('html').style.overflowY = 'hidden';
    document.body.append(modal);
}

let maintenanceModal = () => {
    makeModal('Repair Service', 
    `<p class="text">고장난 기기 회수와 정비 다시 필드에 배치까지 <strong>ONE-STOP</strong></p>
    <p style="margin-bottom: 95px;">필드에 고장난 기기는 미캐닉 ‘써퍼’가 직접 회수하고 정비 후 필드에 배치해드립니다. 합리적인 가격에 전문 정비인력과 서비스를 구독해보세요.</p>
    <div class="wrapper" style="grid-template-columns: auto 1fr; column-gap: calc(var(--xl) * 2);">
        <div>
            <img src="./image/repair-service-modal-image-1.svg" alt="repair-service-description">
        </div>
        <div>
            <p class="pill-title" style="margin-bottom: 45px;margin-left: var(--xl);">월 구독요금 / 운영수량(200대당) 45만원!</p>
            <p style="font-size: var(--md);" class="text"><strong>IoT, 컨트롤러, 모터 등 핵심부품 수리 가능!</strong></p>
            <p style="font-size: var(--md);text-align: right;" class="text">
                <img src="./image/right-arrow.svg" alt="right-arrow" style="margin-right: var(--sm);">
                <strong style="color: var(--gray);">정비수율 97.547% 보장</strong>
            </p>
        </div>
    </div>`);
}
let operationModal = () => {
    makeModal('Manage Service', 
    `<p class="text"><strong>팀장급 이상 출신</strong>들로 구성된 풍부한 운영경험 <strong>인재풀 보유</strong></p>
    <p style="margin-bottom: 80px;">각 운영사의 팀장급 이상 출신들로 엄격한 테스트를 거치고, 진짜 현장을 경험해본 풍부한 운영경험을 가진 인재풀을 보유하고 있습니다.</p>
    <div class="wrapper" style="margin-bottom: 100px;">
        <div style="text-align: center;">
            <img src="./image/logo-gray.svg" alt="mechanik-logo" style="margin-bottom: 30px;height: var(--lg);">
            <p style="font-size: var(--md);color: var(--orange);font-weight: var(--wght-bold);">운영 서비스</p>
        </div>
        <div>
            <ul class="icon-list-gray">
                <li>경쟁사를 분석하고 이해하여 이에맞는 인사이트를 도출하고 경쟁사에 대응합니다.</li>
                <li>데이터를 기반으로 각 서비스 지역을 이해하고 최적의 운영방안을 도출합니다.</li>
                <li>진짜 현장을 치열하게 경험해본 실력자만 미캐닉의 인재풀에 들어올 수 있습니다.</li>
                <li>운영 데이터를 리포트로 제작하여 고객사에 제공합니다.</li>
            </ul>
        </div>
    </div>

    <p class="text"><strong>자체제작 커리큘럼</strong>을 통해 <strong>내부교육 및 사전테스트</strong> 진행</p>
    <p style="margin-bottom: 95px;">미캐닉은 고객사에 투입되는 작업자들을 체계적으로 교육하며, 내부 테스트를 한 번 더 거쳐 작업자를 최종 선별합니다.</p>
    <div class="wrapper" style="margin-bottom: 100px;">
        <div style="text-align: center;">
            <img src="./image/operation-modal-image-1.png" alt="operation-modal-image-1" style="width: 345px;">
            <p style="font-weight: var(--wght-bold);margin-top: 20px;">모든 결과는 데이터화해 미캐닉 매칭 담당자가 관리합니다.</p>
        </div>
        <div>
            <p class="text" style="font-size: calc(var(--sm) * 1.25);margin-bottom: calc(var(--sm) * 1.25);"><strong>미캐닉 테스트</strong>를 통과한 작업자를 대상으로 
                <strong> 1차 선발 후<br> 직접 인터뷰</strong>를 통해 고객사에 투입될 작업자를 <strong>선정</strong>합니다.</p>
            <p>미캐닉 테스트란?
                실무와 같은 작업자의 역량을 검증 작업 환경, 그에 따른 정량 평가를 통해 하는 테스트입니다.</p>
        </div>
    </div>

    <p class="text"><strong>데이터를 기반</strong>으로 한 <strong>최적화 된</strong> 운영시스템과 <strong>많은 경험으로 축적된</strong> 현장관리 시스템</p>
    <p>미캐닉 컨설턴트와 서비스 운영 상담 한번으로 지역별 달성 가능한 매출액과 현장에서 낼 수 있는 퍼포먼스까지 실력으로 모두 보여드립니다.</p>
    <div class="wrapper" style="grid-template-columns: max-content auto; column-gap: calc(var(--sm) * 6.25);">
        <div>
            <p class="pill-title" style="margin-bottom: 25px;">월 구독요금 / 운영사별 특성에 따른 별도 견적 제공</p>
            <p class="text" style="font-size: calc(var(--sm) * 1.25);">※ <strong>운영서비스</strong> 구독 시 1명 <strong>최대 400대</strong> 커버 가능!</p>
        </div>
        <div style="text-align: center;">
            <img src="./image/chart 1.png" alt="chart">
        </div>
    </div>`);
}

// window.addEventListener('DOMContentLoaded', function(){

// });