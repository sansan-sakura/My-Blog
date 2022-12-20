import style from "../styles/About.module.css";
import Image from "next/image";
import myImage from "../assets/myImage.jpg";

export default function About() {
  return (
    <div className={style.container}>
      <Image
        src={myImage}
        alt=""
        className={style.about_image}
        // layout="responsive"
        objectFit="cover"
        height="1000px"
      />

      <h2 className={style.title}>------ About Me ------</h2>
      <p className={style.text}>
        こんにちは！　日本生まれの日本育ちで、22歳の時から日本を離れて外国で暮らしています。
        私は、高校1年の時に摂食障害になり、そこから12年以上も摂食障害と戦って生きてきました。今は、ドイツの田舎街に家族とともに暮らしています。
        。摂食障害は当時の日本でまだそこまでちゃんと知られていなかったために、最初は専門の医者と言う人を尋ねても助けにはならず、摂食障害を自分で治そうと初期の段階で決め、そこからは試行錯誤で歩んだ年月。摂食障害とともに歩んだ人生は本当に大変で辛いことばかりでしたが、学んだこともたくさんありました。ここでは誰かのお役に立てたらいいなと思い、私の経験や考えを書いていこうと思っています。また、ドイツでの生活についても書いていこうと思っていますので、宜しくお願いします。
        <br />
        <br />
        Hey! I am Sakura. I was born and raised in Hyogo, Japan. I suffered from
        an eating disorder for over 12 years. I started to eat less when I was
        15 years old, and after half a year, I started to binge and purge. After
        that was the darkest time in my life, which continued until
        recently,when I finally got over this illness. It was a long journey
        with a lot of failures and successes, along with many experiences. So I
        want to share those experiences with others who are suffering from the
        same illness. I live in Germany with two kids and my husband. I also
        study at Tokyo Online University. I am trying to enjoy my life as much
        as possible to get my lost time that I was fighting against an eating
        disorder back. And I am trying my best to live in this moment, which I
        could not do when I was suffering from a eating disorder! I hope sharing
        my experiences helps some of you.
      </p>
    </div>
  );
}
