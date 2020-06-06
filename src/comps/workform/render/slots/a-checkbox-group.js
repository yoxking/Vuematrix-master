export default {
  options (h, conf, key) {
    const list = []
    conf.__slot__.options.forEach(item => {
      if (conf.__config__.optionType === 'button') {
        list.push(<a-checkbox-button label={item.value}>{item.label}</a-checkbox-button>)
      } else {
        list.push(<a-checkbox label={item.value} border={conf.border}>{item.label}</a-checkbox>)
      }
    })
    return list
  }
}
