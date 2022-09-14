import Link from "next/link";
import style from "../styles/BlogCards.module.css";

export default function BlogCard({
  title,
  image,
  slug,
  datePublished,
  content,
  category,
}) {
  return (
    <div className={style.main_blog}>
      <img src={image.url} alt="" className={style.main_blog_img} />
      <div className={style.main_blog_details}>
        <span className={style.main_blog_category}>{category.categories}</span>
        <h3>{title}</h3>

        <div
          className={style.main_blog_text}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>

        <span className={style.main_blog_date}>{datePublished}</span>
      </div>
      <Link href={"/posts/" + slug}>
        <a className={style.link}>Read more</a>
      </Link>
    </div>
  );
}
