export default {
  options (h, conf, key) {
    const list = []
    conf.__slot__.options.forEach(item => {
      if (conf.__config__.optionType === 'button') {
        list.push(<a-radio-button value={item.value} disabled={item.disabled}>{item.label}</a-radio-button>)
      } else {
        list.push(<a-radio value={item.value} disabled={item.disabled}>{item.label}</a-radio>)
      }
    })
    return list
  }
}
