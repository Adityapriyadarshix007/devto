
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type BookmarkContextType = {
  bookmarks: string[];
  addBookmark: (articleId: string) => void;
  removeBookmark: (articleId: string) => void;
  toggleBookmark: (articleId: string) => void;
  isBookmarked: (articleId: string) => boolean;
};

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  // Load bookmarks from localStorage on initialization
  useEffect(() => {
    const savedBookmarks = localStorage.getItem("bookmarks");
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (articleId: string) => {
    if (!bookmarks.includes(articleId)) {
      setBookmarks([...bookmarks, articleId]);
    }
  };

  const removeBookmark = (articleId: string) => {
    setBookmarks(bookmarks.filter(id => id !== articleId));
  };

  const toggleBookmark = (articleId: string) => {
    if (bookmarks.includes(articleId)) {
      removeBookmark(articleId);
    } else {
      addBookmark(articleId);
    }
  };

  const isBookmarked = (articleId: string) => {
    return bookmarks.includes(articleId);
  };

  return (
    <BookmarkContext.Provider value={{ 
      bookmarks, 
      addBookmark, 
      removeBookmark, 
      toggleBookmark, 
      isBookmarked 
    }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (context === undefined) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
};
