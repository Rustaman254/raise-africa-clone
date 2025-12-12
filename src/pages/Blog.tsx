import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Signals by Fin lence: Cutting through the noise in African VC",
    date: "October 10, 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    featured: true
  },
  {
    id: 2,
    title: "Let's make equity moves",
    date: "September 30, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
  },
  {
    id: 3,
    title: "Introducing Organize 2.0: equity solutions for African startups",
    date: "September 23, 2024",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800"
  },
  {
    id: 4,
    title: "Equity in African VC is broken",
    date: "March 9, 2023",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800"
  },
  {
    id: 5,
    title: "Smart equity and clear structure for strong startups",
    date: "February 21, 2025",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800"
  },
  {
    id: 6,
    title: "Introducing Fin lence AI",
    date: "February 17, 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
  },
  {
    id: 7,
    title: "Equity in a Wallet",
    date: "February 4, 2025",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
  },
  {
    id: 8,
    title: "A comprehensive guide to UI design",
    date: "January 15, 2025",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800"
  }
];

const Blog = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-12">
            Latest Articles
          </h1>
          
          {/* Featured Post */}
          <Link to={`/blog/${featuredPost.id}`} className="block group">
            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] mb-16">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/80 text-sm mb-2">{featuredPost.date}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{featuredPost.title}</h2>
              </div>
            </div>
          </Link>
          
          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <div className="rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
