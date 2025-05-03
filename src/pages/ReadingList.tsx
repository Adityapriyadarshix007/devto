
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import { useBookmarks } from "@/contexts/BookmarkContext";
import { articles } from "@/data/mockData";

const ReadingList = () => {
  const { bookmarks } = useBookmarks();
  const bookmarkedArticles = articles.filter(article => bookmarks.includes(article.id));

  return (
    <Layout>
      <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
        <h1 className="text-3xl font-bold mb-2">Reading List</h1>
        <p className="text-gray-600">Articles you've saved for later</p>
      </div>

      {bookmarkedArticles.length > 0 ? (
        <div className="space-y-4">
          {bookmarkedArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
          <h2 className="text-xl font-semibold mb-2">Your reading list is empty</h2>
          <p className="text-gray-600 mb-4">
            Click the bookmark icon on any article to add it to your reading list
          </p>
        </div>
      )}
    </Layout>
  );
};

export default ReadingList;
