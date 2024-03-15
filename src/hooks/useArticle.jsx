import ArticleContext from "../context/ArticleContext";
import { useContext } from "react";

export default function useArticleContext() { 
    return useContext(ArticleContext);
}