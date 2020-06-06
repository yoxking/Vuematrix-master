export default {
  options (h, conf, key) {
    const list = []
    conf.__slot__.options.forEach(item => {
      if (conf.__config__.optionType === 'button') {
        list.push(<a-radio-button label={item.value}>{item.label}</a-radio-button>)
      } else {
        list.push(<a-radio label={item.value} border={conf.border}>{item.label}</a-radio>)
      }
    })
    return list
  }
}
