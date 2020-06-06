export default {
  namespaced: true,
  state: {
    isMobile: false,
    theme: 'dark',
    layout: 'side',
    multipage: true,
    systemName: '热度空间',
    copyright: '2020 BENET CORP.',
    footerLinks: [
      {link: 'https://www.benet.com', name: '百纳云纪科技'}
    ]
  },
  mutations: {
    setDevice (state, isMobile) {
      state.isMobile = isMobile
    },
    setTheme (state, theme) {
      state.theme = theme
    },
    setLayout (state, layout) {
      state.layout = layout
    },
    setMultipage (state, multipage) {
      state.multipage = multipage
    }
  }
}
