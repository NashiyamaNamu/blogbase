"use client"
import { useState, useEffect } from "react";
import { StringStatusComponent } from "../Structs";
import "./styles.css"
import { ArticleItem } from "./ArticleItem/ArticleItem";
import nextConfig from "@/next.config";
import path from "path";

export interface Article {
    title: string;
    article: string[];
}
interface Content {
    id: string;
    articles: Article[];
}
interface ContentData {
    contents: Content[];
}

export default function MainContent(props: { state: StringStatusComponent }) {
    const [contents, setContents] = useState<ContentData>();

    useEffect(() => {
        fetch(path.join(nextConfig.basePath+"", "/content.json")).then((data) => data.json()).then((json) => {
            setContents(json);
            console.log(json);
        });
    }, []);
    const contentList = contents?.contents.filter((item) => item.id === props.state.state);

    return (
        <div className="MainPanel" >
            {contentList?.map((content) => (
                <>
                    {content.articles.map((article, index2) => (
                        <ArticleItem article={article} key={content.id+index2} />
                    ))}
                </>
            ))}
        </div>
    );
}
