import React from 'react'
import {ReactComponent as ReactIcon} from './svg/React.svg'
import {ReactComponent as CheckAllIcon} from './svg/CheckAll.svg'
import {ReactComponent as ConnectIcon} from './svg/Connect.svg'
import {ReactComponent as BookmarkIcon} from './svg/Bookmark.svg'
import {ReactComponent as IdeaIcon} from './svg/Idea.svg'
import {ReactComponent as AppleArcadeIcon} from './svg/AppleArcade.svg'
import {ReactComponent as DuolingoIcon} from './svg/duolingo.svg'
import {ReactComponent as TerrariaIcon} from './svg/Terraria.svg'
const HomeBrand = () => {
  return (
      <div className={'home-brand'}>
        <div className="home-brand__wall">
          <div className="wall-row-1">
           基于React<ReactIcon/>构建<ConnectIcon/>支持TS类型系统
          </div>
          <div className="wall-row-1">
            可爱<BookmarkIcon/>灵活<IdeaIcon/>强大<AppleArcadeIcon/>
          </div>
          <div className="wall-row-1">
            仿多邻国<DuolingoIcon/>风格
          </div>
          <div className="wall-row-1">
            组件库<TerrariaIcon/>
          </div>

        </div>
      </div>
  )
}

export default HomeBrand
