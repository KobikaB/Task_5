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
    <div className="min-h-screen w-full py-12 px-4 bg-gradient-to-b from-white to-blue-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-800 mt-20">
          Our Blog
        </h1>
        <p className="text-gray-700 sm:text-base md:text-lg">
          Explore articles and insights about food, health, nutrition, and
          everything delicious!
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white border border-blue-200 hover:shadow-xl  rounded-2xl p-6 w-full sm:w-[45%] lg:w-[30%] text-left"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-gray-500 mb-3">{post.date}</p>
            <p className="text-gray-800">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
