export default {
  'list-type': (h, conf, key) => {
    const list = []
    const config = conf.__config__
    if (conf['list-type'] === 'picture-card') {
      list.push(<a-icon type="file-add" />)
    } else {
      list.push(<a-button size="small" type="primary" >{config.buttonText}</a-button>)
    }
    if (config.showTip) {
      list.push(
        <div slot="tip" class="a-upload__tip">只能上传不超过 {config.fileSize}{config.sizeUnit} 的{conf.accept}文件</div>
      )
    }
    return list
  }
}
