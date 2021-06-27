const data = {
    topMenus: ['로그인', '회원가입', '마이페이지', '장바구니'],
    navMenus: ['전체', '문구', '리빙', '책', '배민그린', 'ㅋㅋ에디션', '을지로에디션', '배달이친구들', '선물세트', '콜라보레이션'],
    footerMenus: ['공지사항', '1:1문의', '이용약관', '개인정보처리방침', '판매처 안내'],
    slideBannerImages: ['/static/images/banner1.gif', '/static/images/banner2.jpg', '/static/images/banner3.gif'],
    contents1: [
        { src: '/static/images/c1-1.png', title: '거울 있어?', price: 4500 },
        { src: '/static/images/c1-2.jpg', title: '누가 나 좀 말려줘요. 수건세트', price: 25000 },
        { src: '/static/images/c1-3.jpg', title: '화학표백을 하지 않은 재생지로 만든 메모잇', price: 2300, isGreen: true, isNew: true },
        { src: '/static/images/c1-4.jpg', title: '접기  편한 돗자리. 앉으면내땅', price: 8000 },
    ],
    contents2: [
        { src: '/static/images/c2-1.jpg', title: '매거진F No.16 Namul', price: 15000, sale: 10, isNew: true },
        { src: '/static/images/c2-2.jpg', title: '업사이클링 스탠드그립 세트. 맥주', price: 18900, isGreen: true, isNew: true },
        { src: '/static/images/c2-3.jpg', title: '업사이클링 명함케이스. 맥주짠', price: 16900, isGreen: true, isNew: true },
        { src: '/static/images/c2-4.jpg', title: '유해물질이 나오지 않는 지우개', price: 1500, isGreen: true, isNew: true },
        { src: '/static/images/c2-5.jpg', title: '재생지에 콩기름으로 인쇄한 일기장', price: 3500, isGreen: true, isNew: true },
        { src: '/static/images/c2-6.jpg', title: '커피찌꺼기를 재활용해 손으로 만든 연필', price: 2500, isGreen: true, isNew: true },
        { src: '/static/images/c2-7.jpg', title: '화학표백을 하지 않은 재생지로 만든 메모잇', price: 2300, isGreen: true, isNew: true },
        { src: '/static/images/c2-8.jpg', title: '스웨거X배민. 룸 스프레이 집중', price: 19000, sale: 20, isNew: true },
    ],
    contents3: [
        { src: '/static/images/c3-1.jpg', title: '소리에 집중해보세요', content: '을지로 연필. 사각사각' },
        { src: '/static/images/c3-2.png', title: '우리 둘만 아는 이야기', content: '쉿 비밀펜' },
    ],
    contents4: [
        { src: '/static/images/c4-1.jpg', title: '매거진F No.16 Namul', price: 15000, sale: 10 },
        { src: '/static/images/c4-2.jpg', title: '스웨거X배민. 룸 스프레이 집중', price: 19000, sale: 20 },
        { src: '/static/images/c4-3.jpg', title: '떡볶이 키트.떡볶이가 필요해', price: 30000, sale: 63 },
        { src: '/static/images/c4-4.png', title: '왼발오른발 양말 세트', price: 27500, sale: 5 },
        { src: '/static/images/c4-5.png', title: 'ㅋㅋ안 보이는 양말 세트', price: 20000, sale: 5 },
        { src: '/static/images/c4-6.png', title: 'ㅋㅋ골고루 양말 세트', price: 27500, sale: 5 },
        { src: '/static/images/c4-7.png', title: '미니갑티슈 세트. 티었슈?', price: 8800, sale: 9 },
        { src: '/static/images/c4-8.jpg', title: '매거진F No.15 Egg', price: 15000, sale: 10 },
    ]
}

/*
    header top 메뉴
*/
const headerTop = document.getElementById('headerTop')
for (let item of data.topMenus) {
    let child = document.createElement('div')
    child.innerHTML = item
    headerTop.appendChild(child)
}

const headerNav = document.getElementById('headerNav')
for (let item of data.navMenus) {
    let child = document.createElement('div')
    child.innerHTML = item
    headerNav.appendChild(child)
}

const slideBanner = document.getElementById('slideBanner')
for (let item of data.slideBannerImages) {
    let child = document.createElement('img')
    child.src = item
    slideBanner.appendChild(child)
}

const content1 = document.getElementById('content1')
for (let item of data.contents1) {
    let img = document.createElement('img')
    img.src = item.src
    let title = document.createElement('div')
    title.innerHTML = item.title
    let price = document.createElement('div')
    price.innerHTML = item.price + '원'
    content1.appendChild(img)
    content1.appendChild(title)
    content1.appendChild(price)
}

const content2 = document.getElementById('content2')
for (let item of data.contents2) {
    let img = document.createElement('img')
    img.src = item.src
    let title = document.createElement('div')
    title.innerHTML = item.title
    let price = document.createElement('div')
    price.innerHTML = item.price + '원'
    content2.appendChild(img)
    content2.appendChild(title)
    content2.appendChild(price)
}

const content3 = document.getElementById('content3')
for (let item of data.contents3) {
    let img = document.createElement('img')
    img.src = item.src
    let title = document.createElement('div')
    title.innerHTML = item.title
    let content = document.createElement('div')
    content.innerHTML = item.content
    content3.appendChild(img)
    content3.appendChild(title)
    content3.appendChild(content)
}

const content4 = document.getElementById('content4')
for (let item of data.contents4) {
    let img = document.createElement('img')
    img.src = item.src
    let title = document.createElement('div')
    title.innerHTML = item.title
    let price = document.createElement('div')
    price.innerHTML = item.price + '원'
    content4.appendChild(img)
    content4.appendChild(title)
    content4.appendChild(price)
}

const footer = document.getElementById('footer')
for (let item of data.footerMenus) {
    let child = document.createElement('div')
    child.innerHTML = item
    footer.appendChild(child)
}
