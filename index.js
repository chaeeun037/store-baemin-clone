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

/**
 * 1000단위 컴마 찍는 메소드
*/
const formPrice = (p) => {
    var len, point, res

    p = p + ""
    point = p.length % 3
    len = p.length

    res = p.substring(0, point)
    while (point < len) {
        if (res != "") res += ","
        res += p.substring(point, point + 3)
        point += 3
    }

    return res
}

/**
 * 세일 가격 계산하는 메소드
 */

 const calcSalePrice = (p, s) => {
     if(s) {
         return p * (100 - s) * 0.01
     } else {
         return p
     }
 }

const headerTop = document.getElementById('headerTop')
for (let item of data.topMenus) {
    let child = document.createElement('div')
    child.className = 'header-top_menu'
    child.innerHTML = item
    let bar = document.createElement('div')
    bar.className = 'header-top_bar'
    headerTop.appendChild(child)
    if (item === '장바구니') {
        child.classList.add('no-padding')
        let cart = document.createElement('div')
        cart.className = 'header-top_cart'
        cart.innerHTML = 0
        headerTop.appendChild(cart)
    }
    headerTop.appendChild(bar)

}

const headerNav = document.getElementById('headerNav')
for (let item of data.navMenus) {
    let child = document.createElement('div')
    child.className = 'header-gnb_menu'
    child.innerHTML = item
    headerNav.appendChild(child)
}

const slideBanner = document.getElementById('slideBanner')
for (let item of data.slideBannerImages) {
    let slide = document.createElement('div')
    slide.className = 'swiper-slide'
    let img = document.createElement('img')
    img.src = item
    slide.appendChild(img)
    slideBanner.appendChild(slide)
}

const content1 = document.getElementById('content1')
for (let item of data.contents1) {
    let li = document.createElement('div')
    li.className = 'content-goods_col-li'
    let container = document.createElement('div')
    container.className = 'content-goods_col-item'
    let img = document.createElement('img')
    img.src = item.src
    let info = document.createElement('div')
    info.className = 'content-goods_col-info'
    let title = document.createElement('div')
    title.className = 'content-goods_col-title'
    title.innerHTML = item.title
    let price = document.createElement('div')
    price.className = 'content-goods_col-price'
    price.innerHTML = formPrice(item.price) + '원'
    info.appendChild(title)
    info.appendChild(price)
    container.appendChild(img)
    container.appendChild(info)
    li.appendChild(container)
    content1.appendChild(li)
}

/*
    TODO: content 1, 2, 4 같은 코드 반복되고 있음. 코드 정리 필요
*/
const content2 = document.getElementById('content2')
for (let item of data.contents2) {
    let li = document.createElement('div')
    li.className = 'content-goods_col-li'
    let container = document.createElement('div')
    container.className = 'content-goods_col-item'
    let img = document.createElement('img')
    img.src = item.src
    let info = document.createElement('div')
    info.className = 'content-goods_col-info'
    if (item.sale) {
        let sale = document.createElement('div')
        sale.className = 'content-goods_col-sale'
        sale.innerHTML = item.sale + '%'
        info.appendChild(sale)
    }
    let title = document.createElement('div')
    title.className = 'content-goods_col-title'
    title.innerHTML = item.title
    let money = document.createElement('div')
    money.className = 'content-goods_col-money'
    let price = document.createElement('div')
    price.className = 'content-goods_col-price'
    price.innerHTML = formPrice(calcSalePrice(item.price, item.sale)) + '원'
    info.appendChild(title)
    if(item.sale) {
        let origin = document.createElement('div')
        origin.className = 'content-goods_col-origin'
        origin.innerHTML = formPrice(item.price) + '원'
        money.appendChild(origin)
    }
    money.appendChild(price)
    info.appendChild(money)
    container.appendChild(img)
    container.appendChild(info)
    li.appendChild(container)
    content2.appendChild(li)
}

const content3 = document.getElementById('content3')
for (let item of data.contents3) {
    let container = document.createElement('div')
    container.className = 'content-goods_row-item'
    let img = document.createElement('img')
    img.src = item.src
    let titles = document.createElement('div')
    titles.className = 'content-goods_row-titles'
    let title = document.createElement('div')
    title.className = 'content-goods_row-title'
    title.innerHTML = item.title
    let content = document.createElement('div')
    content.innerHTML = item.content
    container.appendChild(img)
    titles.appendChild(title)
    titles.appendChild(content)
    container.appendChild(titles)
    content3.appendChild(container)
}

const content4 = document.getElementById('content4')
for (let item of data.contents4) {
    let li = document.createElement('div')
    li.className = 'content-goods_col-li'
    let container = document.createElement('div')
    container.className = 'content-goods_col-item'
    let img = document.createElement('img')
    img.src = item.src
    let info = document.createElement('div')
    info.className = 'content-goods_col-info'
    let title = document.createElement('div')
    title.className = 'content-goods_col-title'
    title.innerHTML = item.title
    let price = document.createElement('div')
    price.className = 'content-goods_col-price'
    price.innerHTML = formPrice(item.price) + '원'
    info.appendChild(title)
    info.appendChild(price)
    container.appendChild(img)
    container.appendChild(info)
    li.appendChild(container)
    content4.appendChild(li)
}

const footer = document.getElementById('footerTop')
for (let item of data.footerMenus) {
    let child = document.createElement('div')
    child.className = 'footer-top_item'
    child.innerHTML = item
    footer.appendChild(child)
}
