
import React, { useState } from "react";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Home = () => {
  const [activeTab, setActiveTab] = useState("relevant");

  return (
    <Layout>
      <div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="relevant">Relevant</TabsTrigger>
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="top">Top</TabsTrigger>
          </TabsList>
          <TabsContent value="relevant">
            <div className="space-y-4">
              {articles.map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="latest">
            <div className="space-y-4">
              {[...articles].sort((a, b) => {
                return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
              }).map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="top">
            <div className="space-y-4">
              {[...articles].sort((a, b) => b.reactions - a.reactions).map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Home;
