import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  // 由于没有后端，这里创建了一个内存数据库来存放数据
  createDb() {
    let users = [
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
    ];
    let images = [
      { id: 1, userId: 11, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/butterfly1.jpg' },
      { id: 2, userId: 11, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/cat1.jpg' },
      { id: 3, userId: 17, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/cloud1.jpg' },
      { id: 4, userId: 14, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/river1.jpg' },
      { id: 5, userId: 13, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/flower1.jpg' },
      { id: 6, userId: 15, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/disney1.jpg' },
      { id: 7, userId: 17, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/cloud2.jpg' },
      { id: 8, userId: 20, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/panda1.jpg' },
      { id: 9, userId: 17, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/sunfei2.jpg' },
      { id: 10, userId: 19, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/panda2.jpg' },
      { id: 11, userId: 13, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/flower2.jpg' },
      { id: 12, userId: 14, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/IMG_20161105_100414_A19.jpg' },
      { id: 13, userId: 20, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/panda3.jpg' },
      { id: 14, userId: 20, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/shanghai4.jpg' },
      { id: 16, userId: 20, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/shanghai5.jpg' },
      { id: 21, userId: 16, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/grass.jpg' },
      { id: 32, userId: 12, des: '', fileUrl: 'https://raw.githubusercontent.com/OnlyBelter/learn_neuralTalk/master/self_pic/img/lamp1.jpg' },

    ];
    return {users, images};
  }
}
