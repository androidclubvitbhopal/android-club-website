/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import BlogItem from "./BlogItem";
import Intro from "./Intro";
import Author from "./Author";
import Landingpage from "./Landingpage";
import { useLocation } from "react-router-dom";

export default function BlogPage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const blogPosts = [
    {
      title: "Introducing AndroidOS: Your Gateway to a Seamless Digital Experience",
      date: "12 July 2024",
      tag: "#AndroidOS #TechInnovation #SmartTechnology",
      img: "https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/download/big-green-android-facebook-cover.jpg",
      body: "Android is an open-source operating system developed by Google, designed primarily for touchscreen mobile devices such as smartphones and tablets. Based on the Linux kernel, Android provides a robust and flexible platform that supports a vast ecosystem of applications and services. Launched in 2008, Android quickly gained popularity due to its open-source nature, allowing developers to create and distribute apps freely, which fostered innovation and a diverse app marketplace. Android’s architecture is built around a layer of Java-based APIs, with a Linux kernel at its core. This architecture provides a solid foundation for a wide range of devices, from budget smartphones to high-end tablets and smartwatches. The operating system’s customization capabilities are a significant advantage, enabling manufacturers to tailor the user experience while maintaining core functionality. Google Play, the official app store for Android, hosts millions of apps, games, and digital content, making it one of the largest app marketplaces globally. Android also supports a range of programming languages, including Java, Kotlin, and C++, facilitating the development of a wide array of applications. With continuous updates and a commitment to user privacy and security, Android remains a leading platform in the mobile technology landscape, driving innovation and enhancing user experiences across the globe.",
    },
    {
      title: "Top 5 Android Apps to Boost Your Productivity in 2024",
      date: "15 July 2024",
      tag: "#AndroidApps #Productivity #TechTrends",
      img: "https://theninehertz.com/wp-content/uploads/2023/02/Android-app-Development-Company.jpg",
      body: `Looking to enhance your productivity? Explore the top 5 Android🤖 apps of 2024, designed to streamline your workflow, boost your efficiency, and keep you organized. Let’s unlock your full potential!

1. Todoist
   - Description: Todoist is a powerful task manager that helps you organize your tasks and projects with ease. With features like task prioritization, due dates, and project templates, you can stay on top of your work and personal life effortlessly.
   - Key Features:
     - Task prioritization
     - Project templates
     - Collaboration tools
   - Download Link: [Todoist on Google Play](https://play.google.com/store/apps/details?id=com.todoist)

2. Evernote
   - Description: Evernote is your digital notebook for everything from quick notes to comprehensive to-do lists. With its robust search functionality and ability to sync across all your devices, you'll never lose track of important information again.
   - Key Features:
     - Multi-device sync
     - Advanced search capabilities
     - Note organization
   - Download Link: [Evernote on Google Play](https://play.google.com/store/apps/details?id=com.evernote)

3. Trello
   - Description: Trello uses boards, lists, and cards to help you organize and prioritize your projects in a fun, flexible, and rewarding way. Perfect for both personal and professional use, Trello keeps everything in one place and makes collaboration easy.
   - Key Features:
     - Drag-and-drop interface
     - Customizable boards
     - Team collaboration
   - Download Link: [Trello on Google Play](https://play.google.com/store/apps/details?id=com.trello)

4. Google Keep
   - Description: Google Keep is a simple and intuitive app for capturing, editing, sharing, and collaborating on your notes on any device. Jot down quick thoughts, create checklists, and set reminders all within one app.
   - Key Features:
     - Voice memos
     - Location-based reminders
     - Easy sharing
   - Download Link: [Google Keep on Google Play](https://play.google.com/store/apps/details?id=com.google.android.keep)

5. Forest: Stay Focused
   - Description: Forest is a unique app that helps you stay focused and boost productivity. Plant a tree in Forest when you need to stay away from your phone, and watch it grow as you remain focused. If you leave the app, your tree dies.
   - Key Features:
     - Focus timer
     - Gamified productivity
     - Real tree planting (in partnership with Trees for the Future)
   - Download Link: [Forest on Google Play](https://play.google.com/store/apps/details?id=cc.forestapp)

By incorporating these top Android apps into your daily routine, you can optimize your productivity and stay organized throughout 2024. Give them a try and watch your efficiency soar!`,
    },
    {
      title: "Exploring Artificial Intelligence in Modern Technology",
      date: "18 July 2024",
      tag: "#AI #TechInnovation #MachineLearning",
      img: "https://www.iqvis.com/wp-content/uploads/2017/01/artificial_intelligence.jpg",
      body: `Artificial Intelligence (AI) is revolutionizing modern technology across industries, from healthcare to finance and beyond. AI mimics human intelligence through algorithms and data, enabling machines to learn from experience, adapt to new inputs, and perform human-like tasks. Here's how AI is transforming the landscape:

- Healthcare: AI aids in diagnostics, personalized treatment plans, and drug discovery, improving patient outcomes.
- Finance: AI powers predictive analytics for market trends, fraud detection, and personalized financial advice.
- Automotive: AI enables self-driving cars, enhancing safety and efficiency on the roads.
- Retail: AI enhances customer experience through personalized recommendations and inventory management.

AI's impact continues to grow, driving innovation and shaping the future of technology. Embrace AI to stay ahead in today's dynamic world!`,
    },
    {
      title: "The Rise of Blockchain Technology and Its Implications",
      date: "25 July 2024",
      tag: "#Blockchain #Crypto #Decentralization",
      img: "https://www.computersupport.com/wp-content/uploads/2017/07/Blockchain-Technology-July-6.jpg",
      body: `Blockchain technology, best known for its role in cryptocurrencies like Bitcoin, is transforming various sectors beyond finance. Here’s why blockchain is gaining traction:

- Decentralization: Blockchain eliminates the need for intermediaries, enhancing transparency and reducing costs.
- Security: Blockchain's cryptographic security ensures data integrity and protection against tampering.
- Smart Contracts: Blockchain supports self-executing contracts, automating processes and reducing disputes.
- Supply Chain: Blockchain enhances traceability and authenticity, ensuring ethical sourcing and reducing fraud.

Explore blockchain's potential in reshaping industries and fostering innovation globally. Stay informed about this disruptive technology and its evolving applications!`,
    },
  ];

  return (
    <>
      <Landingpage />
      <div className="min-h-screen bg-green-50 text-gray-800">
        <div className="container mx-auto py-8 px-4">
          <div className="space-y-8">
            <Intro />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {blogPosts.map((post, index) => (
                  <BlogItem
                    key={index}
                    title={post.title}
                    date={post.date}
                    tag={post.tag}
                    img={post.img}
                    body={post.body}
                  />
                ))}
              </div>
              <Author />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
