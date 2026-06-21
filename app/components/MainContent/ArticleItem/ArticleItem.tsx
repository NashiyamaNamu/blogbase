"use client"
import nextConfig from "@/next.config";
import { Article } from "../MainContent";
import path from "path";
import { useState } from "react";

export const ArticleItem = (props: { article: Article }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (

        <div className="box">
            <div className="title is-5">
                <button className="button" onClick={() => { setOpen(!open) }}>
                    {open ? "📂" : "📁"}
                </button>
                <span className="title-text">
                    {props.article.title}
                </span>
            </div>
            {open && (
                <div>
                    {props.article.article.map((text, index) => (
                        <ArticleLine text={text} key={index} />
                    ))}
                </div>
            )}
        </div>
    )
}
const ArticleLine = (props: { text: string }) => {
    if (props.text.indexOf("#youtube") == 0)
        return (<figure className="image is-16by9">
            <iframe
                className="has-ratio"
                width="640"
                height="360"
                src={props.text.slice(8)}
                frameBorder={0}
                allowFullScreen
            ></iframe>
        </figure>);
    if (props.text.indexOf("#image") == 0)
        return (<img src={path.join(nextConfig.basePath + "", "pic", props.text.slice(6))} />);
    if (props.text.indexOf("#link") == 0)
        return (<a href={props.text.slice(5)} >リンク</a>);

    if (props.text.indexOf("#") == 0)
        return (<div className="bold-text">{props.text.slice(1)}</div>);

    return (<div>{props.text}</div>);
}