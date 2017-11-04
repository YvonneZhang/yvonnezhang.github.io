import React from "react";
import "./index.less";

export default () => {
  return (
    <div className="resume">
      <link
        rel="stylesheet"
        media="screen"
        href="https://fontlibrary.org/face/glacial-indifference"
        type="text/css"
      />

      <div className="resume-inner">
        <section className="about">
          <img
            className="avatar"
            src="http://7xl4xb.com1.z0.glb.clouddn.com/a.png"
            alt="avatar"
          />
          <h1>张 艺 帆</h1>
          <h2>FRONT-END DEVELOPER</h2>
        </section>
        <section className="profile">
          <h3><i className="icon icon-profile" />PROFILE</h3>
          <p>
            一年大型移动端 Hybrid 应用开发经验，前端工程化拥趸
          </p>
        </section>
        <section className="experience">
          <h3><i className="icon icon-work" />EXPERIENCE</h3>
          <ul>
            <li>
              <h3>蚂蚁金服</h3>
              <p>2015.07 至今</p>
              <p>前端开发工程师</p>
            </li>
            <li>
              <h3>百姓网</h3>
              <p>2014.03 - 2015.04</p>
              <p>前端技术实习生</p>
            </li>
          </ul>
        </section>
        <section className="education">
          <h3>EDUCATION</h3>
          <ul>
            <li>
              <h3>华东师范大学</h3>
              <p>2011 - 2015 </p>
              <p>本科 软件工程专业（嵌入式系统方向）</p>
            </li>
          </ul>
        </section>
        <section className="skills">
          <h3><i className="icon icon-computer" />SKILLS</h3>
        </section>
        <footer>
          <a href="tel:18667033225">+86 186 6703 3225</a>
          <a href="https://yvonnezhang.github.io" target="_blank">
            yvonnezhang.github.io
          </a>
          <a href="mailto:zhyifa001@gmail.com">zhyifa001@gmail.com</a>
        </footer>
      </div>

    </div>
  );
};
