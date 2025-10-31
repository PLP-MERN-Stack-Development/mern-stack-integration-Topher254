import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'


export const blogCategories = [
    "All",
  "Technology",
  "Health",
  "Education",
  "Business ",
  "Travel "
];




export const blogData = [
  {
    _id: "1",
    title: "The Future of Artificial Intelligence",
    subTitle: "How AI is shaping the modern world",
    description: "Artificial Intelligence is transforming industries, automating processes, and enabling smarter decisions. In this blog, we explore its impact on daily life and business.",
    image: image1,
    category: "Technology",
    createdAt: "2025-10-01T10:00:00Z",
    updatedAt: "2025-10-05T12:30:00Z",
    __v: 0,
    isPublished: true
  },
  {
    _id: "2",
    title: "10 Simple Habits for a Healthier Lifestyle",
    subTitle: "Small changes that make a big difference",
    description: "Healthy living doesn’t have to be hard. Here are ten simple habits to boost your energy, improve mental clarity, and maintain balance every day.",
    image: image2,
    category: "Health",
    createdAt: "2025-09-25T08:45:00Z",
    updatedAt: "2025-09-28T09:10:00Z",
    __v: 0,
    isPublished: true
  },
  {
    _id: "3",
    title: "The Rise of Online Education",
    subTitle: "Why e-learning is the future of studying",
    description: "Education is evolving with technology. Discover how online learning platforms are changing how students and professionals gain new skills.",
    image: image3,
    category: "Education",
    createdAt: "2025-09-20T14:00:00Z",
    updatedAt: "2025-09-22T15:15:00Z",
    __v: 0,
    isPublished: true
  },
  {
    _id: "4",
    title: "Mastering Your Personal Finances",
    subTitle: "Simple strategies for smarter money management",
    description: "Learn how to budget, save, and invest effectively with these practical financial tips that help you achieve your long-term goals.",
    image: image4,
    category: "Business",
    createdAt: "2025-09-10T11:30:00Z",
    updatedAt: "2025-09-12T13:45:00Z",
    __v: 0,
    isPublished: false
  },
  {
    _id: "5",
    title: "Exploring Kenya’s Hidden Travel Gems",
    subTitle: "Discover breathtaking destinations off the beaten path",
    description: "From scenic landscapes to cultural experiences, explore the underrated destinations that make Kenya a must-visit travel spot.",
    image: image5,
    category: "Travel",
    createdAt: "2025-08-15T09:20:00Z",
    updatedAt: "2025-08-18T10:00:00Z",
    __v: 0,
    isPublished: true
  }
];


export const blogComments = [
  {
    _id: "c1",
    blog: blogData[0], // The Future of Artificial Intelligence
    name: "Jane Doe",
    content: "This was such an insightful read! AI truly is changing everything.",
    isApproved: true,
    createdAt: "2025-10-05T09:30:00Z",
    updatedAt: "2025-10-05T09:30:00Z",
    __v: 0
  },
  {
    _id: "c2",
    blog: blogData[1], // 10 Simple Habits for a Healthier Lifestyle
    name: "Michael Kamau",
    content: "I started following a few of these habits and already feel more energetic!",
    isApproved: true,
    createdAt: "2025-09-29T11:00:00Z",
    updatedAt: "2025-09-29T11:05:00Z",
    __v: 0
  },
  {
    _id: "c3",
    blog: blogData[2], // The Rise of Online Education
    name: "Lucy Wanjiku",
    content: "E-learning really saved me during the pandemic. Great write-up!",
    isApproved: false,
    createdAt: "2025-09-23T14:10:00Z",
    updatedAt: "2025-09-23T14:15:00Z",
    __v: 0
  },
  {
    _id: "c4",
    blog: blogData[3], // Mastering Your Personal Finances
    name: "David Otieno",
    content: "I learned a lot from this article. Hoping to get my finances under control!",
    isApproved: true,
    createdAt: "2025-09-13T08:20:00Z",
    updatedAt: "2025-09-13T08:25:00Z",
    __v: 0
  },
  {
    _id: "c5",
    blog: blogData[4], // Exploring Kenya’s Hidden Travel Gems
    name: "Aisha Mohammed",
    content: "I’ve been to some of these places—Kenya is truly beautiful!",
    isApproved: true,
    createdAt: "2025-08-19T10:40:00Z",
    updatedAt: "2025-08-19T10:50:00Z",
    __v: 0
  }
];
