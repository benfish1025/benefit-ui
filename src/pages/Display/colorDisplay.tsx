import React from 'react'
import Button from "../../components/Button/button";

const ColorDisplay = () => {

  return (
      <div className={'display'}>
        <h2 className={'display-tittle'}>色彩</h2>
        {/*<p className={'display-explain'} style={{lineHeight: '26px'}} >
          本项目创建的初衷来自作者对“多邻国”语言学习应用的热爱。
          项目中的Button、Switch样式直接复刻自多邻国应用。其余来自作者个人的发挥。
          多邻国的界面设计语言追求朴拙可爱及背景色彩信息的淡化，也就是说“组件库”所必须包含的基本交互组件恰恰不是多邻国应用在界面呈现上的最核心，
          其核心是特点鲜明、色彩艳丽、花样繁多的插画。我们需要适当的设计动画、适当设计彩色局部，以平衡组件色调偏低不够生动的缺陷。

          <Button btnType={'link'} href={'www.duolingo.com'}
          >
            多邻国
          </Button>
        </p>
        <h3 className={'display-tittle'}>色彩</h3>*/}
        {/*<p className={'display-explain-small'}>项目风格衍生自“多邻国APP”，亦参考众多成熟组件库。</p>*/}
        <p className={'display-explain'}>更多信息参考<Button target={'_blank'} href={'https://design.duolingo.com/'} btnType={"link"}>Duolingo Brand</Button><span style={{margin: '0 2px', fontSize: '14px', color: '#777777'}}>(https://design.duolingo.com/)</span>的色彩规范。</p>

        <h2 className={'display-tittle'}>主色</h2>
        <p className={'display-explain'}>颜色需求的首选色。</p>
        <p className={'display-explain'} style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%"
        }}>
          <div style={{backgroundColor: '#1cb0f6'}}
className="color-card">#1cb0f6</div>
          <div style={{
            backgroundColor: '#84d8ff'}}
className="color-card">#84d8ff</div>
          <div  style={{backgroundColor: '#bbf2ff',
            color: '#1cb0f6f3'}}
className="color-card">#bbf2ff</div>
          <div style={{backgroundColor: '#ddf4ff',
            color: '#1cb0f6f3'}}
               className="color-card">#ddf4ff</div>
        </p>
        <h2 className={'display-tittle'}>辅色</h2>
        <p className={'display-explain'}>适应情景的功能色。</p>
        <p className={'display-explain'} style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%"
        }}>
          <div style={{backgroundColor: '#ff4b4b'}}
               className="color-card">#ff4b4b</div>
          <div style={{backgroundColor: '#ffb2b2'}}
               className="color-card">#ffb2b2</div>
          <div style={{backgroundColor: '#58cc02'}}
               className="color-card">#58cc02</div>
          <div style={{backgroundColor: '#a5ed6e'}}
               className="color-card">#a5ed6e</div>
          <div style={{backgroundColor: '#ff9600'}}
               className="color-card">#ff9600</div>
          <div style={{backgroundColor: '#ffc800'}}
               className="color-card">#ffc800</div>
          <div style={{backgroundColor: '#9069cd'}}
               className="color-card">#9069cd</div>
          <div style={{backgroundColor: '#ffaade'}}
               className="color-card">#ffaade</div>
        </p>
        <h2 className={'display-tittle'}>背景色</h2>
        <p className={'display-explain'}>组件框架颜色。</p>
        <p className={'display-explain'} style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%"
        }}>
          <div style={{backgroundColor: '#4b4b4b'}} className="color-card">#4b4b4b</div>
          <div style={{backgroundColor: '#777777'}} className="color-card">#777777</div>
          <div style={{backgroundColor: '#afafaf'}} className="color-card">#afafaf</div>
          <div style={{backgroundColor: '#e5e5e5',
            color: '#777777f3'}} className="color-card">#e5e5e5</div>
          <div style={{backgroundColor: '#f7f7f7',
            color: '#777777f3'}} className="color-card">#f7f7f7</div>
        </p>

      </div>
  )
}

export default ColorDisplay
