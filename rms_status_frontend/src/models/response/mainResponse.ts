export type currentOutageArrayType = {
  title: string;
  posts: Array<postsArrayType>;
  affected_on: string;
  severity: string;
  date: string;
};

export type postsArrayType = {
  title: string;
  date: string;
  content: string;
};

export type recentArrayType = {
  date: string;
  status: string;
};

export type apiAndSiteObjectType = {
  status: string;
  recent: Array<recentArrayType>;
};

export type mainState = {};

export type mainResponse = {
  status: string;
  current_outage: Array<currentOutageArrayType>;
  apis: {
    user: apiAndSiteObjectType;
    admin: apiAndSiteObjectType;
    file: apiAndSiteObjectType;
  };
  sites: {
    user: apiAndSiteObjectType;
    admin: apiAndSiteObjectType;
  };
};
