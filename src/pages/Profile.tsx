
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { articles } from "@/data/mockData";
import ArticleCard from "@/components/ArticleCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  
  // Find articles by this author's username
  const authorArticles = articles.filter(
    article => article.authorName.toLowerCase().replace(/\s+/g, '-') === username
  );
  
  // Get author data from the first article (if available)
  const author = authorArticles.length > 0 ? {
    name: authorArticles[0].authorName,
    image: authorArticles[0].authorImage,
  } : { name: username, image: "" };

  return (
    <Layout>
      <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={author.image} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
            <p className="text-gray-600 mb-4">
              Developer and content creator
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {authorArticles.length} posts
              </span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                Joined May 2023
              </span>
            </div>
          </div>
        </div>
      </div>

      {authorArticles.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Posts by {author.name}</h2>
          <div className="space-y-4">
            {authorArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
          <h2 className="text-xl font-semibold mb-2">No posts found</h2>
          <p className="text-gray-600">
            This user hasn't published any posts yet
          </p>
        </div>
      )}
    </Layout>
  );
};

export default Profile;
