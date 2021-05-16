import React from 'react'

const Display = () => {

  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>安装</h2>
        <p className={'display-explain'}>使用包管理工具npm/yarn安装</p>
        <h3 className={'display-tittle'}>重要提示</h3>
        <p className={'display-explain'}>目前版本为Beta版本，尚未发布至npm。作者重构样式中，<span style={{color: '#ea2b2b'}}>请期待正式版</span>。可Fork项目仓库，与作者一同完善。</p>
      </div>
  )
}

export default Display
