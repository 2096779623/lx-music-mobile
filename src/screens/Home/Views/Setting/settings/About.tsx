import { memo } from 'react'
import { View, TouchableOpacity } from 'react-native'

import Section from '../components/Section'
// import Button from './components/Button'

import { createStyle, openUrl } from '@/utils/tools'
// import { showPactModal } from '@/navigation'
import { useTheme } from '@/store/theme/hook'
import { useI18n } from '@/lang'
import Text from '@/components/common/Text'
import { showPactModal } from '@/core/common'

export default memo(() => {
  const theme = useTheme()
  const t = useI18n()
  const openHomePage = () => {
    void openUrl('https://github.com/lyswhut/lx-music-mobile#readme')
  }
  const openForkerrepoPage = () => {
    void openUrl('https://github.com/2096779623/lx-music-mobile/tree/beta')
  }
  const openFAQPage = () => {
    void openUrl('https://lyswhut.github.io/lx-music-doc/mobile/faq')
  }
  // const openIssuesPage = () => {
  //   openUrl('https://github.com/lyswhut/lx-music-mobile/issues')
  // }
  const openPactModal = () => {
    showPactModal()
  }
  const openPartPage = () => {
    void openUrl('https://github.com/lyswhut/lx-music-mobile#%E9%A1%B9%E7%9B%AE%E5%8D%8F%E8%AE%AE')
  }

  const issues = () => {
    void openUrl('https://github.com/2096779623/lx-music-mobile/issues/new?assignees=&labels=&projects=&template=--bug.yml&title=%5BBug%5D%3A+')
  }
  // const goToQQGroup2 = () => {
  //   openUrl(qqGroupUrl2).catch(() => {
  //     void openUrl(qqGroupWebUrl2)
  //   })
  // }

  const textLinkStyle = {
    ...styles.text,
    textDecorationLine: 'underline',
    color: theme['c-primary-font'],
    // fontSize: 14,
  } as const


  return (
    <Section title={t('setting_about')}>
      <View style={styles.part}>
        <Text style={styles.text} >本软件是 Kevin 的一个 fork，添加了一些额外的功能。代码已开源，原作者开源地址：</Text>
        <TouchableOpacity onPress={openHomePage}>
          <Text style={textLinkStyle}>https://github.com/lyswhut/lx-music-mobile</Text>
        </TouchableOpacity>
        <Text style={styles.text}> fork 的开源地址：</Text>
        <TouchableOpacity onPress={openForkerrepoPage}>
          <Text style={textLinkStyle}>https://github.com/2096779623/lx-music-mobile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.part}>
        <Text style={styles.text} >软件的常见问题可转至：</Text>
        <TouchableOpacity onPress={openFAQPage}>
          <Text style={textLinkStyle}>常见问题</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.part}>
        <Text style={styles.text}><Text style={styles.boldText}>本软件没有客服</Text>，但我们整理了一些常见的使用问题，<Text style={styles.boldText} >仔细 仔细 仔细 </Text>地阅读常见问题后，</Text>
        <Text style={styles.text}>仍有问题可创建 </Text>
        <TouchableOpacity onPress={issues}><Text style={textLinkStyle}>issues</Text></TouchableOpacity>
        <Text style={styles.text}> 反馈。</Text>
      </View>
      <View style={styles.part}>
        <Text style={styles.text}>目前本项目的原始发布地址只有<Text style={styles.boldText}>GitHub</Text>及<Text style={styles.boldText}>蓝奏网盘</Text>，其他渠道均为第三方转载发布，可信度请自行鉴别。</Text>
        <Text style={styles.text}>本项目无微信公众号之类的官方账号，也未在小米、华为、vivo等应用商店发布同名应用，谨防被骗。</Text>
        <Text style={styles.text}>若你使用过程中遇到<Text style={styles.boldText}>广告</Text>或者<Text style={styles.boldText}>引流</Text>（如需要加群、关注公众号之类才能使用或者升级）的信息，则表明你当前运行的软件是第三方修改版。</Text>
        <Text style={styles.text}>若在升级新版本时提示<Text style={styles.boldText}>签名不一致</Text>，则表明你手机上的旧版本或者将要安装的新版本中有一方是第三方修改版。</Text>
      </View>
      <View style={styles.part}>
        <Text style={styles.text}>由于软件开发的初衷仅是为了对新技术的学习与研究，因此软件直至停止维护都将会一直保持纯净。</Text>
      </View>
      <View style={styles.part}>
        <Text style={styles.text}>你已签署本软件的</Text>
        <TouchableOpacity onPress={openPactModal}><Text style={styles.text} color={theme['c-primary-font']}>许可协议</Text></TouchableOpacity>
        <Text style={styles.text}>，协议的在线版本在</Text>
        <TouchableOpacity onPress={openPartPage}><Text style={textLinkStyle}>这里</Text></TouchableOpacity>
      </View>
      <View style={styles.part}>
        <Text style={styles.text}>By：</Text>
        <Text style={styles.text}>落雪无痕</Text>
        <Text style={styles.text}>Forker:</Text>
        <Text style={styles.text}>Kevin Williams</Text>
      </View>
    </Section>
  )
})

const styles = createStyle({
  part: {
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 14,
    textAlignVertical: 'bottom',
  },
  boldText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlignVertical: 'bottom',
  },
  throughText: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    textAlignVertical: 'bottom',
  },
  btn: {
    flexDirection: 'row',
  },
})
