export type Post = {
  id: string;
  userId: string;
  audience: "PUBLIC" | "PRIVATE";
  createdAt: Date | string;
  details: {
    description?: string;
    photos?: string[];
    reactions?: Reaction[];
    comments?: string[];
    shares?: string[];
  };
};

export type Reaction = {
  id: string;
  userId: string;
  userImage: string;
  name: string;
};
