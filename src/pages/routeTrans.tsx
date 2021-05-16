import React from 'react'
import {useParams} from 'react-router-dom'
import ButtonDisplay from "./Display/buttonDisplay";
import MenuDisplay from './Display/menuDisplay'
import PagerDisplay from "./Display/pagerDisplay";
import CheckBoxDisplay from './Display/checkBoxDisplay'
import InputDisplay from "./Display/inputDisplay";
import RadioDisplay from "./Display/radioDisplay";
import SwitchDisplay from './Display/switchDiaplay'
import AutoCompleteDisplay from './Display/autoCompleteDiaplay'
import RateDisplay from "./Display/rateDisplay";
import PopoverDisplay from "./Display/popoverDisplay";
import PopconfirmDisplay from "./Display/PopconfirmDisplay";
import MessageDisplay from "./Display/messageDisplay";
import LoadingDisplay from "./Display/loadingDisplat";
import SelectDisplay from "./Display/selectDiaplay";
import CascaderDisplay from "./Display/cascaderDisplay";
import TagDisplay from "./Display/TagDisplay";
import ProgressDisplay from "./Display/progressDisplay";
import TableDisplay from "./Display/tableDisplay"
import TabsDisplay from "./Display/tabsDisplay";
import StartDisplay from './Display/startDisplay'
import ColorDisplay from './Display/colorDisplay'
import CarouselDisplay from "./Display/carouselDisplay";
import UploadDisplay from "./Display/uploadDisplay";
interface Iparams {
  floor: string
}

const RouteTrans = () => {
    const { floor } = useParams<Iparams>()
    switch(floor) {
      case 'button': {
        return <ButtonDisplay/>
      }
      case 'grid': {
        return <ButtonDisplay/>
      }
      case 'menu': {
        return <MenuDisplay/>
      }
      case 'pagination': {
        return <PagerDisplay/>
      }
      case 'select': {
        return <SelectDisplay/>
      }
      case 'cascader': {
        return <CascaderDisplay/>
      }
      case 'checkbox': {
        return <CheckBoxDisplay/>
      }
      case 'radio': {
        return <RadioDisplay/>
      }
      case 'input': {
        return <InputDisplay/>
      }
      case 'tag': {
        return <TagDisplay/>
      }
      case 'progress': {
        return <ProgressDisplay/>
      }
      case 'autocomplete': {
        return <AutoCompleteDisplay/>
      }
      case 'rate': {
        return <RateDisplay/>
      }
      case 'switch': {
        return <SwitchDisplay/>
      }
      case 'popover': {
        return <PopoverDisplay/>
      }
      case 'popconfirm': {
        return <PopconfirmDisplay/>
      }
      case 'carousel': {
        return <CarouselDisplay/>
      }
      case 'tables': {
        return <TableDisplay/>
      }
      case 'tabs': {
        return <TabsDisplay/>
      }
      case 'dialog': {
        return <MessageDisplay/>
      }
      case 'loading': {
        return <LoadingDisplay/>
      }
      case 'start': {
        return <StartDisplay/>
      }
      case 'color': {
        return <ColorDisplay/>
      }
      case 'upload': {
        return <UploadDisplay/>
      }
      default: {
        return <p>页面不存在</p>
      }
    }
}
export default RouteTrans
