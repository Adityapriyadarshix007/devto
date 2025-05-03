
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { articles } from "@/data/mockData";
import { Heart, MessageSquare, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { useBookmarks } from "@/contexts/BookmarkContext";
import { toast } from "sonner";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const [liked, setLiked] = useState(false);
  const [reactionCount, setReactionCount] = useState(article?.reactions || 0);
  
  if (!article) {
    return (
      <Layout>
        <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
          <h2 className="text-xl font-semibold mb-2">Article not found</h2>
          <p className="text-gray-600 mb-4">
            The article you're looking for doesn't exist or has been removed
          </p>
          <Link to="/" className="text-blue-600 hover:underline">
            Go back to home
          </Link>
        </div>
      </Layout>
    );
  }
  
  const bookmarked = isBookmarked(article.id);
  
  const handleToggleBookmark = () => {
    toggleBookmark(article.id);
    toast.success(bookmarked ? "Removed from bookmarks" : "Added to bookmarks");
  };

  const handleLike = () => {
    setLiked(!liked);
    setReactionCount(prevCount => liked ? prevCount - 1 : prevCount + 1);
    toast.success(liked ? "Removed reaction" : "Added reaction");
  };

  return (
    <Layout>
      <article className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        {article.coverImage && (
          <img 
            src={article.coverImage} 
            alt={article.title} 
            className="w-full h-64 md:h-96 object-cover" 
          />
        )}
        
        <div className="p-6">
          <div className="flex items-center mb-6">
            <Link to={`/profile/${article.authorName.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
              <img 
                src={article.authorImage} 
                alt={article.authorName} 
                className="w-10 h-10 rounded-full mr-3" 
              />
              <div>
                <div className="text-base font-medium">{article.authorName}</div>
                <div className="text-sm text-gray-500">
                  {article.publishedDate} • {article.readTime}
                </div>
              </div>
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag) => (
              <Link key={tag} to={`/tag/${tag}`} className="tag">
                #{tag}
              </Link>
            ))}
          </div>
          
          <div className="prose max-w-none mb-6">
            <p className="text-lg text-gray-800 leading-relaxed">
              {article.content || article.description || "No content available for this article."}
            </p>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mt-8">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <button 
                  className="reaction-button py-1.5 px-3"
                  onClick={handleLike}
                >
                  <Heart className={`h-5 w-5 mr-1 ${liked ? 'text-red-500 fill-red-500' : ''}`} />
                  <span>{reactionCount}</span>
                </button>
                <button className="reaction-button py-1.5 px-3">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  <span>{article.comments}</span>
                </button>
              </div>
              
              <button 
                className={`reaction-button py-1.5 px-3 ${bookmarked ? 'text-blue-600' : ''}`}
                onClick={handleToggleBookmark}
              >
                <Bookmark className={`h-5 w-5 mr-1 ${bookmarked ? 'fill-current' : ''}`} />
                <span>{bookmarked ? "Saved" : "Save"}</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticleDetail;
