import { User } from './user';

// 注意下面，一定要加上export，其他地方才可以import
export const USERS: User[] = [
  { id: 11, name: 'Mr. Nice', files: [1, 2] },
  { id: 12, name: 'Narco', files: [32]  },
  { id: 13, name: 'Bombasto', files: [11, 5]  },
  { id: 14, name: 'Celeritas', files: [4, 12]  },
  { id: 15, name: 'Magneta', files: [6]  },
  { id: 16, name: 'RubberMan', files: [21]  },
  { id: 17, name: 'Dynama', files: [3, 7, 9]  },
  { id: 18, name: 'Dr IQ', files: []  },
  { id: 19, name: 'Magma', files: [10]  },
  { id: 20, name: 'Tornado', files: [8, 13, 14, 16]  } 
]