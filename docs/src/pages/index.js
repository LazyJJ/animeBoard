import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const ButtonStyle = {
  margin: 5
}

const VideoStyle = {
  width: '45vw',
  height: '27vw',
}

const Intro = () => {
  return <div>
    <title>AnimeBoard</title>
    <h3>
      动画黑板
    </h3>
      是一个知识类视频制作工具。只需要类似PPT/Keynote的使用门槛和操作方式，
      就可以快速做出一个直观漂亮的可视化动画视频。
    <br />
    <div style={{padding: 10, display: 'flex', alignItems: 'center'}} >
          <Button style={ButtonStyle} variant='success'
            href='https://anime-board.oss-cn-beijing.aliyuncs.com/animeBoard-win64.exe'>下载(win64)</Button>
          <Button style={ButtonStyle} variant='info' 
            href='https://github.com/carsonDB/animeBoard#animeboard' target="_blank">快速入门</Button>
        目前只支持win64。
      </div>
    <Examples />
  </div>
}

const Examples = () => {
  return <div>
    <h4>例子:</h4>
    <a href='http://anime-board.oss-cn-beijing.aliyuncs.com/%E8%BF%9B%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B%E7%9A%84%E5%8C%BA%E5%88%AB.zip'
      target="_blank" >
      进程和线程的区别
    </a>
    （下载压缩包，解压后即可导入）
    <br />
    发布的视频(<a href='https://www.ixigua.com/i6926416351611322891/' >西瓜视频</a>
    , <a href='https://www.bilibili.com/video/BV1Wr4y1P7Yr/' >B站</a>)
  </div>
}

// markup
const IndexPage = () => {

  const downloadPrompt = () => {
    // todo...
  }

  return <main style={pageStyles}>
      <div style={{display: "flex"}} >
        <Intro />
        <iframe src="//player.bilibili.com/player.html?bvid=BV1aa411F7Y2&page=1" 
          style={VideoStyle} scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
      </div>
  </main>
}

export default IndexPage
