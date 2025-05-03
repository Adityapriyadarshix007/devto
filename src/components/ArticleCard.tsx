
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageSquare, Bookmark } from "lucide-react";
import { useBookmarks } from "@/contexts/BookmarkContext";
import { toast } from "sonner";

type ArticleProps = {
  id: string;
  title: string;
  coverImage: string;
  authorName: string;
  authorImage: string;
  publishedDate: string;
  description?: string;
  tags: string[];
  readTime: string;
  reactions: number;
  comments: number;
};

const ArticleCard: React.FC<ArticleProps> = ({
  id,
  title,
  coverImage,
  authorName,
  authorImage,
  publishedDate,
  description,
  tags,
  readTime,
  reactions,
  comments,
}) => {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const isBookmarked = bookmarks.includes(id);
  const [liked, setLiked] = useState(false);
  const [reactionCount, setReactionCount] = useState(reactions);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setLiked(!liked);
    setReactionCount(prevCount => liked ? prevCount - 1 : prevCount + 1);
    toast.success(liked ? "Removed reaction" : "Added reaction");
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-3">
      <Link to={`/article/${id}`} className="block">
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-52 object-cover"
          loading="lazy"
        />
      </Link>
      
      <div className="p-5">
        <div className="flex items-center mb-4">
          <Link to={`/profile/${authorName.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
            <img 
              src={authorImage} 
              alt={authorName} 
              className="w-10 h-10 rounded-full mr-3" 
            />
            <div>
              <div className="text-base font-medium">{authorName}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{publishedDate}</div>
            </div>
          </Link>
        </div>
        
        <Link to={`/article/${id}`} className="block mb-2">
          <h2 className="text-xl md:text-2xl font-bold hover:text-blue-600 dark:hover:text-blue-400">{title}</h2>
        </Link>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Link key={tag} to={`/tag/${tag}`} className="tag">
              #{tag}
            </Link>
          ))}
        </div>
        
        {description && (
          <p className="text-gray-700 dark:text-gray-300 mb-5">{description}</p>
        )}
        
        <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-100 dark:border-gray-700">
          <div className="flex space-x-4">
            <button 
              className="reaction-button py-2" 
              onClick={handleLike}
            >
              <Heart className={`h-5 w-5 ${liked ? 'text-red-500 fill-red-500' : ''}`} />
              <span className="ml-1">{reactionCount}</span>
            </button>
            <button className="reaction-button py-2">
              <MessageSquare className="h-5 w-5" />
              <span className="ml-1">{comments}</span>
            </button>
          </div>
          
          <div className="flex items-center">
            <span className="text-xs text-gray-500 mr-3">{readTime}</span>
            <button 
              className="reaction-button p-2" 
              onClick={(e) => {
                e.preventDefault();
                toggleBookmark(id);
                toast.success(isBookmarked ? "Removed from bookmarks" : "Added to bookmarks");
              }}
            >
              <Bookmark 
                className={`h-5 w-5 ${isBookmarked ? 'fill-current text-blue-600' : ''}`} 
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
