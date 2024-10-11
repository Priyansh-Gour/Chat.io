export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    members: ["1", "2"],
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Libert",
    _id: "2",
    members: ["1", "2"],
  },
];

export const sampleUsers = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Reze",
    _id: "1",
  },
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "Makima",
    _id: "2",
  },
];

export const sampleNotification = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Reze",
    },
    _id: "1",
  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Makima",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachment: [
      {
        public_id: "asdacsaca",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "L*ude ka message hai",
    _id: "sdbvssdkjvsj",
    sender: {
      _id: "user_id",
      name: "Denji",
    },
    chat: "chatId",
    createdAt: "2024-05-10T10:41:30.630Z",
  },
  {
    attachment: [
      {
        public_id: "asdacsaca 2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "message from me",
    _id: "sdbvssdkjvsj2",
    sender: {
      _id: "sdskjdbs1",
      name: "ZORO",
    },
    chat: "chatId",
    createdAt: "2024-05-10T10:41:30.630Z",
  },
];

export const dashboardData = {
  users: [
    {
      name: "Giggles",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "1",
      username: "_giggles",
      friends: 4,
      groups: 3,
    },

    {
      name: "Bonitinhia",
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      _id: "2",
      username: "boni_tinhia",
      friends: 5,
      groups: 4,
    },
  ],

  chats: [
    {
      name: "Giggles",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "1",
      groupChat: false,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 20,
      creator: {
        name: "Giggles",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
    {
      name: "Bonitinha",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      _id: "2",
      groupChat: true,
      members: [
        { _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
        { _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
      ],
      totalMembers: 2,
      creator: {
        name: "Bonitinha",
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
      },
    },
  ],
  messages: [
    {
      attachment: [],
      content: "Your Eyes are pretty",
      _id: "scscsse",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "giggles",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-05-18T10:41:30.630Z",
    },
    {
      attachment: [
        {
          public_id: "adaasdd 2",
          url: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ],
      content: "Your Eyes are pretty",
      _id: "scscs",
      sender: {
        avatar: "https://www.w3schools.com/howto/img_avatar.png",
        name: "bonitinha",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-05-18T10:41:30.630Z",
    },
  ],
};
