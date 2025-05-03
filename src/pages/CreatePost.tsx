
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would submit to an API
    toast({
      title: "Post created!",
      description: "Your post has been published successfully.",
    });
    
    // Reset form
    setTitle("");
    setTags("");
    setContent("");
    setCoverImage("");
  };

  return (
    <Layout showRightSidebar={false}>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-3xl font-bold mb-6">Create Post</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="cover-image" className="block text-sm font-medium text-gray-700 mb-1">
              Cover Image URL (optional)
            </label>
            <Input
              id="cover-image"
              type="text"
              placeholder="https://example.com/image.jpg"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <Input
              id="title"
              type="text"
              required
              placeholder="New post title here..."
              className="text-xl"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
              Tags (comma separated)
            </label>
            <Input
              id="tags"
              type="text"
              placeholder="javascript, react, webdev"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <Textarea
              id="content"
              required
              placeholder="Write your post content here..."
              className="min-h-[300px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          
          <div className="flex justify-end">
            <Button type="submit">Publish</Button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreatePost;
