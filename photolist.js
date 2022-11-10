// put a fake list of photos instead of hitting an API

const photoList = [
  {
    id: 1,
    photoURL: 'https://images.unsplash.com/photo-1667143297021-a452e55fdfa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTM2NQ&ixlib=rb-4.0.3&q=80&w=1080',
    description: 'Gloomy shot of rolling desert sand dunes',
    userName: 'SandBender',
    profilePhoto:'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    photoURL: 'https://images.unsplash.com/photo-1666526320369-a1e3fcd69253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTQyOQ&ixlib=rb-4.0.3&q=80&w=1080',
    description: 'Young adult woman walking through city park on the phone, holding baguettes and newspaper in arm',
    userName: 'CityLiving',
    profilePhoto:'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 3,
    photoURL: 'https://images.unsplash.com/photo-1667493534914-072f3b967f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTU2MQ&ixlib=rb-4.0.3&q=80&w=1080',
    description: 'Birds eye view shot of a boat traversing through tropical blue water',
    userName: 'OceanLover',
    profilePhoto:'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 4,
    photoURL: 'https://images.unsplash.com/photo-1666811059629-f052240cde19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTY0Mw&ixlib=rb-4.0.3&q=80&w=1080',
    description: 'Early morning shot of tree covered mountain tops immersed in fog',
    userName: 'MountainMan',
    profilePhoto:'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 5,
    photoURL: 'https://images.unsplash.com/photo-1666375720094-a8a3c602e43c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTcyOA&ixlib=rb-4.0.3&q=80&w=1080',
    description: 'Woman standing in psychedelic pink cloud armed with a longsword',
    userName: 'SwordsWoman',
    profilePhoto:'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    id: 6,
    photoURL: 'https://images.unsplash.com/photo-1665501106729-70513bfb7233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2ODA5MTg4Mg&ixlib=rb-1.2.1&q=80&w=1080',
    description: 'Birds eye view shot of a surfer on a yellow board, surrounded by vast deep blue water ',
    userName: 'OceanLover',
    profilePhoto:'https://randomuser.me/api/portraits/women/3.jpg',
  },
];

export default photoList;