import Image from "next/image";

import style from "../styles/Aside.module.css";

export default function Aside() {
  return (
    <aside className={style.aside}>
      <div className={style.aside_about}>
        <Image
          src="/neko.jpg"
          alt=""
          className={style.aside_about_img}
          height="200"
          width="300"
        />
        <div className={style.aside_about_text}>
          Sakuraです。ドイツのフランス国境沿いの小さな街に子供ふたりと夫と4人で暮らしています。
          自然が好きでアウトドア派ですが、インドアのアクティビティーもすごく好きです。
          通信大学で学ぶ傍ら、フロントエンドとしても働いています。
          <br />
          <br />
          Hey! I am Sakura. I live in a very small south east town called
          Pirmasens, Germany, with my two little children and husband. I enjoy
          being in nature and ofen go to hike with family on weekends.
        </div>
      </div>
    </aside>
  );
}
