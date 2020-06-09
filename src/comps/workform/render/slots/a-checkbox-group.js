export default {
  options (h, conf, key) {
    const list = []
    conf.__slot__.options.forEach(item => {
      list.push(<a-checkbox value={item.value} disabled={item.disabled}>{item.label}</a-checkbox>)
    })
    return list
  }
}
