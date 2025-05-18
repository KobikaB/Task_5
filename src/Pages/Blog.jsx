import React from "react";

const Blog = () => {
 
  const blogPosts = [
    {
      title: "Top 5 Health Benefits of Eating Organic Food",
      date: "May 10, 2025",
      description:
        "Organic food is grown without harmful pesticides and chemicals. Discover why it's a smart choice for a healthier life.",
    },
    {
      title: "The Art of Food Presentation",
      date: "May 5, 2025",
      description:
        "They say we eat with our eyes first. Learn how food presentation elevates the dining experience.",
    },
    {
      title: "How to Create a Balanced Diet Plan",
      date: "May 28, 2025",
      description:
        "Understanding nutrition basics can help you create a healthy, sustainable eating plan.",
    },
  ];

  return (
    <div className="min-h-screen mt-30 ">
   
      <div className="text-center ">
        <h1 className="text-5xl font-extrabold mb-4 ">Our Blog</h1>
        <p >
          Explore articles and insights about food, health, nutrition, and everything delicious!
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-2  lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-blue-300 rounded-xl shadow-md p-6  ">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{post.date}</p>
            <p className="text-gray-700">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
