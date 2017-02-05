import React from 'react'

const Home = () => {
    return (
            <div className="home-container">
                <div className="avatar-img">
                    <img src="https://swhzhuster.xin/images/my-CV/avatar.jpg" className="avatar" />
                </div>
                <div className="home-info">
                    <p className="my-name">刘航</p>
                    <p className="my-word">热爱编程，热衷探索</p>
                    <p className="my-profession">前端开发工程师</p>
                    <a href="mailto:1767652421@qq.com" target="_blank" className="my-email">1767652421@qq.com</a>
                </div>
            </div>
        )
}

export default Home