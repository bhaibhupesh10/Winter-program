"use client"
import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';
import { FaGoogle, FaLinkedin } from "react-icons/fa"

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false);


  const posts = [
    {
      id: 1,
      author: {
        name: "AR-MAAN Ansari",
        title: "",
        avatar:
          "https://lh3.googleusercontent.com/a-/ALV-UjVYQHuwPLi7LXqGQUoZk30XkmqZMwDbYpp79ApFHcS00mlpAVe1=w90-h90-p-rp-mo-br100 ",
        google: "https://www.google.com/maps/contrib/107567463059127600637/reviews/@26.8663614,75.786043,17z/data=!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
      },
      content: `My 45-day journey at Linux World Summer was transformative. Under the guidance of Mr. Vimal Daga, I explored many Technologies like Python, cloud computing, AI, Linux , DevOps etc . I know about my true potential . One of the standout achievements during the program was the creation of my startup "Service Lane" ,  . We create many friends cum family . Beyond technical growth, the program fostered personal development, leadership, and collaboration. These 45 days laid a strong foundation for my `,
      timestamp: "⭐⭐⭐⭐⭐ a months ago",
      source: "Google", // Source of the testimonial
    },
    {
      id: 2,
      author: {
        name: "shubham saboo",
        title: "",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWReaXAgJezOekd4Q9wV9ODZEffYouVkqiDtalapHTuwZMxvoI=w90-h90-p-rp-mo-br100",
        google: "https://www.google.com/maps/contrib/102158508351233078985/reviews/@26.8663614,75.786043,17z/data=!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D",
      },
      content: `If you’re looking for a program that doesn’t just teach you, but shapes you both as a professional and a person, I can’t recommend this enough. The support, the learning, and the growth you’ll experience are simply unmatched. This program is an opportunity to step out of your comfort zone and see just how much you can achieve.

I am deeply grateful to Vimal Daga Sir, Preeti Chandak Ma'am, and the entire LinuxWorld Informatics Pvt Ltd team for making this journey possible. Thank you for creating an environment where growth felt natural, and collaboration was genuinely meaningful.

This summer has truly been life-changing for me. Like many, I initially thought this would be just another typical training program. But I couldn't have been more wrong. The experience was nothing short of unique and transformative.

The holistic approach of this program was like no other. It didn’t just challenge me on a professional level, but it also pushed me to grow personally in ways I hadn’t expected. From technical skills to soft skills, every aspect was covered thoughtfully.

As the final weeks wrapped up, everything started to come together. The hard work, late nights, and the incredible teamwork all culminated in one profound "aha" moment, where everything finally made sense`,
      timestamp: "⭐⭐⭐⭐⭐ 2 month ago",
      source: "Google", // Source of the testimonial
    },
      {
    id: 3,
    author: {
      name: "Aakash Kathunia",
      title: "Technical Architect at HCLTech ",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQGJi9pe0O-O8A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723740692945?e=1737590400&v=beta&t=y2ONfXKp0z5KkZJRcTtg_e1iVUh8rFUn3JxaRqqFOBg",
      linkedin: "https://www.linkedin.com/in/aakash-kathunia-6b618b16/"
    },
    content: `

    Vimal Sir is outstanding while teaching complex and advanced topics, as he teaches us in such a way that even someone without technical background one can easily grasp and this is the main reason I have been following him since long.

    Before his session, I had tried to understand DevSecOps through various technical channels, but I didn't get a clear picture. However, in just initial hours of Vimal Sir’s session, he made the concept very much clearer. Then, over the next two hours, he simplified DevSecOps further, helping me gain valuable insights that sparked my interest in exploring the topic more deeply.
    
    I am Thankful to Vimal Sir for in-depth course on DevSecOps and looking more indepth session from him, and Im grateful for his teachings for current and upcoming valuable training sessions.`,
    timestamp: "1 month ago",
    source:"LinkedIn"
  },
  {
    id: 4,
    author: {
      name: "Alok Kumar Singh ",
      title: "Web Developer(Angular ) | Data Analyst |",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFGCjRM6gI1zg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724789778105?e=1737590400&v=beta&t=sm-JTK9zKq4_tbEEKi1nEZvWEa4fL-RoAH7KeL86jtk",
      linkedin: "https://www.linkedin.com/in/tech-alok/"
    },
    content: `

Attending the System Design workshop by Vimal Daga Sir was a great learning experience. He explained complex topics like scalability, fault tolerance, and load balancing in simple terms, making it easy to understand. The examples he gave helped us see how these concepts are used in real projects. I learned how to make systems more efficient and reliable by balancing important factors like performance and cost. I'm excited to apply these new skills in my future projects!
.`,
    timestamp: "1 month ago",
    source: "LinkedIn",
  },

  {
    id: 5,
    author: {
      name: "Mallesh Gangadhar ",
      title: "--",
      avatar: "https://media.licdn.com/dms/image/v2/D5635AQFvYLlZaIHe_A/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1713248954215?e=1732777200&v=beta&t=TAOMDi9g-MQ4HMspIYg8WBdCJ53UiCsR-c_GIDtjzzA",
      linkedin: "https://www.linkedin.com/in/mallesh-gangadhar-8ab53777/"
    },
    content: `

Superrrrrrrb Training Enjoyed! This Linux Essentials workshop with Vimal Sir was superb, The workshop provided a solid foundation, covering key concepts like processes, users, file operations, and essential commands. It also gave a glimpse into the power and versatility of Linux for solving real-world problems. I'm excited to learn next skills on Linux with AI.
to enhance my IT skills in Linux! Thanks
.`,
    timestamp: "1 month ago",
    source: "LinkedIn",
  },

  {
    id: 6,
    author: {
      name: "Mohit Agarwal ",
      title: "Student at NIT Kurukshetra ",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFfS5ahFvJB2Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681871987732?e=1737590400&v=beta&t=xyrWG92tvwvBV-V5WSDeucFFSkLx-j8GbZ3e_1lAjw0",
      linkedin: "https://www.linkedin.com/in/mohitagarwal99/"
    },
    content: `

The workshop was incredibly beneficial! I'm excited about the practical applications of CI/CD and AWS services. I plan to start by working on a personal project to implement a deployment pipeline and use AWS CodeDeploy for automation. Collaborating with others will definitely enhance the learning experience, and I'm eager to stay updated with new DevOps trends to improve my skills continuously.
I'm really looking forward to applying these insights!
.`,
    timestamp: "1 month ago",
    source: "LinkedIn",
  },
  {
    id: 7,
    author: {
      name: "Sakshi Shukla ",
      title: "",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocJf8geZ0YRYujHyiGqMz89pyXw11w6xQeHigDTXx2gCTRX8FQ=w90-h90-p-rp-mo-br100",
      google: "https://www.google.com/maps/contrib/103896485176679661480/reviews/@26.8663614,75.786043,17z/data=!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
    },
    content: `LinuxWorld is an exceptional platform for anyone looking to master cutting-edge technologies like cloud computing, DevOps, AI, and more. The training I received here was nothing short of transformative, thanks to the practical, hands-on approach and the incredible guidance of Mr. Vimal Daga Sir. Every session was insightful, and the blend of technical knowledge with real-world applications made learning exciting and impactful. The environment fosters innovation, and the mentors ensure that every student is equipped with both the skills and confidence to excel in their respective fields. I highly recommend LinuxWorld to anyone serious about advancing their career or startup journey! ⭐⭐⭐⭐⭐.`,
    timestamp: "⭐⭐⭐⭐⭐ a month ago",
    source: "Google",
  },
  {
    id: 9,
    author: {
      name: "Priyanka Poonia ",
      title: "",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocIhwolUooBMrHKn--Vhu2KdbppiME6sIgh5eD6LYG7HU11JrQ=w90-h90-p-rp-mo-br100",
      google: "https://www.google.com/maps/contrib/110200980044049560549/reviews/@26.8663614,75.786043,17z/data=!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
    },
    content: `From an individual who always has a phobia and confusion on technical skills to the one who has the confidence to solve any real-life problem through technology, it's an amazing journey of just 45 days but the level of knowledge and experience we gained is much more than anyone can explain in words...It has something that I have never experienced before joining Linuxworld, the working environment it has is something which has power to change the lives. It was such a wonderful experience to part of.

Also, Mr. Vimal Daga Sir was a great personality, and I really felt honor to get a chance to learn from a teacher like him. He is not just a world record holder for learning the technologies but also applying them to solve real life problems. He taught us what it means to be a true engineer. The emotional support he provides is something which is nowhere to be found.`,
    timestamp: "⭐⭐⭐⭐⭐ 2 month ago",
    source: "Google",
  },
  {
    id: 10,
    author: {
      name: "Riyanshi Verma",
      title: "",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocKr5gjaWkwbUDIjPK2-vZ9tH7aQ8ZylKRprPJ4V8K5qvms6tQ=w90-h90-p-rp-mo-br100",
      google: "https://www.google.com/maps/reviews/@26.8663614,75.786043,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSURuLWV6UXJBRRAB!2m1!1s0x0:0x1641d7840dee1723?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
    },
    content: `My 45-day journey at Linux World Summer was nothing short of transformative. Under the visionary guidance of Mr. Vimal Daga, I delved into a vast array of technologies, including Python, Cloud Computing, AI, Linux, and DevOps, discovering my true potential along the way.

One of the standout achievements of this experience was the launch of my startup, Service Lane. This was more than just a technical milestone—it marked the beginning of a new chapter in my entrepreneurial journey. Alongside this, I forged incredible friendships that quickly grew into a supportive, family-like community.

But beyond the technical mastery, this program instilled essential skills in leadership, collaboration, and personal growth. These 45 days have laid a rock-solid foundation for everything to come, setting the stage for my future endeavors.`,
    timestamp: "⭐⭐⭐⭐⭐ a month ago",
    source: "Google",
  },
  {
    id: 11,
    author: {
      name: "Rahul Pradhan",
      title: "",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXflmoNxQQub1rnN9P3ciyd6wRutRUIyUq8XslgSGWfHI5En56k=w90-h90-p-rp-mo-ba3-br100",
      google: "https://www.google.com/maps/reviews/@26.8663614,75.786043,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUMzdy1fQm13RRAB!2m1!1s0x0:0x1641d7840dee1723?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
    },
    content: `"My time at Linux World stands as one of the most cherished moments of my life—a period filled with profound learning, personal growth, and inspiring connections. It is an experience etched deeply in my heart, marking a priceless chapter that I will carry with me forever."`,
    timestamp: "⭐⭐⭐⭐⭐ 2 weeks ago",
    source: "Google",
  },
  {
    id: 12,
    author: {
      name: "Khushboo Rana",
      title: "",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjX-r93hkP3gE9Usel7ylqSE9eD2cNHx1MBSoBdX9R1blo9uUrA=w90-h90-p-rp-mo-br100",
      google: "https://www.google.com/maps/contrib/103843629904167370238/reviews/@26.8663614,75.786043,17z/data=!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
    },
    content: `My time at LinuxWorld was a game-changer! From the day I joined, I was embraced by a vibrant community of brilliant minds, all eager to exchange knowledge and uplift each other. The atmosphere was a hotbed of innovation and teamwork, making it the perfect place for growth.

Guided by my mentor, Vimal Sir, I honed critical technical skills in Python, web development, and tools such as Flask, Twilio, and Boto3. His vast expertise and unwavering support fostered an environment where curiosity and exploration were not only encouraged but celebrated. He urged us to dig deeper, ask questions, and push boundaries, creating a rich learning experience.
`,
    timestamp: "⭐⭐⭐⭐⭐ a month ago",
    source: "Google",
  },
  {
    id: 13,
    author: {
      name: "Sameer Khan",
      title: "",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXsnrAGe90HsdpkJq5lWYz1eOYs1QlSa-d9odB8dV3iJ_ivSk9n=w90-h90-p-rp-mo-br100",
      google: "https://www.google.com/maps/contrib/104011238944807550881/reviews/@26.8663614,75.786043,17z/data=!4m3!8m2!3m1!1e1?hl=en-GB&entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
    },
    content: `"It was amazing time with the team Linux world .... Great learning from Mr Vimal Daga sir .
In these 45 days I have learnt many things it is not about learnt it is about enhanced my skills so many other things which would be not be possible without our whole team 💗 thank you so much for this moments Love you and miss you ✨💗"`,
    timestamp: "⭐⭐⭐⭐⭐ 2 months ago",
    source: "Google",
  },
  ];

  // Show only the first 6 posts when not expanded, otherwise show all posts
  const visiblePosts = isExpanded ? posts : posts.slice(0, 6);

  return (
    <div className="bg-[#181A1B] p-4 sm:p-6 mx-auto">
      <div className="max-w-[920px] mx-auto">
        <h2 className="text-white text-sm sm:text-md">HEAR IT FROM THEM</h2>
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 mt-2">
          Ambitious People ❤️ <span className="text-[#ff0000]">Linux World</span>
        </h2>

        {/* Displaying testimonials in masonry layout */}
        <div className="sm:columns-2 lg:columns-3 bg-[#181A1B] gap-4 sm:gap-6 space-y-4 sm:space-y-0">
          {visiblePosts.map((post) => (
            <div key={post.id} className="break-inside-avoid mb-4 sm:mb-6">
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Button to toggle visibility of all posts */}
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white text-[#2C3E50] font-semibold text-lg border-2 border-[#2C3E50] py-3 px-8 rounded-full hover:bg-[#2C3E50] hover:text-white transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : 'See our Wall of Love'}
          </button>
        </div>
      </div>
    </div>
  );
}

// PostCard component to display individual testimonial
const PostCard: React.FC<{ post: any }> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = post.content.split(' ');
  const truncatedContent = words.length > 80 ? words.slice(0, 80).join(' ') + '...' : post.content;

  const handleToggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-[#181A1B] text-white mt-4 shadow-md w-full p-4 rounded-lg">
      <div className="pb-2">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-300">
            <img className="h-full w-full object-cover rounded-full" src={post.author.avatar || '/default-avatar.png'} alt={post.author.name} />
          </div>
          <div className="flex-grow">
            <h3 className="text-sm font-semibold">{post.author.name}</h3>
            <p className="text-xs text-gray-400">{post.author.title}</p>
          </div>
          <a
              href={post.source === "LinkedIn" ? post.author.linkedin : post.author.google}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              {post.source === "LinkedIn" ? <FaLinkedin size={20} /> : <FaGoogle size={20} />}
            </a>
          {/* </a> */}
        </div>
      </div>

      <div className="pt-2 space-y-2 text-xs sm:text-sm">
        <p>
          {isExpanded ? post.content : truncatedContent}
          {words.length > 80 && (
            <span 
              className="text-blue-500 cursor-pointer ml-1" 
              onClick={handleToggleContent}
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </span>
          )}
        </p>
      </div>

      <p className="mt-4 text-xs text-gray-400">{post.timestamp}</p>
    </div>
  );
};
