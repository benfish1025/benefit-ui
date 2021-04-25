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
      case 'affix': {
        return <ButtonDisplay/>
      }
      case 'menu': {
        return <MenuDisplay/>
      }
      case 'pagination': {
        return <PagerDisplay/>
      }
      case 'cascader': {
        return <ButtonDisplay/>
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
      case 'slides': {
        return <ButtonDisplay/>
      }
      case 'tables': {
        return <ButtonDisplay/>
      }
      case 'tabs': {
        return <ButtonDisplay/>
      }
      case 'message': {
        return <MessageDisplay/>
      }
      case 'modal': {
        return <ButtonDisplay/>
      }
      case 'loading': {
        return <LoadingDisplay/>
      }
      default: {
        return <p>页面不存在</p>
      }
    }
}
export default RouteTrans
