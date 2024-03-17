export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-5xl font font-semibold text-center my-7'>
            Welcome to Blog App
          </h1>
          <p className="text-2xl">At Blog App, we believe in the power of words to inspire, educate, and connect people from all walks of life. Our platform serves as a digital canvas where ideas flourish, discussions spark, and communities thrive.</p>
        </div>
        <div className="flex flex-col justify-start items-start mt-8">
        <h2 className='text-2xl font font-semibold my-7'>Our Mission</h2>
    <p className="text-left">Our mission is simple: to provide a welcoming space where individuals can share their thoughts, experiences, and expertise through the art of blogging. Whether you're a seasoned writer or a first-time blogger, we invite you to join our vibrant community and contribute your unique voice to the conversation.</p>

    <h2 className='text-2xl font font-semibold  my-7'>What Sets Us Apart</h2>
    <p className="text-left">What sets Blog App apart is our commitment to inclusivity and diversity. We celebrate the richness of human experience and encourage individuals from diverse backgrounds to share their stories and perspectives. Our platform is a testament to the belief that everyone has a story worth telling and that every voice deserves to be heard.</p>

    <h2 className='text-2xl font font-semibold my-7'>Our Features</h2>
    <ol className="text-left" >
      <li className="mb-4"><strong>1. Engaging Content:</strong> Explore a wide range of topics, from travel and lifestyle to technology and beyond. Our curated selection of articles is sure to pique your interest and keep you coming back for more.</li>
      <li className="mb-4"><strong>2. Interactive Community:</strong> Join the conversation by commenting on posts, sharing your thoughts, and connecting with fellow readers and writers. At Blog App, we believe in the power of community to foster meaningful connections and inspire positive change.</li>
      <li className="mb-4"><strong>3. User-Friendly Interface:</strong> Our intuitive interface makes it easy to navigate the site, discover new content, and engage with other users. Whether you're browsing on your computer, tablet, or smartphone, [Your Blog Name] offers a seamless experience across all devices.</li>
    </ol>
        </div>
      </div>

    </div>
  );
}
