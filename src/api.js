const API_BASE = import.meta.env.VITE_API_BASE_URL

export const mockData = {
  ticker: [
    { sym: 'BTC',   price: '$97,234',  chg: '+2.34%', up: true  },
    { sym: 'ETH',   price: '$3,847',   chg: '-0.42%', up: false },
    { sym: 'SOL',   price: '$186.40',  chg: '+5.12%', up: true  },
    { sym: 'BNB',   price: '$623.10',  chg: '+1.24%', up: true  },
    { sym: 'XRP',   price: '$0.8472',  chg: '-1.83%', up: false },
    { sym: 'AVAX',  price: '$38.24',   chg: '+3.44%', up: true  },
    { sym: 'MATIC', price: '$0.923',   chg: '+2.11%', up: true  },
    { sym: 'LINK',  price: '$14.87',   chg: '+0.94%', up: true  },
    { sym: 'DOT',   price: '$8.43',    chg: '-0.67%', up: false },
    { sym: 'ADA',   price: '$0.573',   chg: '+1.23%', up: true  },
    { sym: 'ARB',   price: '$1.247',   chg: '+4.81%', up: true  },
    { sym: 'OP',    price: '$3.18',    chg: '-1.14%', up: false },
  ],
  transactions: [
    { id: 1, addr: '0x1a2b3c…d4e5f6', amount: '1,250 ETH',  usd: '$4.81M',  exchange: 'Binance',  dir: 'out', chain: 'ETH', tag: 'WHALE', time: '2m ago'  },
    { id: 2, addr: 'bc1q9z8y7x…6w5v', amount: '85.3 BTC',   usd: '$8.29M',  exchange: 'Coinbase', dir: 'in',  chain: 'BTC', tag: 'OTC',   time: '4m ago'  },
    { id: 3, addr: '5FgJkL9m…Np2Q',   amount: '45,200 SOL', usd: '$8.41M',  exchange: 'OKX',      dir: 'out', chain: 'SOL', tag: 'SMART', time: '6m ago'  },
    { id: 4, addr: '0x9e8f7a…6b5c4d', amount: '890 ETH',    usd: '$3.43M',  exchange: 'Kraken',   dir: 'in',  chain: 'ETH', tag: 'WHALE', time: '11m ago' },
    { id: 5, addr: 'bc1p3r4s…5t6u',   amount: '127.5 BTC',  usd: '$12.39M', exchange: 'Binance',  dir: 'out', chain: 'BTC', tag: 'OTC',   time: '15m ago' },
    { id: 6, addr: '0x3c2b1a…0d9e8f', amount: '22,500 SOL', usd: '$4.19M',  exchange: 'Bybit',    dir: 'in',  chain: 'SOL', tag: 'SMART', time: '18m ago' },
    { id: 7, addr: '0x7f6e5d…4c3b2a', amount: '3,400 ETH',  usd: '$13.09M', exchange: 'Binance',  dir: 'out', chain: 'ETH', tag: 'WHALE', time: '22m ago' },
  ],
  wallets: [
    { address: '0x123...', balance: 10.5 },
  ],
}

export const getApiData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`)
    if (!response.ok) throw new Error('Backend Offline')
    return await response.json()
  } catch (error) {
    console.warn(`Using Mock Data for ${endpoint}:`, error.message)
    return mockData[endpoint.replace('/', '')]
  }
}
