import Home from './components/Home.vue'
import Portfolio from './components/protfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/portfolio', component: Portfolio},
    {path: '/stocks', component: Stocks},
    // 以下是測試layout用的 route，之後會拿掉
]